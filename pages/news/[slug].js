/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-children-prop */
import Link from "next/link";
import SEO from "../../components/Seo/Seo";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import ActionSection from "../../components/actionSection/ActionSection";

const newsSection = ({ item, homepage }) => {
  const imageUrl = item.attributes.image.data.attributes.url;

  return (
    <>
      {homepage && homepage.attributes && (
        <SEO data={homepage.attributes.seo} metaTitle={item.attributes.title} />
      )}

      <div
        id="banner"
        className="uk-background-blend-soft-light uk-background-primary uk-background-cover  uk-background-bottom-center uk-height-medium uk-panel uk-flex-wrap uk-flex-column uk-flex uk-flex-center uk-flex-middle"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
        uk-parallax="bgy: -100"
      >
        <h2 className="banner-titles uk-text-bolder uk-text-center  uk-margin-remove uk-padding-remove">
          {" "}
          {item.attributes.title}{" "}
        </h2>
      </div>
      <div className="uk-container uk-container-medium uk-padding-medium">
        <ul className="uk-breadcrumb uk-width-1-2@m uk-width-1-2@l banner-titles  uk-text-bolder uk-margin-remove uk-padding-small">
          <li>
            <Link href={"/"}>
              <a href="">Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/news"}>
              <a href="">Blog</a>
            </Link>
          </li>
          <li>
            <span>...</span>
          </li>
        </ul>
        <div className="uk-section">
          <img
            src={imageUrl}
            alt="profile_pic"
            className="uk-align-right@m uk-margin-remove-adjacent uk-height-large "
            uk-img
          />

          <p className="uk-text-bolder">
            <ReactMarkdown children={item.attributes.subTitle} />
          </p>

          <p> </p>

          <ReactMarkdown children={item.attributes.content} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div className="uk-width-expand">
              <p className="uk-text-meta uk-margin-remove-top">
                Written By {item.attributes.writtenBy}
              </p>
              <p className="uk-text-meta ">
                Posted{" "}
                <Moment format="DD/MM/YYYY">{item.attributes.date}</Moment>
              </p>
            </div>
          </div>
        </div>
        <ActionSection />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const newsRes = await fetchAPI("/news", { fields: ["slug"] });

  return {
    paths: newsRes.data.map((item) => ({
      params: {
        slug: item.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const newsRes = await fetchAPI("/news", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });

  return {
    props: {
      item: newsRes.data[0],
    },
    revalidate: 1,
  };
}

export default newsSection;
