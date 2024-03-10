import { useEffect, useRef } from 'react'
import { words } from './data'
import { gsap } from 'gsap'
import styles from './ReelEffect.module.scss'
import sharedStyles from '../Demos.module.scss'

const ReelEffect = () => {
  const wordsGroupRef = useRef(null)

  useEffect(() => {
    gsap.to(wordsGroupRef.current, {
      yPercent: -276,
      duration: 3,
      ease: 'expo.inOut',
      repeat: -1,
    })
  }, [])

  return (
    <>
      <h1 className={sharedStyles.title}>Reel Effect (Slot Machine Effect)</h1>
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
