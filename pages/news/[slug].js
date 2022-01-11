/* eslint-disable react/no-children-prop */
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'
import ReactMarkdown from "react-markdown"
import Moment from 'react-moment';
import {
    fetchAPI,
} from "../../lib/api"


const newsSection = ({ item, homepage }) => {
    const imageUrl = item.attributes.image.data.attributes.url

    const seo = {
        metaTitle: item.attributes.title,
        metaDescription: item.attributes.title,
        shareImage: item.attributes.image,
        article: true,
    }

    return (
        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={item.attributes.title} />}
            <div className="uk-container uk-container-large ">

                <div className="uk-container uk-container-large ">


                    <ul className="uk-breadcrumb">
                        <li>
                            <Link href={"/news"}>
                                <a href="">News</a>
                            </Link>
                        </li>
                        <li><a href="">{item.attributes.title}</a></li>

                    </ul>
                </div>

            </div>

            <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
            >
                <h2> {item.attributes.title}</h2>
            </div>
            <div className="uk-container uk-container-large ">
                <div className="uk-section">
                    <div className="uk-width-expand">
                        <p className="uk-text-meta ">
                            Posted {" "}
                            <Moment format="DD/MM/YYYY">{item.attributes.date}</Moment>
                        </p>
                    </div>

                    <p className='uk-text-bolder'>
                        <ReactMarkdown
                            children={item.attributes.subTitle}
                        />
                    </p>

                    <p>   </p>

                    <ReactMarkdown
                        children={item.attributes.content}
                    />
                    <hr className="uk-divider-small" />
                    <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                        <div className="uk-width-expand">
                            <p className="uk-text-meta uk-margin-remove-top">
                                Written By {" "}{item.attributes.writtenBy}

                            </p>
                            <p className="uk-text-meta ">
                                Posted {" "}
                                <Moment format="DD/MM/YYYY">{item.attributes.date}</Moment>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const newsRes = await fetchAPI("/news", { fields: ["slug"] })


    return {
        paths: newsRes.data.map((item) => ({
            params: {
                slug: item.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const newsRes = await fetchAPI("/news", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })



    return {
        props: {
            item: newsRes.data[0],

        },
        revalidate: 1,
    }
}

export default newsSection
