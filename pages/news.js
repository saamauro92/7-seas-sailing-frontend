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
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Blog - " />}
                <h3
                    className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove "
                    uk-toggle="cls: uk-heading-small;  mode: media; media: @s">
                    Blog
                </h3>

            </div>
            <div className="uk-container uk-container-medium uk-padding-medium ">

                <ul className="uk-breadcrumb uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Blog </span></li>

                </ul>

                <div className="uk-container uk-container-large uk-padding uk-animation-slide-bottom ">
                    {news && news.length > 0 && news.slice(0).reverse().map((item, index) =>


                        <Link href={`/news/${item.attributes.slug}`} key={index} passHref>
                            <a href="">
                                <div className='uk-card uk-margin-large uk-padding-small ' uk-grid >


                                    <div className="uk-width-1-4@m">
                                        <div className="uk-header uk-text-bolder uk-padding-small uk-padding-remove-horizontal">
                                            <a href="">   {item.attributes.title}  </a>
                                        </div>
                                        <div >

                                            {item.attributes.image.data.attributes.formats ? <img src={item.attributes.image.data.attributes.formats.small.url} alt="blog_img" className='uk-height-medium' uk-img /> :
                                                <img src={item.attributes.image.data.attributes.url} alt="blog_img" className='uk-height-medium' uk-img />
                                            }

                                        </div>
                                    </div>
                                    <div className="uk-width-1-2@m uk-padding-small uk-padding-remove-horizontal">




                                        <div >
                                            Written By: {" "}
                                            {item.attributes.writtenBy}
                                        </div>

                                        <div>
                                            Posted:  {item.attributes.date}
                                        </div>
                                    </div>


                                    <hr />

                                </div>
                            </a>
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
