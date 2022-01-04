import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from '../lib/api'
import styles from '../styles/Home.module.css'
import baseApiUrl from '../utils/baseApiUrl'
import SEO from '../components/Seo/Seo'




export async function getStaticProps() {

  // Run API calls in parallel
  const [coursesRes, homepageRes] = await Promise.all([
    fetchAPI("/courses", { populate: "*" }),
    /*     fetchAPI("/categories", { populate: "*" }), */
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ])



  return {
    props: {
      courses: coursesRes?.data,
      /*      categories: categoriesRes?.data, */
      homepage: homepageRes?.data,
    }
  }

}




export default function Home({ courses, homepage }) {


  return (


    <main>

      <div className="test-height uk-cover-container uk-light">





        {homepage && homepage.attributes.seo && <SEO data={homepage.attributes.seo} />}





        <img src={courses[1].attributes.image.data.attributes.url} alt="" uk-cover />



        {courses.map((course) => <> {course.attributes.title}</>)}

      </div>





    </main>

  )
}


