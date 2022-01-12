import React from "react"
import Link from "next/link"
import Image from 'next/image'

const Member = ({ data }) => {


    return (

        <>


            <li>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">

                        <Link href={`/team/${data.attributes.slug}`} passHref>


                            <div className=" uk-background-cover  uk-background-center-center uk-height-medium  "
                                data-src={data.attributes.image.data.attributes.url}
                                data-srcset={data.attributes.image.data.attributes.url}
                                data-uk-img
                            >
                            </div>



                        </Link>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title"> {data.attributes.name}</h3>
                        <p>{data.attributes.title}</p>
                        <button className="uk-button action-button uk-light">
                            <Link href={`/team/${data.attributes.slug}`} passHref>
                                See More
                            </Link>
                        </button>
                    </div>
                </div>
            </li>

        </>


    )
}

export default Member
