import React from 'react'

interface Props {
  markdown: string
}

const TOC: React.FC<Props> = ({ markdown }) => {
  const toc = markdown.split('\n').filter((line) => line.trim().startsWith('#'))

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
    let counts = [0, 0, 0] // [h1, h2, h3]

    toc.forEach((item) => {
      let headLevel = getHeadingLevel(item)
      let count = counts[headLevel - 1]

      item = item.replaceAll('#', '')
      listItems += `<a href='#h${headLevel}-${count}'><li id="toc-h${headLevel}-${count}"class="h${headLevel} text-[0.8rem] !list-none !left-0">${item}</li></a>`

      counts[headLevel - 1] += 1
    })

    return `<ul class="max-w-[15rem] w-full max-h-[30rem] overflow-hidden overflow-y-auto hidden lg:block lg:fixed left-[2%] top-0 mt-52">${listItems}</ul>`
  }

  return (
    <>
      <div
        className="toc"
        dangerouslySetInnerHTML={{ __html: createTOC() }}
      ></div>
    </>
  )
}

export default TOC
