/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";
import logo from '../../assets/seven-seas-logo.png'
import rya from '../../assets/rya.png'

const FooterStyleThree = (data) => {

    const currentYear = new Date().getFullYear();

    const contactInfo = data.data.attributes;

    return (
        <>
            <div className="uk-container uk-container-large uk-padding-large " style={{ "zIndex": "9" }}>


                <div className="uk-child-width-1-4@s uk-grid-small uk-flex  uk-flex-wrap uk-text-center " >

                    <div className="uk-card uk-card-small ">

                        <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-padding">


                            <h3 className="uk-card-title">Phone  </h3>

                            {contactInfo && <p > {contactInfo.phone}</p>}
                        </div>


                    </div>
                    <div className="uk-card  uk-card-small ">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-padding">
                            <h3 className="uk-card-title">Email  </h3>
                            {contactInfo && <p > {contactInfo.email}</p>}
                        </div>
                    </div>
                    <div className="uk-card  uk-card-small ">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-padding">
                            <h3 className="uk-card-title">Address  </h3>
                            {contactInfo && <p > {contactInfo.address}</p>}
                        </div>
                    </div>
                    <div className="uk-card uk-card-small ">
                        <div className="uk-card uk-card-secondary uk-card-body uk-width-1-2@m uk-padding">
                            <h3 className="uk-card-title">Open Time  </h3>
                            {contactInfo && <p> {contactInfo.openTime}</p>}
                        </div>

                    </div>

                </div>
                <hr />

                <div className="uk-child-width-1-3@s uk-grid-small uk-flex  uk-flex-wrap u" >


                    <div className="uk-card uk-card-secondary uk-card-small ">
                        <div className="uk-card uk-card-secondary uk-card-body ">
                            <h3 className="uk-card-title">QUICK LINKS</h3>
                            <ul className="uk-list  ">
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
                                    <Link href="/aboutus" activeClassName="active">

                                        <a>About us</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/news" activeClassName="active" >

                                        <a>News</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news" activeClassName="active" >

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

                                    <Link href="https://www.rya.org.uk/" activeClassName="active">

                                        <a href="" target='_blank'> RYA Training Centre</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="www.exadasyachts.com" activeClassName="active">

                                        <a href=" " target='_blank'>Exadas Yachts</a>

                                    </Link>
                                </li>
                                <li>
                                    <Link href="http://athenian-yachts.gr/en/" activeClassName="active">


                                        <a href=" " target='_blank'>Athenian Yachts</a>

                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://technohull.com/" activeClassName="active">

                                        <a href="" target='_blank'>Technohull</a>

                                    </Link>
                                </li>
                                <li>
                                    <Link href="http://www.cosmostraining.gr/" activeClassName="active" >


                                        <a href=" " target='_blank'> Cosmos Training</a>

                                    </Link>
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