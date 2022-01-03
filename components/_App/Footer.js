// Footer Component Style File Path: public/css/pages-and-components-css/footer.scss
import React from 'react';
import Link from 'next/link';
import CookieConsent from "react-cookie-consent";

const FooterStyleThree = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="uk-container uk-container-expand">
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-flex uk-flex-wrap" uk-grid>
                    <div>
                        <div className="uk-card uk-card-primary uk-card-body ">
                            <h3 className="uk-card-title">Quick Links</h3>
                            <p>Quick Links</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-primary uk-card-body">
                            <h3 className="uk-card-title">Latest News</h3>
                            <p>Latest </p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-primary uk-card-body">
                            <h3 className="uk-card-title">We are part of</h3>
                            <p>RYA</p>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <p>Copyright &copy; {currentYear} <strong>7 Seas Sailing </strong>. All Rights Reserved.</p>
                    </div>
                </div>




                <CookieConsent
                    location="bottom"
                    buttonText="I agree"
                    cookieName="ccAcceptCookie"
                    style={{ background: "#7972c4" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
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