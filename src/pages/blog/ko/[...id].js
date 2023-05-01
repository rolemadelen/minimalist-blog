import React from 'react';
import PropTypes from 'prop-types';
import { Article, ArticleTitle, ArticleHeader, ArticleDate } from '@/components/custom-tw-components';
import { getAllPostIds, getPostData } from '../../../../lib/blog';
import Preview from '../../../../lib/codeblock';
import Footer from '@/components/Footer'
import IconArrowLeft from '/public/icons/icon-arrow-left.svg';
import Link from 'next/link';
import Image from 'next/image';
import Comments from '@/components/Comments';

Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default function Post({ post }) {
    return (
        <>
        <ArticleHeader>
            <ArticleTitle>{post.title}</ArticleTitle>
            <div className={'flex justify-between'}>
                <ArticleDate>{new Date(post.date).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' })}</ArticleDate>
                <Link href='/blog/ko' className={'w-[2rem] h-[1.5625rem] flex justify-center content-center rounded mb-[1.25rem] border-[1px] border-solid border-[#eee] hover:bg-[#e7e7e7] duration-75'}>
                    <Image src={IconArrowLeft} alt="←" />
                </Link>
            </div>
        </ArticleHeader>
        <Article>
            <Preview markdown={post.markdown} />
            <Comments />
        </Article>
        <Footer />
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds('ko');
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPostData('ko', params.id);
    return {
        props: {
            post,
        },
    };
}
