import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Jii Eu | Blog</title>
        <meta content="Jii Eu | Front-End Developer" name="description" />
        <meta content="Jii Eu" property="og:title" />
        <meta
          content="Jii Eu | Front-End Developer"
          property="og:description"
        />
        <meta
          content="https://blog.jiieu.com/ogimage.jpg"
          property="og:image"
        />
        <meta content="website" property="og:type" />
        <meta content="https://blog.jiieu.com" property="og:url" />
        <meta
          name="keyword"
          content="blog, javascript, front-end, developer, engineer"
        />

        <meta content="Jii Eu" property="twitter:title" />
        <meta
          content="Jii Eu | Front-End Developer"
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
      <Component {...pageProps} />
    </>
  )
}

export default App
