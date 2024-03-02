import React from 'react'
import { metadata } from '@/lib/metadata'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  const { name } = metadata.owner

  const moveToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__copyright']}>
        © 2024 / {name.toUpperCase()}
      </div>
      <div className={styles.puppy} onClick={moveToTop}>
        <span className={styles['puppy__left']}>૮</span> • ᴥ •{' '}
        <span className={styles['puppy__right']}>ა</span>
      </div>
    </footer>
  )
}

export default Footer
