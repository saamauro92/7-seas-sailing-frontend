import React from "react"
import Link from "next/link"
import Image from 'next/image'

const Member = ({ data }) => {


    return (

        <div className="uk-card uk-card-default uk-card-large uk-flex">
            <div className="uk-card-media-top">
                {data.attributes.image.data.attributes.url &&

                    <Link href={`/team/${data.attributes.slug}`}>

                        {/*   <img src={data.attributes.image.data.attributes.url} alt="" width={600} height={400} uk-cover /> */}

                        <Image src={data.attributes.image.data.attributes.url} width={620} height={500} alt="profile-picture" />


                    </Link>
                }
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title"> {data.attributes.name}</h3>
                <p>{data.attributes.title}</p>
            </div>
        </div>


    )
}

export default Member
