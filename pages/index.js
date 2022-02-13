/* eslint-disable @next/next/no-img-element */
import { fetchAPI } from '../lib/api'
import SEO from '../components/Seo/Seo'
import Hero from '../components/Hero/Hero'
import NewsSidebar from '../components/NewsSidebar/NewsSidebar'
import Link from 'next/link'



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




export default function Home({ courses, homepage, latestNews }) {


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

                  {courses.map((course, i) =>
                    course.attributes.courseCategory === 'Mile_Building' &&

                    <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                      <ul>
                        <li>

                          <p className='text-secondary-white' >
                            {course.attributes.title}
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

                  {courses.map((course, i) =>
                    course.attributes.courseCategory === 'Jet_Ski' &&

                    <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                      <ul>
                        <li>

                          <p className='text-secondary-white' >
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
        </div>






      </div>





    </main >

  )
}


