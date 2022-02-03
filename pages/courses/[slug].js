/* eslint-disable react/no-children-prop */

import Link from 'next/link'
import SEO from '../../components/Seo/Seo'

import {
    fetchAPI,
} from "../../lib/api"
import React from 'react'
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import ActionSection from '../../components/actionSection/ActionSection'

const CourseSection = ({ course, homepage }) => {
    const imageUrl = course.attributes.image.data.attributes.url


    return (
        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={course.attributes.title} />}

            <div
                id="banner"
                className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >


                <h2 className="banner-titles uk-text-bolder uk-text-center  uk-margin-remove uk-padding-remove"> {course.attributes.title} </h2>


            </div>


            <div className="uk-container uk-container-medium uk-padding-medium uk-animation-slide-bottom uk-background-muted" >
                <ul className="uk-breadcrumb uk-width-1-2@m uk-width-1-2@l banner-titles uk-heading-medium  uk-text-bolder  uk-margin-remove uk-padding-small">
                    <li>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link>
                    </li>
                    <li >


                        <Link href={"/courses"}>
                            <a href=""> Courses</a>
                        </Link>
                    </li>
                    <li>
                        <span>{course.attributes.courseCategory}</span></li>
                    <li > <span > {course.attributes.title}  </span></li>

                </ul>

                <div className="uk-section uk-flex uk-flex-wrap  uk-margin " >


                    <div className="uk-width-2-4 uk-width-1-2@m  uk-padding-small uk-padding-remove-vertical " >
                        {/*  PROGRESSION TIMELINES FOR EACH CATEGORY */}
                        <h3 className='uk-padding uk-padding-remove-horizontal'> <strong>RYA Courses Progression</strong> </h3>
                        {course.attributes.courseCategory === 'Sail' ? <div className="progresion_wrapper uk-flex uk-flex-baseline uk-flex-center">

                            <p className={course.attributes.title === 'Competent Crew' ? 'progression_button progression_button_active' : 'progression_button'}> CC</p>
                            <span className="arrow-right"></span>
                            <p className={course.attributes.title === 'Day Skipper' ? 'progression_button progression_button_active' : 'progression_button'}> DS</p>
                            <span className="arrow-right"></span>
                            <p className={course.attributes.title === 'Coastal Skipper' ? 'progression_button progression_button_active' : 'progression_button'}> CS</p>
                            <span className="arrow-right"></span>
                            <p className={course.attributes.title === 'Yachtmaster' ? 'progression_button progression_button_active' : 'progression_button'}> YM</p>

                        </div>

                            : null
                        }
                        {course.attributes.courseCategory === 'Motor' ? <div className="progresion_wrapper uk-flex uk-flex-baseline uk-flex-center">

                            <p className={course.attributes.title === 'Day Skipper Practical Motorcruising ' ? 'progression_button progression_button_active' : 'progression_button'}> DS</p>
                            <span className="arrow-right"></span>
                            <p className={course.attributes.title === 'Coastal Skipper Practical Motorcruising' ? 'progression_button progression_button_active' : 'progression_button'}> CS</p>
                            <span className="arrow-right"></span>
                            <p className={course.attributes.title === 'Yachtmaster' ? 'progression_button progression_button_active' : 'progression_button'}> YM</p>


                        </div>

                            : null
                        }
                        {course.attributes.courseCategory === 'Power' ? <div className="progresion_wrapper uk-flex uk-flex-baseline uk-flex-center">

                            <p className={course.attributes.title === 'PB Lvl. 2 Handling' ? 'progression_button progression_button_active' : 'progression_button'}> LVL2</p>
                            <span className="arrow-right"></span>
                            <p className={course.attributes.title === 'Tender Operator' ? 'progression_button progression_button_active' : 'progression_button'}> TO</p>
                            <span className="arrow-right"></span>
                            <p className={course.attributes.title === 'Advanced Powerboat (CoC)' ? 'progression_button progression_button_active' : 'progression_button'}> ADV</p>
                            <span className="arrow-right"></span>
                            <p className={course.attributes.title === 'Yachtmaster' ? 'progression_button progression_button_active' : 'progression_button'}> YMM</p>


                        </div>

                            : null
                        }





                        <div className="uk-margin-large-top">

                            <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}
                                children={course.attributes.content} />
                        </div>



                    </div>
                    <div className="uk-card uk-width-2-4  uk-width-1-2@m  uk-padding-medium ">
                        <div
                            className="  uk-background-cover uk-height-large  "
                            data-src={imageUrl}
                            data-srcset={imageUrl}
                            data-uk-img
                            uk-parallax="bgy: -100"
                        ></div>



                        <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}
                            children={course.attributes.more_content} />


                        <ActionSection>Contact us</ActionSection>

                    </div>





                </div>






            </div>





        </>
    )
}

export async function getStaticPaths() {
    const coursesRes = await fetchAPI("/courses", { fields: ["slug"] })

    return {
        paths: coursesRes.data.map((course) => ({
            params: {
                slug: course.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const coursesRes = await fetchAPI("/courses", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })

    return {
        props: {
            course: coursesRes.data[0],

        },
        revalidate: 1,
    }
}

export default CourseSection
