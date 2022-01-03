import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'


const News = ({ articles, homepage }) => {

    return (


        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" metaDescription="all courses" />}
            <h2>News  </h2>



        </>
    )
}

export default News;


export async function getStaticProps() {

    const articlesRes = await fetchAPI("/articles")

    const homepageRes = await fetchAPI("/homepage", {
        populate: {
            hero: "*",
            seo: { populate: "*" },
        },
    })

    return {
        props: {

            articles: articlesRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    }
}
