import React, { createElement, useEffect, useRef } from 'react'
import Preview from '@/lib/codeblock'
import { getAllPostIds, getPostData } from '@/lib/blog'
import Link from 'next/link'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import Comment from '@/lib/giscus'
import Head from 'next/head'
import { GetStaticProps, GetStaticPropsContext } from 'next'

interface IPost {
  post: {
    title: string
    date: string
    markdown: string
  }
}

const Post: React.FC<IPost> = ({ post: { title, date, markdown } }) => {
  const headingRefs = useRef<any[]>([])
  const toc = markdown.split('\n').filter((line) => line.trim().startsWith('#'))
  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  useEffect(() => {
    const allHeadings = document.querySelectorAll('h1, h2, h3')
    headingRefs.current = Array.from({ length: allHeadings.length }, () =>
      React.createRef()
    )

    const setRef = (index: number, element: Element) => {
      headingRefs.current[index].current = element
    }

    allHeadings.forEach((heading, i) => {
      setRef(i, heading)
    })

    const options = {
      root: null,
      rootMargin: '0px 0px -80% 0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll('.toc--active')
            .forEach((tag) => tag.classList.remove('toc--active'))
          let toc = document.getElementById(`toc-${entry.target.id}`)
          toc?.classList.add('toc--active')
        }
      })
    }, options)

    headingRefs.current.forEach((hRef) => {
      if (hRef.current) {
        observer.observe(hRef.current)
      }
    })

    const h1 = document.querySelectorAll('h1')
    const h2 = document.querySelectorAll('h2')
    const h3 = document.querySelectorAll('h3')

    for (let i = 0; i < h1.length; ++i) {
      h1[i].id = `h1-${i}`
    }
    for (let i = 0; i < h2.length; ++i) {
      h2[i].id = `h2-${i}`
    }
    for (let i = 0; i < h3.length; ++i) {
      h3[i].id = `h3-${i}`
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const getHeadingLevel = (str: string) => {
    const match = str.match(/^#+/)
    if (match) {
      const count = match[0].length
      return count
    }

    return 0
  }

  const createTOC = () => {
    let listItems = ''
    let counts = [0, 0, 0]
    toc.forEach((item, i) => {
      let headLevel = getHeadingLevel(item)
      item = item.replace('#', '') // remove first #, this is to prevent heading1 being indented
      item = item.replaceAll('#', '　')
      listItems += `<a href='#h${headLevel}-${
        counts[headLevel - 1]
      }'><li id="toc-h${headLevel}-${
        counts[headLevel - 1]
      }"class="h${headLevel} text-xs !list-none !left-0">${item}</li></a>`
      counts[headLevel - 1] += 1
    })

    return `<ul class="max-w-[20rem] hidden lg:block lg:fixed left-[2%] top-0 mt-52">${listItems}</ul>`
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="Jii Eu" property="og:title" />
        <meta content={title} property="og:description" />
        <meta content={title} property="twitter:description" />
      </Head>
      <ProgressBar />

      <div className="post max-w-[40rem] m-auto px-6 relative">
        <div className="post-title text-4xl mb-3 mt-36 leading-normal">
          {title}
        </div>
        <div className="flex justify-between items-center mb-20">
          <div className="text-[#777] w-fit">{formattedDate}</div>
          <Link href="/" title="Back to home">
            <div className="border-[1px] w-fit rounded-lg border-gray-300 hover:bg-black hover:border-black hover:text-[#eee] duration-200 flex justify-center items-center px-2 pb-1">
              ←
            </div>
          </Link>
        </div>
        <div
          className="toc"
          dangerouslySetInnerHTML={{ __html: createTOC() }}
        ></div>
        <div className="post-content mb-10 pb-10 border-b">
          <Preview markdown={markdown} />
        </div>
        <Comment />
        <Footer pageFrom="post" />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  if (!params) {
    return {
      notFound: true,
    }
  }

  const post = await getPostData(params.id as string[])
  return {
    props: {
      post,
    },
  }
}

export default Post
