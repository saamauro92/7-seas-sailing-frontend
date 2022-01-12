import Link from "next/link";


const Rya = ({ homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;


    return (
        <>
            <div className='uk-background-muted'>
                <div className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                    data-src={imgBanner}
                    data-srcset={imgBanner}
                    data-uk-img
                >
                    <p className="banner-titles uk-heading-medium uk-text-bolder ">About the RYA </p>

                    <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder">
                        <li >

                            <Link href={"/"}>
                                <a href=""> Home</a>
                            </Link>
                        </li>
                        <li > <span > About the RYA</span></li>

                    </ul>


                </div>
            </div>

        </>

    )

}


export default Rya;