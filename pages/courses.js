import React from 'react'
import Card from '../components/Card/Card'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'

const courses = ({ courses, homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (

        <div className='uk-background-muted' >
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small  uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Courses" />}


                <h3 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove " uk-toggle="cls: uk-heading-small;  mode: media; media: @s"  >Our Courses</h3>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Courses</span></li>

                </ul>


            </div>
            <div className='uk-container uk-container-large uk-padding uk-animation-slide-bottom'>

                <h4 className='uk-background-primary  uk-padding' >RYA Sailing Courses</h4>
                <div className="uk-flex uk-flex-around uk-flex-wrap">

                    {courses && courses.length > 1 && courses.map((course) =>
                        course.attributes.courseCategory === 'Sail' ?
                            < Card data={course} slug="courses" />


                            : null


                    )}
                </div>

                <h4 className='uk-background-primary uk-padding'>RYA Motor Cruising Courses</h4>
                <div className="uk-flex uk-flex-around uk-flex-wrap">
                    {courses && courses.length > 1 && courses.map((course) =>
                        course.attributes.courseCategory === 'Motor' ?

                            < Card data={course} slug="courses" />

                            : null


                    )}
                </div>

                <h4 className='uk-background-primary uk-padding'>RYA POWER COURSES</h4>
                <div className="uk-flex uk-flex-around uk-flex-wrap">

                    {courses && courses.length > 1 && courses.map((course) =>
                        course.attributes.courseCategory === 'Power' ?

                            < Card data={course} slug="courses" />

                            : null


                    )}

                </div>

                <h4 className='uk-background-primary uk-padding'>RYA Mile builduing courses</h4>
                <div className="uk-flex uk-flex-around uk-flex-wrap">

                    {courses && courses.length > 1 && courses.map((course) =>
                        course.attributes.courseCategory === 'Mile_Building' ?

                            < Card data={course} slug="courses" />

                            : null


                    )}
                </div>

                <h4 className='uk-background-primary uk-padding'>RYA Jet Ski Courses</h4>
                <div className="uk-flex uk-flex-around uk-flex-wrap">

                    {courses && courses.length > 1 && courses.map((course) =>

                        course.attributes.courseCategory === 'Jet_Ski' ?

                            < Card data={course} slug="courses" />

                            : null


                    )}
                </div>
            </div>
        </div>
    )
}

export default courses


