import React from 'react'
import { fetchAPI } from '../lib/api'
import Card from '../components/Card/Card'
import SEO from '../components/Seo/Seo'

const courses = ({ courses, homepage }) => {

    return (


        <div className='uk-container uk-container-large'>

            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}
            <h2>Courses </h2>

            {courses.map((course, index) =>

                <div key={index}>

                    <Card data={course} />
                </div>

            )}


        </div>
    )
}

export default courses


export async function getStaticProps() {

    const coursesRes = await fetchAPI("/courses", { populate: "*" })

    const homepageRes = await fetchAPI("/homepage", {
        populate: {
            hero: "*",
            seo: { populate: "*" },
        },
    })

    return {
        props: {

            courses: coursesRes.data,
            homepage: homepageRes.data,
        },
        revalidate: 1,
    }
}
