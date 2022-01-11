/* eslint-disable react/no-children-prop */
import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'

const News = ({ homepage, news }) => {

    const imgBanner = homepage.attributes.hero.background.data.attributes.url;
    return (
        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
            >
                <p className="banner-titles uk-heading-medium uk-text-bolder uk-text-center "> News </p>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder">
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
