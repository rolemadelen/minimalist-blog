import React, { useRef } from 'react'
import Link from 'next/link'
import { atom, useAtom } from 'jotai'
import styles from './Posts.module.scss'

export const modeAtom = atom('normal')
export const techAtom = atom(true)
export const nonTechAtom = atom(false)

type View = {
  slug: string
  title: string
  date: string
}

type Post = View & {
  type: string
}

type Props = {
  posts: Post[]
}

const Posts: React.FC<Props> = ({ posts }) => {
  const [mode, setMode] = useAtom(modeAtom)
  const [displayTech, setDisplayTech] = useAtom(techAtom)
  const [displayNonTech, setDisplayNonTech] = useAtom(nonTechAtom)

  const year = useRef('')
  const month = useRef<null | string>(null)

  const displayYear = (postYear: string) => {
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

  const isNewMonth = (m: number) => {
    const months = [
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
    if (months[m] != month.current) {
      month.current = months[m]
      ret = true
    }

    return ret
  }

  const appendSuffix = (day: number) => {
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
    const [year, month, day] = date.split('-')

    const fyear = displayYear(year)
    const fday = appendSuffix(+day)

    return { fyear, fmonth: month, fday }
  }

  const NormalView = ({ slug, title, date }: View) => {
    date = date.split(' ')[0]
    const { fyear, fmonth, fday } = formatDate(date)

    return (
      <div>
        {fyear}

        {isNewMonth(+fmonth) && (
          <div className={styles['date__month']}>{month.current}</div>
        )}
        <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
          <div className={styles.post}>
            <div className={styles['post__title']}>{title}</div>
            <div className={styles['post__day']}>{fday}</div>
          </div>
        </Link>
      </div>
    )
  }

  const SimpleView = ({ slug, title, date }: View) => {
    date = date.split(' ')[0]

    return (
      <div className={styles.simple}>
        <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
          <div className={styles['simple__post']}>
            <div className={styles['simple__date']}>{date}</div>
            <div className={styles['simple__title']}>{title}</div>
          </div>
        </Link>
      </div>
    )
  }

  const viewFactory = (post: Post) => {
    if (displayTech && post.type !== 'tech') return
    if (displayNonTech && post.type !== 'non-tech') return

    if (mode === 'simple') {
      return SimpleView(post)
    } else {
      return NormalView(post)
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
            checked={mode === 'simple'}
            onChange={() => setMode(mode === 'simple' ? 'normal' : 'simple')}
          />
          <label htmlFor="simpleView">simplified</label>
        </div>
        <div className={styles.option}>
          <input
            type="checkbox"
            name="tech"
            id="tech"
            checked={displayTech}
            onChange={() => {
              setDisplayNonTech(displayTech ? false : displayTech)
              setDisplayTech(!displayTech)
            }}
          />
          <label htmlFor="tech">tech</label>
        </div>
        <div className={styles.option}>
          <input
            type="checkbox"
            name="nontech"
            id="nontech"
            checked={displayNonTech}
            onChange={() => {
              setDisplayTech(displayNonTech ? false : displayNonTech)
              setDisplayNonTech(!displayNonTech)
            }}
          />
          <label htmlFor="nontech">non-tech</label>
        </div>
      </div>

      <div className={styles.note}>
        Previous posts (45) are currently undergoing the migration process.
      </div>

      {posts.map((data, i) => {
        return <React.Fragment key={i}>{viewFactory(data)}</React.Fragment>
      })}
    </main>
  )
}

export default Posts
