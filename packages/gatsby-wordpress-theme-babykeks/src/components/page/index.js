import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { isEmpty } from "lodash";
import "./style.scss";
// import Taxonomies from "../widgets/taxonomies";

const Page = (props) => {
    const { data } = props;
    const imgData = useStaticQuery(graphql`
query {
  file(relativePath: {eq: "default/default.jpg"}) {
    childImageSharp {
      original {
        src
      }
    }
  }
}
    `);
    return (
        <>
            {!isEmpty(data) ? (
                <div className="page-container wrapper">
                    {!isEmpty(data.title) ? (
                        <h2>{data.title}</h2>
                    ) : null}
                    <div className="page-content wrap">
                        <section className="page-content">
                            {!isEmpty(data.featuredImage) ? (
                                <Img original={data.featuredImage.sourceUrlSharp.childImageSharp.original} alt={data.altText ? data.altText : data.title} />
                            ) : (
                                    <Img original={imgData.file.childImageSharp.original} alt="Default" />
                                )}

                            {!isEmpty(data.content) ? (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.content,
                                    }}
                                />
                            ) : null}
                        </section>
                        {/* <aside className="aside">
                            <Taxonomies taxonomies={data.categories} />
                        </aside> */}
                    </div>
                </div>
            ) : (
                    "Loading..."
                )}
        </>
    );
};

export default Page;