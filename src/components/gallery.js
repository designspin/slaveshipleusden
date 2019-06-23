import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Gallery from 'react-image-gallery';

export default () => {
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: {regex: "/gallery/"}
        }
      ) {
    edges {
      node {
        frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
                fixed(width: 100, height: 70) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            description
            title
        }
      }
    }
  }
    }
  `)

  const { edges } = data.allMarkdownRemark;
  
  const images = edges.map((g) => {
    return {
     /*renderItem: (item) => <div className="image-gallery-image">
      <Img fluid={g.node.frontmatter.image.childImageSharp.fluid} />
      {
        item.description &&
        <span className="image-gallery-description">
          {item.description}
        </span>
      }
      </div>,*/
     original: g.node.frontmatter.image.childImageSharp.fluid.src,
     srcSet: g.node.frontmatter.image.childImageSharp.fluid.srcSet,
     sizes: g.node.frontmatter.image.childImageSharp.fluid.sizes,
     thumbnail: g.node.frontmatter.image.childImageSharp.fixed.src,
     description: g.node.frontmatter.description
    }
  });

  return (
    <Gallery items={images} showBullets={true} thumbnailPosition="bottom"/>
  )
}