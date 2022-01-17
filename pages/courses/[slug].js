/* eslint-disable react/no-children-prop */

import Link from 'next/link'
import SEO from '../../components/Seo/Seo'

import {
    fetchAPI,
} from "../../lib/api"
import React from 'react'
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

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



            <div className="uk-container uk-container-medium uk-padding-small uk-animation-slide-bottom uk-background-muted">



                <p className='uk-text-bolder'>
                    {course.attributes.title}

                </p>

                <div
                    id="banner"
                    className=" uk-width-1-2 uk-background-contain uk-height-large  "
                    data-src={imageUrl}
                    data-srcset={imageUrl}
                    data-uk-img
                    uk-parallax="bgy: -100"
                ></div>
                <div className="uk-section uk-flex uk-flex-between uk-flex-wrap  " >

                    <div className="uk-width-1-1 uk-width-1-2@m  uk-padding-small uk-padding-remove-vertical " >

                        <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}
                            children={course.attributes.content} />


                    </div>

                    <div className="uk-width-1-1 uk-width-1-2@m  uk-padding-small ">

                        <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}
                            children={course.attributes.more_content} />


                    </div>

                </div>


                <hr />


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
