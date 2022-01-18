/* eslint-disable react/no-children-prop */
import React from 'react'
import { fetchAPI } from '../lib/api'
import Member from '../components/Member/Member'
import SEO from '../components/Seo/Seo'
import ReactMarkdown from "react-markdown"
import Link from 'next/link'


const AboutUsPage = ({ team, about, homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;

    return (

        <div className='uk-background-muted '>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}
                <h2 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove" uk-toggle="cls: uk-heading-small;  mode: media; media: @s" > About us   </h2>


            </div>
            <div className="uk-container uk-container-large uk-padding uk-animation-slide-bottom ">
                <ul className="uk-breadcrumb  uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > About </span></li>

                </ul>
                {about &&

                    <ReactMarkdown children={about.attributes.whatWeDo} />
                }

                {about && <h2>{about.attributes.rya.title}</h2>}

                {about && <ReactMarkdown children={about.attributes.rya.description} />}

            </div>

            <div className="uk-container uk-container-large   ">



                <div className="uk-container uk-container-large uk-flex uk-flex-center uk-padding-large">
                    <div className="uk-container uk-container-small uk-slider-container-offset  uk-background-muted" uk-slider="finite: true" uk-slideshow uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                        <h1 className='uk-text-center'>Meet Our Team</h1>

                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
                            <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
                                {
                                    team && team.map((person) =>

                                        person.attributes.category === 'Team' ?


                                            <Member data={person} />


                                            : null

                                    )
                                }

                            </ul>
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
                        </div>
                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>

                </div>

                <div className="uk-container uk-container-large uk-flex uk-flex-center ">



                    <div className="uk-container uk-container-small uk-slider-container-offset uk-padding uk-background-muted " uk-slider="finite: true" uk-slideshow uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                        <h1 className='uk-text-center'>Meet Our Club</h1>

                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" >
                            <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
                                {
                                    team && team.map((person) =>

                                        person.attributes.category === 'Club' ?




                                            <Member data={person} />



                                            : null

                                    )
                                }

                            </ul>
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>


                        </div>
                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>


                </div>
            </div>


        </div>
    )
}

export default AboutUsPage


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
