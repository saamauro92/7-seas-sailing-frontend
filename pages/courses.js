/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Card from '../components/Card/Card'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'
import Nav from '../components/_App/Nav';
import { fetchAPI } from '../lib/api';

const courses = ({ courses, homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;

    return (
        <>



            <div className='' >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Courses -" />}
                {imgBanner && <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small  uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                    data-src={imgBanner}
                    data-srcset={imgBanner}
                    data-uk-img
                    uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                    uk-parallax="bgy: -100"
                    style={{ "zIndex": "9" }}
                >


                    <h3 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove " uk-toggle="cls: uk-heading-small;  mode: media; media: @s"  >Our Courses</h3>

                </div>}

                <div className='uk-container uk-container-medium  uk-padding-medium uk-animation-slide-bottom uk-background-muted  '>

                    <ul className="uk-breadcrumb  uk-width-1-4@m uk-width-1-4@l banner-titles  uk-text-bolder uk-margin-remove uk-padding-small">
                        <li >

                            <Link href={"/"}>
                                <a href=""> Home</a>
                            </Link>
                        </li>
                        <li > <span > Courses</span></li>

                    </ul>


                    <div uk-switcher="animation: uk-animation-fade; toggle: > *" className='uk-text-center uk-margin '>
                        <button className="uk-button uk-button-primary" type="button"> Sailing</button>
                        <button className="uk-button uk-button-primary " type="button" id='motor_'> Motor Cruising</button>
                        <button className="uk-button uk-button-primary" type="button">  Power</button>
                        <button className="uk-button uk-button-primary" type="button">  Yachtmaster Training Scheme </button>

                        <button className="uk-button uk-button-primary" type="button">  Online Courses</button>


                    </div>

                    <ul className="uk-switcher uk-margin ">
                        <li>

                            <div className=" uk-padding-small ">


                                <h4 className=' uk-padding   uk-text-bold uk-heading-line ' id="sailing" ><span> Sailing Courses </span>  </h4>
                                <div className="uk-flex uk-flex-wrap" uk-toggle="cls: uk-flex; mode: media; media: @m ">

                                    {courses && courses.length > 1 && courses.map((course) =>
                                        course.attributes.courseCategory === 'Sail' ?
                                            < Card data={course} slug="courses" />


                                            : null


                                    )}
                                </div>
                            </div>

                        </li>
                        <li >
                            <div className=" uk-padding-small ">

                                <h4 className=' uk-padding   uk-text-bold uk-heading-line ' id="motor_courses" ><span> Motor Cruising Courses </span>  </h4>
                                <div className="uk-flex uk-flex-wrap" uk-toggle="cls: uk-flex; mode: media; media: @m ">

                                    {courses && courses.length > 1 && courses.map((course) =>
                                        course.attributes.courseCategory === 'Motor' ?

                                            < Card data={course} slug="courses" />

                                            : null


                                    )}
                                </div>
                            </div>

                        </li>
                        <li>
                            <div className=" uk-padding-small ">

                                <h4 className=' uk-padding   uk-text-bold uk-heading-line ' id="power_courses"><span>   Power Courses </span>  </h4>
                                <div className="uk-flex uk-flex-wrap" uk-toggle="cls: uk-flex; mode: media; media: @m ">

                                    {courses && courses.length > 1 && courses.map((course) =>
                                        course.attributes.courseCategory === 'Power' ?

                                            < Card data={course} slug="courses" />

                                            : null


                                    )}
                                </div>

                            </div>

                        </li>


                        <li>
                            <div className="uk-padding-small">


                                <div className="uk-flex uk-flex-column uk-padding">

                                    <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">


                                        {imgBanner &&
                                            <div
                                                data-src={imgBanner}
                                                data-srcset={imgBanner}
                                                data-uk-img

                                                className="uk-background-image uk-background-cover  uk-height-medium uk-width-auto uk-flex uk-flex-center uk-flex-middle uk"
                                            >
                                            </div>

                                        }

                                        <div className="uk-position-cover card-overlay uk-overlay  uk-hidden-hover cursor-pointer uk-flex uk-flex-center uk-flex-middle" >

                                            <Link href='/courses/yachtmaster' passHref>
                                                <a href="" className="uk-icon uk-position-top-left uk-padding-small" >
                                                    <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="17" cy="10" r="2"></circle></svg>

                                                </a>
                                            </Link>



                                        </div>

                                    </div>
                                    <p className="uk-text-start">

                                        <strong> Yachtmaster Training Scheme  </strong>
                                    </p>
                                </div>
                            </div>


                        </li>

                        <li>
                            <div className=" uk-padding-small ">

                                <h4 className=' uk-padding   uk-text-bold uk-heading-line ' id="power_courses"><span>   Online Courses </span>  </h4>
                                <div className="uk-flex uk-flex-wrap uk-flex-center" uk-toggle="cls: uk-flex; mode: media; media: @m ">

                                    {courses && courses.length > 1 && courses.map((course) =>
                                        course.attributes.courseCategory === 'Online' ?

                                            < Card data={course} slug="courses" />

                                            : null


                                    )}

                                </div>

                            </div>

                        </li>


                    </ul>







                </div>
            </div>
        </>
    )
}

export default courses




export async function getStaticProps() {



    const [coursesRes, homepageRes, latestNews] = await Promise.all([
        fetchAPI("/courses", { populate: "*" }),
        fetchAPI("/homepage", {
            populate: {
                hero: { populate: "*" },
                seo: { populate: "*" },
            },
        }),

    ])

    return {
        props: {
            courses: coursesRes?.data,
            homepage: homepageRes?.data,

        },
        revalidate: 1,
    }

}