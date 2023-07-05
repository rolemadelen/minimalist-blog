import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Jii Eu | Blog</title>
        <meta content="Jii Eu | Front-End Engineer" name="description" />
        <meta content="Jii Eu" property="og:title" />
        <meta content="Jii Eu | Front-End Engineer" property="og:description" />
        <meta
          content="https://blog.jiieu.com/ogimage.jpg"
          property="og:image"
        />
        <meta content="website" property="og:type" />
        <meta content="https://blog.jiieu.com" property="og:url" />
        <meta
          name="keyword"
          content="blog, javascript, frontend, developer, next"
        />

        <meta content="Jii Eu" property="twitter:title" />
        <meta
          content="Jii Eu | Front-End Engineer"
          property="twitter:description"
        />
        <meta
          content="https://blog.jiieu.com/ogimage.jpg"
          property="twitter:image"
        />
        <meta content="summary_large_image" property="twitter:card" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
