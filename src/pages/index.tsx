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
  const month = useRef('')

  const displayYear = useCallback((d: any) => {
    let postYear = d.split('-')[0]

    if (year.current === postYear) return ''
    else {
      year.current = postYear
      return <div className='text-gray-400 sm:text-gray-200 absolute top-[-4rem] sm:left-[-6rem] sm:top-[-3rem] text-xl sm:text-3xl font-light tracking-widest sm:rotate-[-90deg] mt-[4rem]' key={postYear}>{postYear}</div>
    }
  }, [])

  const sameMonth = useCallback((d: any) => {
    let postMonth = d.split('-')[1]
    return month.current === postMonth;
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
    if (sameMonth(d)) return '';

    month.current = d.split('-')[1]
    const m: number = parseInt(month.current)
    let s = '';

    switch (m) {
      case 1: s = 'Jan'; break
      case 2: s = 'Feb'; break
      case 3: s = 'Mar'; break
      case 4: s = 'Apr'; break
      case 5: s = 'May'; break
      case 6: s = 'June'; break
      case 7: s = 'July'; break
      case 8: s = 'Aug'; break
      case 9: s = 'Sept'; break
      case 10: s = 'Oct'; break
      case 11: s = 'Nov'; break
      default: s = 'Dec'
    }
    return (
      <>
        <div className='my-14'></div>
        <div className='text-gray-300 right-[-8rem] top-0 w-full text-xl tracking-tight text-right sm:text-left sm:w-[10rem] sm:text-gray-200 sm:mt-[4rem] sm:absolute sm:rotate-90'>{s}</div>
      </>
    )
  }, [])

  return (
    <>
      <Header />
      <div className='max-w-[36rem] m-auto mb-36 px-6'>
        {posts.map((post, i) => (
          <div className='relative' key={i}>
            {displayYear(post.date.split(' ')[0])}
            {displayMonth(post.date.split(' ')[0])}
            <Link
              key={`blog-${post.slug}`}
              href={`/post/${post.slug}`}
              passHref>
              <div className='post-list items-center grid gap-4 grid-cols-[auto_1fr_auto] my-4 text-md'>
                <div className='whitespace-nowrap overflow-hidden overflow-ellipsis'>{post.title}</div>
                <hr className='m-0 p-0 w-full border-dashed min-w-[1rem]' />
                <div className='text-gray-400 text-sm'>
                  {addSuffix(post.date.split(' ')[0])}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div >
      <Footer pageFrom='blog' />
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
