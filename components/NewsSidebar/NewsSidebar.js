import React from "react"
import Link from "next/link"


const NewsSidebar = ({ latestNews, courses }) => {

    return (
        <>

            <div className="news_sidebar_wrapper " >

                {

                    <div className="uk-container uk-container-large news_sidebar "  >

                        {latestNews && latestNews.length > 0 &&

                            < >
                                <span className="news-banner-title">News </span>

                                <Link href={`/news/${latestNews[0].attributes.slug}`} passHref>


                                    <a href="">   {" "}{latestNews[0].attributes.title}</a >
                                </Link>
                            </>

                        }


                    </div>

                }


            </div>

        </>
    )
}

export default NewsSidebar
