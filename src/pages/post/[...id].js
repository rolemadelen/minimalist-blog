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
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="post max-w-[36rem] m-auto px-6">
      <div className="post-title text-3xl mb-3 mt-36 leading-normal">
        {post.posttitle}
      </div>
      <div className="flex justify-between items-center mb-20">
        <div className="text-[#777] w-fit">
          {new Date(post.date).toLocaleDateString("en-us", options)}
        </div>
        <Link href="/" title="Back to home">
          <div className="border-[1px] w-fit rounded-md pl-5 pr-3 border-gray-300 ml-auto hover:bg-black hover:text-[#eee] duration-200">
            ⃪
          </div>
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
