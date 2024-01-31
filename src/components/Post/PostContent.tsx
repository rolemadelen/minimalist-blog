import React from 'react'
import Preview from '@/lib/codeblock'
import styles from './Post.module.scss'

interface Props {
  markdown: string
}

const PostContent: React.FC<Props> = ({ markdown }) => {
  return (
    <div className={`${styles['post__content']} post-content`}>
      <Preview markdown={markdown} />
    </div>
  )
}

export default PostContent
