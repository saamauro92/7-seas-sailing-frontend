import React from 'react'
import Head from "next/head"
import GoTop from './GoTop';
import FooterStyleThree from './Footer';
import Nav from './Nav';


const Layout = ({ children, data, courses }) => {

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

                <title>7 Seas Sailing</title>
            </Head>


            {/*         {loader ? <h5> LOADING...</h5> : null} */}
            <Nav courses={courses} />

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            <div className=' uk-background-secondary'>
                <FooterStyleThree data={data} />
            </div>
        </>
    );
}

export default Layout;