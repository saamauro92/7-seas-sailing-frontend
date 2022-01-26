/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

import React from "react"
import Link from "next/link"

const Hero = ({ courses, images }) => {


    return (
        <>
            {/* 
      <img src={images.background.data.attributes.url} alt="" uk-cover />
              <img src={images.motor.data.attributes.url} alt="" uk-cover />
        
        */}

            <div className="uk-position-relative uk-visible-toggle " tabIndex="-1" uk-slideshow="animation: push">


                <ul className="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom:5">


                    <li>
                        <div className="uk-transform-cente uk-animation-kenburns uk-animation-reverse  hero-wrapper " >
                            <img src={images.background.data.attributes.url} alt="" className="uk-cover" />

                        </div>
                        <div className="uk-container uk-container-large uk-margin-top uk-padding-large uk-padding-horizontal-remove">

                            <div className="">
                                <h2 className="uk-heading-large uk-text-bold uk-margin-top uk-animation-scale-up uk-padding-remove uk-margin-remove">Your way at sea </h2>
                                <h2 className="uk-heading-large uk-padding-remove uk-margin-remove uk-text-bold uk-margin-top uk-animation-scale-up ">starts now!</h2>
                                <p className="uk-heading-small hero_subtitle  uk-animation-scale-up " >Explore our courses!</p>
                                <Link href={"/courses"} passHref>
                                    <button className="uk-margin-top uk-button-large uk-animation-scale-up uk-button uk-button-danger uk-text-bold ">See more</button>
                                </Link>


                            </div>

                        </div>


                        {/*  */}
                        <div className=" uk-position-bottom-right  uk-text-center uk-widht-medium " tabIndex="-1" uk-slider="sets: true" style={{ width: "1000px" }}>

                            <ul className="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@m uk-visible@m">

                                <li>



                                    <div className="uk-inline-clip hero-cards  uk-animation-slide-bottom uk-visible-toggle uk-visible@m" tabIndex="-1" >


                                        <img src={images.sail.data.attributes.url} width="250" height="200" alt="hero_card_sail" uk-img />

                                        <div className="uk-position-bottom uk-overlay uk-overlay-primary" >

                                            <p >RYA Sail</p>

                                            <ul className="uk-hidden-hover uk-overlay uk-overlay-primary">

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
                                </li>

                                <li>
                                    <div className="uk-inline-clip hero-cards   uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">

                                        <img src={images.motor.data.attributes.url} width="250" height="200" alt="hero_card_motor" uk-img />

                                        <div className="uk-position-bottom uk-overlay uk-overlay-primary" >
                                            <p >RYA Motor</p>

                                            <ul className="uk-hidden-hover uk-overlay uk-overlay-primary">

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
                                </li>

                                <li>
                                    <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">

                                        <img src={images.power.data.attributes.url} width="250" height="200" alt="hero_card_power" uk-img />

                                        <div className="uk-position-bottom uk-overlay uk-overlay-primary   " >
                                            <p >RYA Power</p>

                                            <ul className="uk-hidden-hover uk-overlay uk-overlay-primary">

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
                                </li>
                                <li>
                                    <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1" >

                                        <img src={images.mile_building.data.attributes.url} width="250" height="250" alt="hero_card_mile" uk-img />

                                        <div className="uk-position-bottom uk-overlay uk-overlay-primary" >
                                            <p >RYA Mile Building</p>

                                            <ul className="uk-hidden-hover uk-overlay uk-overlay-primary">

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
                                </li>
                                <li>

                                    <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">



                                        <img src={images.jet_ski.data.attributes.url} alt="hero_card_jet" className="uk-background-cover" />


                                        <div className="uk-position-bottom uk-overlay uk-overlay-primary" >
                                            <p>RYA Jet Ski</p>

                                            <ul className="uk-hidden-hover uk-overlay uk-overlay-primary">

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
                                </li>
                                <li>

                                    <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">

                                        <img src={images.mile_building.data.attributes.url} width="250" height="250" alt="hero_card_jet" uk-img />
                                        <div className="uk-position-bottom uk-overlay uk-overlay-primary" >
                                            <p>RYA Yachtmaster</p>

                                            <ul className="uk-hidden-hover uk-overlay uk-overlay-primary">


                                                <Link href={`/courses/yachtmaster`} passHref>
                                                    <li>
                                                        <a href="">   Yachtmaster Prep Exam</a>
                                                    </li>
                                                </Link>

                                            </ul>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                            <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-visible@m" href="#" uk-slidenav-previous uk-slider-item="previous">

                                <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#fff" strokeWidth="1.33" points="13 16 7 10 13 4"></polyline></svg>

                            </a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-visible@m" href="#" uk-slidenav-next uk-slider-item="next">
                                <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#fff" strokeWidth="1.33" points="7 4 13 10 7 16"></polyline></svg>



                            </a>

                        </div>


                        {/*  */}

                    </li>

                    <li>
                        <div className="uk-transform-cente uk-animation-kenburns uk-animation-reverse  hero-wrapper " >
                            <img src={images.power.data.attributes.url} alt="" className="uk-cover" />

                        </div>
                        <div className="uk-container uk-container-large uk-margin-top uk-padding-large uk-padding-horizontal-remove">

                            <div className="">
                                <h2 className="uk-heading-large uk-text-bold uk-margin-top uk-animation-scale-up ">RYA training  </h2>
                                <h2 className="uk-heading-large uk-text-bold uk-margin-top uk-animation-scale-up ">Centre !</h2>

                                <button className="uk-margin-top uk-button-large uk-animation-scale-up uk-button uk-button-danger uk-text-bold ">About the RYA</button>

                            </div>


                        </div>



                    </li>

                </ul>

                <div className="uk-light">
                    <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-visible@m " href="#" uk-slidenav-previous uk-slideshow-item="previous"><span >
                        <svg width="60" height="80" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#fff" strokeWidth="1.33" points="13 16 7 10 13 4"></polyline></svg>
                    </span>

                    </a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover  uk-visible@m" href="#" uk-slidenav-next uk-slideshow-item="next"><span >
                        <svg width="60" height="80" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#fff" strokeWidth="1.33" points="7 4 13 10 7 16"></polyline></svg>
                    </span>

                    </a>


                </div>
                <ul className="uk-position-bottom uk-slideshow-nav uk-dotnav uk-flex-center uk-margin uk-hidden@m"></ul>

            </div>




        </>
    )
}

export default Hero
