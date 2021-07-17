import {server} from '../../../config'
import Link from 'next/link'
import {useRouter} from 'next/router'

const article = ({ article }) => {
    // Get the parameters from URL or route
    //const router = useRouter()
    //const {id} = router.query

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

export const getStaticProps = async context => {
    const res = await fetch(`
        ${server}/api/articles/${context.params.id}
    `)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    // Get all articles
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()

    // Get all article ID
    const ids = articles.map(article => article.id)

    // Format the article ids as array of objects
    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return {
        paths,      // ex => {params: {id: '1', id: '2'}}
        fallback: false     // return 404 page if the data does not exist
    }
}

// 'context' contain parameters from route
// When using getStaticProps that uses parameters from route, you need to call getStaticPaths to generate paths
// export const getStaticProps = async context => {
//     const res = await fetch(`
//         https://jsonplaceholder.typicode.com/posts/${context.params.id}
//     `)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     // Get all articles
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()

//     // Get all article ID
//     const ids = articles.map(article => article.id)

//     // Format the article ids as array of objects
//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return {
//         paths,      // ex => {params: {id: '1', id: '2'}}
//         fallback: false     // return 404 page if the data does not exist
//     }
// }

export default article
