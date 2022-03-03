/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */

import Link from 'next/link'
import SEO from '../../components/Seo/Seo'

import {
    fetchAPI,
} from "../../lib/api"
import React from 'react'
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import ActionSection from '../../components/actionSection/ActionSection';


const CourseSection = ({ course, homepage }) => {
    const imageUrl = course.attributes.image.data.attributes.url

    const testimonials_banner = homepage.attributes.hero.testimonials_banner.data.attributes.formats.large.url;

    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;

    return (
        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={course.attributes.title} />}

            <div
                id="banner"
                className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >


                <h2 className="banner-titles uk-text-bolder uk-text-center  uk-margin-remove uk-padding-remove"> {course.attributes.title} </h2>


            </div>


            <div className="uk-container uk-container-medium uk-padding-medium uk-animation-slide-bottom uk-background-muted" >
                <ul className="uk-breadcrumb uk-width-1-2@m uk-width-1-2@l banner-titles uk-text-bolder  uk-margin-remove uk-padding-small">
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

                {/*  PROGRESSION TIMELINES FOR EACH CATEGORY */}
                <h3 className='uk-padding uk-padding-remove-horizontal uk-text-center'> <strong> Courses Progression</strong> </h3>
                {course.attributes.courseCategory === 'Sail' ? <div className="progresion_wrapper uk-flex uk-flex-baseline uk-flex-center">

                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>


                        <Link href={'/courses/competent-crew'} passHref>
                            <p className={course.attributes.title === 'Competent Crew' ? 'progression_button progression_button_active' : 'progression_button'}> CC</p>
                        </Link>
                        <Link href={'/courses/competent-crew'} passHref>
                            <p className='uk-margin-top '> Competent Crew</p>
                        </Link>
                    </div>


                    <p className="arrow-right"></p>
                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>

                        <Link href={'/courses/day-skipper'} passHref>
                            <p className={course.attributes.title === 'Day Skipper' ? 'progression_button progression_button_active' : 'progression_button'}> DS</p>
                        </Link>
                        <Link href={'/courses/day-skipper'} passHref>
                            <p className='uk-margin-top' > Day Skipper</p>
                        </Link>
                    </div>
                    <span className="arrow-right"></span>
                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>

                        <Link href={'/courses/coastal-skipper'} passHref>
                            <p className={course.attributes.title === 'Coastal Skipper' ? 'progression_button progression_button_active' : 'progression_button'}> CS</p>
                        </Link>
                        <Link href={'/courses/coastal-skipper'} passHref>
                            <p className='uk-margin-top'> Coastal Skipper</p></Link>
                    </div>


                </div>

                    : null
                }
                {course.attributes.courseCategory === 'Motor' ? <div className="progresion_wrapper uk-flex uk-flex-baseline uk-flex-center">
                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer '>
                        <Link href={'/courses/helmsman-course'} passHref>

                            <p className={course.attributes.title === 'Helmsman Course ' ? 'progression_button progression_button_active' : 'progression_button'}> HC</p>
                        </Link>
                        <Link href={'/courses/helmsman-course'} passHref>
                            <p className='uk-margin-top'> Helmsman Course     </p>
                        </Link>
                    </div>
                    <span className="arrow-right"></span>

                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>
                        <Link href={'/courses/day-skipper-practical-motorcruising'} passHref>

                            <p className={course.attributes.title === 'Day Skipper Practical Motorcruising ' ? 'progression_button progression_button_active' : 'progression_button'}> DS</p>
                        </Link>
                        <Link href={'/courses/day-skipper-practical-motorcruising'} passHref>
                            <p className='uk-margin-top'> Day Skipper   </p>
                        </Link>
                    </div>
                    <span className="arrow-right"></span>
                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>
                        <Link href={'/courses/coastal-skipper-practical-motorcruising'} passHref >
                            <p className={course.attributes.title === 'Coastal Skipper Practical Motorcruising' ? 'progression_button progression_button_active' : 'progression_button'}> CS</p>
                        </Link>
                        <Link href={'/courses/coastal-skipper-practical-motorcruising'} passHref >
                            <p className='uk-margin-top'> Coastal Skipper  </p>
                        </Link>
                    </div>



                </div>

                    : null
                }
                {course.attributes.courseCategory === 'Power' ? <div className="progresion_wrapper uk-flex uk-flex-baseline uk-flex-center">


                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>
                        <Link href={'/courses/level-2-powerboat-handling-1'} passHref>
                            <p className={course.attributes.title === 'Level 2 Powerboat Handling' ? 'progression_button progression_button_active' : 'progression_button'}> LVL2</p>
                        </Link>
                        <Link href={'/courses/level-2-powerboat-handling-1'} passHref>
                            <p className='uk-margin-top'> Level 2 Powerboat Handling </p>
                        </Link>
                    </div>
                    <span className="arrow-right"></span>
                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>
                        <Link href={'/courses/tender-operator'} passHref>
                            <p className={course.attributes.title === 'Tender Operator' ? 'progression_button progression_button_active' : 'progression_button'}> TO</p>
                        </Link>
                        <Link href={'/courses/tender-operator'} passHref>
                            <p className='uk-margin-top'> Tender Operator </p>
                        </Link>
                    </div>
                    <span className="arrow-right"></span>
                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>

                        <Link href={'/courses/intermediate-powerboat-1'} passHref>
                            <p className={course.attributes.title === 'Intermediate Powerboat' ? 'progression_button progression_button_active' : 'progression_button'}> IP</p>
                        </Link>
                        <Link href={'/courses/intermediate-powerboat-1'} passHref>
                            <p className='uk-margin-top'> Intermediate Powerboat </p>
                        </Link>
                    </div>
                    <span className="arrow-right"></span>
                    <div className='uk-flex uk-flex-column uk-flex-center uk-flex-middle cursor-pointer'>

                        <Link href={'/courses/advanced-powerboat'} passHref>
                            <p className={course.attributes.title === 'Advanced Powerboat ' ? 'progression_button progression_button_active' : 'progression_button'}> ADV</p>
                        </Link>
                        <Link href={'/courses/advanced-powerboat'} passHref>
                            <p className='uk-margin-top'> Advanced Powerboat  </p>
                        </Link>
                    </div>



                </div>

                    : null
                }


                <div className="uk-section uk-flex uk-flex-wrap  uk-margin " >


                    <div className="uk-width-2-4 uk-width-1-2@m  uk-padding-small uk-padding-remove-vertical " >






                        <div className="uk-margin-large-top">

                            <ReactMarkdown linkTarget="_blank" remarkPlugins={[remarkGfm]}
                                children={course.attributes.content} />
                        </div>



                    </div>
                    <div className="uk-card uk-width-2-4  uk-width-1-2@m  uk-padding-medium ">
                        <div
                            className="  uk-background-contain  uk-height-large  "
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
            {course.attributes.testimonials.data.length > 0 &&
                <div className="uk-container ">


                    {testimonials_banner && <div className="uk-light uk-background-cover uk-background-blend-overlay  uk-background-secondary  uk-padding-large uk-padding-remove-horizontal" data-src={testimonials_banner}
                        data-srcset={testimonials_banner} data-uk-img>



                        <h2 className='uk-text-center uk-text-italic  uk-text-bold'>HAPPY CLIENTS ABOUT US</h2>
                        <div className="uk-position-relative uk-visible-toggle uk-dark" tabIndex="-1" uk-slider="sets: true; autoplay:true;autoplay-interval: 4000; ">

                            <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-1@m">

                                {course.attributes.testimonials.data.length > 0 && course.attributes.testimonials.data.map((item, i) =>
                                    <li key={i}>
                                        <div className="uk-section uk-text-center" >
                                            <article className="uk-comment">
                                                <header className="uk-comment-header">
                                                    <div className="uk-grid-medium uk-flex-middle " uk-grid>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" stroke="white" fill="white" viewBox="0 0 40 40"><path d="M19.092 6.863c-1.504 2.31-1.779 4.45-1.681 5.688 6.132-.101 5.696 6.449 1.39 6.449-1.83 0-3.801-1.338-3.801-4.275 0-2.724 1.412-5.845 4.092-7.862zm-13 0c-1.504 2.31-1.779 4.45-1.681 5.688 6.132-.101 5.696 6.449 1.39 6.449-1.83 0-3.801-1.338-3.801-4.275 0-2.724 1.412-5.845 4.092-7.862zm16.908-3.863c-6.108 1.206-10 6.584-10 11.725 0 3.97 2.786 6.275 5.801 6.275 2.615 0 5.199-1.797 5.199-4.979 0-2.601-1.905-4.757-4.396-5.149.217-2.004 2.165-4.911 4.38-5.746l-.984-2.126zm-13 0c-6.108 1.206-10 6.584-10 11.725 0 3.97 2.786 6.275 5.801 6.275 2.615 0 5.199-1.797 5.199-4.979 0-2.601-1.905-4.757-4.396-5.149.217-2.004 2.165-4.911 4.38-5.746l-.984-2.126z" /></svg>
                                                        <div className="uk-comment-body uk-padding-large ">

                                                            {item.attributes.description}
                                                        </div>
                                                    </div>
                                                </header>
                                                <div className="uk-width-expand">
                                                    <p className="uk-comment-title uk-margin-remove uk-text-bold"><a className="uk-link-reset" href="#"> {item.attributes.name}</a></p>
                                                    <div className=" uk-margin-remove"><a className="uk-link-reset" href="#"> From {item.attributes.country}</a></div>

                                                </div>
                                            </article>

                                        </div>
                                    </li>
                                )
                                }

                            </ul>
                            <a className="uk-position-bottom-left uk-position-small " href="#" uk-slidenav-previous uk-slider-item="previous">
                                <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#fff" strokeWidth="1.33" points="13 16 7 10 13 4"></polyline></svg>


                            </a>
                            <a className="uk-position-bottom-right uk-position-small " href="#" uk-slidenav-next uk-slider-item="next">
                                <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#ccc" strokeWidth="1.33" points="7 4 13 10 7 16"></polyline></svg>


                            </a>

                        </div>
                    </div>



                    }
                </div>}


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
