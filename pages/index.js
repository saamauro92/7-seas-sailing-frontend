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

      <div className="uk-cover-container uk-light">

        <NewsSidebar latestNews={latestNews} courses={courses} />


        {homepage && homepage.attributes.seo && <SEO data={homepage.attributes.seo} />}


        <Hero courses={courses} images={homepage.attributes.hero} />



        <h2 className='uk-header-medium'> Our courses</h2>
        <div className=" uk-padding uk-flex uk-flex-center uk-text-center  " tabIndex="-1" uk-slider="sets: true; autoplay:false;" >


          {/*             <ul className="uk-slider-items uk-child-width-1-3@m uk-child-width-1-2@m "> */}
          <ul className="uk-slider-items  uk-child-width-1-3@m ">


            <li>
              <div>
                <div className="uk-card uk-card-default uk-width-medium">
                  <div className="uk-card-media-top">
                    <img src={images.sail.data.attributes.url} alt="hero_card_sail" width={300} height={300} uk-img />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">RYA Sail </h3>
                    {courses.map((course, i) =>
                      course.attributes.courseCategory === 'Sail' &&

                      <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                        <p >

                          {course.attributes.title}
                        </p>

                      </Link>

                    )}
                  </div>
                </div>
              </div>

            </li>
            <li>
              <div>
                <div className="uk-card uk-card-default uk-width-medium">
                  <div className="uk-card-media-top">
                    <img src={images.motor.data.attributes.url} alt="hero_card_sail" width={300} height={300} uk-img />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">RYA Motor </h3>
                    {courses.map((course, i) =>
                      course.attributes.courseCategory === 'Motor' &&

                      <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                        <p >

                          {course.attributes.title}
                        </p>

                      </Link>

                    )}
                  </div>
                </div>
              </div>

            </li>
            <li>
              <div>
                <div className="uk-card uk-card-default uk-width-medium">
                  <div className="uk-card-media-top">
                    <img src={images.power.data.attributes.url} alt="hero_card_sail" width={300} height={300} uk-img />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">RYA Power </h3>
                    {courses.map((course, i) =>
                      course.attributes.courseCategory === 'Power' &&

                      <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                        <p >

                          {course.attributes.title}
                        </p>

                      </Link>

                    )}
                  </div>
                </div>
              </div>

            </li>
            <li>
              <div>
                <div className="uk-card uk-card-default uk-width-medium">
                  <div className="uk-card-media-top">
                    <img src={images.mile_building.data.attributes.url} alt="hero_card_sail" width={300} height={300} uk-img />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">RYA Mile Building </h3>
                    {courses.map((course, i) =>
                      course.attributes.courseCategory === 'Mile_Building' &&

                      <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                        <p >

                          {course.attributes.title}
                        </p>

                      </Link>

                    )}
                  </div>
                </div>
              </div>

            </li>
            <li>
              <div>
                <div className="uk-card uk-card-default uk-width-medium">
                  <div className="uk-card-media-top">
                    <img src={images.jet_ski.data.attributes.url} alt="hero_card_sail" uk-img className='uk-width-medium' />
                  </div>
                  <div className="uk-card-body">
                    <h3 className="uk-card-title">RYA Jet Ski </h3>
                    {courses.map((course, i) =>
                      course.attributes.courseCategory === 'Jet_Ski' &&

                      <Link href={`/courses/${course.attributes.slug}`} passHref key={i}>
                        <p >

                          {course.attributes.title}
                        </p>

                      </Link>

                    )}
                  </div>
                </div>
              </div>

            </li>



            {/*               <li>

                <div className="uk-inline-clip hero-cards uk-margin uk-animation-slide-bottom uk-visible-toggle" tabIndex="-1">

                  <img src={images.mile_building.data.attributes.url} width="250" height="250" alt="hero_card_jet" uk-img />
                  <div className="uk-position-bottom uk-overlay uk-overlay-primary" >
                    <p>RYA Yachtmaster</p>

                    <ul className="uk-hidden-hover uk-overlay uk-overlay-primary">


                      <Link href={`/courses/yachtmaster`} passHref>
                        <li>
                          <a href="">   Yachtmaster Prep Exam</a>
                        </li>
                      </Link>

                    </ul>
                  </div>
                </div>
              </li> */}

          </ul>
          <a className="uk-position-center-left hero-cards   uk-position-small uk-hidden-hover uk-visible@m" href="#" uk-slidenav-previous uk-slider-item="previous">

            <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#fff" strokeWidth="1.33" points="13 16 7 10 13 4"></polyline></svg>

          </a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-visible@m" href="#" uk-slidenav-next uk-slider-item="next">
            <svg width="40" height="40" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#fff" strokeWidth="1.33" points="7 4 13 10 7 16"></polyline></svg>




          </a>


        </div>
        <ul className="uk-s lider-nav uk-dotnav uk-flex-center uk-margin uk-flex uk-flex-center"></ul>
      </div>



    </main >

  )
}


