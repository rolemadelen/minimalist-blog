import React from 'react'
import Preview from '@/lib/codeblock'
import styles from './Post.module.scss'
import Link from 'next/link'

interface Props {
  markdown: string
  prevPost: string | undefined
  nextPost: string | undefined
}

const PostContent: React.FC<Props> = ({ markdown, prevPost, nextPost }) => {
  return (
    <div className={`${styles['post__content']} post-content`}>
      <Preview markdown={markdown} />
      <div className={styles.navigation}>
        {prevPost && (
          <Link key={`blog-${prevPost}`} href={`/post/${prevPost}`} passHref>
            prev post
          </Link>
        )}
        {nextPost && (
          <Link key={`blog-${nextPost}`} href={`/post/${nextPost}`} passHref>
            next post
          </Link>
        )}
      </div>
    </div>
  )
}

export default PostContent
