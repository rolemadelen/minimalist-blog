import React from 'react'
import Head from 'next/head'
import { GetStaticProps, GetStaticPropsContext } from 'next'

import Footer from '@/components/Footer/Footer'
import PostContent from '@/components/Post/PostContent'
import PostHeader from '@/components/Post/PostHeader'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import styles from '@/components/Post/Post.module.scss'

import Comment from '@/lib/giscus'
import { createOgImage } from '@/lib/createOgImage'
import { getAllPostIds, getAllPosts, getPostData } from '@/lib/blog'

interface Props {
  post: {
    title: string
    desc: string
    date: string
    markdown: string
    type: string
    note: string
    tags?: [string]
  }
  prevPost?: string | undefined
  nextPost?: string | undefined
}

const Post: React.FC<Props> = ({
  post: { title, desc, date, markdown, tags = [''] },
  prevPost,
  nextPost,
}) => {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  const ogImage = createOgImage({
    title,
    meta: [
      new Date(date).toLocaleString('en-US', options as any),
      ...tags,
    ].join('・'),
  })
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:title" content="Jii" />
        <meta property="og:description" content={title} />
        <meta property="twitter:description" content={title} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <ProgressBar />

      <div className={styles.post}>
        <PostHeader title={title} date={date} desc={desc} tags={tags} />
        <PostContent
          markdown={markdown}
          prevPost={prevPost}
          nextPost={nextPost}
        />
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
  interface Frontmatter {
    slug?: string
    [key: string]: any
  }

  if (!params) {
    return {
      notFound: true,
    }
  }

  let allPosts = getAllPosts().map((post: Frontmatter) => post.slug)
  const index = params.id && allPosts.indexOf(params.id[0])
  let prevIndex = index > 0 ? index - 1 : null
  let nextIndex = index < allPosts.length - 1 ? index + 1 : null

  const nextPost = prevIndex !== null ? allPosts[prevIndex] : null
  const prevPost = nextIndex !== null ? allPosts[nextIndex] : null

  const post = await getPostData(params.id as string[])
  return {
    props: {
      post,
      prevPost,
      nextPost,
    },
  }
}

export default Post
