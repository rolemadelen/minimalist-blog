import Footer from '@/components/Footer/Footer'
import ProgressBar from '@/components/ProgressBar/ProgressBar'

import styles from './review.module.scss'
import Header from '@/components/Header/Header'
import Head from 'next/head'
import { createOgImage } from '@/lib/createOgImage'
import { Data, reviewed } from '@/lib/review'
import { ReviewData } from '@/lib/review'
import Link from 'next/link'

const Review = () => {
  const title = "Jii's Review Page"
  const ogImage = createOgImage({
    title,
    meta: ['#review'].join('・'),
  })
  const reviewItems = reviewed

  const handleMouseEnter = (e: any, imagePath: string) => {
    const path = '/reviews/' + imagePath
    e.target.style.cursor = `url('${path}'), default`
  }
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
        <link rel="me" href="https://mstdn.social/img9417" />
      </Head>
      <Header />
      <ProgressBar />
      <section className={styles.container}>
        <ul className={styles.list}>
          {Object.keys(reviewItems).map((key) => (
            <div key={key} className={styles.section}>
              <h2 className={styles.title}>{key}</h2>
              {reviewItems[key as keyof ReviewData].map((item: Data) => (
                <li key={item.name} className={styles.list__item}>
                  <div>
                    {item.link && (
                      <Link href={item.link} className={styles.link}>
                        <span
                          className={styles.name}
                          onMouseEnter={(
                            e: React.MouseEvent<HTMLSpanElement>
                          ) => handleMouseEnter(e, item.image)}
                        >
                          {item.name}
                        </span>
                      </Link>
                    )}

                    {!item.link && (
                      <span
                        className={styles.name}
                        onMouseEnter={(e: React.MouseEvent<HTMLSpanElement>) =>
                          handleMouseEnter(e, item.image)
                        }
                      >
                        <span className={styles.movie_title}>{item.name} </span>
                        <span className={styles.movie_director}>
                          {item.director}
                        </span>
                      </span>
                    )}
                    <span className={styles.rating}>({item.rating}) ★</span>
                  </div>
                  <div className={styles.texts}>
                    <span className={styles.date}>{item.date}</span> ﹣{' '}
                    <span className={styles.review}>{item.review}</span>
                  </div>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </section>
      <Footer />
    </>
  )
}

export default Review
