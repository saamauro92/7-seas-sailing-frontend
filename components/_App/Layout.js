import React from 'react'
import Head from "next/head"
import GoTop from './GoTop';
import FooterStyleThree from './Footer';
import Nav from './Nav';
import NextNProgress from "nextjs-progressbar";


const Layout = ({ children, data, courses, activities, homepage, }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, [])

    return (
        < >

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {/*   <NextNProgress /> */}
            {/*        {loader ? <NextNProgress /> : null} */}
            <Nav courses={courses} activities={activities} homepage={homepage} />
            <main>


                {children}
            </main>

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
            <div className=' uk-background-secondary footer_bg' >
                <FooterStyleThree data={data} />
            </div>
        </>
    );
}

export default Layout;