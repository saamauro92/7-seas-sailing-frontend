/* import ReactMarkdown from "react-markdown" */
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'

import {
    fetchAPI,
} from "../../lib/api"

/* import Seo from "../../components/seo" */
import { getStrapiMedia } from "../../lib/media"

const MemberProfile = ({ member, homepage }) => {
    const imageUrl = member.attributes.image.data.attributes.url

    const seo = {
        metaTitle: member.attributes.title,
        metaDescription: member.attributes.description,
        shareImage: member.attributes.image,
        article: true,
    }

    return (
        <>

            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={member.attributes.title} metaDescription="all courses" />}
            <ul className="uk-breadcrumb">
                <li>
                    <Link href={"/aboutus"}>
                        <a href="">About us</a>
                    </Link>
                </li>
                <li><a href="">{member.attributes.title}- {member.attributes.name}</a></li>

            </ul>


            <div
                id="banner"
                className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
            >
                <h1>{member.attributes.name}</h1>
            </div>
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    {/*                  <ReactMarkdown
                        source={member.attributes.content}
                        escapeHtml={false}
                    /> */}
                    <h2> {member.attributes.title}</h2>
                    <p>  {member.attributes.description} </p>

                    <hr className="uk-divider-small" />
                    <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                        <div className="uk-width-expand">
                            <p className="uk-text-meta uk-margin-remove-top">

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const teamsRes = await fetchAPI("/teams", { fields: ["slug"] })


    return {
        paths: teamsRes.data.map((member) => ({
            params: {
                slug: member.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const teamsRes = await fetchAPI("/teams", {
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
            member: teamsRes.data[0],
            homepage: homepageRes.data,
        },
        revalidate: 1,
    }
}

export default MemberProfile
