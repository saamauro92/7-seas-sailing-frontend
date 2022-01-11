import React from 'react'
import { fetchAPI } from '../lib/api'
import Card from '../components/Card/Card'
import SEO from '../components/Seo/Seo'
import Link from 'next/link'

const courses = ({ courses, homepage }) => {
    const imgBanner = homepage.attributes.hero.background.data.attributes.url;
    return (

        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
            >
                <p className="banner-titles uk-heading-medium uk-text-bolder ">Our Courses</p>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Courses</span></li>

                </ul>


            </div>
            <div className='uk-container uk-container-large uk-padding'>


                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}


                {courses && courses.length > 1 && courses.map((course, index) =>

                    <div key={index}>

                        <Card data={course} />
                    </div>

                )}


            </div>
        </>
    )
}

export default courses


