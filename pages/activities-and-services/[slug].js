/* eslint-disable react/no-children-prop */
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'
import ReactMarkdown from "react-markdown"
import Moment from 'react-moment';
import {
    fetchAPI,
} from "../../lib/api"
import ActionSection from '../../components/actionSection/ActionSection';
import NextNProgress from "nextjs-progressbar";

const activitieSection = ({ activitie, homepage }) => {
    const imageUrl = activitie.attributes.image.data.attributes.url
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;

    const data = { activitie, homepage }

    return data ? (
        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={activitie.attributes.title} />}

            <div
                id="banner"
                className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"

            >


                <h2 className="banner-titles uk-text-bolder uk-text-center  uk-margin-remove uk-padding-remove"> {activitie.attributes.title} </h2>




            </div>
            <div className="uk-container uk-container-medium uk-padding-medium uk-animation-slide-bottom uk-background-muted">
                <ul className="uk-breadcrumb uk-width-1-2@m uk-width-1-2@l banner-titles  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link>
                    </li>
                    <li >


                        <Link href={"/activities-and-services"}>
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
                        <span>...  </span></li>




                </ul>



                <div className="uk-section uk-flex uk-flex-wrap  uk-margin " >

                    <div className="uk-width-2-4 uk-width-1-2@m  uk-padding-small uk-padding-remove-vertical " >
                        <ReactMarkdown
                            children={activitie.attributes.content} />

                    </div>

                    <div className="uk-card uk-width-2-4  uk-width-1-2@m  ">
                        <div
                            className="  uk-background-contain   uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                            data-src={imageUrl}
                            data-srcset={imageUrl}
                            data-uk-img
                            uk-parallax="bgy: -100"
                        ></div>
                        <ReactMarkdown
                            children={activitie.attributes.more_content} />

                        <ActionSection />
                    </div>

                </div>


                <hr />


            </div>
        </>
    ) : <>  <NextNProgress /></>
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
