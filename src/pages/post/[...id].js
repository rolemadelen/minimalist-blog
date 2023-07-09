import React from "react";
import PropTypes from "prop-types";
import Preview from "@/lib/codeblock";
import { getAllPostIds, getPostData } from "@/lib/blog";
import Link from "next/link";
import Footer from "@/components/Footer";
import Comment from "@/lib/giscus";

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function Post({ post }) {
  return (
    <div className="post max-w-[36rem] m-auto">
      <div className="post-title text-3xl mt-36 mb-10 leading-normal">
        <Link href="/" title="post.postitle">
          {post.posttitle}
        </Link>
      </div>
      <div className="post-content mb-10 pb-10 border-b">
        <Preview markdown={post.markdown} />
      </div>
      <Comment />
      <Footer pageFrom="post" />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
