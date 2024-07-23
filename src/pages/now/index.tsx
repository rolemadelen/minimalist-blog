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
            <span>updated ー 2024-07-21, from Blue Bottle Coffee, SD.</span>
            {/* Blue Bottle Coffee, 3725 Paseo Pl #1060, San Diego, CA 92130 */}
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.section}>
            <div className={styles.title}>
              <strong>what am i</strong>
            </div>
            <ul className={styles.list}>
              <li>IVI Validation Engineer (2024~)</li>
              <li className={styles.greyed}>
                <i>Unemployed (2023-2024)</i>
              </li>
              <li className={styles.greyed}>
                <i>Frontend Engineer(2021-2023)</i>
              </li>
              <li className={styles.greyed}>
                <i>Foreign Language Teacher (2020-2021)</i>
              </li>
              <li className={styles.greyed}>
                <i>Student (~2019)</i>
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <div className={styles.title}>
              <strong>my morning routines</strong>
            </div>
            <ul className={styles.list}>
              <li>0430 → wake up</li>
              <li>0430-0530 → TBD (trying this and that, we'll see)</li>
              <li>0530-0600 → walk & feed my dog</li>
              <li>0600-0630 → wash up & eat</li>
              <li>0630 → off to work</li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>what i'm trying to do</strong>
            </div>
            <ul className={styles.list}>
              <li>get my life settled for the new job and the enviornment</li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>what i'm not trying to do</strong>
            </div>
            <ul className={styles.list}>
              <li>lying on bed during the daytime</li>
              <li>wasting time on sns and youtube</li>
              <li>
                doing stupid things - there are some stupid things that I'm
                doing, that I know are stupid and wrong, that I colud stop
                doing, and that I would stop doing.
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>things I'm currently into</strong>
            </div>
            <ul className={styles.list}>
              <li>
                Note App → <a href="https://bear.app/">Bear 2.0</a>
              </li>
              <li>
                Music →{' '}
                <a href="https://open.spotify.com/track/294hRgOqnGW2BemqP8D35X?si=a8284ddc0ddc419c">
                  Klaxon - (G)I-DLE
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
