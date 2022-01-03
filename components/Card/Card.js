import React from "react"
import Link from "next/link"
import Image from 'next/image'

const Card = ({ data }) => {


    return (
        <Link href={`/courses/${data.attributes.slug}`}>
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        {/*    <NextImage image={data.attributes.image.data.attributes.url} /> */}
                        {data.attributes.image.data.attributes.url && <img src={data.attributes.image.data.attributes.url} alt="" />}

                        {/*    <Image src={`${data.attributes.image.data.attributes.url}`} alt="img" width={500} height={500} /> */}

                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase">
                            {/*            {data.attributes.category.name} */}
                        </p>
                        <p id="title" className="uk-text-large">
                            {data.attributes.title}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card
