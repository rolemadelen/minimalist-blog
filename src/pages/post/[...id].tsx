import React from 'react'
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
  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="Jii Eu" property="og:title" />
        <meta content={title} property="og:description" />
        <meta content={title} property="twitter:description" />
      </Head>
      <ProgressBar />
      <div className="post max-w-[40rem] m-auto px-6">
        <div className="post-title text-3xl mb-3 mt-36 leading-normal">
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
