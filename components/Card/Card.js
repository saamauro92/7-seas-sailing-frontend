/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"


const Card = ({ data, slug }) => {


    return (

        <div className="uk-flex uk-flex-column uk-padding">

            <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">

                {data.attributes.image.data.attributes.url &&

                    <div
                        data-src={data.attributes.image.data.attributes.url}
                        data-srcset={data.attributes.image.data.attributes.url}
                        data-uk-img

                        className="uk-background-image uk-background-cover  uk-height-medium uk-width-medium uk-flex uk-flex-center uk-flex-middle"

                    >

                    </div>


                }

                <div className="uk-position-cover uk-overlay uk-overlay-primary uk-hidden-hover cursor-pointer uk-flex uk-flex-center uk-flex-middle" >


                    <Link href={`/${slug}/${data.attributes.slug}`} passHref>
                        <a uk-icon="icon: more; ratio: 2;"  ></a>
                    </Link>


                </div>

            </div>
            <p className=" uk-text-start">

                <strong>{data.attributes.title} </strong>
            </p>
        </div>
    )
}

export default Card
