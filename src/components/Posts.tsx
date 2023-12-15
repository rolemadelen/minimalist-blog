import React, { useRef } from 'react'
import Link from 'next/link'

interface Post {
  lang: string
  slug: string
  title: string
  date: string
  lastUpdated?: string
}

interface Props {
  posts: Post[]
  simpleView?: boolean
}

const Posts: React.FC<Props> = ({ posts, simpleView = false }) => {
  const year = useRef('')
  const month = useRef<null | string>(null)

  const displayYear = (date: string) => {
    let postYear = date.split('-')[0]

    if (year.current === postYear) {
      return ''
    } else {
      year.current = postYear

      return (
        <>
          <div className="my-32 sm:my-20"></div>
          <div
            className="text-[#505050] absolute top-[-6rem] sm:left-[-6rem] sm:top-[-2.5rem] text-xl sm:text-3xl font-light tracking-widest sm:rotate-[-90deg] mt-[4rem]"
            key={postYear}
          >
            {postYear}
          </div>
        </>
      )
    }
  }

  const isNewMonth = (fmonth: number) => {
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
    if (monthNames[fmonth] != month.current) {
      month.current = monthNames[fmonth]
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
  const formatDate = (date: string) => {
    const dsplit = date.split(' ')[0]

    // f = formatted
    const fyear = displayYear(dsplit)
    const fmonth = dsplit.split('-')[1]
    const fdate = getDaySuffix(+dsplit.split('-')[2])

    return { fyear, fmonth, fdate }
  }

  const displaySimpleView = (slug: string, title: string, date: string) => {
    const { fyear, fmonth, fdate } = formatDate(date)

    if (!simpleView) {
      return (
        <div className="relative">
          {fyear}

          {isNewMonth(+fmonth) && (
            <div className="mt-8 text-[#505050] mb-2 text-sm font-semibold">
              {month.current}
            </div>
          )}
          <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
            <div className="post-list items-center flex text-md mb-2">
              <div className="hidden sm:block flex-[0.1] text-[#505050] text-xs">
                {fdate}
              </div>
              <div className="whitespace-nowrap overflow-hidden overflow-ellipsis flex-1 w-full">
                {title}
              </div>
            </div>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="relative">
          <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
            <div className="post-list text-md mb-4">
              <div className="text-[#777] text-xs">{date.split(' ')[0]}</div>
              <div className="whitespace-nowrap overflow-hidden overflow-ellipsis flex-1 w-full">
                {title}
              </div>
            </div>
          </Link>
        </div>
      )
    }
  }

  return (
    <div className="max-w-[36rem] m-auto mb-20 px-6">
      {posts.map(({ date, slug, title }, i) => {
        return (
          <React.Fragment key={i}>
            {displaySimpleView(slug, title, date)}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Posts
