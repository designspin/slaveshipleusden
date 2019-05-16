import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
          title 
          gallery {
            gallery_image 
            gallery_image_desc
            title
          } 
        }
      }
    }
  }
    }
  `)

  const { edges } = data.allMarkdownRemark;
  console.log(edges);
  const images = edges[0].node.frontmatter.gallery.map((g) => {
    console.log(g);
    return {
     original: g["gallery_image"] 
    }
  });

  return (
    <Gallery items={images} />
  )
}