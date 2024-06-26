import "../styles/globals.css";
import Layout from "../components/_App/Layout";
import { fetchAPI } from "../lib/api";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as ga from "../lib/analytics";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const { courses, activities, homepage, testimonials } = pageProps;

  return (
    <Layout
      data={pageProps.contactDetails}
      courses={courses}
      activities={activities}
      homepage={homepage}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const contactRes = await fetchAPI("/contact", { populate: "*" });
  const coursesRes = await fetchAPI("/courses", { populate: "*" });
  const testiRes = await fetchAPI("/testimonials", { populate: "*" });
  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      seo: { populate: "*" },
      hero: { populate: "*" },
    },
  });
  const activitiesRes = await fetchAPI("/activities", { populate: "*" });

  // Pass the data to our page via props
  return {
    pageProps: {
      contactDetails: contactRes.data,
      courses: coursesRes.data,
      homepage: homepageRes.data,
      activities: activitiesRes.data,
      testimonials: testiRes.data,
    },
    revalidate: 1,
  };
};
