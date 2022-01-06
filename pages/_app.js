import '../styles/globals.css'
import Layout from '../components/_App/Layout'
import { fetchAPI } from '../lib/api';

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


  return (
    <Layout data={pageProps.contactDetails}>
      <Component {...pageProps} />
    </Layout>
  )
}


MyApp.getInitialProps = async (ctx) => {

  /*   const appProps = await App.getInitialProps(ctx)
   */
  const contactRes = await fetchAPI("/contact", { populate: "*" });

  // Pass the data to our page via props
  return {
    /*     ...appProps, */
    pageProps: {
      contactDetails: contactRes.data
    },
  }
}

