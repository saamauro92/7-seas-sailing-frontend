import React from "react"
import Link from "next/link"
import Image from 'next/image'

const Member = ({ data }) => {


    return (

        <div className="uk-card uk-card-default uk-card-large uk-flex">
            <div className="uk-card-media-top">
                {data.attributes.image.data.attributes.url &&

                    <Link href={`/team/${data.attributes.slug}`} passHref>

                        {/*   <img src={data.attributes.image.data.attributes.url} alt="" width={600} height={400} uk-cover /> */}


                        <Image src={data.attributes.image.data.attributes.url} width={320} height={280} alt="profile-picture" layout="intrinsic" />



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
