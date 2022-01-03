import React from "react";
import Link from "../../utils/ActiveLink";


const Navbar = (categories) => {

    const [menu, setMenu] = React.useState(true)

    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    })

    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="texap-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light bg-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    logo
                                </a>
                            </Link>


                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">



                                    <li className="nav-item">

                                        <Link href={"/courses"}>

                                            <a className="nav-link"> Courses</a>
                                        </Link>

                                    </li>
                                    <li className="nav-item">

                                        <Link href={"/activities-and-services"}>

                                            <a className="nav-link"> Activities and Services</a>
                                        </Link>

                                    </li>
                                    <li className="nav-item">

                                        <Link href={"/news"}>

                                            <a className="nav-link"> News</a>
                                        </Link>

                                    </li>
                                    <li className="nav-item">

                                        <Link href={"/aboutus"}>

                                            <a className="nav-link"> About</a>
                                        </Link>

                                    </li>


                                </ul>
                            </div>

                            <div className="others-options">

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;