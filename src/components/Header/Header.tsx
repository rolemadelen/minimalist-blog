import React from 'react'
import Link from 'next/link'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>
            <span className={styles['logo__mark']}>&gt;$</span>
            <span className={styles['logo__text']}>Madelen</span>
            <span className={styles['logo__cursor']}></span>
          </h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles['nav__list']}>
          <li>
            <Link href="/about">
              <div>私</div>
              <div>about</div>
            </Link>
          </li>
          <li>
            <Link href="/now">
              <div>今</div>
              <div>now</div>
            </Link>
          </li>
          <li>
            <Link href="/review">
              <div>考</div>
              <div>review</div>
            </Link>
          </li>
          <li>
            <Link href="/diary">
              <div>字</div>
              <div>diary</div>
            </Link>
          </li>
          <li>
            <Link
              href="https://want.madelen.me"
              target="__blank"
              rel="noopener noreferrer"
            >
              <div>欲</div>
              <div>want</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
