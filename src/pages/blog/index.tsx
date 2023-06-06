import { PostsWrapper, PostList, PostUID, PostTitle } from '@/components/custom-tw-components';
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
// export default function Blog( { posts }) {
    return (
        <div className={'wrapper'}>
            <Header type='blog'/>
            <PostsWrapper>
                <p>* Posts are ordered by relevance, not by time of writing.</p>
                {posts.map((post) => (
                    <Link
                        key={`blog-${post.slug}`}
                        href={`/blog/${post.slug}`}
                        passHref>
                            <PostList>
                                <PostUID>{post.uid}</PostUID>
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