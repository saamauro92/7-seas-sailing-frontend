import '../styles/globals.css'
import Layout from '../components/_App/Layout'
import { fetchAPI } from '../lib/api';
import courses from './aboutus';

/* export async function getStaticProps() {

  const contactRes = await fetchAPI("/contact", { populate: "*" });

  console.log("res contanct", contactRes)
  return {
    props: {

      contactDetails: contactRes.data,

    },
    revalidate: 1,
  }
} */


export default function MyApp({ Component, pageProps }) {

  const { courses } = pageProps;
  return (
    <Layout data={pageProps.contactDetails} courses={courses}>
      <Component {...pageProps} />
    </Layout>
  )
}


MyApp.getInitialProps = async (ctx) => {

  /*   const appProps = await App.getInitialProps(ctx)
   */
  const contactRes = await fetchAPI("/contact", { populate: "*" });
  const coursesRes = await fetchAPI("/courses", { populate: "*" });


  // Pass the data to our page via props
  return {
    /*     ...appProps, */
    pageProps: {
      contactDetails: contactRes.data,
      courses: coursesRes.data,
    },
  }
}

/*   const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  })
 
 */