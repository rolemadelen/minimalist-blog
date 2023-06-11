import { PostsWrapper, PostList, PostDate, PostTitle } from '@/components/custom-tw-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';

interface Post {
  lang: string,
  slug: string,
  title: string,
  posttitle: string,
  date: string,
  updated: string,
  uid: string
};

interface Posts {
  posts: Post[]
}

const Blog: React.FC<Posts> = ({posts}) => {
  return (
    <div className={'wrapper'}>
      <Header type='blog'/>
      <PostsWrapper>
        {posts.map((post) => (
          <Link
            key={`blog-${post.slug}`}
            href={`/blog/${post.slug}`}
            passHref>
            <PostList>
              <PostDate>
                {new Date(post.date).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' })}
              </PostDate>
              <PostTitle>{post.title}</PostTitle>
            </PostList>
          </Link>
        ))}
      </PostsWrapper>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const POST_TYPE = 'blog';
  const posts: {type: string, slug: string}[] = getAllPosts(POST_TYPE);

  return {
    props: {
      posts,
    },
  }
}

export default Blog;
