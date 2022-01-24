/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import SEO from '../components/Seo/Seo'
import { fetchAPI } from '../lib/api';


const gallery = ({ homepage, data }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;

    const album = data.attributes.album.data;

    console.log("gallery", album)

    return (

        <div className='' >

            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small  uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
                style={{ "zIndex": "9" }}
            >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Gallery" />}

                <h3 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove " uk-toggle="cls: uk-heading-small;  mode: media; media: @s"  >Gallery </h3>

            </div>

            <div className='uk-container uk-container-medium  uk-padding-medium uk-animation-slide-bottom uk-background-muted  '>


                <ul className="uk-breadcrumb uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-text-center uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Gallery  </span></li>

                </ul>
            </div>

            <div className="uk-container uk-container-medium uk-background-muted uk-padding">

                <div className="uk-flex uk-flex-wrap uk-flex-center uk-margin-remove uk-padding-remove" uk-grid uk-lightbox="animation: slide">

                    {
                        album.map((item, i) =>

                            <div key={i}>
                                <a className="uk-inline" href={item.attributes.formats.medium.url} data-caption={`Caption ${i}`}>


                                    <div
                                        data-src={item.attributes.formats.small.url}
                                        data-srcset={item.attributes.formats.small.url}
                                        data-uk-img

                                        className="uk-background-image uk-background-cover  uk-height-medium uk-width-medium uk-flex uk-flex-center uk-flex-middle uk-margin-remove uk-padding-remove"

                                    >
                                    </div>

                                </a>
                            </div>


                        )
                    }


                </div>
            </div>

        </div>
    )
}

export default gallery




export async function getStaticProps() {


    const galleryData = await fetchAPI("/gallery", {
        populate: "*",
    })


    return {
        props: {

            data: galleryData.data,
        },
        revalidate: 1,
    }
}