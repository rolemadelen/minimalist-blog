import React, { useRef } from 'react'
import Link from 'next/link'
import { atom, useAtom } from 'jotai'
import styles from './Posts.module.scss'

export const simpleViewAtom = atom(false)
export const englishOnlyAtom = atom(false)

interface Post {
  slug: string
  title: string
  date: string
  type: string
  lastUpdated?: string
}

interface Props {
  posts: Post[]
}

const Posts: React.FC<Props> = ({ posts }) => {
  const [isPermanentOnly, setIsEnglish] = useAtom(englishOnlyAtom)
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
          <div className={styles['date__year']} key={postYear}>
            {postYear}
          </div>
        </>
      )
    }
  }

  const isNewMonth = (fmonth: number) => {
    const monthNames = [
      '',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
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
    type: string
  ) => {
    if (isPermanentOnly && type !== 'permanent') return

    const { fyear, fmonth, fdate } = formatDate(date)

    if (!isSimpleView) {
      return (
        <div>
          {fyear}

          {isNewMonth(+fmonth) && (
            <div className={styles['date__month']}>{month.current}</div>
          )}
          <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
            <div className={styles.post}>
              <div className={styles['post__title']}>{title}</div>
              <div className={styles['post__day']}>{fdate}</div>
            </div>
          </Link>
        </div>
      )
    } else {
      return (
        <div className={styles.simple}>
          <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
            <div className={styles['simple__post']}>
              <div className={styles['simple__date']}>{date.split(' ')[0]}</div>
              <div className={styles['simple__title']}>{title}</div>
            </div>
          </Link>
        </div>
      )
    }
  }

  return (
    <main className={styles.posts}>
      <div className={styles.options}>
        <div className={styles.option}>
          <input
            type="checkbox"
            name="simpleView"
            id="simpleView"
            checked={isSimpleView}
            onChange={() => setIsSimpleView(!isSimpleView)}
          />
          <label htmlFor="simpleView">Simplified</label>
        </div>
        <div className={styles.option}>
          <input
            type="checkbox"
            name="permanent"
            id="permanent"
            checked={isPermanentOnly}
            onChange={() => setIsEnglish(!isPermanentOnly)}
          />
          <label htmlFor="permanent">Permanent Notes</label>
        </div>
      </div>

      {posts.map(({ date, slug, title, type }, i) => {
        return (
          <React.Fragment key={i}>
            {displaySimpleView(slug, title, date, type)}
          </React.Fragment>
        )
      })}
    </main>
  )
}

export default Posts
