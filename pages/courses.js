/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Card from '../components/Card/Card'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'

const courses = ({ courses, homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (

        <div className='' >

            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small  uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
                style={{ "zIndex": "9" }}
            >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Courses" />}

                <h3 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove " uk-toggle="cls: uk-heading-small;  mode: media; media: @s"  >Our Courses</h3>

            </div>

            <div className='uk-container uk-container-medium  uk-padding-medium uk-animation-slide-bottom uk-background-muted  '>

                <ul className="uk-breadcrumb  uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
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
                    <button className="uk-button uk-button-primary" type="button">  Jet Ski</button>
                    <button className="uk-button uk-button-primary" type="button"> Yachtmaster Exam Preparation</button>
                </div>

                <ul className="uk-switcher uk-margin ">
                    <li>

                        <div className=" uk-padding-small ">


                            <h4 className=' uk-padding   uk-text-bold uk-heading-line ' id="sailing" ><span> Sailing Courses </span>  </h4>
                            <div uk-toggle="cls: uk-flex; mode: media; media: @m ">

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
                            <div uk-toggle="cls: uk-flex; mode: media; media: @m ">

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
                            <div uk-toggle="cls: uk-flex; mode: media; media: @m ">

                                {courses && courses.length > 1 && courses.map((course) =>
                                    course.attributes.courseCategory === 'Power' ?

                                        < Card data={course} slug="courses" />

                                        : null


                                )}
                            </div>

                        </div>

                    </li>

                    <li>
                        <div className=" uk-padding-small ">

                            <h4 className=' uk-padding   uk-text-bold uk-heading-line ' id="jet_ski"><span> Jet Ski Courses </span>  </h4>

                            <div uk-toggle="cls: uk-flex; mode: media; media: @m ">
                                {courses && courses.length > 1 && courses.map((course) =>

                                    course.attributes.courseCategory === 'Jet_Ski' ?

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

                                    <div className="uk-position-cover uk-overlay uk-overlay-primary uk-hidden-hover cursor-pointer uk-flex uk-flex-center uk-flex-middle" >

                                        <Link href='/courses/yachtmaster' passHref>
                                            <a href="" className="uk-icon" >
                                                <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="17" cy="10" r="2"></circle></svg>

                                            </a>
                                        </Link>



                                    </div>

                                </div>
                                <p className="uk-text-start">

                                    <strong>Yachtmaster Exam Preparation </strong>
                                </p>
                            </div>
                        </div>


                    </li>


                </ul>







            </div>
        </div>
    )
}

export default courses


