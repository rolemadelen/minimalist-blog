import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'
import { useCallback, useRef } from 'react'

interface Post {
  lang: string,
  slug: string,
  title: string,
  posttitle: string,
  date: string,
  updated: string,
  uid: string
}

interface Posts {
  posts: Post[],
}

const Blog: React.FC<Posts> = ({ posts }) => {
  const year = useRef('')

  const displayYear = useCallback((d: any) => {
    let postYear = d.split('-')[0]

    if (year.current === postYear) return ''
    else {
      year.current = postYear
      return <div className='text-right text-md mt-12 text-gray-300' key={postYear}>{postYear}</div>
    }
  }, [])

  const addSuffix = useCallback((d: any) => {
    d = parseInt(d.split('-')[2])
    let j: number = d % 10
    let k: number = d % 100

    if (j == 1 && k != 11) return d + "st"
    if (j == 2 && k != 12) return d + "nd"
    if (j == 3 && k != 13) return d + "rd"
    return d + "th"
  }, [])

  const displayMonth = useCallback((d: any) => {
    const m: number = parseInt(d.split('-')[1])

    switch (m) {
      case 1: return 'Jan'
      case 2: return 'Feb'
      case 3: return 'Mar'
      case 4: return 'Apr'
      case 5: return 'May'
      case 6: return 'June'
      case 7: return 'July'
      case 8: return 'Aug'
      case 9: return 'Sept'
      case 10: return 'Oct'
      case 11: return 'Nov'
      default: return 'Dec'
    }
  }, [])

  return (
    <>
      <Header />
      <div className='max-w-[36rem] m-auto mb-36 px-6'>
        {posts.map((post, i) => (
          <div key={i}>
            {displayYear(post.date.split(' ')[0])}
            <Link
              key={`blog-${post.slug}`}
              href={`/blog/${post.slug}`}
              passHref>
              <div className='post-list items-center grid gap-4 grid-cols-[auto_1fr_auto] my-5 text-md'>
                <div className='whitespace-nowrap overflow-hidden overflow-ellipsis'>{post.title}</div>
                <hr className='m-0 p-0 w-full border-dashed min-w-[1rem]' />
                <div className='text-gray-400 text-sm'>
                  {displayMonth(post.date.split(' ')[0])} {addSuffix(post.date.split(' ')[0])}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div >
      <Footer pageFrom='main' />
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
