import Head from 'next/head';

const SEO = ({ data, metaTitle }) => {
    // console.log('seo called =>', data);
    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{metaTitle}  7 Seas Sailing</title>
            <meta name="description" content={data.metaDescription} />
            <meta property="og:site_name" content={data.metaTitle + ' 7 Seas Sailing'} />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={data.metaTitle + ' 7 Seas Sailing'} />
            <meta property="og:description" content={data.metaDescription} />
            {/* <meta property="og:image" content={data.shareImage.media.url} /> */}
            <meta property="og:locale" content="en_US" />
            {/* twitter */}
            <meta name="twitter:title" content={data.metaTitle} />
            <meta name="twitter:description" content={data.metaDescription} />
            {/* <meta name="twitter:image" content={data.shareImage.media.url} /> */}
            <meta name="twitter:card" content="summary_large_image" />
            {/*   <!-- UIkit CSS --> */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.9.4/dist/css/uikit.min.css" />




        </Head>
    );
}

export default SEO;