import { useEffect, useRef } from 'react'
import { words } from './data'
import { gsap } from 'gsap'
import styles from './InfiniteMarquee.module.scss'
import sharedStyles from '../Demos.module.scss'

const InfiniteMarquee = () => {
  const wordsGroupRef = useRef(null)

  useEffect(() => {
    gsap.to(wordsGroupRef.current, {
      yPercent: -116,
      duration: 5,
      repeat: -1,
      ease: 'none',
    })
  }, [])

  return (
    <>
      <h1 className={sharedStyles.title}>Infinite Marquee</h1>
      <div className={styles.wrapper}>
        <div className={styles.overlay}></div>
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
