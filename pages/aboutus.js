/* eslint-disable react/no-children-prop */
import React from 'react'
import { fetchAPI } from '../lib/api'
import Member from '../components/Member/Member'
import SEO from '../components/Seo/Seo'
import ReactMarkdown from "react-markdown"


const courses = ({ team, homepage, about }) => {


    return (

        <>
            <div className="uk-container uk-container-large ">


                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}
                <h2>About us </h2>


                {about && <ReactMarkdown children={about.attributes.whatWeDo} />}


                {about && <h2>{about.attributes.rya.title}</h2>}

                {about && <ReactMarkdown children={about.attributes.rya.description} />}

                <h1>The Team</h1>
                <div className=" uk-flex  uk-flex-wrap">


                    {
                        team && team.map((person, index) =>

                            <div key={person.id} className='uk-flex uk-flex-center uk-flex-wrap'>


                                <Member data={person} />


                            </div>

                        )
                    }



                </div>
            </div>

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
