import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Custom404({ homepage }) {


  return <>


    <div className="uk-container uk-container-medium  uk-padding">

      <div className="uk-width-1-1 uk-flex uk-flex-column uk-flex-around uk-padding uk-text-center">

        <h2 className="uk-heading-medium uk-text-primary "> Oops! something{"'"}s gone wrong!</h2>
        <div className="uk-card">

          <img src={homepage.attributes.hero.sail.data.attributes.url} alt="404_pic" width={100} className="" />
        </div>
        <div className="uk-card uk-margin-top uk-padding-small">
          <h3>Not to worry, why don{"'"}t you try one of these helpful links:</h3>
          <Link href={'/'} passHref>

            <button className="uk-button uk-button-primary">
              Home
            </button>
          </Link>
          <Link href={'/courses'} passHref>

            <button className="uk-button uk-button-primary">
              Courses
            </button>
          </Link>
          <Link href={'/activities-and-services'} passHref>

            <button className="uk-button uk-button-primary">
              Activities {"&"} Services
            </button>
          </Link>
        </div>

        <p className="uk-text-danger uk-margin-top uk-padding">
          404 - Page Not Found
        </p>
      </div>
    </div>




  </>
}