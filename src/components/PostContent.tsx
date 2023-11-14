import React from 'react'
import Preview from '@/lib/codeblock'

interface Props {
  markdown: string
}

const PostContent: React.FC<Props> = ({ markdown }) => {
  return (
    <div className="post-content mb-10 pb-10 border-b">
      <Preview markdown={markdown} />
    </div>
  )
}

export default PostContent
