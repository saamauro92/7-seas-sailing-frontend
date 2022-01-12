import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Link from 'next/link';

const ActivitiesAndServices = ({ homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (


        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small  uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >
                <h3
                    className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove  "
                    uk-toggle="cls: uk-heading-small;  mode: media; media: @s"
                > Activities {"&"} Services   </h3>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder uk-text-center uk-margin-remove uk-padding-small"


                >
                    <li  >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Activities {"&"} Services</span></li>

                </ul>


            </div>

            <div className="uk-container uk-container-large uk-padding ">
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Activities and Services" />}


            </div>




        </>
    )
}

export default ActivitiesAndServices


