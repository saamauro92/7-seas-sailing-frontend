import { React, useState, useEffect } from "react";
import Link from "../../utils/ActiveLink";
import logo from '../../assets/seven-seas-logo.png'
import rya from '../../assets/rya.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Nav() {


    const router = useRouter()
    const currentRoute = router.pathname


    const [showBar, setShowBar] = useState(true);


    const showBurguer = () => {
        if (window.innerWidth <= 1200) {
            setShowBar(false);

        } else {
            setShowBar(true);

        }
    };



    useEffect(() => {
        showBurguer();
        window.addEventListener('resize', showBurguer);
    }, []);





    return showBar ? (




        <nav className="uk-navbar-container uk-margin uk-navbar" uk-navbar="">
            <div className="uk-navbar-left nav-logos">



                <Link href="/">
                    <a className="uk-navbar-item uk-logo" >
                        <Image src={logo} alt="logo" height={64} width={217} />
                    </a>
                </Link>
                <div className="uk-visible@s">

                    <Image src={rya} alt="logo" height={94} width={117} />
                </div>


            </div>
            <div className="uk-navbar-center">

                <ul className="uk-navbar-nav">
                    <li className="nav-item">

                        <Link href="/courses" activeClassName="active">
                            <a className="nav-link">Courses</a>

                        </Link>



                        <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{ "left": "0px", "top": "80px" }}>
                            <ul className="uk-nav uk-navbar-dropdown-nav">

                                <Link href="/courses/coastal-skipper">
                                    <li className="uk-parent uk-margin">
                                        <a className="nav-link">
                                            Coastal Skipper</a>


                                    </li>
                                </Link>
                                <Link href="/courses/day-skipper">
                                    <li className="uk-parent uk-margin">
                                        <a className="nav-link">
                                            Day Skipper</a>


                                    </li>
                                </Link>
                                <Link href="/courses/day-skipper-motor">
                                    <li className="uk-parent uk-margin">
                                        <a className="nav-link">
                                            Day Skipper Motor</a>


                                    </li>
                                </Link>
                                <Link href="/courses/yachtmaster-exam-preparation">
                                    <li className="uk-parent uk-margin">
                                        <a className="nav-link">

                                            Yachtmaster Exam Preparation </a>


                                    </li>
                                </Link>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/activities-and-services" activeClassName="active">

                            <a className="nav-link"> Activities {"&"} Services</a>
                        </Link>
                        <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{ "left": "0px", "top": "80px" }}>
                            <ul className="uk-nav uk-navbar-dropdown-nav">

                                <li className="uk-parent uk-margin">
                                    <a className="nav-link">
                                        Parent</a>

                                </li>
                                <li className="uk-parent uk-margin">
                                    <a className="nav-link">
                                        Parent</a>

                                </li>
                                <li className="uk-parent uk-margin">
                                    <a className="nav-link">
                                        Parent</a>

                                </li>

                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link href="/aboutus" activeClassName="active">

                            <a className="nav-link">
                                About Us</a>
                        </Link>
                        <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{ "left": "0px", "top": "80px" }}>
                            <ul className="uk-nav uk-navbar-dropdown-nav">

                                <Link href="/courses/coastal-skipper">
                                    <li className="uk-parent">
                                        <a className="nav-link">
                                            Coastal Skipper</a>


                                    </li>
                                </Link>
                                <li className="uk-parent">
                                    <a className="nav-link">
                                        Parent</a>

                                </li>
                                <li className="uk-parent">
                                    <a className="nav-link">
                                        Parent</a>

                                </li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/news" activeClassName="active" >

                            <a className={currentRoute === "/news" ? 'active' : ''}>  News</a>
                        </Link>

                    </li>


                </ul>

            </div>

        </nav >

    ) : (


        <nav className="uk-navbar-container uk-margin uk-navbar" uk-navbar="">
            <div className="uk-navbar-left">



                <Link href="/">
                    <a className="uk-navbar-item uk-logo">
                        <Image src={logo} alt="logo" height={64} width={217} />
                    </a>
                </Link>
                <div className="uk-visible@s">
                    <Image src={rya} alt="logo" height={94} width={117} />
                </div>
            </div>


            <div className="uk-navbar-right">


                <ul className="uk-navbar-nav">

                    <div id="my-id" uk-offcanvas>
                        <li>

                            <a className="uk-navbar-toggle uk-icon uk-navbar-toggle-icon" uk-toggle="target: #offcanvas-nav-primary" >
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2">
                                    </rect><rect y="15" width="20" height="2">
                                    </rect>
                                </svg>
                            </a>
                        </li>

                        {/* new off canvas  start*/}
                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">

                            <div className="uk-offcanvas-bar ">
                                <button className="uk-offcanvas-close uk-close-large uk-icon uk-close" type="button" uk-close="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

                                    </svg>
                                </button>

                                <ul className="uk-nav uk-nav-primary uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon uk-nav-divider" uk-nav="multiple: true">


                                    <li className="uk-parent">
                                        <div className=" uk-position-absolute ">

                                            <Link href="/courses"  >
                                                <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Courses</a>
                                            </Link>

                                        </div>

                                        <a href="" ></a>
                                        <ul className="uk-nav-sub  " hidden="">
                                            <li className="uk-flex uk-flex-start ">
                                                <Link href="/courses/coastal-skipper"  >
                                                    <a uk-toggle="target: #offcanvas-nav-primary">Coastal Skipper </a>
                                                </Link></li>
                                            <li className="uk-flex uk-flex-start"><a uk-toggle="target: #offcanvas-nav-primary">Sub item</a></li>
                                            <li className="uk-flex uk-flex-start"><a uk-toggle="target: #offcanvas-nav-primary">Sub item</a></li>


                                        </ul>
                                    </li>
                                    <li className="uk-parent">
                                        <div className=" uk-position-absolute ">

                                            <Link href="/activities-and-services">
                                                <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Activities {"&"} Services</a>
                                            </Link>

                                        </div>

                                        <a href="" ></a>
                                        <ul className="uk-nav-sub  " hidden="">
                                            <li className="uk-flex uk-flex-start "><a uk-toggle="target: #offcanvas-nav-primary">Coastal Skipper </a></li>
                                            <li className="uk-flex uk-flex-start"><a uk-toggle="target: #offcanvas-nav-primary">Sub item</a></li>
                                            <li className="uk-flex uk-flex-start"><a uk-toggle="target: #offcanvas-nav-primary">Sub item</a></li>


                                        </ul>
                                    </li>
                                    <li className="uk-parent">
                                        <div className=" uk-position-abslute  uk-margin">

                                            <Link href="/aboutus">
                                                <a className="nav-link responsive-link-font uk-margin" uk-toggle="target: #offcanvas-nav-primary">About us</a>
                                            </Link>

                                        </div>


                                    </li>


                                    <div className=" uk-position-abslute  uk-margin">

                                        <Link href="/news">
                                            <a className="nav-link responsive-link-font uk-margin" uk-toggle="target: #offcanvas-nav-primary">News</a>
                                        </Link>

                                    </div>



                                </ul>






                                <div>

                                </div>

                            </div>

                        </div>
                        {/* new off canvas end */}

                    </div>

                </ul>


            </div>

        </nav >
    )

}

export default Nav




