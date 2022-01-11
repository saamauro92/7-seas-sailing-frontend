/* eslint-disable react/no-children-prop */
import React from 'react'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'

const News = ({ homepage, news }) => {


    return (
        <>
            <div className="uk-container uk-container-large uk-height-large">
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
