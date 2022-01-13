
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'

import {
    fetchAPI,
} from "../../lib/api"
import React from 'react'


const Article = ({ course, homepage }) => {
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



                <h2
                    className="banner-titles  uk-text-bolder  uk-margin-remove uk-padding-remove "
                    uk-toggle="cls: uk-heading-small;  mode: media; media: @s"
                >  {course.attributes.title}   </h2>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder  uk-margin-remove uk-padding-small">
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
            </div>

            <div className="uk-section uk-background-muted uk-flex uk-padding uk-animation-slide-bottom uk-flex-wrap " >

                <div className="uk-container uk-container-xsmall   ">
                    <div > {course.attributes.description}</div>


                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>  For whom is that course?</h4>
                        <div > {course.attributes.forWho}</div>
                    </div>



                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>  Theory Background</h4>
                        <div > {course.attributes.background}</div>
                    </div>

                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>  Practical Experience</h4>
                        <div > {course.attributes.experience}</div>
                    </div>


                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>   Minimum Age</h4>
                        <div > {course.attributes.age}</div>
                    </div>




                </div>

                <div className="uk-container">

                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>  Course Content</h4>
                        <div >
                            {course.attributes.content}

                        </div>

                    </div>
                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>  Duration</h4>
                        <div > {course.attributes.duration}</div>
                    </div>

                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>  Examination</h4>
                        <div > {course.attributes.examination}</div>
                    </div>
                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>  Certificate</h4>
                        <div > {course.attributes.certificate}</div>
                    </div>
                    <div className="uk-container uk-container-xsmall  uk-padding ">
                        <h4 className='uk-text-lead  uk-text-bold uk-text-uppercase'>  Ability after the course</h4>
                        <div > {course.attributes.abilityAfter}</div>
                    </div>

                </div>

            </div >





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

export default Article
