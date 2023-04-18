import React from 'react';
import PropTypes from 'prop-types';
import { getAllPostIds, getPostData } from '../../../lib/blog';


Post.propTypes = {
    post: PropTypes.object.isRequired,
};

export default function Post({ post }) {
    return (
        <>
        {post.contentHtml}
        </>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    console.log(params);
    const post = await getPostData(params.id);
    return {
        props: {
            post,
        },
    };
}
