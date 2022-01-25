import React from "react"
import Link from "next/link"

const Member = ({ data }) => {


    return (

        <>


            <li className="member-card">
                <Link href={`/team/${data.attributes.slug}`} passHref>
                    <div className="uk-card uk-card-default ">
                        <div className="uk-card-media-top">



                            <div className="uk-width-large uk-background-cover  uk-background-center-center uk-height-medium  "
                                data-src={data.attributes.image.data.attributes.url}
                                data-srcset={data.attributes.image.data.attributes.url}
                                data-uk-img
                            >
                            </div>



                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title"> {data.attributes.name}</h3>
                            <p className="uk-text-success">{data.attributes.title}</p>


                            <p>{data.attributes.short}</p>


                        </div>
                    </div>
                </Link>
            </li>

        </>


    )
}

export default Member
