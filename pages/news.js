/* eslint-disable react/no-children-prop */
import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'

const News = ({ homepage, news }) => {

    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (
        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
            >
                <h3
                    className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove "
                    uk-toggle="cls: uk-heading-small;  mode: media; media: @s"
                > News    </h3>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > News </span></li>

                </ul>


            </div>
            <div className="uk-container uk-container-large uk-height-large uk-padding">
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}
                <h2>News  </h2>

                {news && news.length > 0 && news.map((item, index) =>

                    <div key={index}>


                        <Link href={`/news/${item.attributes.slug}`}>
                            <a href="">

                                {item.attributes.title}
                            </a>


                        </Link>

                    </div>

                )}


            </div>




        </>
    )
}

export default News;


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
