import React from "react"
import Link from "next/link"


const NewsSidebar = ({ latestNews }) => {

    return (
        <>


            <div className="uk-card uk-card-secondary uk-card-body  uk-position-top uk-padding-rmove uk-box-shadow-medium  news_sidebar">


                {latestNews && latestNews.length > 0 &&




                    <Link href={`/news/${latestNews[0].attributes.slug}`} passHref>


                        <p>  NEWS!  {" "}{latestNews[0].attributes.title}</p >
                    </Link>

                }

            </div>





        </>
    )
}

export default NewsSidebar
