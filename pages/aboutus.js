/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import React from 'react'
import { fetchAPI } from '../lib/api'
import Member from '../components/Member/Member'
import SEO from '../components/Seo/Seo'
import ReactMarkdown from "react-markdown"
import Link from 'next/link'


const AboutUsPage = ({ team, about, homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;

    console.log(about, 'about');


    return (

        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="About us" />}
                <h2 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove" uk-toggle="cls: uk-heading-small;  mode: media; media: @s" > About us   </h2>


            </div>
            <div className="uk-container uk-container-medium uk-padding-medium uk-animation-slide-bottom uk-background-muted  ">
                <ul className="uk-breadcrumb  uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > About </span></li>

                </ul>

            </div>

            <div className="uk-container uk-container-medium uk-padding@m   uk-animation-slide-bottom  uk-background-muted ">

                <div className=" uk-background-cover uk-height-large uk-width-1-1@m about-banner-two  "
                    data-src={about.attributes.banner_two.data.attributes.url}
                    data-srcset={about.attributes.banner_two.data.attributes.url}
                    data-uk-img
                /*      uk-toggle="cls: uk-height-medium; mode: media; media: @l" */

                >

                    <div className="uk-section  uk-padding">

                        <div className="uk-container-small  uk-width-1-2@m uk-light  ">

                            <ReactMarkdown children={about.attributes.whatWeDo} />
                        </div>




                    </div>







                </div>
            </div>

            <div className="uk-container uk-container-medium  uk-animation-slide-bottom  uk-background-muted ">

                <div className="uk-section uk-flex uk-flex-wrap">
                    <div className="uk-width-1-2@m uk-flex uk-flex-middle uk-flex-center " uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                        <h2> <strong>WE ARE RECOGNIZED </strong> </h2>
                    </div>

                    <div className="uk-width-1-2@m uk-flex uk-flex-middle uk-flex-center " uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                        <img src={about.attributes.rya_image.data.attributes.url} alt="" width={250} />
                    </div>

                </div>





                <div className="uk-section uk-flex uk-flex-wrap ">
                    <div className="uk-width-1-2@m uk-flex uk-flex-middle uk-flex-center  " >

                        <h2 uk-scrollspy="cls: uk-animation-slide-left; repeat: false"> <strong>ABOUT THE R<span className='rya-letter'>Y</span>A</strong> </h2>
                    </div>

                    <div className="uk-width-1-2@m " uk-scrollspy="cls: uk-animation-slide-right; repeat: false">

                        {about && <ReactMarkdown  >

                            {about.attributes.rya.description}
                        </ReactMarkdown>



                        }
                        <Link href={"/rya"} passHref>
                            <button className='uk-button uk-button-default uk-margin-large'> READ MORE</button>
                        </Link>
                    </div>



                </div>


            </div>


            <div className="uk-container uk-container-expand uk-padding-remove uk-animation-slide-bottom uk-background-muted  ">


                <div className=" uk-background-cover  uk-width-1-1@m"
                    data-src={about.attributes.sailing_image.data.attributes.url}
                    data-srcset={about.attributes.sailing_image.data.attributes.url}
                    data-uk-img
                >

                    <div className="uk-section uk-flex uk-light uk-flex-wrap">
                        <div className="uk-width-1-2@m uk-flex  uk-flex-middle">

                        </div>

                        <div className="uk-width-1-4@m  uk-padding-small ">
                            <h2>Sailing Area </h2>
                            {about && <ReactMarkdown  >

                                {about.attributes.sailing.description}
                            </ReactMarkdown>



                            }



                        </div>


                    </div>

                </div>

            </div>




            <div className="uk-container uk-container-expand  uk-margin-large  uk-background-muted uk-padding-remove">
                <div
                    data-src={about.attributes.team_image.data.attributes.formats.medium.url}
                    data-srcset={about.attributes.team_image.data.attributes.formats.medium.url}
                    data-uk-img
                    style={{ zIndex: '0' }}
                    className="uk-background-imagen uk-background-cover uk-width-1-3@m  uk-align-right@m about-team-image uk-visible@s"

                >
                </div>

                <div className="uk-padding-large uk-margin-large">
                    <h1 className='uk-text-left'>Meet Our Team</h1>



                    <div className="uk-container uk-container-large uk-slider-container-offset  uk-background-muted uk-padding-large " uk-slider="finite: true" uk-slideshow uk-scrollspy="cls: uk-animation-slide-right; repeat: false">




                        <div className="uk-position-relative uk-visible-toggle uk-light " tabIndex="-1" style={{ zIndex: '2' }}>
                            <ul className="uk-slider-items uk-child-width-1-3@s uk-grid">
                                {
                                    team && team.map((person) =>

                                        person.attributes.category === 'Team' ?


                                            <Member data={person} />


                                            : null

                                    )
                                }

                            </ul>
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-light" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-dark" href="#" uk-slidenav-next uk-slider-item="next"></a>
                        </div>
                        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>


                    </div>

                </div>


            </div>




            <div className="uk-container uk-container-expand  uk-background-muted uk-padding-large   ">

                <div className="uk-container uk-container-expand uk-flex uk-flex-center ">

                    <div
                        data-src={about.attributes.club_image.data.attributes.formats.medium.url}
                        data-srcset={about.attributes.club_image.data.attributes.formats.medium.url}
                        data-uk-img
                        style={{ zIndex: '0' }}
                        className="uk-background-imgen uk-background-cover uk-width-1-3@m  uk-align-left@m about-club-image uk-visible@s"

                    >
                    </div>


                    <div className="uk-container uk-container-large uk-slider-container-offset uk-padding  " uk-slider="finite: true" uk-slideshow uk-scrollspy="cls: uk-animation-slide-left; repeat: false" >
                        <h1 className='uk-text-center'>The 7 Seas Club</h1>

                        <ReactMarkdown className=' uk-padding-large'>

                            {about.attributes.club.description}
                        </ReactMarkdown>

                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" style={{ zIndex: '2' }}>
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


        </ >
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
