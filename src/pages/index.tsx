import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import React, { useCallback, useEffect, useRef, useState } from 'react'

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
  const month = useRef<null | string>(null)

  useEffect(() => {}, [])

  const displayYear = useCallback((d: any) => {
    let postYear = d.split('-')[0]

    if (year.current === postYear) {
      return ''
    } else {
      year.current = postYear

      return (
        <>
          <div className="my-32 sm:my-20"></div>
          <div
            className="text-[#ccc] absolute top-[-6rem] sm:left-[-6rem] sm:top-[-2.5rem] text-xl sm:text-3xl font-light tracking-widest sm:rotate-[-90deg] mt-[4rem]"
            key={postYear}
          >
            {postYear}
          </div>
        </>
      )
    }
  }, [])

  const isNewMonth = (formattedMonth: string) => {
    const monthNames = [
      '',
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    let ret = false
    if (monthNames[+formattedMonth] != month.current) {
      month.current = monthNames[+formattedMonth]
      ret = true
    }

    return ret
  }

  const getDaySuffix = (day: number) => {
    if (day >= 11 && day <= 13) return day + 'th'
    switch (day % 10) {
      case 1:
        return day + 'st'
      case 2:
        return day + 'nd'
      case 3:
        return day + 'rd'
      default:
        return day + 'th'
    }
  }

  return (
    <>
      <Header />
      <ProgressBar />
      <div className="max-w-[36rem] m-auto mb-20 px-6">
        {posts.map(({ date, slug, title }, i) => {
          const formattedYear = displayYear(date.split(' ')[0])
          const formattedMonth = date.split(' ')[0].split('-')[1]
          const formattedDate = getDaySuffix(+date.split(' ')[0].split('-')[2])

          return (
            <React.Fragment key={i}>
              <div className="relative">
                {formattedYear}

                <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
                  {isNewMonth(formattedMonth) && (
                    <div className="mt-8 text-[#ccc] mb-2 text-md">
                      {month.current}
                    </div>
                  )}
                  <div className="post-list items-center flex text-md mb-2">
                    <div className="hidden sm:block flex-[0.125] text-[#ccc] text-sm">
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
