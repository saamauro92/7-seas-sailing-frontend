import '../styles/globals.css'
import Layout from '../components/_App/Layout'
import { fetchAPI } from '../lib/api';



export default function MyApp({ Component, pageProps }) {

  const { courses, activities } = pageProps;
  return (
    <Layout data={pageProps.contactDetails} courses={courses} activities={activities}>
      <Component {...pageProps} />
    </Layout>
  )
}


MyApp.getInitialProps = async (ctx) => {


  const contactRes = await fetchAPI("/contact", { populate: "*" });
  const coursesRes = await fetchAPI("/courses", { populate: "*" });
  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      hero: { populate: "*" },
      seo: { populate: "*" },
    },
  })
  const activitiesRes = await fetchAPI("/activities", { populate: "*" });

  // Pass the data to our page via props
  return {

    pageProps: {
      contactDetails: contactRes.data,
      courses: coursesRes.data,
      homepage: homepageRes.data,
      activities: activitiesRes.data,
    },
  }
}

