import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Hero from '../components/Hero/Hero'
import NewsSidebar from '../components/NewsSidebar/NewsSidebar'




export async function getStaticProps() {


  const [coursesRes, homepageRes, latestNews] = await Promise.all([
    fetchAPI("/courses", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: { populate: "*" },
        seo: { populate: "*" },
      },
    }),
    fetchAPI("/news", { populate: "*" }),
  ])

  return {
    props: {
      courses: coursesRes?.data,
      homepage: homepageRes?.data,
      latestNews: latestNews?.data,
    },
    revalidate: 1,
  }

}




export default function Home({ courses, homepage, latestNews }) {


  return (

    <main>
      <div className="uk-cover-container uk-light">

        <NewsSidebar latestNews={latestNews} courses={courses} />


        {homepage && homepage.attributes.seo && <SEO data={homepage.attributes.seo} />}


        <Hero courses={courses} images={homepage.attributes.hero} />


      </div>



    </main>

  )
}


