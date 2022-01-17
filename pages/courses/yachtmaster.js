/* eslint-disable react/no-children-prop */
import Link from 'next/link';
import React from 'react'
import SEO from '../../components/Seo/Seo';
import {
    fetchAPI,
} from "../../lib/api"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'


const Yachtmaster = ({ homepage, data }) => {
    const imageUrl = homepage.attributes.hero.banner.data.attributes.url;

    const yachtmasterCoastalPath = data.attributes.Yachtmaster_Coastal_Exam_Requisites;
    const yachtmasterOffshorePath = data.attributes.Yachtmaster_Offshore_Exam_prerequisites;
    const yachtmasterOceanPath = data.attributes.Yachtmaster_Ocean_Exam_prerequisites;


    return (


        <div>
            <div
                id="banner"
                className="uk-background-blend-soft-light uk-background-primary uk-background-cover uk-height-small uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
                data-src={imageUrl}
                data-srcset={imageUrl}
                data-uk-img
                uk-toggle="cls: uk-height-medium; mode: media; media: @l"
                uk-parallax="bgy: -100"
            >

                <h2
                    className="banner-titles  uk-text-bolder  uk-margin-remove uk-padding-remove "
                    uk-toggle="cls: uk-heading-small;  mode: media; media: @s"
                >  Yachtmaster   </h2>

                <ul className="uk-breadcrumb banner-titles uk-heading-medium  uk-text-bolder  uk-margin-remove uk-padding-small">
                    <li>
                        <Link href={"/"}>
                            <a href="">Home</a>
                        </Link>
                    </li>
                    <li >



                        <Link href={"/courses"}>
                            <a href=""> Courses</a>
                        </Link>
                    </li>
                    <li>
                        <span> Yachtmaster Preparation </span></li>


                </ul>
            </div>


            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle='Yachtmaster preparation' />}

            <div className="uk-container uk-container-mediumW uk-padding-small uk-animation-slide-bottom uk-background-muted">



                <div className="uk-child-width-auto uk-padding uk-margin " uk-grid>
                    <div>

                        <h2>   RYA Yachtmaster Coastal Exam</h2>

                        <div uk-grid className='uk-flex'>



                            {yachtmasterCoastalPath.map((item, i) =>
                                <>
                                    <div className="uk-width-1-3 uk-padding-small">

                                        <ul className="uk-tab-left" uk-tab="connect: #component-nav-coastal; animation: uk-animation-fade">
                                            <li><a href="#">{item.Minimum_seatime}</a></li>
                                            <li><a href="#">{item.form_of_exam}</a></li>
                                            <li><a href="#">{item.certification_required}</a></li>
                                            <li><a href="#">{item.minimum_exam_duration}</a></li>
                                            <li><a href="#">{item.minimum_age}</a></li>
                                        </ul>
                                    </div>

                                    <div className="uk-width-1-1">
                                        <ul id="component-nav-coastal" className="uk-switcher">
                                            <li>
                                                <ReactMarkdown children={item.contentItemOne} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemTwo} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemThree} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemFour} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemFive} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                        </ul>
                                    </div>
                                </>


                            )}


                        </div>
                    </div>
                </div >

                <div className="uk-child-width-auto uk-padding uk-margin " uk-grid>
                    <div>
                        <h2>RYA Yachtmaster Offshore Exam</h2>

                        <div uk-grid className='uk-flex'>


                            {yachtmasterOffshorePath.map((item, i) =>
                                <>
                                    <div className="uk-width-1-3 uk-padding-small">

                                        <ul className="uk-tab-left" uk-tab="connect: #component-nav-offshore; animation: uk-animation-fade">
                                            <li><a href="#">{item.Minimum_seatime}</a></li>
                                            <li><a href="#">{item.form_of_exam}</a></li>
                                            <li><a href="#">{item.certification_required}</a></li>
                                            <li><a href="#">{item.minimum_exam_duration}</a></li>
                                            <li><a href="#">{item.minimum_age}</a></li>
                                        </ul>
                                    </div>

                                    <div className="uk-width-1-1">
                                        <ul id="component-nav-offshore" className="uk-switcher">
                                            <li>
                                                <ReactMarkdown children={item.contentItemOne} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemTwo} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemThree} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemFour} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemFive} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                        </ul>
                                    </div>
                                </>


                            )}


                        </div>
                    </div>
                </div >

                <div className="uk-child-width-auto uk-padding uk-margin " uk-grid>
                    <div>
                        <h2> RYA Yachtmaster Ocean Exam</h2>
                        <div uk-grid className='uk-flex'>


                            {yachtmasterOceanPath.map((item, i) =>
                                <>
                                    <div className="uk-width-1-3 uk-padding-small">

                                        <ul className="uk-tab-left" uk-tab="connect: #component-nav-ocean; animation: uk-animation-fade">
                                            <li><a href="#">{item.Minimum_seatime}</a></li>
                                            <li><a href="#">{item.form_of_exam}</a></li>
                                            <li><a href="#">{item.certification_required}</a></li>
                                            <li><a href="#">{item.minimum_exam_duration}</a></li>
                                            <li><a href="#">{item.minimum_age}</a></li>
                                        </ul>
                                    </div>

                                    <div className="uk-width-1-1">
                                        <ul id="component-nav-ocean" className="uk-switcher">
                                            <li>
                                                <ReactMarkdown children={item.contentItemOne} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemTwo} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemThree} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemFour} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                            <li>
                                                <ReactMarkdown children={item.contentItemFive} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                            </li>
                                        </ul>
                                    </div>
                                </>


                            )}


                        </div>
                    </div>
                </div >





            </div >



        </div >
    )
}




export default Yachtmaster;


export async function getStaticProps() {

    const yachtmasterData = await fetchAPI("/yachtmaster", { populate: "*" });

    return {
        props: {

            data: yachtmasterData.data,


        },
        revalidate: 1,
    }
}
