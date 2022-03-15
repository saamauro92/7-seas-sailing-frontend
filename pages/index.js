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

    <>

      <div className="uk-cover-containe uk-light">


        {homepage && homepage.attributes.seo && <SEO data={homepage.attributes.seo} />}

        <Hero courses={courses} images={homepage.attributes.hero} latestNews={latestNews} />

        <div className="uk-section " id="courses_section_banner">
          <div className="uk-container uk-container-large uk-flex uk-flex-around uk-flex-wrap  " uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: false" >

            <div className="uk-card  uk-flex uk-flex-start uk-flex-column landing-cards">

              <div className="uk-flex uk-flex-column  uk-flex-start ">


                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle ">

                  <h3 className="uk-card-title  text-primary-blue"> Sailing Courses </h3>


                  {images.sail.data.attributes.url && <img src={images.sail.data.attributes.url} alt="hero_card_sail" width={200} height={250} uk-img />}

                </div>

              </div>


              <div className="uk-card-body uk-padding-remove-horizontal  ">
                {courses.sort((a, b) => a.attributes.order > b.attributes.order ? 1 : -1).map((course, i) =>
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



            <div className="uk-card  uk-flex uk-flex-start uk-flex-column  landing-cards">
              <div className="uk-flex uk-flex-column  uk-flex-start ">

                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">

                  <h3 className="uk-card-title text-primary-blue"> Motor Courses </h3>



                  {images.motor.data.attributes.url && <img src={images.motor.data.attributes.url} alt="hero_card_sail" width={200} height={250} uk-img />}


                </div>



              </div>
              <div className="uk-card-body  ">

                {courses.sort((a, b) => a.attributes.order > b.attributes.order ? 1 : -1).map((course, i) =>
                  course.attributes.courseCategory === 'Motor' &&

                  <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                    <ul >
                      <li>

                        <p className='text-secondary-blue-light ' >
                          {course.attributes.title}
                        </p>
                      </li>

                    </ul>

                  </Link>

                )}
              </div>
            </div>

            <div className="uk-card  uk-width-medium landing-cards" >



              <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle ">
                <h3 className="uk-card-title text-primary-blue"> Power Courses </h3>



                {images.power.data.attributes.url && <img src={images.power.data.attributes.url} alt="hero_card_sail" width={200} height={250} uk-img />}

              </div>

              <div className="uk-card-body uk-padding-remove-horizontal  ">

                {courses.sort((a, b) => a.attributes.order > b.attributes.order ? 1 : -1).map((course, i) =>
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
        <div className="uk-section  section_banner " uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 400; repeat: false" >

          <div className="uk-container uk-container-large uk-flex uk-flex-around uk-flex-start uk-flex-wrap">



            <div className="uk-card  uk-width-medium uk-flex uk-flex-start uk-flex-column landing-cards">

              <div className="uk-flex uk-flex-column  uk-flex-start ">
                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">

                  <h3 className="uk-card-title text-primary-white"> Mile Building </h3>

                  {images.mile_building.data.attributes.url && <img src={images.mile_building.data.attributes.url} alt="hero_card_sail" width={200} height={250} uk-img />}

                </div>

                <div className="uk-card-body uk-padding-remove-horizontal  ">



                  {activities.map((activitie, i) =>
                    activitie.attributes.category === 'Mile_Building' &&

                    <Link href={`/activities/${activitie.attributes.slug}`} passHref key={i}>
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
            <div className="uk-card uk-flex uk-flex-start uk-flex-column  landing-cards">
              <div className="uk-flex uk-flex-column  uk-flex-start ">

                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">
                  <h3 className="uk-card-title text-primary-white">Yachtmaster Training Scheme</h3>

                  {images.yachtmaster.data.attributes.url && <img src={images.yachtmaster.data.attributes.url} width={200} height={250} alt="hero_card_jet" uk-img />}

                </div>


                <div className="uk-card-body uk-padding-remove-horizontal ">

                  <Link href={`/courses/yachtmaster`} passHref>
                    <ul>
                      <li>

                        <p className='text-secondary-white '>
                          Yachtmaster Training Scheme
                        </p>
                      </li>
                    </ul>
                  </Link>
                </div>

              </div>
            </div>




            <div className="uk-card uk-flex uk-flex-start uk-flex-column  landing-cards">
              <div className="uk-flex uk-flex-column  uk-flex-start ">

                <div className="uk-flex uk-flex-column uk-flex-around uk-flex-middle">
                  <h3 className="uk-card-title text-primary-white"> Services For Superyachts </h3>

                  {images.jet_ski.data.attributes.url && <img src={images.jet_ski.data.attributes.url} alt="hero_card_sail" width={200} height={250} uk-img />}

                </div>


                <div className="uk-card-body uk-padding-remove-horizontal ">

                  {activities.map((activitie, i) =>
                    activitie.attributes.category === 'jetski' &&

                    <Link href={`/activities/${activitie.attributes.slug}`} passHref key={i}>
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
      <div className="uk-section  uk-dark uk-background-cover  uk-padding-large uk-padding-remove-horizontal  uk-margin-top" >

        <div className="uk-container uk-margin-top">


          <h2 className='uk-text-center uk-text-bold  has-text-primary uk-text-uppercase'>Featured Courses</h2>
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

      <div className=" uk-section uk-dark uk-section-muted uk-background-cover  uk-padding-large uk-padding-remove-horizontal uk-margin  " >

        <div className="uk-container ">


          <h2 className='uk-text-center uk-text-muted  uk-text-bold has-text-primary uk-text-uppercase'>What People Say About Us</h2>
          <div className="uk-position-relative uk-visible-toggle uk-dark" tabIndex="-1" uk-slider="sets: true; autoplay:true;autoplay-interval: 5000; ">

            <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m">

              {testimonials.length > 0 && testimonials.map((item, i) =>


                <li key={i}>
                  <div className="uk-section uk-text-center uk-margin" >
                    <div className="uk-width-expand uk-flex uk-flex-around uk-flex-middle uk-flex-column">
                      <div className="uk-margin-left" uk-grid>
                        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" stroke="grey" fill="grey" viewBox="0 0 40 40"><path d="M19.092 6.863c-1.504 2.31-1.779 4.45-1.681 5.688 6.132-.101 5.696 6.449 1.39 6.449-1.83 0-3.801-1.338-3.801-4.275 0-2.724 1.412-5.845 4.092-7.862zm-13 0c-1.504 2.31-1.779 4.45-1.681 5.688 6.132-.101 5.696 6.449 1.39 6.449-1.83 0-3.801-1.338-3.801-4.275 0-2.724 1.412-5.845 4.092-7.862zm16.908-3.863c-6.108 1.206-10 6.584-10 11.725 0 3.97 2.786 6.275 5.801 6.275 2.615 0 5.199-1.797 5.199-4.979 0-2.601-1.905-4.757-4.396-5.149.217-2.004 2.165-4.911 4.38-5.746l-.984-2.126zm-13 0c-6.108 1.206-10 6.584-10 11.725 0 3.97 2.786 6.275 5.801 6.275 2.615 0 5.199-1.797 5.199-4.979 0-2.601-1.905-4.757-4.396-5.149.217-2.004 2.165-4.911 4.38-5.746l-.984-2.126z" /></svg>

                      </div>


                    </div>

                    <div className="uk-grid-medium uk-flex-middle " uk-grid>
                      <div className="uk-comment-body uk-padding-large   uk-margin-bottom">

                        {item.attributes.description}

                      </div>
                    </div>

                    <div className='uk-position-bottom'>
                      <h4 className="uk-comment-title uk-margin-remove "><a className="uk-link-reset" href="#"> {item.attributes.name}</a></h4>
                      <div className=" uk-margin-remove"><a className="uk-link-reset" href="#"> From {item.attributes.country}</a></div>

                    </div>


                  </div>
                </li>
              )
              }
            </ul>
            <ul className="uk-slider-nav uk-margin-top uk-padding uk-dotnav uk-flex-center "></ul>
            <a className="uk-position-center-left uk-position-small " href="#" uk-slidenav-previous uk-slider-item="previous" >
              <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#ccc" strokeWidth="1.33" points="13 16 7 10 13 4"></polyline></svg>


            </a>
            <a className="uk-position-center-right uk-position-small " href="#" uk-slidenav-next uk-slider-item="next">
              <svg width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#ccc" strokeWidth="1.33" points="7 4 13 10 7 16"></polyline></svg>


            </a>
          </div>
        </div>
      </div>



    </ >

  )
}


