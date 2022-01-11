import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Hero from '../components/Hero/Hero'




export async function getStaticProps() {

  // Run API calls in parallel
  const [coursesRes, homepageRes] = await Promise.all([
    fetchAPI("/courses", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: { populate: "*" },
        seo: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      courses: coursesRes?.data,
      homepage: homepageRes?.data,
    },
    revalidate: 1,
  }

}




export default function Home({ courses, homepage }) {



  return (

    <main>

      <div className="test-height uk-cover-container uk-light">


        {homepage && homepage.attributes.seo && <SEO data={homepage.attributes.seo} />}



        <Hero courses={courses} images={homepage.attributes.hero} />
      </div>



    </main>

  )
}


