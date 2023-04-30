import { PostsWrapper, PostList, PostUID, PostTitle } from '@/components/custom-tw-components';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getAllPosts } from '../../../../lib/blog';
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
        <>
            <Header lang='en'/>
            <PostsWrapper>
                <p>* Posts are ordered by relevance, not by time of writing.</p>
                {posts.map((post) => (
                    <Link
                        key={`${post.lang}-${post.slug}`}
                        href={`/blog/${post.lang}/${post.slug}`}
                        passHref>
                            <PostList>
                                <PostUID>{post.uid}</PostUID>
                                <PostTitle>{post.title}</PostTitle>
                            </PostList>
                    </Link>
                ))}
            </PostsWrapper>
            <Footer lang='en'/>
        </>
    )
}

export async function getStaticProps() {
    const posts: {lang: string, slug: string}[] = getAllPosts('en');

    return {
        props: {
            posts,
        },
    }
}

export default Blog;