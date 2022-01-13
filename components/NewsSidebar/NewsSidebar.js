import React from "react"
import Link from "next/link"


const NewsSidebar = ({ latestNews }) => {
    console.log("latestNews", latestNews)

    return (
        <>


            <div className="uk-position-right uk-height-large">

                <button className="uk-button uk-button-primary uk-text-bold" type="button" uk-toggle="target: #offcanvas-flip">Latest news</button>
            </div>



            <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                <div className="uk-offcanvas-bar offcanvas-News">

                    <button className="uk-offcanvas-close " type="button" uk-close>X</button>
                    <p> News </p>


                    {latestNews && latestNews.length > 0 && latestNews.map((item, i) =>
                        <>
                            <ul>

                                <li>{item.attributes.title}</li>
                            </ul>
                        </>
                    )}
                </div>
            </div>

        </>
    )
}

export default NewsSidebar
