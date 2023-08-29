import React from 'react'
import Preview from '@/lib/codeblock'
import { getAllPostIds, getPostData } from '@/lib/leetcode'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Comment from '@/lib/giscus'
import { GetStaticProps, GetStaticPropsContext } from 'next'

interface IPost {
  title: string
  markdown: string
}

const Post: React.FC<IPost> = ({ title, markdown }) => {
  return (
    <div className="post max-w-[36rem] m-auto px-6">
      <div className="post-title text-3xl mt-36 mb-10 leading-normal">
        <Link href="/" title={title}>
          {title}
        </Link>
      </div>
      <div className="post-content mb-10 pb-10 border-b">
        <Preview markdown={markdown} />
      </div>
      <Comment />
      <Footer pageFrom="post" />
    </div>
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
