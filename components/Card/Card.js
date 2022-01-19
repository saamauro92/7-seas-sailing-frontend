/* eslint-disable @next/next/no-img-element */
import React from "react"
import Link from "next/link"


const Card = ({ data, slug }) => {


    return (
        <div className="uk-card " >

            {data.attributes.new_course && data.attributes.new_course === true ? <h4 className=" uk-position-top-center uk-text-success"> New! </h4> : null}
            <div className="uk-card-media-top uk-padding">

                {data.attributes.image.data.attributes.url &&

                    <img src={data.attributes.image.data.attributes.url} width="250" height="250" alt="course_card" uk-img />
                }

            </div>

            <div className="uk-card-header ">

                <p className=" uk-text-center">

                    {data.attributes.title}
                </p>
            </div>
            <div className="uk-card-fotter uk-text-center">
                <Link href={`/${slug}/${data.attributes.slug}`} passHref>
                    <button className="uk-button uk-button-danger ">SEE MORE</button>
                </Link>

            </div>


            <hr />

        </div>
    )
}

export default Card
