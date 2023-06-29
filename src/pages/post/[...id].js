import React from "react";
import PropTypes from "prop-types";
import Preview from "@/lib/codeblock";
import { getAllPostIds, getPostData } from "@/lib/blog";
import Link from "next/link";
import Footer from "@/components/Footer";

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default function Post({ post }) {
  return (
    <div className="post px-6">
      <div className="post-title max-w-[36rem] m-auto text-3xl mt-36 mb-10 leading-normal">
        <Link href="/" title="post.postitle">
          {post.posttitle}
        </Link>
      </div>
      <div className="post-content max-w-[36rem] m-auto mb-10 pb-10 border-b">
        <Preview markdown={post.markdown} />
      </div>
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
