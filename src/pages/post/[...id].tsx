import React, { useEffect, useRef } from 'react'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '@/lib/blog'
import Comment from '@/lib/giscus'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import Footer from '@/components/Footer/Footer'
import TOC from '@/components/TOC'
import PostHeader from '@/components/Post/PostHeader'
import PostContent from '@/components/Post/PostContent'
import styles from '@/components/Post/Post.module.scss'

interface Props {
  post: {
    title: string
    date: string
    markdown: string
  }
}

const Post: React.FC<Props> = ({ post: { title, date, markdown } }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="Jii Yoo" property="og:title" />
        <meta content={title} property="og:description" />
        <meta content={title} property="twitter:description" />
      </Head>
      <ProgressBar />

      <div className={styles.post}>
        <TOC markdown={markdown} />
        <PostHeader title={title} date={date} />
        <PostContent markdown={markdown} />
        <Comment />
        <Footer />
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
