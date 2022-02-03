import React from 'react'
import SEO from '../components/Seo/Seo'
import Link from 'next/link';
import Card from '../components/Card/Card'
const ActivitiesAndServicesPage = ({ homepage, activities }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (


        <>
            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small  uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Activities and Services" />}
                <h3
                    className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove  "
                    uk-toggle="cls: uk-heading-small;  mode: media; media: @s"
                > Activities {"&"} Services   </h3>


            </div>


            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Activities and Services" />}





            <div className='uk-container uk-container-medium uk-padding-medium uk-animation-slide-bottom'>
                <ul className="uk-breadcrumb  uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-text-center uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Activities {"&"} Services</span></li>

                </ul>

                <div className="uk-flex uk-flex-around uk-flex-wrap uk-margin-large">


                    {activities && activities.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}


                    {activities && activities.length > 1 && activities.map((activitie) =>

                        activitie.attributes.category === "Mile_Building" ? null :

                            <>
                                <Card data={activitie} slug="activities-and-services" />



                            </>


                    )}
                </div>
                <h4 className=' uk-padding  t uk-text-bold uk-heading-line ' ><span>Mile Building</span>  </h4>
                <div className="uk-flex uk-flex-around uk-flex-wrap">


                    {activities && activities.attributes && <SEO data={homepage.attributes.seo} metaTitle="courses" />}


                    {activities && activities.length > 1 && activities.map((activitie) =>

                        activitie.attributes.category === "Mile_Building" ?

                            <>
                                <Card data={activitie} slug="activities-and-services" />



                            </>
                            : null


                    )}
                </div>



            </div>



        </>
    )
}

export default ActivitiesAndServicesPage


