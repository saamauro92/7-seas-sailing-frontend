import { React, useState, useEffect } from "react";
import Link from "../../utils/ActiveLink";
import logo from '../../assets/seven-seas-logo.png'
import Image from 'next/image'

function Nav() {


    const [showBar, setShowBar] = useState(true);
    const [showCloseButton, setShowCloseButton] = useState(true);
    const showBurguer = () => {
        if (window.innerWidth <= 967) {
            setShowBar(false);
            setShowCloseButton(true);
        } else {
            setShowBar(true);
            setShowCloseButton(false);
        }
    };

    const closeMenu = () => {
        if (window.innerWidth <= 967) {
            setShowBar(false);
        } else {
            setShowBar(true);
        }
    };

    useEffect(() => {
        showBurguer();
        window.addEventListener('resize', showBurguer);
    }, []);

    /*  responsive sidebar end*/
    /*  responsive sidebar end*/


    return showBar ? (


        /*        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"> */


        <nav className="uk-navbar-container uk-margin uk-navbar" uk-navbar="">
            <div className="uk-navbar-left">



                <Link href="/">
                    <a className="uk-navbar-item uk-logo">
                        <Image src={logo} alt="logo" height={64} width={217} />
                    </a>
                </Link>

            </div>
            <div className="uk-navbar-center">

                <ul className="uk-navbar-nav">
                    <li>

                        <Link href={"/courses"}>

                            <a className="nav-link" >Courses</a>
                        </Link>



                        <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{ "left": "0px", "top": "80px" }}>
                            <ul className="uk-nav uk-navbar-dropdown-nav">

                                <Link href={"/courses/coastal-skipper"}>
                                    <li className="uk-parent uk-margin">
                                        <a >Coastal Skipper</a>


                                    </li>
                                </Link>
                                <Link href={"/courses/day-skipper"}>
                                    <li className="uk-parent uk-margin">
                                        <a >Day Skipper</a>


                                    </li>
                                </Link>
                                <Link href={"/courses/day-skipper-motor"}>
                                    <li className="uk-parent uk-margin">
                                        <a >Day Skipper Motor</a>


                                    </li>
                                </Link>
                                <Link href={"/courses/yachtmaster-exam-preparation"}>
                                    <li className="uk-parent uk-margin">
                                        <a >Yachtmaster Exam Preparation </a>


                                    </li>
                                </Link>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href={"/activities-and-services"}>

                            <a className="nav-link"> Activities {"&"} Services</a>
                        </Link>
                        <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{ "left": "0px", "top": "80px" }}>
                            <ul className="uk-nav uk-navbar-dropdown-nav">

                                <li className="uk-parent uk-margin">
                                    <a href="#">Parent</a>

                                </li>
                                <li className="uk-parent uk-margin">
                                    <a href="#">Parent</a>

                                </li>
                                <li className="uk-parent uk-margin">
                                    <a href="#">Parent</a>

                                </li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href={"/aboutus"}>

                            <a className="nav-link"> About Us</a>
                        </Link>
                        <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left" style={{ "left": "0px", "top": "80px" }}>
                            <ul className="uk-nav uk-navbar-dropdown-nav">

                                <Link href={"/courses/coastal-skipper"}>
                                    <li className="uk-parent">
                                        <a >Coastal Skipper</a>


                                    </li>
                                </Link>
                                <li className="uk-parent">
                                    <a href="#">Parent</a>

                                </li>
                                <li className="uk-parent">
                                    <a href="#">Parent</a>

                                </li>

                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href={"/news"}>

                            <a className="nav-link">  News</a>
                        </Link>

                    </li>


                </ul>

            </div>

        </nav>
        /*         </div> */
    ) : (


        <nav className="uk-navbar-container uk-margin uk-navbar" uk-navbar="">
            <div className="uk-navbar-left">



                <Link href="/">
                    <a className="uk-navbar-item uk-logo">
                        <Image src={logo} alt="logo" height={64} width={217} />
                    </a>
                </Link>

            </div>


            <div className="uk-navbar-right">


                <ul className="uk-navbar-nav">

                    <div id="my-id" uk-offcanvas>

                        <a className="uk-navbar-toggle uk-icon uk-navbar-toggle-icon" uk-toggle="target: #offcanvas-nav-primary" href="#">
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <rect y="9" width="20" height="2"></rect><rect y="3" width="20" height="2">
                                </rect><rect y="15" width="20" height="2">
                                </rect>
                            </svg>
                        </a>


                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                            <button className="uk-offcanvas-close uk-close-large uk-icon uk-close" type="button" uk-close="">
                                <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

                                </svg>
                            </button>

                            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                                <Image src={logo} alt="logo" height={64} width={217} />
                                <ul className="uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical">

                                    <li className="uk-parent">


                                        <ul className="uk-nav uk-nav-primary " uk-nav="">

                                            <li className="uk-parent  " >
                                                <a className="uk-margin" aria-expanded="false">Courses</a>
                                                <ul className="uk-nav-sub" hidden="">
                                                    <li><a className="uk-margin">Coastal Skipper </a></li>

                                                    <li><a className="uk-margin">Sub </a></li>


                                                </ul>
                                            </li>

                                            <li className="uk-parent  " >
                                                <a className="uk-margin" aria-expanded="false">Activities {"&"} Services</a>
                                                <ul className="uk-nav-sub" hidden="">
                                                    <li><a className="uk-margin">Sub </a></li>
                                                    <li><a className="uk-margin">Sub </a></li>


                                                </ul>
                                            </li>


                                        </ul>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>

                </ul>


            </div>


        </nav >
    )

}

export default Nav




/* 

                   <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical uk-nav-parent-icon" uk-nav="">
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li className="uk-parent">
                                <a href="#" aria-expanded="false">Parent</a>
                                <ul className="uk-nav-sub" hidden="">
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a></li>
                                    <li><a href="#">Sub item</a>
                                        <ul>
                                            <li><a href="#">Sub item</a></li>
                                            <li><a href="#">Sub item</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#js-options">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>



*/