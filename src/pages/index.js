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
              <p>Originally published in 2013 in native Dutch, and an English version is available as an e-book at Amazon. This book is an adaptation of my scientific research into the history of the Leusden, one of the last slave ships of the West-India Company (WIC). This type of vessel was usually deployed for other activities following one or more slave voyages. The Leusden is an exception and has exclusively undertaken slave voyages from her maiden voyage in 1719 until she foundered in 1738, amounting to ten crossings in total.  During those ten voyages, 6564 captives were embarked; 1639 of whom did not survive the crossing. An additional 102 captives perished in the slave stores prior to being sold, resulting in an overall death count of 1741. This proportion constituted more than a quarter of the number of captives embarked in Africa; an incredible waste of human lives.</p>
          </div>
        </div>
        <p>The history of this slave ship has gone almost entirely unnoticed until now. This is remarkable given that its final voyage ended in the single largest human tragedy in Dutch maritime history and in the history of the trans-Atlantic slave trade. The Leusden departed from Elmina, located in modern-day Ghana on the 19th of November 1737. On board were 700 African captives, destined to be sold as slaves in Suriname. On 1 January 1738, the Leusden foundered at the mouth of the Marowijne River in Suriname. At the time of the disaster there were still 680 captives on board. A mere 16 of them survived. The way in which the crew sent the remaining 664 African prisoners to their deaths is unimaginable, even when taking into consideration the inherent cruelty of the slave trade.</p>
        <p>Part I deals with subjects which are important with regard to comprehending the trans-Atlantic slave trade and relative to this the role played by the Netherlands. In part II, I tackle the history of the Leusden, from it being built in 1719 until the disastrous sinking in 1738. In describing the ten voyages, nearly all possible scenarios that could take place on slave ships feature; uprisings, disease, conflicts involving ships of other nations and ultimately, murder. In the commentary I will demonstrate how the naval disaster of the Leusden led to a eminently unique crime in the history of the international slave trade.</p>
        <p>A final comment regarding my use of the term ‘captives’ instead of ‘slaves’ or ‘enslaved’. Albeit that African traders sold these people to European traders, who in turn would sell them on to slave owners in America, there is no reason to label them slaves during their passage on the ships. The slave ship was the temporary dwelling place for the captives for the purposes of forced transport to a situation of total submission in a slave colony. My preference for designating them as captives corresponds with the aim of describing as clearly as possible, the position and circumstances in which they found themselves once on board a slave ship. Clearly, whilst on a slave ship we cannot yet speak in terms of a master and slave relationship. That particular rapport only came into being once the captive had been sold in America and became a slave owner’s possession.</p>
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
              <p>In May 2013 he published: Geschiedenis van de Amsterdamse slavenhandel (History of the Amsterdam slave trade). He also published: De laatste reis van het slavenschip Rusthof (The last journey of the slave ship Rusthof).</p>
              
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
