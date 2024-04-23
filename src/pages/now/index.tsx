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
    meta: ['April 23, 2024', '#now-page'].join('・'),
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
        <link rel="me" href="https://techhub.social/@mrolemadelen" />
      </Head>
      <Header />
      <ProgressBar />
      <section className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>now</h1>
          <div className={styles.date}>
            <span>published ー 2024-03-18, from KY.</span>
            <span>updated ー 2024-04-23, from KY.</span>
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.section}>
            <div className={styles.title}>
              <strong>What I'm doing now</strong>
            </div>
            <ul className={styles.list}>
              <li>100 Days, 100 People Sketch Challenge</li>
              <li>Wake up by 05:00</li>
              <li>Thinking about a new side project (하루)</li>
              <li>
                Trying to find my own colors
                <ul>
                  <li>
                    • don't become an engineer that can be replaced by AI.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>What I'm NOT trying to do</strong>
            </div>
            <ul className={styles.list}>
              <li>
                Relying on LLM{' '}
                <a href="https://techhub.social/@mrolemadelen/112052013783314073">
                  {' '}
                  (toots)
                </a>
              </li>
              <li>
                Doing stupid things
                <ul>
                  <li>
                    • There are some stupid things that I'm doing, that I know
                    are stupid and wrong, that I colud stop doing, and that I
                    would stop doing.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>Events</strong>
            </div>
            <ul className={styles.list}>
              <li>
                Migrated from X to{' '}
                <a href="https://elk.zone/techhub.social/@mrolemadelen">
                  Mastadon
                </a>{' '}
                (2024-03-16)
                <ul>
                  <li>
                    • I got tired of negative tweets flowing around my timeline
                  </li>
                </ul>
              </li>
              <li>
                Stopped using Obisidian (2024-03-28)
                <ul>
                  <li>
                    • I'm back to using Nota.{' '}
                    <a href="./post/2403280523">You want to know why?</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>Things on repeat</strong>
            </div>
            <ul className={styles.list}>
              <li>
                IU -{' '}
                <a href="https://open.spotify.com/track/0UTtK6hregIBOsefavRI26?si=899d64b9cced4ee9">
                  Holssi
                </a>
              </li>
              <li>
                (G)I-DLE -{' '}
                <a href="https://open.spotify.com/track/2vNPGH1x5ZwxTjlvzLCyc2?si=717e5dfe78b64940">
                  Fate
                </a>
              </li>
              <li>
                (G)I-DLE -{' '}
                <a href="https://open.spotify.com/track/2fJ70dRX7J4jiVxKUQQp7C?si=baa6c4a0a8c74de7">
                  DUMDi DUMDi
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
