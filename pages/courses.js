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

            <div className='uk-container uk-container-medium  uk-padding uk-animation-slide-bottom uk-background-muted  '>

                <ul className="uk-breadcrumb  uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Courses</span></li>

                </ul>


                <div uk-switcher="animation: uk-animation-fade; toggle: > *" className='uk-text-center uk-margin '>
                    <button className="uk-button uk-button-primary" type="button">RYA Sailing</button>
                    <button className="uk-button uk-button-primary" type="button">RYA Motor Cruising</button>
                    <button className="uk-button uk-button-primary" type="button"> RYA Power</button>
                    <button className="uk-button uk-button-primary" type="button"> RYA Jet Ski</button>
                    <button className="uk-button uk-button-primary" type="button"> Yachtmaster Exam Preparation</button>
                </div>

                <ul className="uk-switcher uk-margin">
                    <li>

                        <div className=" uk-padding-small ">

                            <h4 className='  uk-padding' id="sailing">RYA Sailing Courses</h4>

                            <div uk-toggle="cls: uk-flex; mode: media; media: @m ">

                                {courses && courses.length > 1 && courses.map((course) =>
                                    course.attributes.courseCategory === 'Sail' ?
                                        < Card data={course} slug="courses" />


                                        : null


                                )}
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className=" uk-padding-small ">
                            <h4 className=' uk-padding' id="motor_courses">RYA Motor Cruising Courses</h4>

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
                            <h4 className=' uk-padding' id="power_courses">RYA Power Courses </h4>
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
                            <h4 className='uk-padding' id="jet_ski">RYA Jet Ski Courses</h4>

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


                            <h4 className='uk-padding' id="jet_ski">Yachtmaster Exam Preparation</h4>
                            <div uk-toggle="cls: uk-flex; mode: media; media: @m ">
                                <div className="uk-card " >
                                    <div className="uk-card-media-top uk-padding">


                                        <img src={imgBanner} width="250" height="250" alt="course_card" uk-img />
                                        {/* CHANGE IMAGE  */}
                                    </div>

                                    <div className="uk-card-header ">
                                        <p className=" uk-text-center"> Yachtmaster Exam Preparation </p>
                                    </div>
                                    <div className="uk-card-fotter uk-text-center">
                                        <Link href="/courses/yachtmaster" passHref>
                                            <button className="uk-button uk-button-danger ">SEE MORE</button>
                                        </Link>

                                    </div>


                                    <hr />

                                </div>
                            </div>
                        </div>


                    </li>


                </ul>







            </div>
        </div>
    )
}

export default courses


