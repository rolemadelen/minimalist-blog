import React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  date: string
}

const PostHeader: React.FC<Props> = ({ title, date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <>
      <div className="post-title text-4xl mb-3 mt-36 leading-normal">
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
    </>
  )
}

export default PostHeader
