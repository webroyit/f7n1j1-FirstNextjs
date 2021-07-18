// For custom titles, meta tags, keywords, descriptions, ...
import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WRI News',
    keywords: 'Something',
    description: "Something random in the world"
}

export default Meta
