import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Jiwon (Jii) Yoo</title>
        <meta content="Jiwon Yoo | Front-End Developer" name="description" />
        <meta content="Jiwon Yoo" property="og:title" />
        <meta
          content="Jiwon Yoo | Front-End Developer"
          property="og:description"
        />
        <meta
          content="https://blog.imjiwon.com/ogimage.jpg"
          property="og:image"
        />
        <meta content="website" property="og:type" />
        <meta content="https://blog.imjiwon.com" property="og:url" />
        <meta
          name="keyword"
          content="blog, javascript, front-end, developer, engineer"
        />

        <meta content="Jiwon Yoo" property="twitter:title" />
        <meta
          content="Jiwon Yoo | Front-End Developer"
          property="twitter:description"
        />
        <meta
          content="https://blog.imjiwon.com/ogimage.jpg"
          property="twitter:image"
        />
        <meta content="summary_large_image" property="twitter:card" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-64x64.png"
          sizes="64x64"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
