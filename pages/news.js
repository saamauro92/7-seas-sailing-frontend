/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'

const NewsPage = ({ homepage, news }) => {

    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (
        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}
                <h3
                    className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove "
                    uk-toggle="cls: uk-heading-small;  mode: media; media: @s">
                    Blog
                </h3>

            </div>
            <div className="uk-container uk-container-large uk-height-large uk-padding uk-height-large">

                <ul className="uk-breadcrumb uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Blog </span></li>

                </ul>

                <div className="uk-container uk-container-large uk-padding uk-animation-slide-bottom uk-height-large">
                    {news && news.length > 0 && news.map((item, index) =>


                        <Link href={`/news/${item.attributes.slug}`} key={index} passHref>
                            <div className='uk-card uk-margin-large ' >



                                <div className="uk-header uk-text-bolder">
                                    <a href="">   {item.attributes.title}  </a>
                                </div>


                                <div>
                                    Written By: {" "}
                                    {item.attributes.writtenBy}
                                </div>

                                <div>
                                    {item.attributes.date}
                                </div>

                                <hr />
                            </div>
                        </Link>



                    )}
                </div>

            </div>


        </>
    )
}

export default NewsPage;


export async function getStaticProps() {



    const newsData = await fetchAPI("/news", {
        populate: "*",
    })

    return {
        props: {

            news: newsData.data,
        },
        revalidate: 1,
    }
}
