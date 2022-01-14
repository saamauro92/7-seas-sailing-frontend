/* import ReactMarkdown from "react-markdown" */
import Link from 'next/link'
import SEO from '../../components/Seo/Seo'
import Image from 'next/image'

import {
    fetchAPI,
} from "../../lib/api"


const MemberProfile = ({ member, homepage }) => {
    const imageUrl = member.attributes.image.data.attributes.url

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
                uk-parallax="bgy: -100"
            >



                <h2 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove" uk-toggle="cls: uk-heading-small;  mode: media; media: @s">  {member.attributes.name}   </h2>
                <ul className="uk-breadcrumb banner-titles uk-heading-medium uk-text-bolder uk-text-center  uk-margin-remove uk-padding-small">
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

            <div className="uk-container uk-container-small  uk-padding uk-padding uk-animation-slide-bottom">



                <div className="uk-section">

                    <h2> {member.attributes.title}</h2>
                    <p>  {member.attributes.description} </p>
                    <div
                        className=" uk-background-contain uk-height-large "
                        data-src={imageUrl}
                        data-srcset={imageUrl}
                        data-uk-img
                        uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                    > </div>

                    <hr />

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
