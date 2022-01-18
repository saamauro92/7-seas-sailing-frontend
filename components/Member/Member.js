import React from "react"
import Link from "next/link"

const Member = ({ data }) => {


    return (

        <>


            <li className="member-card">
                <Link href={`/team/${data.attributes.slug}`} passHref>
                    <div className="uk-card uk-card-default ">
                        <div className="uk-card-media-top">



                            <div className=" uk-background-cover  uk-background-center-center uk-height-medium  "
                                data-src={data.attributes.image.data.attributes.url}
                                data-srcset={data.attributes.image.data.attributes.url}
                                data-uk-img
                            >
                            </div>



                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title"> {data.attributes.name}</h3>
                            <p>{data.attributes.title}</p>

                        </div>
                    </div>
                </Link>
            </li>

        </>


    )
}

export default Member
