import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import { useCallback, useRef } from "react";

interface Post {
  lang: string;
  slug: string;
  title: string;
  posttitle: string;
  date: string;
  updated: string;
  uid: string;
}

interface Posts {
  posts: Post[];
}

const Blog: React.FC<Posts> = ({ posts }) => {
  const year = useRef("");

  const displayYear = useCallback((d: any) => {
    let postYear = d.split("-")[0];

    if (year.current === postYear) return "";
    else {
      year.current = postYear;
      return (
        <>
          <div className="my-16 sm:my-10"></div>
          <div
            className="text-gray-400 sm:text-gray-200 absolute top-[-6rem] sm:left-[-6rem] sm:top-[-3rem] text-xl sm:text-3xl font-light tracking-widest sm:rotate-[-90deg] mt-[4rem]"
            key={postYear}
          >
            {postYear}
          </div>
        </>
      );
    }
  }, []);

  return (
    <>
      <Header />
      <div className="max-w-[36rem] m-auto mb-20 px-6">
        {posts.map((post, i) => (
          <div className="relative" key={i}>
            {displayYear(post.date.split(" ")[0])}
            <Link
              key={`blog-${post.slug}`}
              href={`/post/${post.slug}`}
              passHref
            >
              <div className="post-list items-center flex text-md mb-2">
                <div className="hidden sm:block flex-[0.15] text-gray-300">
                  {new Date(post.date)
                    .toLocaleDateString("en-us", {
                      month: "numeric",
                      day: "numeric",
                    })
                    .toString()}
                </div>
                <div className="whitespace-nowrap overflow-hidden overflow-ellipsis flex-1 w-full">
                  {post.title}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Footer pageFrom="blog" />
    </>
  );
};

export async function getStaticProps() {
  let posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
