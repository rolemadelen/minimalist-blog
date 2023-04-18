import { PostsWrapper, PostList, PostUID, PostTitle } from '@/components/custom-tw-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts } from '../../lib/blog';
import Link from 'next/link';

interface Post {
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
            <Header />
            <PostsWrapper>
                <p>*글은 관련성에 따라 의도한 순서로 나열되어 있습니다. 작성 시간순이 아님을 유념해주세요.</p>
                {posts.map((post) => (
                    <Link
                        key={`${post.slug}`}
                        href={`/blog/${post.slug}`}
                        passHref>
                            <PostList>
                                <PostUID>{post.uid}</PostUID>
                                <PostTitle>{post.title}</PostTitle>
                            </PostList>
                    </Link>
                ))}
            </PostsWrapper>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    const posts: {slug: string}[] = getAllPosts();

    return {
        props: {
            posts,
        },
    }
}

export default Blog;