import React, { useRef } from 'react'
import Link from 'next/link'
import { atom, useAtom } from 'jotai'

export const simpleViewAtom = atom(false)
export const englishOnlyAtom = atom(false)

interface Post {
  lang: string
  slug: string
  title: string
  date: string
  lastUpdated?: string
}

interface Props {
  posts: Post[]
}

const Posts: React.FC<Props> = ({ posts }) => {
  const [isEnglishOnly, setIsEnglish] = useAtom(englishOnlyAtom)
  const [isSimpleView, setIsSimpleView] = useAtom(simpleViewAtom)
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
          <div
            className="text-[#505050] sm:absolute top-[-6rem] sm:left-[-6rem] sm:top-[-2.5rem] text-3xl font-semibold sm:font-light tracking-widest sm:rotate-[-90deg] mt-[2.5rem] sm:mt-[4rem] mb-[-2.5rem] sm:mb-0"
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

  const displaySimpleView = (
    slug: string,
    title: string,
    date: string,
    lang: string
  ) => {
    if (isEnglishOnly && lang !== 'en') return

    const { fyear, fmonth, fdate } = formatDate(date)

    if (!isSimpleView) {
      return (
        <div className="relative">
          {fyear}

          {isNewMonth(+fmonth) && (
            <div className="mt-12 text-[#505050] mb-2 text-sm font-semibold">
              {month.current}
            </div>
          )}
          <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
            <div className="post-list items-center flex text-md mb-2">
              <div className="hidden sm:block flex-[0.1] text-[#505050] text-xs">
                {fdate}
              </div>
              <div className="ml-4 sm:ml-0 whitespace-nowrap overflow-hidden overflow-ellipsis flex-1 w-full">
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
      <div className="flex items-center mb-4 justify-end gap-6">
        <div className="flex item-center">
          <input
            className="mr-1"
            type="checkbox"
            name="simpleView"
            id="simpleView"
            checked={isSimpleView}
            onChange={() => setIsSimpleView(!isSimpleView)}
          />
          <label className="text-gray-500 text-sm" htmlFor="simpleView">
            Simplified
          </label>
        </div>
        <div className="flex items-center">
          <input
            className="mr-1"
            type="checkbox"
            name="language"
            id="language"
            checked={isEnglishOnly}
            onChange={() => setIsEnglish(!isEnglishOnly)}
          />
          <label className="text-gray-500 text-sm" htmlFor="language">
            English only
          </label>
        </div>
      </div>

      {posts.map(({ date, slug, title, lang }, i) => {
        return (
          <React.Fragment key={i}>
            {displaySimpleView(slug, title, date, lang)}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Posts
