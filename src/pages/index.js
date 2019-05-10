import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CoverImage from "../components/cover-image"
import AuthorImage from "../components/author-image"
import Reviews from "../components/reviews"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Slavery`, `Shipwreck`, `Slave Ship Leusden`]} />
    <CoverImage className="cover">
      <h2 className="cover__description">A Story of Mutiny, Shipwreck and Murder</h2>
    </CoverImage>
    <section className="section section--about">
      <div className="container">
        <h2 className="title title--underline">Slave Ship Leusden - <a className="btn btn--buy" href="https://www.amazon.co.uk/dp/B00J9UMY2O?ref_=cm_sw_r_kb_dp_EAkYCb4A0A0XW&tag=kp025-21&linkCode=kpe">Available On Amazon</a></h2>
        <div className="flex-row flex-row--center flex-row--50">
          <div className="flex-item">
            <iframe title="Kindle Preview" type="text/html" width="336" height="550" frameBorder="0" allowFullScreen style={{maxWidth:'100%', display: 'block', margin: '0 auto'}} src="https://read.amazon.co.uk/kp/card?asin=B00J9UMY2O&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_EAkYCb4A0A0XW" ></iframe>
            </div>
          <div className="flex-item">
              <p>This book is an adaptation of my scientific research into the history of the Leusden, one of the last slave ships of the West-Indian Company (WIC). This type of vessel was usually deployed for other activities following one or more slave voyages. The Leusden is an exception and has exclusively undertaken slave voyages from her maiden voyage in 1719 until she foundered in 1738, amounting to ten crossings in total.  During those ten voyages, 6564 captives were embarked; 1639 of whom did not survive the crossing. An additional 102 captives perished in the slave stores prior to being sold, resulting in an overall death count of 1741. This proportion constituted more than a quarter of the number of captives embarked in Africa; an incredible waste of human lives.</p>
          </div>
        </div>
        <Reviews />
      </div>
    </section>
    <section className="section section--author">
      <div className="container">
        <h2 className="title title--underline">The Author - Leo Balai</h2>
        <div className="flex-row flex-row--center flex-row--50">
          <div className="flex-item">
              <p>Leonard (Leo) Balai (Paramaribo/Suriname 1946) studied law and public administration at the University of Amsterdam.</p>
              <p>After his graduation he was active in various fields. He was a member of the City Council of Amsterdam for almost 11 years. He took his PhD with a thesis on the slave ship Leusden and the West India Company.</p>
              <p>In May 2013 he published: Geschiedenis van de Amsterdamse slavenhandel (History of the Amsterdam slave trade). He also published: The last journey of the slave ship Rusthof.</p>
              <p>Leo Balai is married to Dita Vermeulen; 5 grandchildren; lives in Amsterdam.</p>
              <h4>Update (April 2019)</h4>
              <p>At the moment I am doing research for a book about a director-general of the Dutch West India Company (WIC). From 1621 – 1738 the WIC was given a monopoly for trade and navigation in the Atlantic  (the Americas and West-Africa) by the Dutch government. During a short period in the 18th century he WIC was one of the worlds most important slave trading organisations. The director-generals were very powerful persons in West-Africa.</p> 
              <p>In cooperation with professor Jerzy Gawronski (maritime archeologist) we will write an updated  version of the last voyage of the Leusden, based on the research which has been done about the possible wrecksite of the ship.</p>  
          </div>
          <div className="flex-item">
            <AuthorImage />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
