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
                                <span className="uk-text-success">News <span className="uk-icon"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"></polygon></svg></span> </span>
                                <span className=""> Blog:  </span>
                                <Link href={`/news/${latestNews[0].attributes.slug}`} passHref>


                                    <a href="">   {" "}{latestNews[0].attributes.title}</a >
                                </Link>
                            </>

                        }

                        <span className="">Latest courses:  </span>
                        {courses && courses.length > 0 && courses.map((course, i) =>
                            course.attributes.new_course &&



                            <Link href={`/courses/${course.attributes.slug}`} passHref>

                                <a href=" "> - {course.attributes.title}</a>

                            </Link>



                        )




                        }

                    </div>

                }


            </div>

        </>
    )
}

export default NewsSidebar
