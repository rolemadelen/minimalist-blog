import { useEffect, useRef } from 'react'
import { words } from './data'
import { gsap } from 'gsap'
import styles from './ReelEffect.module.scss'

const ReelEffect = () => {
  const wordsGroupRef = useRef(null)

  useEffect(() => {
    gsap.to(wordsGroupRef.current, {
      yPercent: -216.5,
      duration: 3,
      ease: 'expo.inOut',
      repeat: -1,
    })
  }, [])

  return (
    <>
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

export default ReelEffect
