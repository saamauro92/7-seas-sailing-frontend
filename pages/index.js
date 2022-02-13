/* eslint-disable @next/next/no-img-element */
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Hero from '../components/Hero/Hero'
import NewsSidebar from '../components/NewsSidebar/NewsSidebar'
import Link from 'next/link'
import Card from '../components/Card/Card'



export async function getStaticProps() {


  const [coursesRes, homepageRes, latestNews] = await Promise.all([
    fetchAPI("/courses", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: { populate: "*" },
        seo: { populate: "*" },
      },
    }),
    fetchAPI("/news", { populate: "*" }),
  ])

  return {
    props: {
      courses: coursesRes?.data,
      homepage: homepageRes?.data,
      latestNews: latestNews?.data,
    },
    revalidate: 1,
  }

}




export default function Home({ courses, homepage, latestNews, activities, testimonials }) {


  const images = homepage.attributes.hero;

  return (

    <main>


      <div className="uk-cover-containe uk-light">




        {homepage && homepage.attributes.seo && <SEO data={homepage.attributes.seo} />}


        <Hero courses={courses} images={homepage.attributes.hero} />

        <NewsSidebar latestNews={latestNews} courses={courses} />
        <div className="uk-section " id="courses_section_banner">
          <div className="uk-container uk-container-large uk-flex uk-flex-around uk-flex-wrap  " uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: false">



            <div className="uk-card  uk-flex uk-flex-start uk-flex-column">  {/* uk-width-medium  */}

              <div className="uk-flex uk-flex-column  uk-flex-start ">


                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">

                  <h3 className="uk-card-title  text-primary-blue"> Sailing Courses </h3>
                  <div className="uk-card-header uk-height-small uk-margin">

                    <img src={images.sail.data.attributes.url} alt="hero_card_sail" width={150} height={250} uk-img />
                  </div>
                </div>

              </div>


              <div className="uk-card-body uk-padding-remove-horizontal  ">
                {courses.map((course, i) =>
                  course.attributes.courseCategory === 'Sail' &&

                  <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                    <ul>
                      <li>

                        <p className='text-secondary-blue-light' >
                          {course.attributes.title}
                        </p>
                      </li>

                    </ul>

                  </Link>

                )}
              </div>

            </div>



            <div className="uk-card  uk-flex uk-flex-start uk-flex-column">
              <div className="uk-flex uk-flex-column  uk-flex-start ">

                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">

                  <h3 className="uk-card-title text-primary-blue"> Motor Courses </h3>
                  <div className="uk-card-header uk-height-small uk-margin">

                    <img src={images.motor.data.attributes.url} alt="hero_card_sail" width={200} height={250} uk-img />
                  </div>
                </div>



              </div>
              <div className="uk-card-body ">

                {courses.map((course, i) =>
                  course.attributes.courseCategory === 'Motor' &&

                  <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                    <ul >
                      <li>

                        <p className='text-secondary-blue-light' >
                          {course.attributes.title}
                        </p>
                      </li>

                    </ul>

                  </Link>

                )}
              </div>
            </div>

            <div className="uk-card  uk-width-medium">



              <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">
                <h3 className="uk-card-title text-primary-blue"> Power Courses </h3>
                <div className="uk-card-header uk-height-small uk-margin">


                  <img src={images.power.data.attributes.url} alt="hero_card_sail" width={200} height={250} uk-img />
                </div>
              </div>

              <div className="uk-card-body uk-padding-remove-horizontal  ">

                {courses.map((course, i) =>
                  course.attributes.courseCategory === 'Power' &&

                  <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                    <ul>
                      <li>

                        <p className='text-secondary-blue-light' >
                          {course.attributes.title}
                        </p>
                      </li>

                    </ul>
                  </Link>

                )}
              </div>
            </div>


          </div>



        </div>
        <div className="uk-section  section_banner " uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 400; repeat: false">

          <div className="uk-container uk-container-large uk-flex uk-flex-around uk-flex-start uk-flex-wrap">



            <div className="uk-card  uk-width-medium uk-flex uk-flex-start uk-flex-column">

              <div className="uk-flex uk-flex-column  uk-flex-start ">
                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">

                  <h3 className="uk-card-title text-primary-white"> Mile Building </h3>
                  <div className="uk-card-header uk-height-small uk-margin">
                    <img src={images.mile_building.data.attributes.url} alt="hero_card_sail" width={150} height={300} uk-img />
                  </div>
                </div>

                <div className="uk-card-body uk-padding-remove-horizontal  ">



                  {activities.map((activitie, i) =>
                    activitie.attributes.category === 'Mile_Building' &&

                    <Link href={`/activities-and-services/${activitie.attributes.slug}`} passHref key={i}>
                      <ul>
                        <li>

                          <p className='text-secondary-white' >
                            {activitie.attributes.title}
                          </p>
                        </li>

                      </ul>
                    </Link>

                  )}
                </div>

              </div>

            </div>





            <div className="uk-card uk-width-medium yachtmaster_card_landing">

              <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">


                <h3 className="uk-card-title text-primary-white"> Yachtmaster  </h3>
                <div className="uk-card-header uk-height-small uk-margin">
                  <img src={images.yachtmaster.data.attributes.url} width={150} height={250} alt="hero_card_jet" uk-img />
                </div>
              </div>


              <div className="uk-card-body uk-padding-remove-horizontal ">

                <Link href={`/courses/yachtmaster`} passHref>
                  <ul>
                    <li>

                      <p className='text-secondary-white '>
                        Yachtmaster Prep Exam
                      </p>
                    </li>
                  </ul>
                </Link>
              </div>




            </div>



            <div className="uk-card uk-flex uk-flex-start uk-flex-column">
              <div className="uk-flex uk-flex-column  uk-flex-start ">

                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">
                  <h3 className="uk-card-title text-primary-white"> Jet Ski </h3>
                  <div className="uk-card-header uk-height-small uk-margin">
                    <img src={images.jet_ski.data.attributes.url} alt="hero_card_sail" width={150} height={250} uk-img />
                  </div>
                </div>


                <div className="uk-card-body uk-padding-remove-horizontal ">

                  {activities.map((activitie, i) =>
                    activitie.attributes.category === 'jetski' &&

                    <Link href={`/activities-and-services/${activitie.attributes.slug}`} passHref key={i}>
                      <ul>
                        <li>

                          <p className='text-secondary-white' >
                            {activitie.attributes.title}
                          </p>
                        </li>

                      </ul>
                    </Link>

                  )}
                </div>

              </div>
            </div>




          </div>
        </div>






      </div>

      <div className="uk-dark uk-background-cover uk-background-muted  testimonials_section uk-padding-large uk-padding-remove-horizontal" >

        <div className="uk-container">


          <h2 className='uk-text-center uk-text-muted  uk-text-bold'>What People Say About Us</h2>
          <div className="uk-position-relative uk-visible-toggle uk-dark" tabIndex="-1" uk-slider="sets: true; autoplay:true;autoplay-interval: 5000; ">

            <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m">

              {testimonials.length > 0 && testimonials.map((item, i) =>

                item.attributes.image.data &&
                <li key={i}>
                  <div className="uk-section uk-text-center" >
                    <div className="uk-width-expand uk-flex uk-flex-around uk-flex-middle uk-flex-column">
                      {item.attributes.image.data &&

                        <div
                          data-src={item.attributes.image.data.attributes.formats.small.url}
                          data-srcset={item.attributes.image.data.attributes.formats.small.url}
                          data-uk-img
                          className=" uk-background-cover  comment_pic"
                        >

                        </div>

                      }




                      <h4 className="uk-comment-title uk-margin-remove "><a className="uk-link-reset" href="#"> {item.attributes.name}</a></h4>
                      <div className=" uk-margin-remove"><a className="uk-link-reset" href="#"> From {item.attributes.country}</a></div>

                    </div>
                    <article className="uk-comment">
                      <header className="uk-comment-header">
                        <div className="uk-grid-medium uk-flex-middle " uk-grid>
                          <div className="uk-comment-body uk-padding-large ">

                            {item.attributes.description}
                          </div>
                        </div>
                      </header>

                    </article>

                  </div>
                </li>
              )
              }
            </ul>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

          </div>
        </div>
      </div>

      <div className="uk-dark uk-background-cover  testimonials_section uk-padding-large uk-padding-remove-horizontal" >

        <div className="uk-container">


          <h2 className='uk-text-center uk-text-bold'>Featured Courses</h2>
          <div className="uk-position-relative uk-visible-toggle uk-dark" tabIndex="-1" uk-slider="sets: true; autoplay:true;autoplay-interval: 5000; ">

            <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m">

              {courses.map((course, i) =>
                course.attributes.new_course === true &&

                <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>

                  <li>

                    <Card data={course} slug="courses" size={"uk-width-1-1"} />



                  </li>


                </Link>

              )}

            </ul>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

          </div>
        </div>
      </div>

    </main >

  )
}


