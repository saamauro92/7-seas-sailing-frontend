/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"


const Card = ({ data, slug }) => {


    return (
        <>
            <div className="uk-flex uk-flex-column uk-padding">


                <div className="uk-inline-clip uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">

                    {data.attributes.image.data.attributes.url ?

                        <div
                            data-src={data.attributes.image.data.attributes.url}
                            data-srcset={data.attributes.image.data.attributes.url}
                            data-uk-img

                            className="uk-background-image uk-background-cover  uk-height-medium uk-width-medium uk-flex uk-flex-center uk-flex-middle"

                        >

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
                        <a href=""> {data.attributes.title}  </a>
                    </Link>
                    </strong>
                    {data.attributes.new_course === true ? <span className="uk-margin-small-right uk-icon  " ><svg width="40" height="30" viewBox="0 2 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="yellow" stroke="grey" strokeWidth="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"></polygon></svg></span>
                        : null}
                </p>
            </div>
        </>
    )
}

export default Card
