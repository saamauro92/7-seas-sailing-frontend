import Head from 'next/head';

const SEO = ({ data, metaTitle }) => {

    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{metaTitle}  Seven Seas School of Yachting School</title>
            <meta name="description" content={data.metaDescription} />
            <meta property="og:site_name" content={data.metaTitle + ' Seven Seas School of Yachting School'} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={data.metaTitle + ' Seven Seas School of Yachting School'} />
            <meta property="og:description" content={data.metaDescription} />
            <meta property="og:locale" content="en_US" />
            <meta name="twitter:title" content={data.metaTitle} />
            <meta name="twitter:description" content={data.metaDescription} />
            <meta name="twitter:card" content="summary_large_image" />

        </Head>
    );
}

export default SEO;