
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



                <div className="uk-container uk-container-large uk-flex uk-flex-wrap uk-flex-around  " uk-scrollspy="cls: uk-animation-fade; target: .hero-cards; delay: 400; repeat: true">



                    <div className="uk-inline-clip hero-cards">
                        <Image src={images.sail.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " uk-toggle="target: .sail-toggle; mode: hover">

                            <h2 >Sail</h2>

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
                    <div className="uk-inline-clip hero-cards">
                        <Image src={images.motor.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary " uk-toggle="target: .motor-toggle; mode: hover" >
                            <h2 >Motor</h2>

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
                    <div className="uk-inline-clip hero-cards">
                        <Image src={images.power.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " uk-toggle="target: .power-toggle; mode: hover" >
                            <h2 >Power</h2>

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

                    <div className="uk-inline-clip hero-cards">
                        <Image src={images.mile_building.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " uk-toggle="target: .mile-toggle; mode: hover"  >
                            <h2 >Mile Building</h2>

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


                    <div className="uk-inline-clip hero-cards">
                        <Image src={images.jet_ski.data.attributes.url} width={400} height={250} alt='' />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary  " uk-toggle="target: .jet-toggle; mode: hover" >
                            <h2 >Jet Ski</h2>

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
