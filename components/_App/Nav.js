/* eslint-disable @next/next/no-img-element */
import { React, useState, useEffect } from "react";
import Link from "../../utils/ActiveLink";
import logo from '../../assets/seven-seas-logo.webp'
import rya from '../../assets/rya.webp'
import { useRouter } from 'next/router';


function Nav({ courses, activities }) {
    const router = useRouter();


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


        <div uk-sticky="animation: uk-animation-fade ; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky   ; cls-inactive: uk-navbar-default  ; top: 5">


            <nav className="uk-navbar-container   uk-navbar  uk-margin-remove uk-navbar-default" uk-navbar="">

                <div className="main_navbar uk-flex ">


                    <div className=" uk-navbar-left nav-logos ">


                        <Link passHref href="/">
                            <a className="uk-navbar-item uk-logo" >


                                <img src={logo} width="217" height="64" alt="logo" uk-img />

                            </a>
                        </Link>
                        <div className="uk-visible@s">
                            <Link passHref href="/rya">
                                <a href="">
                                    <img src={rya} alt="logo" height={94} width={117} uk-img />

                                </a>
                            </Link>
                        </div>


                    </div>

                    <div className="uk-navbar-right">

                        <ul className="uk-navbar-nav  " uk-nav="multiple: false">
                            <li className="nav-item">
                                <Link passHref href="/aboutus" activeClassName="active">

                                    <a className="nav-link">
                                        About Us</a>
                                </Link>
                                <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left uk-navbar-dropdown-width-2" style={{ "left": "0px", "top": "80px" }}>
                                    <ul className="uk-nav uk-navbar-dropdown-nav uk-nav-divider ">
                                        <Link passHref href="/aboutus/#team" >
                                            <li className="uk-parent">
                                                <a className="responsive-link-font nav-link" href="#team " uk-scroll>
                                                    Our team
                                                </a>

                                            </li>
                                        </Link>
                                        <Link passHref href="/aboutus/#club" >
                                            <li className="uk-parent">
                                                <a href="#club " className="nav-link responsive-link-font " uk-scroll>
                                                    The Seven Seas Club
                                                </a>

                                            </li>
                                        </Link>
                                        <Link passHref href="/aboutus/#sailing_area" activeClassName="active">
                                            <li className="uk-parent">
                                                <a href="#sailing_area" className="nav-link responsive-link-font " uk-scroll>
                                                    Sailing Area
                                                </a>

                                            </li>
                                        </Link>
                                        <Link passHref href="/aboutus/#rya_section" activeClassName="active">
                                            <li className="uk-parent">
                                                <a href="#rya_section " className="nav-link responsive-link-font " uk-scroll>
                                                    About the RYA
                                                </a>

                                            </li>
                                        </Link>
                                        <Link passHref href="/aboutus/#testimonials" activeClassName="active">
                                            <li className="uk-parent">
                                                <a href="#testimonials " className="nav-link responsive-link-font " uk-scroll>
                                                    Testimonials
                                                </a>

                                            </li>
                                        </Link>

                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">


                                <Link passHref href="/courses" activeClassName="active">
                                    <a className="nav-link  ">Courses</a>

                                </Link>
                                <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left uk-navbar-dropdown-width-2 " style={{ "left": "0px", "top": "80px" }}>
                                    <ul className="uk-nav uk-navbar-dropdown-nav  uk-nav-divider ">
                                        <li>
                                            <ul className="uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon uk-padding-small" hidden="" uk-nav="multiple: false   ">


                                                <li className="uk-parent ">


                                                    <Link passHref href="/courses">
                                                        <a className="nav-link responsive-link-font " href="" >Sail</a>
                                                    </Link>




                                                    <ul className="uk-nav-sub  uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon   " hidden="">

                                                        {courses.sort((a, b) => a.attributes.order > b.attributes.order ? 1 : -1).map((course, i) =>
                                                            course.attributes.courseCategory === "Sail" ?

                                                                <li className="uk-flex uk-flex-start uk-nav-divider" key={i} >
                                                                    <Link passHref href={`/courses/${course.attributes.slug}`} >
                                                                        <a href="">  {course.attributes.title} </a>
                                                                    </Link></li>

                                                                : null


                                                        )}
                                                    </ul>
                                                </li>
                                                <li className="uk-parent uk-nav-divider ">


                                                    <Link passHref href="/courses" >
                                                        <a className="nav-link responsive-link-font " >Motor</a>
                                                    </Link>



                                                    <ul className="uk-nav-sub  uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  " hidden="">

                                                        {courses.sort((a, b) => a.attributes.order > b.attributes.order ? 1 : -1).map((course, i) =>
                                                            course.attributes.courseCategory === "Motor" ?

                                                                <li className="uk-flex uk-flex-start uk-nav-divider" key={i} >
                                                                    <Link passHref href={`/courses/${course.attributes.slug}`} >
                                                                        <a href=" ">  {course.attributes.title} </a>
                                                                    </Link></li>

                                                                : null


                                                        )}
                                                    </ul>

                                                </li>

                                                <li className="uk-parent uk-nav-divider ">


                                                    <Link passHref href="/courses"  >
                                                        <a className="nav-link responsive-link-font " >Power</a>
                                                    </Link>






                                                    <ul className="uk-nav-sub  uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  " hidden="">

                                                        {courses.sort((a, b) => a.attributes.order > b.attributes.order ? 1 : -1).map((course, i) =>
                                                            course.attributes.courseCategory === "Power" ?

                                                                <li className="uk-flex uk-flex-start uk-nav-divider" key={i} >
                                                                    <Link passHref href={`/courses/${course.attributes.slug}`} >
                                                                        <a href="" >  {course.attributes.title} </a>
                                                                    </Link></li>

                                                                : null


                                                        )}
                                                    </ul>

                                                </li>



                                                <li className=" ">

                                                    <div className="uk-nav-divider  ">

                                                        <Link passHref href={`/courses/yachtmaster`} >
                                                            <a href="" className="nav-link responsive-link-font ">  Yachtmaster Training Scheme  </a>
                                                        </Link>

                                                        <Link passHref href="/courses">
                                                            <a className="nav-link responsive-link-font " >{ }</a>
                                                        </Link>


                                                    </div>

                                                </li>


                                            </ul >





                                        </li >
                                    </ul >

                                </div >
                            </li >


                            <li>
                                <Link passHref href="/activities-and-services" activeClassName="active">

                                    <a className="nav-link "> Activities {"&"} Services</a>
                                </Link>
                                <div className="uk-navbar-dropdown uk-navbar-dropdown-bottom-left uk-navbar-dropdown-width-2 " style={{ "left": "0px", "top": "80px" }}>


                                    <ul className="uk-nav uk-navbar-dropdown-nav   ">
                                        <li>
                                            <ul className="uk-nav-start  uk-nav-parent-icon " hidden="" uk-nav="multiple: true">

                                                {activities.map((activitie, i) =>
                                                    activitie.attributes.category === "jetski" || activitie.attributes.category === "Mile_Building" ?

                                                        null :
                                                        < li className={i === 0 ? "uk-flex uk-flex-start" : "uk-flex uk-flex-start uk-nav-divider"} key={i} >
                                                            <Link passHref href={`/activities-and-services/${activitie.attributes.slug}`} >
                                                                <a className="nav-link responsive-link-font ">  {activitie.attributes.title} </a>
                                                            </Link></li>





                                                )}
                                                < li className="uk-parent uk-nav-divider ">


                                                    <a href=" " className="nav-link responsive-link-font ">Mile Building</a>
                                                    <ul className="uk-nav-sub  uk-nav-start  uk-nav-parent-icon   " hidden="">

                                                        {activities.map((activitie, i) =>
                                                            activitie.attributes.category === "Mile_Building" ?


                                                                < li className="uk-flex uk-flex-start uk-nav-divider " key={i} >
                                                                    <Link passHref href={`/activities-and-services/${activitie.attributes.slug}`} >
                                                                        <a  >  {activitie.attributes.title} </a>
                                                                    </Link></li>

                                                                : null



                                                        )}
                                                    </ul>


                                                </li>
                                                < li className="uk-parent uk-nav-divider ">


                                                    <a href=" " className="nav-link responsive-link-font ">Services for Superyachts </a>
                                                    <ul className="uk-nav-sub  uk-nav-start  uk-nav-parent-icon   " hidden="">

                                                        {activities.map((activitie, i) =>
                                                            activitie.attributes.category === "jetski" ?


                                                                < li className="uk-flex uk-flex-start uk-nav-divider " key={i} >
                                                                    <Link passHref href={`/activities-and-services/${activitie.attributes.slug}`} >
                                                                        <a  >  {activitie.attributes.title} </a>
                                                                    </Link></li>

                                                                : null



                                                        )}
                                                    </ul>


                                                </li>


                                            </ul>

                                        </li>

                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link passHref href="/news" activeClassName="active" >

                                    <a className={currentRoute === "/news" ? 'active' : ''}>  Blog</a>
                                </Link>

                            </li>

                            <li>
                                <Link passHref href="/contactus" activeClassName="active" >

                                    <a className={currentRoute === "/contactus" ? 'active' : ''}>  Contact us</a>
                                </Link>

                            </li>



                        </ul >

                    </div >

                </div >

            </nav >
        </div >


    ) : (


        <nav className="uk-navbar-container uk-margin uk-navbar uk-margin-remove uk-navbar-default uk-padding-small" uk-navbar="">
            <div className="uk-navbar-left ">


                <a className="uk-navbar-item uk-logo  " href="">
                    <Link passHref href="/">
                        <img src={logo} alt="logo" width={217} height={64} uk-img className="uk-visible@s" />{/* big ss logo */}


                    </Link>
                </a>
                <a href="" >
                    <Link passHref href="/" >
                        <img src={logo} alt="logo" width={140} height={68} uk-img className="uk-hidden@s  " />{/* small ss logo */}
                    </Link>

                </a>


                <Link passHref href="/rya">
                    <a href="">
                        <img src={rya} alt="rya-logo" width={97} height={64} uk-img className="uk-visible@s" />
                    </a>
                </Link>
                <a href="" className="uk-margin-left  ">
                    <Link passHref href="/rya">
                        <img src={rya} alt="rya-logo" width={74} height={60} uk-img className="uk-hidden@s " />
                    </Link>
                </a>
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


                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">


                            <div className="uk-offcanvas-bar offcanvas-nav">
                                <div className="uk-navbar-left uk-margin-large">



                                    <Link passHref href="/">
                                        <a className="uk-navbar-item uk-logo" uk-toggle="target: #offcanvas-nav-primary" href="">

                                            <img src={logo} alt="logo" width={140} height={68} uk-img />
                                        </a>
                                    </Link>

                                    <Link passHref href="/rya">
                                        <a className="uk-navbar-item uk-logo" uk-toggle="target: #offcanvas-nav-primary" href="">


                                            <img src={rya} alt="rya-logo" width={74} height={60} uk-img />
                                        </a>
                                    </Link>

                                </div>
                                <button className="uk-offcanvas-close uk-close-large uk-icon uk-close" type="button" uk-close="">
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

                                    </svg>
                                </button>

                                <ul className="uk-nav uk-nav-primary uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon uk-list-large " uk-nav="multiple: false">

                                    <li className="uk-parent ">
                                        <div className=" uk-position-absolute ">
                                            <Link passHref href="/aboutus">
                                                <a className="nav-link responsive-link-font uk-margin" uk-toggle="target: #offcanvas-nav-primary">About us</a>
                                            </Link>

                                        </div>
                                        <a href="" ></a>


                                        <ul className="uk-nav-sub uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  uk-nav-parent-icon " hidden="" uk-nav="multiple: false">

                                            <li className="uk-margin  ">

                                                <Link passHref href="/aboutus#team">
                                                    <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">The Team</a>
                                                </Link>


                                            </li>
                                            <li className="uk-margin  ">



                                                <Link passHref href="/aboutus#club">
                                                    <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">The Seven Seas Club</a>
                                                </Link>


                                            </li>
                                            <li className="uk-margin  ">



                                                <Link passHref href="/aboutus#sailing_area">
                                                    <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Sailing Area   </a>
                                                </Link>


                                            </li>
                                            <li className="uk-margin  ">


                                                <Link passHref href="/aboutus#rya_section">
                                                    <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary"> About The RYA   </a>
                                                </Link>


                                            </li>
                                            <li className="uk-margin  ">



                                                <Link passHref href="/aboutus#testimonials">
                                                    <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Testimonials    </a>
                                                </Link>


                                            </li>

                                        </ul>
                                    </li>

                                    <li className="uk-parent  ">
                                        <div className=" uk-position-absolute ">

                                            <Link passHref href="/courses"  >
                                                <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Courses</a>
                                            </Link>

                                        </div>

                                        <a href="" ></a>
                                        <ul className="uk-nav-sub uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  uk-nav-parent-icon uk-list-large " hidden="" uk-nav="multiple: false">


                                            <li className="uk-parent ">
                                                <div className=" uk-position-absolute ">

                                                    <Link passHref href="/courses">
                                                        <a className=" responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Sail</a>
                                                    </Link>


                                                </div>
                                                <a href="" ></a>



                                                <ul className="uk-nav-sub  uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  uk-list-large" hidden="" uk-nav="multiple: false">

                                                    {courses.map((course, i) =>
                                                        course.attributes.courseCategory === "Sail" ?

                                                            <li className="uk-flex uk-flex-start uk-nav-divider" key={i}>
                                                                <Link passHref href={`/courses/${course.attributes.slug}`} >
                                                                    <a uk-toggle="target: #offcanvas-nav-primary">  {course.attributes.title} </a>
                                                                </Link></li>

                                                            : null


                                                    )}
                                                </ul>

                                            </li>
                                            <li className="uk-parent  ">
                                                <div className=" uk-position-absolute ">

                                                    <Link passHref href="/courses" >
                                                        <a className="responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Motor</a>
                                                    </Link>


                                                </div>
                                                <a href="" ></a>



                                                <ul className="uk-nav-sub  uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon uk-list-large " hidden="">

                                                    {courses.map((course, i) =>
                                                        course.attributes.courseCategory === "Motor" ?

                                                            <li className="uk-flex uk-flex-start uk-nav-divider" key={i} >
                                                                <Link passHref href={`/courses/${course.attributes.slug}`} >
                                                                    <a uk-toggle="target: #offcanvas-nav-primary">  {course.attributes.title} </a>
                                                                </Link></li>

                                                            : null


                                                    )}
                                                </ul>

                                            </li>
                                            <li className="uk-parent  ">
                                                <div className=" uk-position-absolute ">

                                                    <Link passHref href="/courses"  >
                                                        <a className="responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Power</a>
                                                    </Link>


                                                </div>
                                                <a href="" ></a>



                                                <ul className="uk-nav-sub  uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  uk-list-large" hidden="">

                                                    {courses.map((course, index) =>
                                                        course.attributes.courseCategory === "Power" ?

                                                            <li className="uk-flex uk-flex-start uk-nav-divider" >
                                                                <Link passHref href={`/courses/${course.attributes.slug}`} >
                                                                    <a uk-toggle="target: #offcanvas-nav-primary">  {course.attributes.title} </a>
                                                                </Link></li>

                                                            : null


                                                    )}
                                                </ul>

                                            </li>


                                            <li className=" uk-parent">

                                                <div className="uk-position-absolute  ">

                                                    <Link passHref href={`/courses/yachtmaster`} >
                                                        <a className=" responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">  Yachtmaster Training Scheme  </a>
                                                    </Link>

                                                    <Link passHref href="/courses">
                                                        <a className="nav-link responsive-link-font " >{ }</a>
                                                    </Link>


                                                </div>

                                            </li>

                                        </ul>
                                    </li>
                                    <li className="uk-parent">
                                        <div className=" uk-position-absolute ">

                                            <Link passHref href="/activities-and-services">
                                                <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">Activities {"&"} Services</a>
                                            </Link>

                                        </div>

                                        <a href="" ></a>
                                        <ul className="uk-nav-sub uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  uk-nav-parent-icon  uk-list-large" hidden="" uk-nav="multiple: true">

                                            {activities.map((activitie, i) =>
                                                activitie.attributes.category === "jetski" || activitie.attributes.category === "Mile_Building" ?

                                                    null :
                                                    < li className={i === 0 ? "uk-flex uk-flex-start " : "uk-flex uk-flex-start "} key={i} >
                                                        <Link passHref href={`/activities-and-services/${activitie.attributes.slug}`} >
                                                            <a className="nav-link responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">  {activitie.attributes.title} </a>
                                                        </Link></li>





                                            )}
                                            <li className="uk-parent " >
                                                <div className="uk-position-absolute">

                                                    <a className=" responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">  Mile Building </a>

                                                </div>
                                                <a href=""></a>

                                                <ul className="uk-nav-sub  uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  uk-list-large" hidden="">

                                                    {activities.map((activitie, i) =>
                                                        activitie.attributes.category === "Mile_Building" ?


                                                            < li className="uk-flex uk-flex-start uk-nav-divider " key={i} >
                                                                <Link passHref href={`/activities-and-services/${activitie.attributes.slug}`} >
                                                                    <a uk-toggle="target: #offcanvas-nav-primary">  {activitie.attributes.title} </a>
                                                                </Link></li>

                                                            : null



                                                    )}
                                                </ul>
                                            </li>
                                            <li className="uk-parent " >
                                                <div className="uk-position-absolute">

                                                    <a className=" responsive-link-font " uk-toggle="target: #offcanvas-nav-primary">  Services for Superyachts  </a>

                                                </div>
                                                <a href=""></a>

                                                <ul className="uk-nav-sub  uk-nav-start uk-margin-auto-vertical uk-nav-parent-icon  uk-list-large" hidden="">

                                                    {activities.map((activitie, i) =>
                                                        activitie.attributes.category === "jetski" ?


                                                            < li className="uk-flex uk-flex-start uk-nav-divider " key={i} >
                                                                <Link href={`/activities-and-services/${activitie.attributes.slug}`} >
                                                                    <a uk-toggle="target: #offcanvas-nav-primary">  {activitie.attributes.title} </a>
                                                                </Link></li>

                                                            : null



                                                    )}
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>




                                    <li className="uk-parent">
                                        <div className="uk-position-absolute">

                                            <Link passHref href="/news">
                                                <a className="nav-link responsive-link-font uk-margin" uk-toggle="target: #offcanvas-nav-primary">Blog </a>
                                            </Link>
                                        </div>


                                    </li>


                                    <li className="">
                                        <div className="uk-position-absolute">
                                            <Link passHref href="/contactus">
                                                <a className="nav-link responsive-link-font uk-margin" uk-toggle="target: #offcanvas-nav-primary">Contact us </a>
                                            </Link>
                                        </div>

                                    </li>



                                </ul>






                                <div>

                                </div>

                            </div>

                        </div>


                    </div>

                </ul >


            </div >

        </nav >
    )

}

export default Nav




