/* eslint-disable react/no-children-prop */
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'
import ReactMarkdown from "react-markdown"
import Moment from 'react-moment';
import {
    fetchAPI,
} from "../../lib/api"


const activitieSection = ({ activitie, homepage }) => {
    const imageUrl = activitie.attributes.image.data.attributes.url

    return (
        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={activitie.attributes.title} />}

            <div
                id="banner"
                className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
                uk-parallax="bgy: -100"
            >


                <h2 className="banner-titles uk-heading-medium uk-text-bolder uk-text-center  uk-margin-remove uk-padding-remove"> {activitie.attributes.title} </h2>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link>
                    </li>
                    <li >


                        <Link href={"/news"}>
                            <a href="">Activities {"&"} Services</a>
                        </Link>
                    </li>
                    {activitie.attributes.category === "Mile_Building" ?
                        <li>
                            <span>Mile Building</span>
                        </li>
                        : null

                    }
                    <li>
                        <span>{activitie.attributes.title}</span></li>


                </ul>



            </div>
            <div className="uk-container uk-container-large uk-padding-small ">

                <p className='uk-text-bolder'>
                    {activitie.attributes.title}

                </p>
                <div className="uk-section uk-flex uk-flex-between uk-flex-wrap  " >

                    <div className="uk-width-1-1 uk-width-1-2@m  uk-padding-small uk-padding-remove-vertical " >
                        <ReactMarkdown
                            children={activitie.attributes.content} />

                    </div>

                    <div className="uk-width-1-1 uk-width-1-2@m  uk-padding-small ">
                        <ReactMarkdown
                            children={activitie.attributes.more_content} />
                        <div
                            id="banner"
                            className=" uk-background-contain uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                            data-src={imageUrl}
                            data-srcset={imageUrl}
                            data-uk-img
                            uk-parallax="bgy: -100"
                        ></div>
                    </div>

                </div>


                <hr />


            </div>
        </>
    )
}

export async function getStaticPaths() {
    const activitiesRes = await fetchAPI("/activities", { fields: ["slug"] })


    return {
        paths: activitiesRes.data.map((activitie) => ({
            params: {
                slug: activitie.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const activitiesRes = await fetchAPI("/activities", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })



    return {
        props: {
            activitie: activitiesRes.data[0],

        },
        revalidate: 1,
    }
}

export default activitieSection
