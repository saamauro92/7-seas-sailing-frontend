/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import SEO from '../components/Seo/Seo'
import { fetchAPI } from '../lib/api';


const contact = ({ data, homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;

    console.log(data, " DATA CONTACT")
    return (

        <div className='' >

            <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small  uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imgBanner}
                data-srcset={imgBanner}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
                style={{ "zIndex": "9" }}
            >
                {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle="Contact Us" />}

                <h3 className="banner-titles  uk-text-bolder uk-margin-remove uk-padding-remove " uk-toggle="cls: uk-heading-small;  mode: media; media: @s"  >Contact us </h3>

            </div>

            <div className='uk-container uk-container-medium  uk-padding-medium uk-animation-slide-bottom uk-background-muted  '>

                <ul className="uk-breadcrumb uk-width-1-4@m uk-width-1-4@l banner-titles uk-heading-medium  uk-text-bolder uk-text-center uk-margin-remove uk-padding-small">
                    <li >

                        <Link href={"/"}>
                            <a href=""> Home</a>
                        </Link>
                    </li>
                    <li > <span > Contact us  </span></li>

                </ul>



            </div>

            <div className='uk-container uk-container-medium  uk-padding-horizontal-remove  uk-animation-slide-bottom uk-background-muted '>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9163.841776984542!2d23.71308931698944!3d37.91469711233857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1be7e8c128af7%3A0x1c00bd30206d14b0!2sAlimos%20174%2055%2C%20Grecia!5e0!3m2!1ses!2ses!4v1642844332808!5m2!1ses!2ses" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>

                <div className="uk-section">

                    <h2>Find us </h2>

                    <div className="uk-child-width-1-3@s  uk-flex uk-flex-center uk-flex-wrap " >

                        <div className="uk-card uk-card-small uk-flex uk-flex-center ">

                            <div className="uk-card  uk-card-body uk-width-1-2@m uk-padding ">


                                <span className="uk-icon uk-padding" ><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"></path></svg></span>

                                {data && <p > {data.attributes.phone}</p>}
                            </div>


                        </div>
                        <div className="uk-card  uk-card-small uk-flex uk-flex-center  ">
                            <div className="uk-card uk-card-body uk-width-1-2@m uk-padding "  >

                                <span className="uk-icon uk-padding" ><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"></polyline><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg></span>


                                {data && <p > {data.attributes.email}</p>}
                            </div>
                        </div>
                        <div className="uk-card  uk-card-small uk-flex uk-flex-center ">
                            <div className="uk-card  uk-card-body uk-width-1-2@m uk-padding ">
                                <span className="uk-padding uk-icon"><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"></circle></svg></span>
                                {data && <p > {data.attributes.address}</p>}
                            </div>
                        </div>


                    </div>
                </div>


                <div className="uk-section uk-text-center">

                    <Link href="https://7seassailing.com/booking-form.html" passHref>

                        <button className='uk-button uk-button-secondary'>   Send us a message</button>
                    </Link>
                </div>


            </div>

        </div>

    )
}

export default contact


export async function getStaticProps() {


    const contactData = await fetchAPI("/contact", {
        populate: "*",
    })


    return {
        props: {

            data: contactData.data,
        },
        revalidate: 1,
    }
}
