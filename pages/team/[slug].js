/* import ReactMarkdown from "react-markdown" */
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'

import {
    fetchAPI,
} from "../../lib/api"


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
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={member.attributes.name} />}


            <div
                id="banner"
                className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
            >


                <p className="banner-titles uk-heading-medium uk-text-bolder uk-text-center  "> {member.attributes.name} </p>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium uk-text-bolder uk-text-center  ">
                    <li>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link>
                    </li>
                    <li >


                        <Link href={"/aboutus"}>
                            <a href=""> About</a>
                        </Link>
                    </li>
                    <li>
                        <span>{member.attributes.name}</span></li>


                </ul>



            </div>

            <div className="uk-container uk-container-large  uk-padding">
                <div className="uk-section">


                    <h2> {member.attributes.title}</h2>
                    <p>  {member.attributes.description} </p>

                    <hr className="uk-divider-small" />

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


    return {
        props: {
            member: teamsRes.data[0],
        },
        revalidate: 1,
    }
}

export default MemberProfile
