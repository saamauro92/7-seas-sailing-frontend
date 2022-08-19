import React from "react"
import Link from "next/link"
import sort from "../../utils/helpers"


const NewsSidebar = ({ latestNews }) => {

    sort(latestNews)
    return (
        <>

            <div className="news_sidebar_wrapper uk-container uk-container-expand " >


                {

                    <div className="uk-container uk-container-large news_sidebar "  >

                        {latestNews && latestNews.length > 0 &&

                            < >
                                <span className="news-banner-title ">News </span>

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
