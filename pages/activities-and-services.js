import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'

const ActivitiesAndServices = ({ homepage }) => {

    return (


        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Activities and Services" />}
            <h2>Activities {"&"} Services</h2>




        </>
    )
}

export default ActivitiesAndServices


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
