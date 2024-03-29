import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ProgressBar from '@/components/ProgressBar/ProgressBar'
import Posts from '@/components/Posts/Posts'
import { getAllPosts } from '@/lib/blog'
import Head from 'next/head'

interface Post {
  slug: string
  title: string
  desc: string
  date: string
  note: string
  type: string
  tags?: [string]
}

interface Props {
  posts: Post[]
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Madelen</title>
        <meta content="Madelen | Web Developer" name="description" />
        <meta content="Madelen" property="og:title" />
        <meta content="Madelen | Web Developer" property="og:description" />
        <meta
          content="https://blog.madelen.me/ogimage.jpg"
          property="og:image"
        />
        <meta content="website" property="og:type" />
        <meta content="https://blog.madelen.me" property="og:url" />
        <meta
          name="keyword"
          content="blog, javascript, front-end, developer, engineer"
        />

        <meta content="Madelen" property="twitter:title" />
        <meta
          content="Madelen | Web Developer"
          property="twitter:description"
        />
        <meta
          content="https://blog.madelen.me/ogimage.jpg"
          property="twitter:image"
        />
        <meta content="summary_large_image" property="twitter:card" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="me" href="https://techhub.social/@mrolemadelen" />
      </Head>
      <Header />
      <ProgressBar />
      <Posts posts={posts} />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  let posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
