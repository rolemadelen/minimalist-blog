import Footer from '@/components/Footer/Footer'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import { metadata } from '@/lib/metadata'
import Image from 'next/image'
import { useState } from 'react'
import styles from './about.module.scss'

const About = () => {
  const [expand, setExpand] = useState(false)
  const { owner, work_exp, work, blog, education, contacts } = metadata

  const handleReadMore = () => {
    setExpand((prev) => !prev)
  }
  return (
    <>
      <ProgressBar />
      <div className={styles.container}>
        <header className={styles.header}>
          <a href="https://madelen.vercel.app/" rel="noopener noreferrer">
            <Image
              className={styles['header__logo']}
              src="/profile.webp"
              width={120}
              height={120}
              alt="profile"
            />
          </a>
          <div>
            <h1 className={styles['header__title']}>{owner.name}</h1>
            <h3 className={styles['header__subtitle']}>{owner.role}</h3>
            <div className={styles['header__contact']}>
              <a href="https://madelen.vercel.app/" rel="noopener noreferrer">
                <Image
                  src={'/blog-logo.png'}
                  width={20}
                  height={20}
                  alt="blog"
                />
              </a>
              <a
                href={contacts.x.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={'/x-logo.png'} width={15} height={15} alt="x" />
              </a>
              <a
                href="https://techhub.social/@mrolemadelen"
                rel="noopener noreferrer"
              >
                <Image
                  src={'/mastodon-logo.png'}
                  width={22}
                  height={22}
                  alt="mastodon"
                />
              </a>
              <a
                href={contacts.github.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src={'/gh-logo.png'}
                  width={20}
                  height={20}
                  alt="github"
                />
              </a>
              <a
                href={`mailto:${owner.email}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src={'/email.png'} width={20} height={20} alt="github" />
              </a>

              {/* <a href={`mailto:${owner.email}`}>{owner.email}</a> */}
            </div>
          </div>
        </header>
        <main className={styles.main}>
          <h2 className={styles['main__header']}>About</h2>
          <div>
            <div className={`${expand ? styles.expand : styles.shrink}`}>
              <p>
                I was born in{' '}
                <a href="https://www.google.com/search?q=andong+south+korea&oq=Andong+south+korea&sourceid=chrome&ie=UTF-8">
                  Andong
                </a>
                , South Korea in the mid-1990s. Although I don&apos;t recall the
                exact year, I believe I was around 9 years old when our family
                relocated to Southern California. At that time, my knowledge of
                English was limited to just one word: <i>hello</i>. So, I spent
                the majority of my time with my only friend, Diablo II. I think
                it&apos;s fair to say that I was a game addict.
              </p>
              <p>
                One day, my sister called me over and showed me a program she
                had made in C. It displayed a prompt, <i>Enter your name</i>. I
                typed in my name, and it responded with, <i>Jii is an idiot</i>.
                This unexpected encounter served as my first exposure to
                programming. I found programming incredibly intriguing, far more
                captivating than any games I had played before. I self taught
                programming and as I spent more time with it, I gradually lost
                interest in playing games.
              </p>
              <p>
                After high school, I enrolled in a community college to study
                Computer Science. Then I transferred to UCSD pursuing Math-CS.
                However, my passion for understanding user experiences and
                interfaces led me to switch my major to
                Human-Computer-Interaction. As my fascination with web
                development grew, I began creating personal blogs as a way to
                practice and refine my skills. Following my graduation from
                UCSD, I moved to Japan and got my first professional work
                experience as a front-end developer at a healthcare startup.
              </p>
              <p>
                After spending three years abroad, I returned to the States.
                Currently, I reside in Kentucky with my partner and our beloved
                German Shepherd puppy.
              </p>
              <p>
                That&apos;s about who I am. If there&apos;s something you want
                to know more about me or are interested in discussing potential
                remote opportunities, please don&apos;t hesitate to reach out to
                me via email at{' '}
                <a href={`mailto:${owner.email}`}>{owner.email}</a>.
              </p>
            </div>
            <div
              role="button"
              className={styles['content__button']}
              onClick={handleReadMore}
            >
              <span className="">{expand ? 'less ↑' : 'read more ↓'}</span>
            </div>
          </div>

          <div className={styles.workExp}>
            <h2 className={styles['main__header']}>Work Experience</h2>
            <div>
              <ul role="list">
                {Object.keys(work_exp).map((key) => (
                  <li key={key}>
                    <span className={styles['workExp__date']}>
                      {work_exp[key].year}
                    </span>{' '}
                    <span>
                      {work_exp[key].link ? (
                        <a
                          href={work_exp[key].link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {work_exp[key].company}
                        </a>
                      ) : (
                        work_exp[key].company
                      )}
                      <span className={styles['workExp__role']}>
                        {work_exp[key].role !== ''
                          ? `(${work_exp[key].role})`
                          : ''}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.education}>
            <h2 className={styles['main__header']}>Education</h2>
            <div>
              <ul role="list">
                {Object.keys(education).map((key) => (
                  <li key={key}>
                    <span className={styles['education__date']}>
                      {education[key].year}
                    </span>{' '}
                    <span>{education[key].school}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.work}>
            <h2 className={styles['main__header']}>Creative Works</h2>
            <div>
              <div className={styles['main__subheader']}>Side Projects</div>
              <ul role="list">
                {Object.keys(work).map((key) => (
                  <li key={key}>
                    <span className={styles['work__date']}>
                      {work[key].year}
                    </span>{' '}
                    <span>
                      <a
                        href={work[key].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {work[key].project}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>

              <div className={styles['main__subheader']}>
                Blog Design and Implementation
              </div>
              <ul role="list">
                {Object.keys(blog).map((key) => (
                  <li key={key}>
                    <span className={styles['work__date']}>
                      {blog[key].year}
                    </span>{' '}
                    <span>
                      <a
                        href={blog[key].link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {blog[key].project}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.contact}>
            <h2 className={styles['main__header']}>Get in Touch</h2>
            <ul role="list">
              {Object.keys(contacts).map((key) => (
                <li key={key}>
                  <a
                    href={contacts[key].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contacts[key].name} / @{contacts[key].handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default About
