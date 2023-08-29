import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import React, { useCallback, useRef } from 'react'

interface Post {
  lang: string
  slug: string
  title: string
  date: string
  lastUpdated?: string
}

interface Posts {
  posts: Post[]
}

const Blog: React.FC<Posts> = ({ posts }) => {
  const year = useRef('')

  const displayYear = useCallback((d: any) => {
    let postYear = d.split('-')[0]

    if (year.current === postYear) return ''
    else {
      year.current = postYear

      return (
        <>
          <div className="my-16 sm:my-10"></div>
          <div
            className="text-gray-400 sm:text-gray-200 absolute top-[-6rem] sm:left-[-6rem] sm:top-[-3rem] text-xl sm:text-3xl font-light tracking-widest sm:rotate-[-90deg] mt-[4rem]"
            key={postYear}
          >
            {postYear}
          </div>
        </>
      )
    }
  }, [])

  return (
    <>
      <Header />
      <div className="max-w-[36rem] m-auto mb-20 px-6">
        {posts.map(({ date, slug, title }, i) => {
          const formattedYear = displayYear(date.split(' ')[0])
          const formattedDate = new Date(date)
            .toLocaleDateString('en-us', {
              month: 'numeric',
              day: 'numeric',
            })
            .toString()

          return (
            <React.Fragment key={i}>
              <div className="relative">
                {formattedYear}

                <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
                  <div className="post-list items-center flex text-md mb-2">
                    <div className="hidden sm:block flex-[0.15] text-gray-300">
                      {formattedDate}
                    </div>
                    <div className="whitespace-nowrap overflow-hidden overflow-ellipsis flex-1 w-full">
                      {title}
                    </div>
                  </div>
                </Link>
              </div>
            </React.Fragment>
          )
        })}
      </div>
      <Footer pageFrom="blog" />
    </>
  )
}

export async function getStaticProps() {
  let posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
