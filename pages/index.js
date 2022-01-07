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


        {/*      <Image src={courses[1].attributes.image.data.attributes.url} alt="cover" width={800} height={500} layout="responsive" priority>

        </Image> * */}

        <div
          id="banner"
          className="uk-height-large uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light "
          data-src={courses[1].attributes.image.data.attributes.url}
          data-srcset={courses[1].attributes.image.data.attributes.url}
          data-sizes="(min-width: 650px) 650px, 100vw"
          data-uk-img
        ></div>


        {courses.map((course) => <> {course.attributes.title}</>)}

      </div>





    </main>

  )
}


