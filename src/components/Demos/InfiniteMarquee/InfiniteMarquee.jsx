import { useEffect, useRef } from 'react'
import { words } from './data'
import { gsap } from 'gsap'
import styles from './InfiniteMarquee.module.scss'

const InfiniteMarquee = () => {
  const wordsGroupRef = useRef(null)

  useEffect(() => {
    gsap.to(wordsGroupRef.current, {
      yPercent: -102,
      duration: 8,
      repeat: -1,
      ease: 'none',
    })
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wordsGroup} ref={wordsGroupRef}>
          {words.map((word, index) => {
            return (
              <span key={index} className={styles.word}>
                {word}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default InfiniteMarquee
