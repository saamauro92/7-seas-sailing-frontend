/* eslint-disable @next/next/no-img-element */
/* import ReactMarkdown from "react-markdown" */
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'
import ReactMarkdown from "react-markdown"

import {
    fetchAPI,
} from "../../lib/api"


const BoatPage = ({ boat, homepage }) => {
    const imageUrl = boat.attributes.image.data.attributes.url
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (
        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={boat.attributes.name} />}


            <div
                id="banner"
                className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >



                <h2 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove" uk-toggle="cls: uk-heading-small;  mode: media; media: @s">  {boat.attributes.title}   </h2>




            </div>

            <div className="uk-container uk-container-medium  uk-background-muted uk-padding-medium uk-animation-slide-bottom">
                <ul className="uk-breadcrumb uk-width-1-2@m uk-width-1-2@l banner-titles uk-text-bolder   uk-margin-remove uk-padding-small">
                    <li>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link>
                    </li>
                    <li >

                        <Link href={"/aboutus#boats"}>
                            <a href=""> About</a>
                        </Link>
                    </li>
                    <li>
                        <span>...</span></li>


                </ul>


                <div className="uk-section">



                    <img src={imageUrl} alt="profile_pic" className='uk-align-right@m uk-margin-remove-adjacent uk-height-large ' uk-img />


                    <ReactMarkdown>

                        {boat.attributes.description}

                    </ReactMarkdown>



                </div>
                <hr />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const boatRes = await fetchAPI("/boats", { fields: ["slug"] })


    return {
        paths: boatRes.data.map((boat) => ({
            params: {
                slug: boat.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const boatRes = await fetchAPI("/boats", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })


    return {
        props: {
            boat: boatRes.data[0],
        },
        revalidate: 1,
    }
}

export default BoatPage;
