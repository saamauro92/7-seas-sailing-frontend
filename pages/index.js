import Head from 'next/head'
import Image from 'next/image'
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'




export async function getStaticProps() {

  // Run API calls in parallel
  const [coursesRes, homepageRes] = await Promise.all([
    fetchAPI("/courses", { populate: "*" }),
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




        <Image src={courses[1].attributes.image.data.attributes.url} width={1600} height={800} alt="cover">

          {/*          <img src={courses[1].attributes.image.data.attributes.url} alt="" uk-cover  /> */}

        </Image>







        {courses.map((course) => <> {course.attributes.title}</>)}

      </div>





    </main>

  )
}


