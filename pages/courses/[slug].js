/* import ReactMarkdown from "react-markdown" */
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'

import {
    fetchAPI,
} from "../../lib/api"

/* import Seo from "../../components/seo" */
import { getStrapiMedia } from "../../lib/media"

const Article = ({ course, homepage }) => {
    const imageUrl = course.attributes.image.data.attributes.url

    const seo = {
        metaTitle: course.attributes.title,
        metaDescription: course.attributes.description,
        shareImage: course.attributes.image,
        article: true,
    }

    return (
        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={course.attributes.title} />}
            <div className="uk-container uk-container-large ">

                <ul className="uk-breadcrumb ">
                    <li>
                        <Link href={"/courses"}>
                            <a href="">Courses</a>
                        </Link>
                    </li>
                    <li><a href="">{course.attributes.courseCategory}</a></li>
                    <li><a href="">{course.attributes.title}</a></li>

                </ul>
            </div>
            <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
            >
                <h1>{course.attributes.title}</h1>
            </div>
            <div className="uk-container uk-container-lage ">




                <div className="uk-section">
                    <div className="uk-container uk-container-small">
                        {/*                  <ReactMarkdown
                        source={article.attributes.content}
                        escapeHtml={false}
                    /> */}

                        <hr className="uk-divider-small" />
                        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                            <div className="uk-width-expand">
                                <p className="uk-text-meta uk-margin-remove-top">

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const coursesRes = await fetchAPI("/courses", { fields: ["slug"] })

    return {
        paths: coursesRes.data.map((course) => ({
            params: {
                slug: course.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const coursesRes = await fetchAPI("/courses", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })


    const homepageRes = await fetchAPI("/homepage", {
        populate: {
            hero: "*",
            seo: { populate: "*" },
        },
    })

    return {
        props: {
            course: coursesRes.data[0],
            homepage: homepageRes.data,
        },
        revalidate: 1,
    }
}

export default Article
