import Footer from '@/components/Footer/Footer'
import ProgressBar from '@/components/ProgressBar/ProgressBar'

import styles from './now.module.scss'
import Header from '@/components/Header/Header'
import Head from 'next/head'

const Now = () => {
  return (
    <>
      <Head>
        <link rel="me" href="https://techhub.social/@mrolemadelen" />
      </Head>
      <Header />
      <ProgressBar />
      <section className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>now</h1>
          <div className={styles.date}>
            <span>published ー 2024-03-18, from KY.</span>
            <span>updated ー 2024-03-28, from KY.</span>
          </div>
        </div>
        <main className={styles.main}>
          <div className={styles.section}>
            <div className={styles.title}>
              <strong>what I'm doing now</strong>
            </div>
            <ul className={styles.list}>
              <li>
                Learning{' '}
                <a
                  href="https://www.rust-lang.org/learn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Rust
                </a>{' '}
                and data structures/algorithms
                <ul>
                  <li>• expanding my view as a web developer.</li>
                  <li>
                    • solving programming problems (
                    <a
                      href="https://www.acmicpc.net/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      BOJ
                    </a>
                    ,{' '}
                    <a
                      href="https://leetcode.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Leetcode
                    </a>
                    ) in Rust.
                  </li>
                </ul>
              </li>
              <li>
                100 Days, 100 People Sketch Challenge
                <ul>
                  <li>
                    • trying to spend at least 5 minutes of drawing everyday
                  </li>
                </ul>
              </li>
              <li>
                wake up at 04:30
                <ul>
                  <li>• enjoying the silence.</li>
                  <li>
                    • spending couple hours in the morning doing things I want
                    to do.
                  </li>
                </ul>
              </li>
              <li>
                working on a side project for my portfolio
                <ol>
                  <li>• Project Madelen - React, TypeScript</li>
                  <li>
                    <del>• Pomodoro Timer - Rust</del> (completed;{' '}
                    <a
                      href="https://github.com/rolemadelen/pomosh"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      pomosh
                    </a>
                    )
                  </li>
                  <li>• Gregg Shorthand Dictionary - Rust, Tesseract OCR</li>
                </ol>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>what I'm NOT trying to do</strong>
            </div>
            <ul className={styles.list}>
              <li>
                Relying on LLM
                <ul>
                  <li>
                    • I found myself utilizing ChatGPT to not only check
                    grammars but also to rephrase what I wrote to make it "look"
                    better, which no longer makes it my words{' '}
                    <a href="https://techhub.social/@mrolemadelen/112052013783314073">
                      (toots)
                    </a>
                    .
                  </li>
                </ul>
              </li>
              <li>
                wasting time
                <ul>
                  <li>
                    •{' '}
                    <i>
                      Be productive and utilize your time more efficiently. You
                      have things to do. Wake up.
                    </i>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <div className={styles.title}>
              <strong>events</strong>
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
              <strong>things on repeat</strong>
            </div>
            <ul className={styles.list}>
              <li>
                Alary-Kansion -{' '}
                <a href="https://open.spotify.com/track/6h3QXG0JYCTdmha9F1Wxzi?si=86432fcea05844ee">
                  Put it in the cliché
                </a>
              </li>
              <li>
                Alary-Kansion -{' '}
                <a href="https://open.spotify.com/track/3HL22Xvma3Rz2Mu0smqTku?si=14436fb3aef94c5c">
                  Gibberish
                </a>
              </li>
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
