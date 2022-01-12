/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"
import Image from 'next/image'

const Card = ({ data }) => {


    return (
        <div className="uk-card ">
            <div className="uk-card-media-top">
                {data.attributes.image.data.attributes.url &&

                    /*             <Image src={data.attributes.image.data.attributes.url} width={280} height={180} alt="course-picture" layout="intrinsic" /> */
                    <img src={data.attributes.image.data.attributes.url} width="300" height="250" alt="course_card" uk-img />
                }

            </div>

            <div className="uk-card-header ">
                <p className=" uk-text-center"> {data.attributes.title} </p>
            </div>
            <div className="uk-card-fotter uk-text-center">
                <Link href={`/courses/${data.attributes.slug}`} passHref>
                    <button className="uk-button uk-button-danger ">SEE MORE</button>
                </Link>

            </div>


            <hr />

        </div>
    )
}

export default Card
