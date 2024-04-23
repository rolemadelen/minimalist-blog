import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 80) {
        headerRef.current?.classList.add(`${styles.scroll}`)
      } else {
        headerRef.current?.classList.remove(`${styles.scroll}`)
      }
    })
  }, [])

  const moveToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.top} onClick={moveToTop}>
        <span className={styles.earLeft}>૮</span>
        <span className={styles.face}>• ᴥ •</span>
        <span className={styles.earRight}>ა</span>
      </div>
      <div className={styles.logo}>
        <Link href="/">
          <h1>
            <span className={styles['logo__mark']}>&gt;$</span>
            <span className={styles['logo__text']}>madelen</span>
            <span className={styles['logo__cursor']}></span>
          </h1>
          <h1></h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles['nav__list']}>
          <li>
            <Link href="/about">
              <div>A</div>
              <div>about</div>
            </Link>
          </li>
          <li>
            <Link href="/now">
              <div>N</div>
              <div>now</div>
            </Link>
          </li>
          <li>
            <Link href="/review">
              <div>R</div>
              <div>review</div>
            </Link>
          </li>
          <li>
            <Link
              href="https://want.madelen.me"
              target="__blank"
              rel="noopener noreferrer"
            >
              <div>W</div>
              <div>want</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
