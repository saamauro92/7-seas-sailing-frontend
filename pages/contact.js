/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import SEO from '../components/Seo/Seo'
import { fetchAPI } from '../lib/api';


const contact = ({ data, homepage }) => {
    const imgBanner = homepage.attributes.hero.banner.data.attributes.url;
    return (

        <div className='' >
            <iframe src="https://form.typeform.com/to/ewqegeai" frameBorder="0" style={{ width: "100%", height: "600px" }}></iframe>

        </div>

    )
}

export default contact


