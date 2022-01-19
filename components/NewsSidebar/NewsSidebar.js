import React from "react"
import Link from "next/link"


const NewsSidebar = ({ latestNews, courses }) => {

    return (
        <>


            <div className="uk-card uk-card-secondary uk-card-body uk-position-top news_sidebar uk-flex uk-flex-baseline ">


                {latestNews && latestNews.length > 0 &&

                    < >
                        <span className="uk-text-success">News! </span>
                        <Link href={`/news/${latestNews[0].attributes.slug}`} passHref>


                            <span> blog:  {" "}{latestNews[0].attributes.title}</span >
                        </Link>
                    </>

                }

                <span className="">Latest courses:  </span>
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





        </>
    )
}

export default NewsSidebar
