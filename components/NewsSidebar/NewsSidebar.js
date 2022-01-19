import React from "react"
import Link from "next/link"


const NewsSidebar = ({ latestNews, courses }) => {

    return (

        <div className=" uk-position-top ">

            {



                <div className="news_sidebar uk-flex uk-flex-center  uk-padding-remove-horizontal " >



                    {latestNews && latestNews.length > 0 &&

                        < >
                            <span className="uk-text-success uk-padding-small uk-padding-remove-vertical">News! </span>
                            <Link href={`/news/${latestNews[0].attributes.slug}`} passHref>


                                <span> <strong>  Blog: {"  "}</strong>  {" "}{latestNews[0].attributes.title}</span >
                            </Link>
                        </>

                    }

                    <span> <strong> Latest Courses</strong>  </span>
                    {courses && courses.length > 0 && courses.map((course, i) =>
                        course.attributes.new_course &&
                        <>

                            <Link href={`/courses/${course.attributes.slug}`} passHref>

                                <li> {course.attributes.title}</li>

                            </Link>
                        </>


                    )




                    }

                </div>

            }



        </div>
    )
}

export default NewsSidebar
