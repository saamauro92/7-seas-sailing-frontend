/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"


const Card = ({ data, slug }) => {


    return (
        <>
            <div className="uk-flex uk-flex-column uk-padding">


                <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">


                    {data.attributes.image.data.attributes.url ?

                        <div
                            data-src={data.attributes.image.data.attributes.url}
                            data-srcset={data.attributes.image.data.attributes.url}
                            data-uk-img

                            className="uk-background-image uk-background-cover  uk-height-medium uk-width-medium uk-flex uk-flex-center uk-flex-middle"

                        >
                            {data.attributes.new_course === true ? <span className="uk-label uk-label-success uk-position-top-right">New</span> : null}
                        </div>

                        : null}

                    <div className="uk-position-cover uk-overlay uk-overlay-primary uk-hidden-hover cursor-pointer uk-flex uk-flex-center uk-flex-middle" >


                        <Link href={`/${slug}/${data.attributes.slug}`} passHref>
                            <a href="" className="uk-icon" >
                                <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"></circle><circle cx="10" cy="10" r="2"></circle><circle cx="17" cy="10" r="2"></circle></svg>

                            </a>
                        </Link>


                    </div>

                </div>
                <p className=" uk-text-start">
                    <strong>   <Link href={`/${slug}/${data.attributes.slug}`} passHref>
                        <a href=""> {data.attributes.title} </a>
                    </Link>
                    </strong>
                </p>
            </div>
        </>
    )
}

export default Card
