import Header, { simpleViewAtom } from '@/components/Header'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import Posts from '@/components/Posts'
import { getAllPosts } from '@/lib/blog'

interface Post {
  lang: string
  slug: string
  title: string
  date: string
  lastUpdated?: string
}

interface Props {
  posts: Post[]
}

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <>
      <Header />
      <ProgressBar />
      <Posts posts={posts} simpleView={true} />
      <Footer pageFrom="blog" />
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
