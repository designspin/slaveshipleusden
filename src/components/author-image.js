import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "leo-balai-2015.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => 
      <Img 
        style={{ 'max-width': '336px', 'margin': '0 auto' }} 
        className={className}
        alt="Leo Balai - Author of Slave Ship Leusden"
        fluid={data.placeholderImage.childImageSharp.fluid} />
    }/>
)

export default Image;