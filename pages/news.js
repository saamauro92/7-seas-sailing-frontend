import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'


const News = ({ homepage }) => {

    return (


        <>          <div className="uk-container uk-container-large ">
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}
            <h2>News  </h2>
        </div>


        </>
    )
}

export default News;


export async function getStaticProps() {



    const homepageRes = await fetchAPI("/homepage", {
        populate: {
            hero: "*",
            seo: { populate: "*" },
        },
    })

    return {
        props: {

            homepage: homepageRes.data,
        },
        revalidate: 1,
    }
}
