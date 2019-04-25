import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-background-image"

const Image = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "ship-wreck.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
      <Img 
        Tag="section" 
        className={className}
        fluid={data.placeholderImage.childImageSharp.fluid}
        backgroundColor={'#040e18'}
      >
      {children}
      </Img>
      }
  />
)
export default Image;