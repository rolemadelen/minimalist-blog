import React, { useEffect, useRef } from 'react'
import styles from './ProgressBar.module.scss'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ProgressBar = () => {
  const ref = useRef(null)

  useEffect(() => {
    gsap.to(ref.current, {
      value: 100,
      scrollTrigger: { scrub: 0.3 },
    })
  }, [])
  return (
    <progress
      ref={ref}
      className={styles.progressBar}
      max="100"
      value="0"
    ></progress>
  )
}

export default ProgressBar
