import Footer from '@/components/Footer/Footer'
import ProgressBar from '@/components/ProgressBar/ProgressBar'

import styles from './now.module.scss'
import Header from '@/components/Header/Header'

const Now = () => {
  return (
    <>
      <Header />
      <ProgressBar />
      <section className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>now</h1>
          <div className={styles.date}>
            updated: March 18th, 2024, from my home in Kentucky.
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.section}>
            <div className={styles.title}>✍🏼 what I'm doing now</div>
            <ul className={styles.list}>
              <li>
                <strong>
                  Learning <a href="https://www.rust-lang.org/learn">Rust</a>
                </strong>
                : expanding my view as a frontend engineer.
              </li>
              <li>
                <strong>learning data structures and algorithms</strong>: Doing{' '}
                <a href="https://www.acmicpc.net/">Baekjoon OJ</a> to practice
                competitive programming.
              </li>
              <li>
                <strong>100 Days, 100 People Sketch</strong>: trying to build a
                habit of drawing everyday (I'm on day 46).
              </li>
              <li>
                <strong>wake up at 04:30</strong>: trying to have a total
                control of my morning to plan and start the day with a best
                version of myself.
              </li>
              <li>
                <strong>working on a side project</strong>: a community to share
                your drawings. I'm currently working on the UI using React (I'll
                share the repo once i make it public).
              </li>
              <li>
                <strong>applying for web dev jobs</strong>: yes, still.{' '}
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <div className={styles.title}>❗️ what I'm not trying to do</div>
            <ul className={styles.list}>
              <li>
                <strong>Relying on chat gpt</strong>: I found myself utilizing
                chat gpt to not only check grammars but also to rephrase what I
                wrote to make it "look" better, which no longer makes it my
                words{' '}
                <a href="https://elk.zone/techhub.social/@mrolemadelen/112052013783314073">
                  (toots)
                </a>
                .
              </li>
              <li>
                <strong>wasting time</strong>: trying to be productive because
                their are so many things I want to learn!
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>📰 events</div>
            <ul className={styles.list}>
              <li>
                <strong>
                  Migrated from X to{' '}
                  <a href="https://elk.zone/techhub.social/@mrolemadelen">
                    Mastadon
                  </a>
                </strong>
                : i got tired of negative tweets flowing around my timeline
                (240316).
              </li>
              <li>
                <strong>trip to korea</strong>: family reunion (240406).
              </li>
            </ul>
          </div>
          <div className={styles.section}>
            <div className={styles.title}>🎵 things on repeat</div>
            <ul className={styles.list}>
              <li>
                Audrey Nuna -{' '}
                <a href="https://open.spotify.com/track/01ukVTKa6DhejzNulpoG2t?si=dab9a3605e074753">
                  damn right
                </a>
              </li>
              <li>
                아이유 (IU) -{' '}
                <a href="https://open.spotify.com/track/0djkJ3iAARXRCbfbwwVc3o?si=f53c210e4b2241cf">
                  love wins all
                </a>
              </li>
              <li>
                YDG -{' '}
                <a href="https://open.spotify.com/track/2GrMgAZpKLVEghKXnmOOUk?si=09da6827f9f047c9">
                  근의 공식
                </a>
              </li>
              <li>
                Zion T, AKMU -{' '}
                <a href="https://open.spotify.com/track/0qsv5I5fEnRoX2Enb3mBNr?si=e736b7f2d1284b66">
                  V (Peace) (feat. AKMU)
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
          ' now page.
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Now
