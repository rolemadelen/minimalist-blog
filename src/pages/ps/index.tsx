import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProgressBar from '@/components/ProgressBar'
import Posts from '@/components/Posts'
import { getAllPosts } from '@/lib/blog'

interface Post {
  lang: string
  slug: string
  title: string
  date: string
  type?: string
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
      <Posts posts={posts} />
      <Footer pageFrom="blog" />
    </>
  )
}

export async function getStaticProps() {
  let posts = getAllPosts()
  posts = posts.filter((post: Post) => post.type === 'ps')
  return {
    props: {
      posts,
    },
  }
}

export default Blog
