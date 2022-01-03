
import {
    fetchAPI,

} from "../../lib/api"
import Layout from "../../components/_App/Layout"
import SEO from "../../components/Seo/Seo"
import Navbar from "../../components/_App/Navbar"

const Category = ({ category, categories, homepage }) => {



    return (


        <>
            {homepage && homepage.attributes && <SEO data={homepage.attributes.seo} metaTitle={category.attributes.name} metaDescription={`All ${category.attributes.name} articles`} />}



            <div className="uk-section">
                <h1>{category.attributes.name}</h1>
                {/*                 <div className="uk-container uk-container-large">
                    <h1>{category.attributes.name}</h1>

                    {category.attributes.name === "about us" && (
                        <About data={category.attributes.content} />
                    )}

                    {category.attributes.name === "courses" && (
                        <Articles articles={category.attributes.articles.data} />
                    )}

                    {category.attributes.name === "contact us" && (
                        <Contact data={category.attributes.info} />
                    )}
                </div> */}
            </div>
            <h1>{category.attributes.name}</h1>
        </>


    )
}

export async function getStaticPaths() {
    const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] })



    return {
        paths: categoriesRes.data.map((category) => ({
            params: {
                slug: category.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const matchingCategories = await fetchAPI("/categories", {
        filters: { slug: params.slug },
        populate: {
            articles: {
                populate: "*",
            },
        },
    })
    const allCategories = await fetchAPI("/categories")

    const homepageRes = await fetchAPI("/homepage", {
        populate: {
            hero: "*",
            seo: { populate: "*" },
        },
    })

    return {
        props: {
            category: matchingCategories?.data[0],
            categories: allCategories,
            homepage: homepageRes?.data,
        },
        revalidate: 1,
    }
}

export default Category
