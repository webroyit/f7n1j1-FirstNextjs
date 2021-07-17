import {server} from '../config'

// For custom titles, meta tags, keywords, descriptions, ...
import Head from 'next/head'

import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  console.log(articles)
  return (
    <div>
      <Head>
        <title>WRI News</title>
        <meta name="keywords" content="Some news" />
      </Head>

      
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// getStaticProps fetch data at build time
// server side props fetch data on every request
// get static path to dynamically generate paths based on the data that is fetched
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }