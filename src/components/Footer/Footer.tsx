import React from 'react'
import { metadata } from '@/lib/metadata'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  const { name } = metadata.owner

  return (
    <footer className={styles.footer}>
      <div className={styles['footer__copyright']}>
        © 2024 / {name.toUpperCase()}
      </div>
      <div className={styles.puppy}>
        <span className={styles['puppy__left']}>૮</span> • ᴥ •{' '}
        <span className={styles['puppy__right']}>ა</span>
      </div>
    </footer>
  )
}

export default Footer
