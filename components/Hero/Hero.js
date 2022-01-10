
import React from "react"
import Link from "next/link"
import Image from 'next/image'

const Hero = ({ courses, images }) => {

    console.log(images, 'SMALL URL');

    return (
        <>

            <div
                id="banner"

                className="uk-height-expand uk-section uk-light uk-background-cover "
                data-src={images.background.data.attributes.url}
                data-srcset={images.background.data.attributes.url}
                data-sizes="(min-width: 650px) 650px, 100vw"
                data-uk-img
            >


                <div className="uk-container uk-container-large  uk-flex uk-flex-wrap uk-flex-around uk-margin uk-padding " uk-scrollspy="cls: uk-animation-fade; target: .hero-cards; delay: 400; repeat: true">



                    <div className="uk-inline-clip hero-cards uk-margin">
                        <Image src={images.sail.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " uk-toggle="target: .sail-toggle; mode: hover">

                            <h2 >RYA Sail</h2>

                            <ul className="sail-toggle" hidden>

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Sail' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref>
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>

                        </div>
                    </div>
                    <div className="uk-inline-clip hero-cards uk-margin">
                        <Image src={images.motor.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary " uk-toggle="target: .motor-toggle; mode: hover" >
                            <h2 >RYA Motor</h2>

                            <ul className="motor-toggle" hidden >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Motor' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref >
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="uk-inline-clip hero-cards uk-margin">
                        <Image src={images.power.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " uk-toggle="target: .power-toggle; mode: hover" >
                            <h2 >RYA Power</h2>

                            <ul className="power-toggle" hidden >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Power' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref >
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="uk-inline-clip hero-cards uk-margin">
                        <Image src={images.mile_building.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " uk-toggle="target: .mile-toggle; mode: hover"  >
                            <h2 >RYA Mile Building</h2>

                            <ul className="mile-toggle" hidden >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Mile_Building' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref >
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>


                    <div className="uk-inline-clip hero-cards uk-margin">
                        <Image src={images.jet_ski.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " uk-toggle="target: .jet-toggle; mode: hover" >
                            <h2>RYA Jet Ski</h2>

                            <ul className="jet-toggle" hidden >

                                {courses.map((course, index) =>
                                    course.attributes.courseCategory === 'Jet_Ski' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref >
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
