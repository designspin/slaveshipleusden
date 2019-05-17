import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from '../components/gallery'

const SecondPage = () => (
  <Layout>
    <SEO title="Gallery" />
    <section className="section">
    <div className="container">
    <h1 className="title title--underline">Gallery</h1>
    <Gallery />
    </div>
    </section>
  </Layout>
)

export default SecondPage
