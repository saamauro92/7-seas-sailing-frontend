import React from 'react'
import { fetchAPI } from '../lib/api'
import Card from '../components/Card/Card'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'

const courses = ({ courses, homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (

        <div className='uk-background-muted'>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
            >
                <p className="banner-titles uk-heading-medium uk-text-bolder ">Our Courses</p>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Courses</span></li>

                </ul>


            </div>
            <div className='uk-container uk-container-large uk-padding '>

                <h2 className='uk-background-primary uk-padding'>RYA SAIL COURSES</h2>
                <div className="uk-flex uk-flex-around uk-flex-wrap">


                    {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}


                    {courses && courses.length > 1 && courses.map((course) =>

                        course.attributes.courseCategory === 'Sail' ?


                            < Card data={course} />


                            : null


                    )}
                </div>

                <h2 className='uk-background-primary uk-padding'>RYA MOTOR COURSES</h2>
                <div className="uk-flex uk-flex-around uk-flex-wrap">
                    {courses && courses.length > 1 && courses.map((course) =>

                        course.attributes.courseCategory === 'Motor' ?



                            < Card data={course} />

                            : null


                    )}
                </div>

                <h2 className='uk-background-primary uk-padding'>RYA POWER COURSES</h2>
                <div className="uk-flex uk-flex-around uk-flex-wrap">

                    {courses && courses.length > 1 && courses.map((course) =>

                        course.attributes.courseCategory === 'Power' ?



                            < Card data={course} />

                            : null


                    )}

                </div>

                <h2 className='uk-background-primary uk-padding'>RYA MILE BUILDING COURSES</h2>
                <div className="uk-flex uk-flex-around uk-flex-wrap">

                    {courses && courses.length > 1 && courses.map((course) =>

                        course.attributes.courseCategory === 'Mile_Building' ?



                            < Card data={course} />

                            : null


                    )}
                </div>

                <h2 className='uk-background-primary uk-padding'>RYA JET SKI COURSES</h2>
                <div className="uk-flex uk-flex-around uk-flex-wrap">

                    {courses && courses.length > 1 && courses.map((course) =>

                        course.attributes.courseCategory === 'Jet_Ski' ?



                            < Card data={course} />

                            : null


                    )}
                </div>
            </div>
        </div>
    )
}

export default courses


