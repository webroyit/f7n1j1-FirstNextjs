// For custom titles, meta tags, keywords, descriptions, ...
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WRI News</title>
        <meta name="keywords" content="Some news" />
      </Head>
      <h1>Welcome</h1>
    </div>
  )
}
