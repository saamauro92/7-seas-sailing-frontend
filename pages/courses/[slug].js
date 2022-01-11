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

            <div
                id="banner"
                className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
            >


                <p className="banner-titles uk-heading-medium uk-text-bolder uk-text-center "> {course.attributes.title} </p>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder">
                    <li>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link>
                    </li>
                    <li >


                        <Link href={"/courses"}>
                            <a href=""> Courses</a>
                        </Link>
                    </li>
                    <li>
                        <span>{course.attributes.courseCategory}</span></li>
                    <li > <span > {course.attributes.title}  </span></li>

                </ul>



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

    return {
        props: {
            course: coursesRes.data[0],

        },
        revalidate: 1,
    }
}

export default Article
