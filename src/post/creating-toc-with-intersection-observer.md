---
title: 'Creating TOC with Intersection Observer API in React'
date: '2023-11-11 18:30:00'
---

_Disclaimer:_

_This method for implementing a Table of Contents using the Intersection Observer API may not be considered the optimal or most recommended approach. Take it with a grain of salt and be open to exploring alternative techniques for a more refined implementation._

# About

In this post, I'm going to go through steps I took to implement a dynamic Table of Contents (TOC) in my blog using the Intersection Observer API and React. The look of the final implementation will be like the following:

![toc](/images/creating-toc-with-intersection-observer/toc.gif)

# Core Steps

To achieve the goal, we will need to do the following:

1. Extract headings from the markdown.
2. Form a Table of Contents (TOC) with the extracted headings.
3. Track the visibility of each heading.
4. Apply styles.

Let's dive in.

# Implementation

## 1. Extracting Headings

Since my blog posts are written in markdown format, I know that headings start with `#` characters.
I can use this fact to filter out headings.

```js
const Post: React.FC<IPost> = ({ post: { title, date, markdown } }) => {
  const toc = markdown.split('\n').filter((line) => line.trim().startsWith('#'))
  ...
}
```

By logging `toc`, you can observe that it has successfully extracted all the headers present in the post.

![toc](/images/creating-toc-with-intersection-observer/extracted-headers.webp)

Please note that if your post contains code snippets, and you use `#` as a comment, as in a shell script, those will also be extracted. I haven't implemented additional logic to handle this scenario as I haven't encountered any issues with it. Please keep this in mind.

## 2. Creating a TOC

With our headers in place, we can now create our table of contents.

As I don't want to display the `#` character in my TOC, I will replace all occurrences with a blank space. Now I can wrap the heading with a `<li></li>` tag and append it to the list string.

```jsx
const createTOC = () => {
  let listItems = ''

  toc.forEach((item) => {
    item = item.replaceAll('#', '')
    listItems += `<li>${item}</li>`
  })

  return `<ul>${listItems}</ul>`
}

...

<div className="toc" dangerouslySetInnerHTML={{ __html: createTOC() }}>
</div>
```

The above code will work, but there's a problem: it's not possible to detect which header belongs to which in the actual blog post. This means we cannot click on the TOC to view the section. As a remedy, we're going to give a unique id to each of the list and use that as an anchor link.

### 2.1 Anchor Links

I'm going to create a helper function called `getHeadingLevel` to determine the level of each heading (1, 2, or 3).

```js
const getHeadingLevel = (str: string) => {
  const match = str.match(/^#+/)
  if (match) {
    const count = match[0].length
    return count
  }

  return 0
}
```

As we append the list child to our string, we're going to count how many headers of that type were used. This will be used to create our unique id which will be used in the anchor link. The IDs will follow this format: `h1-1`, `h1-2`, `h2-1`, etc., and in the TOC, they will be prefixed with `toc-`.

```js
const createTOC = () => {
  let listItems = ''
  let counts = [0, 0, 0] // [h1, h2, h3]

  toc.forEach((item) => {
    let headLevel = getHeadingLevel(item)
    let count = counts[headlevel - 1]

    listItems += `<a href='#h${headLevel}-${count}'><li id="toc-h${headLevel}-${count}">${item}</li></a>`

    counts[headLevel - 1] += 1
  })

  return `<ul>${listItems}</ul>`
}
```

In the anchor links, we used the `h1-1` format; remember to set these IDs for our headers in the actual post.

```js
useEffect(() => {
  const h1 = document.querySelectorAll('h1')
  const h2 = document.querySelectorAll('h2')
  const h3 = document.querySelectorAll('h3')

  h1.forEach((tag, i) => {
    tag.id = `h1-${i}`
  })
  h2.forEach((tag, i) => {
    tag.id = `h2-${i}`
  })
  h3.forEach((tag, i) => {
    tag.id = `h3-${i}`
  })
}, [])
```

By this point, I should have a working TOC. Now, let's add more dynamics to enhance the user experience. I want my TOC to dynamically highlight the corresponding heading as I scroll down the page. To achieve this effect, I'll use the **Intersection Observer API** to track the visibility of each heading and update the TOC accordingly.

## 3. Tracking Visibility

What is Intersection Observer API?
The [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) explains it as follows:

> "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport".

The basic structure is as follows:

```js
const options = {
  root: null, // use document's viewport
  rootMargin: '0px',
  threshold: 1,
}

const callback = (entry) => {
  if (entry.isIntersecting) {
    // run this if entry is visible
  } else {
    // run this if entry is no longer visible
  }
}

const observer = IntersectionObserver(callback, options)
```

In our specific scenario, we aim to monitor changes in the intersection of our heading elements with the document's viewport. This is crucial as we intend to highlight the TOC when a heading is in proximity to the top of the page and de-highlight it when it's no longer visible.


### 3.1 Intersection Observer API

Since we have multiple headers to observe, we utilize `headingRefs` to store all  `RefObjects`.

```js
const headingRefs = useRef<Array<React.RefObject<HTMLHeadingElement>>>([])

useEffect(() => {
  const allHeadings = document.querySelectorAll('h1, h2, h3')
  headingRefs.current = Array.from({ length: allHeadings.length }, () =>
    React.createRef()
  )
}, [])
```

We use the `setRef` helper function to link refs to each heading:

```js
const setRef = (index: number, element: Element) => {
  let ref = headingRefs.current[index] as React.MutableRefObject<HTMLHeadingElement> 
  ref.current = element as HTMLHeadingElement
}

allHeadings.forEach((heading, i) => {
  setRef(i, heading)
})
```

Finally, the Intersection Observer API is utilized to detect changes in the intersection between the heading tag and the document's viewport. Upon intersection, the `toc--active` class is added to the corresponding heading in the TOC and removed when the target is no longer visible:

```js
const options = {
  root: null, // use viewport
  rootMargin: '0px 0px -90% 0px',
  threshold: 0.5, // activate when 50% the entry is visible
}

const visibleHeadings: HTMLElement[] = []

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      visibleHeadings.forEach((tag) => tag.classList.remove('toc--active'))

      let toc = document.getElementById(`toc-${entry.target.id}`)
      toc?.classList.add('toc--active')

      visibleHeadings.push(toc as HTMLElement)
    }
  })
}, options)


headingRefs.current.forEach((hRef) => {
  if (hRef.current) {
    observer.observe(hRef.current)
  }
})
```

The full implementation is consolidated within the `Post` component.

```js
const Post: React.FC<IPost> = ({ post: { title, date, markdown } }) => {
  const headingRefs = useRef<Array<React.RefObject<HTMLHeadingElement>>>([])

  useEffect(() => {
    const allHeadings = document.querySelectorAll('h1, h2, h3')
    headingRefs.current = Array.from({ length: allHeadings.length }, () =>
      React.createRef()
    )

    const setRef = (index: number, element: Element) => {
      let ref = headingRefs.current[index] as React.MutableRefObject<HTMLHeadingElement>
      ref.current = element as HTMLHeadingElement
    }

    allHeadings.forEach((heading, i) => {
      setRef(i, heading)
    })

    const options = {
      root: null, // use viewport
      rootMargin: '0px 0px -90% 0px',
      threshold: 0.5, // activate when 50% the entry is visible
    }

    const visibleHeadings: HTMLElement[] = []

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleHeadings.forEach((tag) => tag.classList.remove('toc--active'))

          let toc = document.getElementById(`toc-${entry.target.id}`)
          toc?.classList.add('toc--active')
          toc?.scrollIntoView(false)

          visibleHeadings.push(toc as HTMLElement)
        }
      })
    }, options)


    headingRefs.current.forEach((hRef) => {
      if (hRef.current) {
        observer.observe(hRef.current)
      }
    })

    // cleanup function
    return () => {
      observer.disconnect()
    }
  }, [])
}
```

## 4. Applying Styles to TOC

Below is a style I've implemented for my TOC, adopting the same color theme as the headers in the post. This approach maintains a consistent and harmonious visual alignment across the content.

```scss
.toc {
  .h1 {
    &:hover,
    &.toc--active {
      color: $--color-h1;
      font-weight: 700;
    }
  }

  .h2 {
    &:hover,
    &.toc--active {
      color: $--color-h2;
      font-weight: 500;
    }
  }

  .h3 {
    &:hover,
    &.toc--active {
      color: $--color-h3;
    }
  }

  .h1,
  .h2,
  .h3 {
    letter-spacing: 0.5px;
    line-height: 1.5;
    color: #aaa;

    &:hover {
      cursor: pointer;
    }
  }
}
```

# Reflection

During the development, I encountered challenges with the `createTOC()` function returning `<ul>${listItems}</ul>`. To render the returned lists, I resorted to using `dangerouslySetInnerHTML`. However, I acknowledge that my understanding of this approach is not entirely clear. I intend to delve deeper into this aspect through further research.

I recognize an opportunity to enhance the code quality by encorporating custom hooks, such as `useIntersectionObserver` for the intersection observer logic. Since every other logic is consolidated in one place, it creates a confusion.

Additionally, I'm considering utilizing `useState` to manage the active state of the TOC rather than manipulating the DOM directly by adding and removing the `toc--active` class. This adjustment would contribute to a cleaner and more React-oriented implementation.