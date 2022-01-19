/* eslint-disable @next/next/no-img-element */
import React from 'react'
import SEO from '../components/Seo/Seo'


const contact = ({ homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
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
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Contact us" />}

                <h3 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove " uk-toggle="cls: uk-heading-small;  mode: media; media: @s"  >Contact us </h3>

            </div>

            <div className='uk-container uk-container-medium  uk-padding uk-animation-slide-bottom uk-background-muted  '>





            </div>
        </div>
    )
}

export default contact


