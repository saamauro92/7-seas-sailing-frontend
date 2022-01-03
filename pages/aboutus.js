import React from 'react'
import { fetchAPI } from '../lib/api'
import Member from '../components/Member/Member'
import SEO from '../components/Seo/Seo'
import Layout from '../components/_App/Layout'

const courses = ({ team, homepage }) => {

    return (


        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" metaDescription="all courses" />}
            <h2>About us </h2>

            {team.map((person, index) =>

                <div key={index} className='uk-flex uk-flex-center uk-flex-wrap'>


                    <Member data={person} />


                </div>

            )}


        </>
    )
}

export default courses


export async function getStaticProps() {

    const teamRes = await fetchAPI("/teams", { populate: "*" })

    const homepageRes = await fetchAPI("/homepage", {
        populate: {
            hero: "*",
            seo: { populate: "*" },
        },
    })

    return {
        props: {

            team: teamRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    }
}
