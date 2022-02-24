import React from 'react'
import Head from "next/head"
import GoTop from './GoTop';
import FooterStyleThree from './Footer';
import Nav from './Nav';
import NewsSidebar from '../NewsSidebar/NewsSidebar';
import { useRouter } from 'next/router';


const Layout = ({ children, data, courses, activities, homepage, }) => {
    const router = useRouter();
    // Preloader
    /*     const [loader, setLoader] = React.useState(true);
        React.useEffect(() => {
            setTimeout(() => setLoader(false), 1500);
        }, [])
     */
    return (
        < >
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>Seven Seas Sailing</title>
            </Head>


            {/*         {loader ? <h5> LOADING...</h5> : null} */}

            <Nav courses={courses} activities={activities} homepage={homepage} />

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            <div className=' uk-background-secondary footer_bg' >
                <FooterStyleThree data={data} />
            </div>
        </>
    );
}

export default Layout;