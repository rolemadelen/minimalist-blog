import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Footer from '@/components/Footer'
import Comments from '@/components/Comments.js';
import { Article, ArticleTitle, ArticleHeader, ArticleDate } from '@/components/custom-tw-components';
import Preview from '@/lib/codeblock';
import { getAllPostIds, getPostData } from '@/lib/blog';
import IconArrowLeft from '/public/icons/icon-arrow-left.svg';


Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default function Post({ post }) {
    return (
        <div className={'wrapper'}>
        <ArticleHeader>
            <ArticleTitle>{post.posttitle}</ArticleTitle>
            <div className={'flex flex-col'}>
                <ArticleDate><span>{post.updated ? 'Last updated on ' : ''}</span>{new Date(post.updated ? post.updated : post.date).toLocaleDateString('en-US', { timeZone: 'UTC', month: 'short', day: 'numeric', year: 'numeric' })}</ArticleDate>
                <Link href='/blog/en' className={'back-button w-[2rem] h-[1.5625rem] flex justify-center items-center rounded mb-[1.25rem] border-[1px] border-solid border-[#ccc] hover:bg-[#e7e7e7] duration-75'}>
                    <Image src={IconArrowLeft} alt="←" width="auto"/>
                </Link>
            </div>
        </ArticleHeader>
        <Article>
            <Preview markdown={post.markdown} />
        </Article>
        {/* <Comments /> */}
        <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds('en');
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPostData('en', params.id);
    return {
        props: {
            post,
        },
    };
}
