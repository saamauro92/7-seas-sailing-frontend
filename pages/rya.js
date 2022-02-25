import Link from "next/link";
import SEO from "../components/Seo/Seo";
import ReactMarkdown from "react-markdown"
import { fetchAPI } from "../lib/api";

const RyaPage = ({ homepage, data }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;


    return (
        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="About RYA" />}

            {imgBanner &&
                <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small  uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle uk-padding-large"
                    data-src={imgBanner}
                    data-srcset={imgBanner}
                    data-uk-img
                    uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                    uk-parallax="bgy: -100"
                >

                    <h3 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove " uk-toggle="cls: uk-heading-small;  mode: media; media: @s"  > About the RYA</h3>



                </div>}
            <div className="uk-container uk-container-medium uk-background-muted uk-padding-medium ">
                <ul className="uk-breadcrumb uk-width-1-4@m uk-width-1-4@l banner-titles  uk-text-bolder uk-text-center uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > About the RYA</span></li>

                </ul>

            </div>


            <div className="uk-container uk-container-medium uk-background-muted  uk-padding-medium uk-animation-slide-bottom">

                <ReactMarkdown className="uk-padding-large">

                    {data.attributes.content}
                </ReactMarkdown>

            </div>
        </>

    )

}


export default RyaPage;


export async function getStaticProps() {

    const ryaData = await fetchAPI("/rya", { populate: "*" });




    return {
        props: {

            data: ryaData.data,


        },
        revalidate: 1,
    }
}
