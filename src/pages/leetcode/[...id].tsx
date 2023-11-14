import React from 'react'
import Head from 'next/head'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { getAllPostIds, getPostData } from '@/lib/leetcode'
import Footer from '@/components/Footer'
import Comment from '@/lib/giscus'
import PostContent from '@/components/PostContent'
import PostHeader from '@/components/PostHeader'
import ProgressBar from '@/components/ProgressBar'

interface IPost {
  post: {
    title: string
    date: string
    markdown: string
  }
}

const Post: React.FC<IPost> = ({ post: { title, date, markdown } }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="Jii Eu" property="og:title" />
        <meta content={title} property="og:description" />
        <meta content={title} property="twitter:description" />
      </Head>
      <ProgressBar />

      <div className="post max-w-[36rem] m-auto px-6">
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
