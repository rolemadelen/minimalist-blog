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
            <span className={styles['logo__text']}>madelen</span>
            <span className={styles['logo__cursor']}></span>
          </h1>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles['nav__list']}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/now">Now</Link>
          </li>
          <li>
            <Link
              href="https://want.madelen.me"
              target="__blank"
              rel="noopener noreferrer"
            >
              Want
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
