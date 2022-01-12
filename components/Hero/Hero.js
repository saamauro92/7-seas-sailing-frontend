/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

import React from "react"
import Link from "next/link"
import Image from 'next/image'

const Hero = ({ courses, images }) => {


    return (
        <>

            <div
                id="banner"

                className="uk-height-expand uk-section uk-light uk-background-cover "
                data-src={images.background.data.attributes.url}
                data-srcset={images.background.data.attributes.url}
                data-sizes="(min-width: 650px) 650px, 100vw"
                data-uk-img
                uk-parallax="bgy: -600"
            >

                <div className="uk-container uk-container-large  uk-flex uk-flex-wrap uk-flex-around uk-margin  " >



                    <div className="uk-inline-clip hero-cards uk-margin  uk-animation-slide-bottom" >
                        {/*      <Image src={images.sail.data.attributes.url} width={400} height={250} alt='' /> */}
                        {/*                  <div
                            className=" uk-background-contain uk-height-small "
                            data-src={images.sail.data.attributes.url}
                            data-srcset={images.sail.data.attributes.url}
                            data-uk-img
                            uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                        ></div>
 */}

                        <img src={images.sail.data.attributes.url} width="450" height="250" alt="hero_card_sail" uk-img />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-visible-toggle " tabIndex="-1">

                            <h2 >RYA Sail</h2>

                            <ul className="uk-hidden-hover">

                                {courses.map((course, i) =>
                                    course.attributes.courseCategory === 'Sail' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                                        <li>
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>

                        </div>
                    </div>
                    <div className="uk-inline-clip hero-cards uk-margin  uk-animation-slide-bottom">
                        {/*             <Image src={images.motor.data.attributes.url} width={400} height={250} alt='' /> */}
                        <img src={images.motor.data.attributes.url} width="450" height="250" alt="hero_card_motor" uk-img />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-visible-toggle " tabIndex="-1"  >
                            <h2 >RYA Motor</h2>

                            <ul className="uk-hidden-hover" >

                                {courses.map((course, i) =>
                                    course.attributes.courseCategory === 'Motor' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                                        <li >
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom">
                        {/*        <Image src={images.power.data.attributes.url} width={400} height={250} alt='' /> */}
                        <img src={images.power.data.attributes.url} width="450" height="250" alt="hero_card_power" uk-img />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-visible-toggle  " tabIndex="-1" >
                            <h2 >RYA Power</h2>

                            <ul className="uk-hidden-hover" >

                                {courses.map((course, i) =>
                                    course.attributes.courseCategory === 'Power' &&

                                    <Link href={`/courses/${course.attributes.slug}`} key={i} passHref >
                                        <li >
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>
                </div>



                <div className=" uk-container uk-container-xsmall uk-flex uk-flex-column uk-flex-middle  ">
                    <h2 className="uk-text-bolder action-text uk-text-center ">

                        Your way at sea starts here!
                    </h2>

                    <button className="uk-button action-button uk-text-bolder uk-button-large uk-width-small uk-margin-bottom">JOIN US</button>
                </div>



                <div className="uk-container uk-container-large  uk-flex uk-flex-wrap uk-flex-around  " >

                    <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom">
                        {/*           <Image src={images.mile_building.data.attributes.url} width={400} height={250} alt='' /> */}
                        <img src={images.mile_building.data.attributes.url} width="450" height="250" alt="hero_card_mile" uk-img />

                        <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-visible-toggle " tabIndex="-1">
                            <h2 >RYA Mile Building</h2>

                            <ul className="uk-hidden-hover" >

                                {courses.map((course, i) =>
                                    course.attributes.courseCategory === 'Mile_Building' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref key={i} >
                                        <li >
                                            <a href="">   {course.attributes.title}</a>
                                        </li>
                                    </Link>

                                )}
                            </ul>
                        </div>
                    </div>


                    <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom">
                        {/*            <Image src={images.jet_ski.data.attributes.url} width={400} height={250} alt='' /> */}
                        <img src={images.jet_ski.data.attributes.url} width="450" height="250" alt="hero_card_jet" uk-img />
                        <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-visible-toggle  " tabIndex="-1" >
                            <h2>RYA Jet Ski</h2>

                            <ul className="uk-hidden-hover"  >

                                {courses.map((course, i) =>
                                    course.attributes.courseCategory === 'Jet_Ski' &&

                                    <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
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
