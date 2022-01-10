
import React from "react"
import Link from "next/link"
import Image from 'next/image'

const Hero = ({ courses, images }) => {

    console.log(images.sail.data.attributes.formats.small.url, 'SMALL URL');
    console.log(images.motor.data.attributes.url)

    return (
        <>

            <div
                id="banner"

                className="uk-height-expand uk-section uk-light uk-background-cover "
                data-src={courses[1].attributes.image.data.attributes.url}
                data-srcset={courses[1].attributes.image.data.attributes.url}
                data-sizes="(min-width: 650px) 650px, 100vw"
                data-uk-img
            >



                <div className="uk-container uk-container-large uk-flex uk-flex-wrap uk-flex-around">



                    <div className="uk-inline-clip ">
                        <Image src={images.sail.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " >
                            <h2 >Sail</h2>

                            <ul  >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Sail' &&

                                    <Link href={`/courses/${course.attributes.slug}`} >
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="uk-inline-clip">
                        <Image src={images.motor.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " >
                            <h2 >Motor</h2>

                            <ul >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Motor' &&

                                    <Link href={`/courses/${course.attributes.slug}`} >
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="uk-inline-clip">
                        <Image src={images.power.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  "  >
                            <h2 >Power</h2>

                            <ul  >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Power' &&

                                    <Link href={`/courses/${course.attributes.slug}`} >
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="uk-inline-clip">
                        <Image src={images.mile_building.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  "  >
                            <h2 >Mile Building</h2>

                            <ul  >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Mile_Building' &&

                                    <Link href={`/courses/${course.attributes.slug}`} >
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>


                    <div className="uk-inline-clip">
                        <Image src={images.jet_ski.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  "  >
                            <h2 >Jet Ski</h2>

                            <ul  >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Jet_Ski' &&

                                    <Link href={`/courses/${course.attributes.slug}`} >
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>






                </div>




            </div>


        </>
    )
}

export default Hero
