import Footer from '@/components/Footer/Footer'
import ProgressBar from '@/components/ProgressBar/ProgressBar'

import styles from './now.module.scss'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import { createOgImage } from '@/lib/createOgImage'

const Now = () => {
  const title = "What I'm doing now"
  const ogImage = createOgImage({
    title,
    meta: ['April 24, 2024', '#now-page'].join('・'),
  })

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="836" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:title" content="Jii" />
        <meta property="og:description" content={title} />
        <meta property="twitter:description" content={title} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <ProgressBar />
      <section className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>now</h1>
          <div className={styles.date}>
            <span>published ー 2024-03-18, from KY.</span>
            <span>updated ー 2024-06-06, from KY.</span>
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.section}>
            <div className={styles.title}>
              <strong>Current Morning Routines</strong>
            </div>
            <ul className={styles.list}>
              <li>Gregg Shorthand</li>
              <li>Reading tech articles</li>
              <li>Evergreen notes</li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>What I'm doing now</strong>
            </div>
            <ul className={styles.list}>
              <li>Udemy - Clean Code JavaScript</li>
              <li>Re-studying Data structures using C++, Ruby, Rust, and JS</li>
              <li>Working part time</li>
              <li>Trying to get a full time job</li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>What I'm NOT trying to do</strong>
            </div>
            <ul className={styles.list}>
              <li>Lying on bed during the daytime</li>
              <li>
                Doing stupid things - there are some stupid things that I'm
                doing, that I know are stupid and wrong, that I colud stop
                doing, and that I would stop doing.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>Things I'm currently into</strong>
            </div>
            <ul className={styles.list}>
              <li>
                App → <a href="https://bear.app/">Bear 2.0</a>
              </li>
              <li>
                Music →{' '}
                <a href="https://open.spotify.com/track/5vVL45nncczKCWS0uIQpzN?si=4467e3d72a2e4db9">
                  깊은 밤을 날아서 - Lee Moon Sae
                </a>
              </li>
            </ul>
          </div>
        </main>
        <div className={styles.note}>
          This is a <u>now page</u>, inspired from{' '}
          <a
            href={'https://sive.rs/nowff'}
            target="__blank"
            rel="noopener noreferrer"
          >
            Derek Sivers
          </a>
          ' now page movement.
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Now
