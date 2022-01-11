import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Link from 'next/link';

const ActivitiesAndServices = ({ homepage }) => {
    const imgBanner = homepage.attributes.hero.background.data.attributes.url;
    return (


        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
            >
                <p className="banner-titles uk-heading-medium uk-text-bolder uk-text-center ">Activities {"&"} Services </p>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder uk-text-center">
                    <li >

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


