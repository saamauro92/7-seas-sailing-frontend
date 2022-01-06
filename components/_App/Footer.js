import React from 'react';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";

const FooterStyleThree = (data) => {

    const currentYear = new Date().getFullYear();
    console.log(data.data.attributes.phone, "DATA FO;")

    const contactInfo = data.data.attributes;

    return (
        <>
            <div className="uk-container uk-container-expand uk-padding-remove">




                <div className="uk-container uk-container-expand uk-flex uk-flex-wrap uk-flex-center uk-align-center uk-padding-remove uk-margin-remove ">

                    <div className="uk-tile uk-width-1-4@m">
                        <h3 className="uk-h4">Phone  </h3>

                        {contactInfo && <p > {contactInfo.phone}</p>}
                    </div>
                    <div className="uk-tile uk-width-1-4@m">
                        <h3 className="uk-h4">Email  </h3>
                        {contactInfo && <p > {contactInfo.email}</p>}
                    </div>

                    <div className="uk-tile uk-width-1-4@m">
                        <h3 className="uk-h4">Address  </h3>
                        {contactInfo && <p > {contactInfo.address}</p>}
                    </div>
                    <div className="uk-tile uk-width-1-4@m">
                        <h3 className="uk-h4">Open Time  </h3>
                        {contactInfo && <p> {contactInfo.openTime}</p>}



                    </div>








                </div>


                <div className="uk-tile uk-tile-secondary">
                    <h3 className="uk-card-title">We are part of</h3>
                    <p>RYA</p>
                </div>

                <div className="copyright-area">
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