/* eslint-disable react/no-children-prop */
import React from 'react'
import { fetchAPI } from '../lib/api'
import Member from '../components/Member/Member'
import SEO from '../components/Seo/Seo'
import ReactMarkdown from "react-markdown"
import Link from 'next/link'


const courses = ({ team, about, homepage }) => {
    const imgBanner = homepage.attributes.hero.background.data.attributes.url;

    return (

        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
            >
                <p className="banner-titles uk-heading-medium uk-text-bolder uk-text-center "> About us </p>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > About </span></li>

                </ul>


            </div>
            <div className="uk-container uk-container-large uk-padding ">


                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}




                {about &&

                    <ReactMarkdown children={about.attributes.whatWeDo} />
                }


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


    return {
        props: {

            team: teamRes.data,
            about: aboutRes.data,

        },
        revalidate: 1,
    }
}
