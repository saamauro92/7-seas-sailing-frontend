import React from 'react';

const GoTop = ({ scrollStepInPx, delayInMs }) => {

    const [thePosition, setThePosition] = React.useState(false);
    const timeoutRef = React.useRef(null);

    React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true)
            } else {
                setThePosition(false);
            }
        });


    }, [])

    const onScrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    }

    const renderGoTopIcon = () => {
        return (
            <>
                <div className={`go-top ${thePosition ? 'active' : ''}`} onClick={scrollToTop}>

                    <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4" stroke="#ccc">
                        </polygon><line fill="none" stroke="#ccc" x1="10.5" y1="16" x2="10.5" y2="5">
                        </line>
                    </svg>



                    <style jsx>{`
                        .go-top {
                            bottom: 0;
                            z-index: 4;
                            opacity: 0;
                            right: 20px;
                            width: 45px;
                            height: 45px;
                            position: fixed;
                            cursor: pointer;
                            font-size: 27px;
                            text-align: center;
                            visibility: hidden;
                            border-radius: 50%;
                            color: var(--whiteColor);
                            transition: var(--transition);
                            background: var(--gradientColor);
                            box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
                        }
                        .go-top i {
                            left: 0;
                            top: 50%;
                            right: 0;
                            position: absolute;
                            text-align: center;
                            transform: translateY(-50%);
                            margin-left: auto;
                            margin-right: auto;
                        }
                        .go-top.active {
                            opacity: 1;
                            bottom: 20px;
                            visibility: visible;
                            color: black;
                        }
                        .go-top:hover {
                            transform: translateY(-5px);
                        }

                        // Responsive Style
                        @media only screen and (max-width: 767px) {
                            .go-top {
                                right: 10px;
                                width: 35px;
                                height: 35px;
                                font-size: 22px;
                                color: black;
                            }
                            .go-top.active {
                                bottom: 10px;
                            }
                        }

                        @media only screen and (min-width : 768px) and (max-width : 991px) {
                            
                        }

                        @media only screen and (min-width : 992px) and (max-width : 1199px) {
                            
                        }
                    `}</style>
                </div>
            </>
        )
    }

    return (
        <>
            {renderGoTopIcon()}
        </>
    )
}

export default GoTop;