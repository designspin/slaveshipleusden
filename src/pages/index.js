import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImage from "../components/cover-image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CoverImage className="cover"></CoverImage>
    <section className="section section--about">
      <div className="container">
        <h2 className="title title--underline">Slave Ship Leusden - <a className="btn btn--buy" href="https://www.amazon.co.uk/dp/B00J9UMY2O?ref_=cm_sw_r_kb_dp_EAkYCb4A0A0XW&tag=kp025-21&linkCode=kpe">Available On Amazon</a></h2>
        <div className="flex-row flex-row--center flex-row--50">
          <div className="flex-item">
            <iframe type="text/html" width="336" height="550" frameborder="0" allowfullscreen style={{'max-width':'100%'}} src="https://read.amazon.co.uk/kp/card?asin=B00J9UMY2O&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_EAkYCb4A0A0XW" ></iframe>
            </div>
          <div className="flex-item">
              <p>This book is an adaptation of my scientific research into the history of the Leusden, one of the last slave ships of the West-Indian Company (WIC). This type of vessel was usually deployed for other activities following one or more slave voyages. The Leusden is an exception and has exclusively undertaken slave voyages from her maiden voyage in 1719 until she foundered in 1738, amounting to ten crossings in total.  During those ten voyages, 6564 captives were embarked; 1639 of whom did not survive the crossing. An additional 102 captives perished in the slave stores prior to being sold, resulting in an overall death count of 1741. This proportion constituted more than a quarter of the number of captives embarked in Africa; an incredible waste of human lives.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
