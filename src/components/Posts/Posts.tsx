import React, { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { atom, useAtom } from 'jotai'
import styles from './Posts.module.scss'

export const modeAtom = atom('normal')
export const techAtom = atom(false)
export const nonTechAtom = atom(false)

type View = {
  slug: string
  title: string
  desc: string
  date: string
  note: string
  type: string
  tags?: [string]
}

type Props = {
  posts: View[]
}

const Posts: React.FC<Props> = ({ posts }) => {
  const [mode, setMode] = useAtom(modeAtom)
  const [displayTech, setDisplayTech] = useAtom(techAtom)
  const [displayNonTech, setDisplayNonTech] = useAtom(nonTechAtom)
  const router = useRouter()
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
          <div className={styles['date__month']}> {month.current} </div>
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

  const DetailView = ({ slug, title, desc, date, note, tags }: View) => {
    date = date.split(' ')[0]

    return (
      <div className={styles.simple}>
        <Link key={`blog-${slug}`} href={`/post/${slug}`} passHref>
          <div className={styles.simple__post}>
            <div className={styles.simple__title}>{title}</div>
            <div className={styles.simple__date}>
              {date}・{desc}
            </div>
            <div className={styles.tags}>
              {tags &&
                tags.map((tag) => (
                  <span className={styles.tag} key={tag}>
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </Link>
      </div>
    )
  }

  const viewFactory = (post: View) => {
    if (displayTech && post.type !== 'tech') return
    if (displayNonTech && post.type !== 'non-tech') return

    if (mode === 'detail') {
      return DetailView(post)
    } else {
      return NormalView(post)
    }
  }

  const openRandomPost = () => {
    const SIZE = posts.length
    const randomNote = Math.floor(Math.random() * SIZE)
    let { slug } = posts[randomNote]

    router.push(`/post/${slug}`)
  }

  return (
    <main className={styles.posts}>
      <div className={styles.options}>
        <div>
          <button type="button" onClick={openRandomPost}>
            accio
            <span className={styles.accio__note}>📃</span>
          </button>
        </div>
        <div className={styles.options_group}>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="detailView"
              id="detailView"
              checked={mode === 'detail'}
              onChange={() => setMode(mode === 'detail' ? 'normal' : 'detail')}
            />
            <label htmlFor="detailView">detail</label>
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
      </div>

      {posts.map((data, i) => {
        return <React.Fragment key={i}>{viewFactory(data)}</React.Fragment>
      })}
    </main>
  )
}

export default Posts
