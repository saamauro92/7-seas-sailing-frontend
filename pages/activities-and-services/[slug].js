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

    const seo = {
        metaTitle: activitie.attributes.title,
        metaDescription: activitie.attributes.title,
        shareImage: activitie.attributes.image,
        article: true,
    }

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
                    <li>
                        <span>{activitie.attributes.title}</span></li>


                </ul>



            </div>
            <div className="uk-container uk-container-expand uk-padding ">
                <div className="uk-section">


                    <p className='uk-text-bolder'>
                        {activitie.attributes.title}

                    </p>


                    <ReactMarkdown
                        children={activitie.attributes.content}
                    />


                    <div
                        id="banner"
                        className=" uk-background-contain uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                        data-src={imageUrl}
                        data-srcset={imageUrl}
                        data-uk-img
                        uk-parallax="bgy: -100"
                    ></div>
                    <hr className="uk-divider-small" />

                </div>
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
