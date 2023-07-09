import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="rolemadelen/minimalist-blog"
      repoId="R_kgDOJXRY1A"
      category="General"
      categoryId="DIC_kwDOJXRY1M4CWLQD"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
