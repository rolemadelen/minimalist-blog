import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllPosts } from '../../lib/blog';
import Link from 'next/link';

export default function Blog( { posts }) {
    return (
        <>
            <Header />
            {posts.map((post) => (
                <Link
                    key={`${post.slug}`}
                    href={`/blog/${post.slug}`}
                    passHref>
                        <p>
                            {post.uid} - {post.title}
                        </p>
                </Link>
            ))}
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