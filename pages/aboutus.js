import React from 'react'
import { fetchAPI } from '../lib/api'
import Member from '../components/Member/Member'
import SEO from '../components/Seo/Seo'
import Layout from '../components/_App/Layout'
import ReactMarkdown from "react-markdown"


const courses = ({ team, homepage, about }) => {


    return (



        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" metaDescription="all courses" />}
            <h2>About us </h2>


            <ReactMarkdown children={about.attributes.whatWeDo} />


            <h2>{about.attributes.rya.title}</h2>

            <ReactMarkdown children={about.attributes.rya.description} />

            <h1>The Team</h1>

            {
                team.map((person, index) =>

                    <div key={index} className='uk-flex uk-flex-center uk-flex-wrap'>


                        <Member data={person} />


                    </div>

                )
            }


        </>
    )
}

export default courses


export async function getStaticProps() {

    const teamRes = await fetchAPI("/teams", { populate: "*" });

    const aboutRes = await fetchAPI("/about-section", { populate: "*" });

    const homepageRes = await fetchAPI("/homepage", {
        populate: {
            hero: "*",
            seo: { populate: "*" },
        },
    })

    return {
        props: {

            team: teamRes.data,
            about: aboutRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    }
}
