/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */

import React from "react"
import Link from "next/link"
import NewsSidebar from "../NewsSidebar/NewsSidebar"


const Hero = ({ courses, images, latestNews }) => {

    return (
        <>

            <div className="uk-position-relative uk-visible-toggle  " tabIndex="-1" uk-slideshow="autoplay: false; autoplay-interval: 8000; pause-on-hover: true; animation: push" >


                <ul className="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom:15">

                    <li>

                        <div className="uk-position-cover hero-wrapper uk-animation-kenburns uk-transform-origin-bottom-center  hero_image_wrapper " >

                            {images.background.data.attributes.url && <img src={images.background.data.attributes.url} alt="hero-bg " className="uk-cover  " />}



                        </div>

                        <div className=" uk-container uk-container-large uk-flex uk-flex-right uk-padding uk-padding-remove-horizontal ">

                            <div className="uk-margin-top uk-padding-large " >
                                {/* uk-flex uk-flex-column uk-flex-bottom */}

                                <h2 className=" uk-heading-small  uk-text-bold   uk-animation-scale-up hero-title ">{images.title} </h2>

                                <Link href={"/#courses_section_banner"} passHref>


                                    <button className="uk-margin-top align-self-left uk-button-large uk-animation-scale-up uk-button  uk-text-bold hero-action " href="#courses_section_banner " uk-scroll>Join us</button>
                                </Link>


                            </div>

                        </div>




                    </li>

                </ul>

            </div>

            <NewsSidebar latestNews={latestNews} courses={courses} />
        </>
    )
}

export default Hero
