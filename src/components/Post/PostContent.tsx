import React, { useEffect, useRef } from 'react'
import Preview from '@/lib/codeblock'
import styles from './Post.module.scss'
import Link from 'next/link'

interface Props {
  markdown: string
  prevPost: string | undefined
  nextPost: string | undefined
}

const PostContent: React.FC<Props> = ({ markdown, prevPost, nextPost }) => {
  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 200) {
        topRef.current?.classList.add(`${styles.visible}`)
      } else {
        topRef.current?.classList.remove(`${styles.visible}`)
      }
    })
  }, [])

  const moveToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <div className={`${styles['post__content']} post-content`}>
      <div className={styles.top} onClick={moveToTop} ref={topRef}>
        <span>• ᴥ •</span>
        <span>つ TOP </span>
      </div>
      <Preview markdown={markdown} />
      <div className={styles.navigation}>
        {prevPost && (
          <Link key={`blog-${prevPost}`} href={`/post/${prevPost}`} passHref>
            ← prev post
          </Link>
        )}
        {nextPost && (
          <Link key={`blog-${nextPost}`} href={`/post/${nextPost}`} passHref>
            next post →
          </Link>
        )}
      </div>
    </div>
  )
}

export default PostContent
