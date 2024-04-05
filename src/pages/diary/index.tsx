import React from 'react'
import Header from '@/components/Header/Header'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import styles from './diary.module.scss'
import { diaryLogs } from '@/lib/diary'

const Diary: React.FunctionComponent = () => {
  const logs = diaryLogs

  const handleExpand = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.classList.toggle(`${styles.expand}`)
  }

  return (
    <div>
      <Header />
      <ProgressBar />
      <section className={styles.container}>
        <ul className={styles.list} role="list">
          {logs.date.map((log) => (
            <li
              className={`${styles.list__item} ${styles.shrink}`}
              onClick={handleExpand}
            >
              <span className={styles.date}>{log}</span>
              <img
                className={styles.image}
                src={`/diary/${log}.webp`}
                alt={log}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Diary
