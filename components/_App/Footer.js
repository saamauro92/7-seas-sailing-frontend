/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";
import logo from '../../assets/seven-seas-logo.webp'
import rya from '../../assets/rya.webp'

const FooterStyleThree = (data) => {

    const currentYear = new Date().getFullYear();

    const contactInfo = data.data.attributes;

    return (
        <>
            <div className="uk-container uk-container-large uk-padding-large uk-light " style={{ "zIndex": "9" }}>


                <div className="uk-child-width-1-3@s uk-grid-small uk-flex uk-flex-center  uk-flex-wrap uk-text-center " >

                    <div className="uk-card uk-card-small uk-flex uk-flex-center ">

                        <div className="uk-card  uk-card-body uk-width-1-2@m uk-padding">


                            <span className="uk-icon uk-padding" ><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"></path></svg></span>

                            {contactInfo && <p > {contactInfo.phone}</p>}
                        </div>


                    </div>
                    <div className="uk-card  uk-card-small uk-flex uk-flex-center">
                        <div className="uk-card   uk-card-body uk-width-1-2@m uk-padding">

                            <span className="uk-icon  uk-padding" ><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"></polyline><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg></span>


                            {contactInfo && <p > {contactInfo.email}</p>}
                        </div>
                    </div>
                    <div className="uk-card  uk-card-small  uk-flex uk-flex-center">
                        <div className="uk-card  uk-card-body uk-width-1-2@m uk-padding">
                            <span className="uk-padding uk-icon" ><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"></circle></svg></span>
                            {contactInfo && <p > {contactInfo.address}</p>}
                        </div>
                    </div>


                </div>
                <hr />

                <div className="uk-child-width-1-3@s uk-grid-small uk-flex  uk-flex-wrap u" >


                    <div className="uk-card   uk-card-small ">
                        <div className="uk-card  uk-card-body ">
                            <h3 className="uk-card-title">QUICK LINKS</h3>
                            <ul className="uk-list  ">
                                <li>
                                    <Link href="/aboutus" activeClassName="active">

                                        <a>About us</a>
                                    </Link>
                                </li>
                                <li>

                                    <Link href="/courses" activeClassName="active">
                                        <a>Courses</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/activities-and-services" activeClassName="active">
                                        <a>Activities {"&"} Services</a>
                                    </Link>
                                </li>


                                <li>
                                    <Link href="/news" activeClassName="active" >

                                        <a>Blog</a>
                                    </Link>
                                </li>


                                <li>

                                    <Link href="/contactus" activeClassName="active" >

                                        <a >Contact us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>



                    </div>

                    <div className="uk-card  uk-card-small">
                        <div className="uk-card   uk-card-body ">
                            <h3 className="uk-card-title">PARTNERS  </h3>
                            <ul className="uk-list  ">
                                <li>



                                    <a href="https://www.tailwindyachting.com/" target='_blank' rel="noreferrer"> Tailwind Yachting</a>

                                </li>
                                <li>


                                    <a href="http://www.cosmostraining.gr/" target='_blank' rel="noreferrer">
                                        Cosmos Nautical Training Center</a>


                                </li>
                                <li>



                                    <a href="hwww.divingstore.gr" target='_blank' rel="noreferrer">Diving Store</a>


                                </li>



                            </ul>
                        </div>



                    </div>

                    <div className="uk-card  uk-card-small ">




                        <div className="uk-card  uk-card-body uk-flex uk-flex-center uk-flex-column " uk-form-custom>
                            <label  > <h3 className="uk-card-title uk-text-center">  JOIN OUR NEWSLETTER  </h3>

                            </label>
                            <a href="https://7seassailing.us5.list-manage.com/subscribe?u=9eb7f6b85d6d3ab5bf703f1a9&id=85d8a5aae0" target='_blank' rel="noreferrer" className='uk-text-center'>
                                <button className='uk-button uk-button-default uk-button-large  uk-margin' type="button" tabIndex="-1">
                                    Subscribe

                                </button>
                            </a>
                        </div>



                    </div>
                </div>
                <div className="uk-container uk-container-expand uk-flex uk-flex-wrap uk-flex-around uk-padding uk-light  ">

                    <div className="uk-container uk-container-medium ">
                        <div className="uk-card">
                            <h3 className='card-title uk-text-center '>
                                Follow us

                            </h3>

                        </div>
                        <div className='uk-card ' >
                            <a href="https://www.facebook.com/pages/Seven-Seas-School-of-Yachting" target='_blank' rel="noreferrer">

                                <span className="uk-icon uk-margin-right"><svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"></path></svg></span>
                            </a>

                            <a href="https://www.instagram.com/7seasschool/" target='_blank' rel="noreferrer">

                                <span className="uk-icon uk-margin-right"><svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path><circle cx="14.87" cy="5.26" r="1.09"></circle><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg></span>
                            </a>
                            <a href="https://www.youtube.com/channel/UC1i3P45GqP9sNBf6caKBqHg" target='_blank' rel="noreferrer">

                                <span className="uk-icon"><svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"></path></svg></span>
                            </a>
                        </div>

                    </div>


                </div>

                <div className="copyright-area uk-text-center">
                    <p>Copyright &copy; {currentYear} <strong className='uk-light'>- Seven Seas School of Yachting </strong>. All Rights Reserved.</p>
                </div>


                <CookieConsent
                    location="bottom"
                    buttonText="I agree"
                    cookieName="ccAcceptCookie"
                    style={{ background: "#2a2a2a" }}
                    buttonStyle={{ color: "#2a2a2a", fontSize: "13px" }}
                    expires={150}
                >
                    This website uses cookies to enhance the user experience.{" "}
                    {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
                </CookieConsent>
            </div>

        </>
    );
}

export default FooterStyleThree;