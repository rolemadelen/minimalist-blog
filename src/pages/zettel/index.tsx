import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PostsWrapper, PostList, PostUID, PostTitle } from '@/components/custom-tw-components';
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
            <Header type='zettel'/>
            <PostsWrapper>
                <p>* Welcome to the gateway of my zettelkasten.</p>
                {posts.map((post) => (
                    <Link
                        key={`zettel-${post.slug}`}
                        href={`/zettel/${post.slug}`}
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
    const POST_TYPE = 'zettel';
    const posts: {type: string, slug: string}[] = getAllPosts(POST_TYPE);

    return {
        props: {
            posts,
        },
    }
}

export default Blog;