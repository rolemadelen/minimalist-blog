import React, { useEffect, useRef } from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '@/lib/blog'
import Comment from '@/lib/giscus'
import ProgressBar from '@/components/ProgressBar'
import Footer from '@/components/Footer'
import TOC from '@/components/TOC'
import PostHeader from '@/components/PostHeader'
import PostContent from '@/components/PostContent'

interface Props {
  post: {
    title: string
    date: string
    markdown: string
  }
}

type MutableRefObj = React.MutableRefObject<HTMLHeadingElement>
type RefObj = React.RefObject<HTMLHeadingElement>

const Post: React.FC<Props> = ({ post: { title, date, markdown } }) => {
  const headingRefs = useRef<Array<RefObj>>([])

  useEffect(() => {
    const h1 = document.querySelectorAll('h1')
    const h2 = document.querySelectorAll('h2')
    const h3 = document.querySelectorAll('h3')
    const h4 = document.querySelectorAll('h4')

    h1.forEach((tag, i) => {
      tag.id = `h1-${i}`
    })
    h2.forEach((tag, i) => {
      tag.id = `h2-${i}`
    })
    h3.forEach((tag, i) => {
      tag.id = `h3-${i}`
    })
    h4.forEach((tag, i) => {
      tag.id = `h4-${i}`
    })
  }, [])

  useEffect(() => {
    const allHeadings = document.querySelectorAll('h1, h2, h3, h4')
    headingRefs.current = Array.from({ length: allHeadings.length }, () =>
      React.createRef()
    )

    const setRef = (index: number, element: Element) => {
      let ref = headingRefs.current[index] as MutableRefObj
      ref.current = element as HTMLHeadingElement
    }

    allHeadings.forEach((heading, i) => {
      setRef(i, heading)
    })

    const options = {
      root: null,
      rootMargin: '0px 0px -90% 0px',
      threshold: 0.5,
    }

    const visibleHeadings: HTMLElement[] = []

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleHeadings.forEach((tag) => tag.classList.remove('toc--active'))
          let toc = document.getElementById(`toc-${entry.target.id}`)
          visibleHeadings.push(toc as HTMLElement)
          toc?.classList.add('toc--active')
          toc?.scrollIntoView(false)
        }
      })
    }, options)

    headingRefs.current.forEach((hRef) => {
      if (hRef.current) {
        observer.observe(hRef.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="Jii Eu" property="og:title" />
        <meta content={title} property="og:description" />
        <meta content={title} property="twitter:description" />
      </Head>
      <ProgressBar />

      <div className="post max-w-[36rem] m-auto px-6 relative">
        <TOC markdown={markdown} />
        <PostHeader title={title} date={date} />
        <PostContent markdown={markdown} />
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
