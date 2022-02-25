/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import Link from 'next/link';
import React from 'react'
import SEO from '../../components/Seo/Seo';
import {
    fetchAPI,
} from "../../lib/api"
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import ActionSection from '../../components/actionSection/ActionSection';


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
                > Yachtmaster Training Scheme  </h2>
                <h2
                    className="banner-titles  uk-text-bolder  uk-margin-remove uk-padding-remove "
                    uk-toggle="cls: uk-heading-small;  mode: media; media: @s"

                >
                    The Pinnacle  of Yachting!


                </h2>


            </div>


            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle='Yachtmaster preparation' />}
            <div className="uk-container uk-container-medium  uk-animation-slide-bottom  uk-background-muted" uk-toggle="cls: uk-padding-small; mode: media; media: @m">

                <ul className="uk-breadcrumb uk-width-1-3@m  uk-text-bolder  uk-margin-remove uk-padding-small">
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
                        <span> Yachtmaster Training Scheme  </span></li>


                </ul>
                <div className="uk-section  ">
                    <img src={data.attributes.image.data.attributes.formats.medium.url} className='uk-align-center uk-height-large uk-padding-small uk-align-right@m uk-margin-remove-adjacent' alt="" uk-image />
                    <ReactMarkdown children={data.attributes.description} linkTarget="_blank" remarkPlugins={[remarkGfm]} />


                </div>



                <div className="uk-section uk-width-expand  uk-padding-remove-vertical uk-margin  " uk-toggle="cls: uk-flex; mode: media; media: @m ">
                    <div className=" fade-effect uk-width-1-1  uk-padding-small uk-padding-remove-horizontal" uk-scrollspy="cls: uk-animation-fade; delay:200; repeat: false">

                        <ReactMarkdown children={data.attributes.theory} linkTarget="_blank" remarkPlugins={[remarkGfm]} />

                    </div>


                    <div className="fade-effect      uk-padding-small " uk-scrollspy="cls: uk-animation-fade; delay:400; repeat: false">

                        <ReactMarkdown children={data.attributes.practical} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                    </div>



                </div>
                <div className="uk-section uk-width-expand  uk-padding-remove-vertical uk-margin  " uk-toggle="cls: uk-flex; mode: media; media: @m ">

                    {/*  OCEAN  */}
                    <div className="uk-section uk-width-1-1   " uk-grid>


                        <img src={data.attributes.image_three.data.attributes.formats.medium.url} className='uk-align-right@m uk-height-large uk-padding-small uk-align-left@m uk-margin-remove-adjacent' alt="" uk-image />


                        <ReactMarkdown children={data.attributes.ocean_description} linkTarget="_blank" remarkPlugins={[remarkGfm]} />



                    </div>

                </div>

                <div className="uk-section uk-width-expand  uk-padding-remove-vertical uk-margin  " uk-toggle="cls: uk-flex; mode: media; media: @m ">


                    <div className=" fade-effect uk-width-1-1  uk-padding-small uk-padding-remove-horizontal" uk-scrollspy="cls: uk-animation-fade; delay:200; repeat: false">

                        <ReactMarkdown children={data.attributes.ocean_theory} linkTarget="_blank" remarkPlugins={[remarkGfm]} />

                    </div>


                    <div className="fade-effect  uk-width-1-1    uk-padding-small " uk-scrollspy="cls: uk-animation-fade; delay:400; repeat: false">

                        <ReactMarkdown children={data.attributes.ocean_practical} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                    </div>


                </div>


            </div>


            <div className="uk-container  uk-container-medium  uk-padding-remove uk-margin " uk-toggle="cls: uk-padding-small; mode: media; media: @m">

                <h2 className='uk-padding'> <strong> Prerequisites and exam format for each level of Yachtmaster qualification:</strong> </h2>


                <div className="uk-child-width-expand uk-background-muted uk-margin-large-bottom uk-padding-small  " uk-grid uk-scrollspy="cls: uk-animation-fade;  delay: 300; repeat: false">
                    <div>
                        <h2>   RYA Yachtmaster Coastal Exam</h2>


                        <div uk-grid className='uk-flex '
                            uk-toggle="cls: uk-flex; mode: media; media: @l" >



                            {yachtmasterCoastalPath.map((item, i) =>
                                <>
                                    <div className="uk-width-1-4 " >

                                        <ul className="uk-tab-left" uk-tab="connect: #component-nav-coastal; animation: uk-animation-fade">
                                            <li><a href="#">{item.Minimum_seatime}</a></li>
                                            <li><a href="#">{item.form_of_exam}</a></li>
                                            <li><a href="#">{item.certification_required}</a></li>
                                            <li><a href="#">{item.minimum_exam_duration}</a></li>
                                            <li><a href="#">{item.minimum_age}</a></li>
                                        </ul>
                                    </div>

                                    <div className="uk-width-1-1 " >
                                        <ul id="component-nav-coastal" className="uk-switcher uk-padding-small uk-padding-remove-vertical uk-margin" >
                                            <div className="uk-height-1-1 uk-height-match" >

                                                <li>
                                                    <ReactMarkdown children={item.contentItemOne} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className=" uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemTwo} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemThree} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemFour} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemFive} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </>


                            )}



                        </div>
                    </div >
                </div>

                <div className="uk-child-width-expand uk-background-muted uk-margin uk-padding-small uk-margin-large-bottom" uk-grid uk-scrollspy="cls: uk-animation-fade;  delay: 300; repeat: false">
                    <div>
                        <h2>RYA Yachtmaster Offshore Exam</h2>

                        <div uk-grid className='uk-flex '
                            uk-toggle="cls: uk-flex; mode: media; media: @l" >


                            {yachtmasterOffshorePath.map((item, i) =>
                                <>
                                    <div className="uk-width-1-4 ">

                                        <ul className="uk-tab-left" uk-tab="connect: #component-nav-offshore; animation: uk-animation-fade">
                                            <li><a href="#">{item.Minimum_seatime}</a></li>
                                            <li><a href="#">{item.form_of_exam}</a></li>
                                            <li><a href="#">{item.certification_required}</a></li>
                                            <li><a href="#">{item.minimum_exam_duration}</a></li>
                                            <li><a href="#">{item.minimum_age}</a></li>
                                        </ul>
                                    </div>

                                    <div className="uk-width-1-1 ">
                                        <ul id="component-nav-offshore" className="uk-switcher uk-padding-small uk-padding-remove-vertical uk-margin" >
                                            <div className="uk-height1-1 uk-height-match">

                                                <li>
                                                    <ReactMarkdown children={item.contentItemOne} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className=" uk-height-1-1 " uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemTwo} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemThree} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemFour} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemFive} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </>


                            )}


                        </div>
                    </div>
                </div >

                <div className="uk-child-width-expand uk-background-muted uk-margin uk-padding-small uk-margin-large-bottom" uk-grid uk-scrollspy="cls: uk-animation-fade;  delay: 300; repeat: false">
                    <div>
                        <h2> RYA Yachtmaster Ocean Exam</h2>
                        <div uk-grid className='uk-flex '
                            uk-toggle="cls: uk-flex; mode: media; media: @l" >


                            {yachtmasterOceanPath.map((item, i) =>
                                <>
                                    <div className="uk-width-1-4 ">

                                        <ul className="uk-tab-left" uk-tab="connect: #component-nav-ocean; animation: uk-animation-fade">
                                            <li><a href="#">{item.Minimum_seatime}</a></li>
                                            <li><a href="#">{item.form_of_exam}</a></li>
                                            <li><a href="#">{item.certification_required}</a></li>
                                            <li><a href="#">{item.minimum_exam_duration}</a></li>
                                            <li><a href="#">{item.minimum_age}</a></li>
                                        </ul>
                                    </div>

                                    <div className="uk-width-1-1 ">
                                        <ul id="component-nav-ocean" className="uk-switcher uk-padding-small uk-padding-remove-vertical uk-margin" >
                                            <div className="uk-height-1-1 uk-height-match">

                                                <li>
                                                    <ReactMarkdown children={item.contentItemOne} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className=" uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemTwo} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemThree} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemFour} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                            <div className="uk-height-1-1" uk-toggle="cls: uk-height-large ; mode: media; media: @m">
                                                <li>
                                                    <ReactMarkdown children={item.contentItemFive} linkTarget="_blank" remarkPlugins={[remarkGfm]} />
                                                </li>
                                            </div>
                                        </ul>
                                    </div>
                                </>


                            )}


                        </div>
                    </div>
                </div >
                <div className="uk-section">

                    <ReactMarkdown children={data.attributes.price} />
                </div>

                <ActionSection > Contact us </ActionSection>




                <img src={data.attributes.image_two.data.attributes.url} className='uk-align-center uk-height-small uk-padding-small uk-align-center@m uk-margin-remove-adjacent' alt="" uk-image />
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
