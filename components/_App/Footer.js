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
            <div className="uk-container uk-container-large uk-padding-large " style={{ "zIndex": "9" }}>


                <div className="uk-child-width-1-3@s uk-grid-small uk-flex uk-flex-center  uk-flex-wrap uk-text-center " >

                    <div className="uk-card uk-card-small uk-flex uk-flex-center ">

                        <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-padding">


                            <span className="uk-icon uk-padding" ><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"></path></svg></span>

                            {contactInfo && <p > {contactInfo.phone}</p>}
                        </div>


                    </div>
                    <div className="uk-card  uk-card-small uk-flex uk-flex-center">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-padding">

                            <span className="uk-icon  uk-padding" ><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"></polyline><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"></path></svg></span>


                            {contactInfo && <p > {contactInfo.email}</p>}
                        </div>
                    </div>
                    <div className="uk-card  uk-card-small  uk-flex uk-flex-center">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-padding">
                            <span className="uk-padding uk-icon" ><svg width="60" height="60" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"></path><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"></circle></svg></span>
                            {contactInfo && <p > {contactInfo.address}</p>}
                        </div>
                    </div>
                    {/*                     <div className="uk-card uk-card-small ">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-padding">
                            <h3 className="uk-card-title">Open Time  </h3>
                            {contactInfo && <p> {contactInfo.openTime}</p>}
                        </div>

                    </div> */}

                </div>
                <hr />

                <div className="uk-child-width-1-3@s uk-grid-small uk-flex  uk-flex-wrap u" >


                    <div className="uk-card uk-card-secondary uk-card-small ">
                        <div className="uk-card uk-card-secondary uk-card-body ">
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
                                    <Link href="/gallery" activeClassName="active" >

                                        <a>Gallery</a>
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
                        <div className="uk-card uk-card-secondary uk-card-body ">
                            <h3 className="uk-card-title">WE ARE PART OF  </h3>
                            <ul className="uk-list  ">
                                <li>



                                    <a href="https://www.rya.org.uk/" target='_blank' rel="noreferrer"> RYA Training Centre</a>

                                </li>
                                <li>


                                    <a href="https://www.exadasyachts.com" target='_blank' rel="noreferrer">Exadas Yachts</a>


                                </li>
                                <li>



                                    <a href="https://athenian-yachts.gr/en/" target='_blank' rel="noreferrer">Athenian Yachts</a>


                                </li>
                                <li>


                                    <a href="https://technohull.com/" target='_blank' rel="noreferrer">Technohull</a>


                                </li>
                                <li>



                                    <a href="https://www.cosmostraining.gr/" target='_blank' rel="noreferrer"> Cosmos Training</a>


                                </li>


                            </ul>
                        </div>



                    </div>

                    <div className="uk-card uk-card-secondary uk-card-small ">


                        <form action="">

                            <div className="uk-card uk-card-secondary uk-card-body uk-flex uk-flex-center uk-flex-column " uk-form-custom>
                                <label  > <h3 className="uk-card-title">  JOIN OUR NEWSLETTER  </h3>
                                    <input type="text" className='uk-input uk-form-width-large' />
                                </label>
                                <button className='uk-button uk-button-default uk-button-large uk-margin' type="button" tabIndex="-1">SUBSCRIBE</button>
                            </div>
                        </form>


                    </div>
                </div>
                <div className="uk-container uk-container-expand uk-flex uk-flex-wrap uk-flex-around uk-padding uk-light  ">

                    <img src={logo} alt="logo" height={64} width={217} />
                    <img src={rya} alt="logo" height={94} width={117} />

                    <div className="uk-card">
                        <h3 className='card-title'>
                            Follow us

                        </h3>
                    </div>

                </div>

                <div className="copyright-area uk-text-center">
                    <p>Copyright &copy; {currentYear} <strong>7 Seas Sailing </strong>. All Rights Reserved.</p>
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