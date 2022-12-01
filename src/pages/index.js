import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
  document.body.style.backgroundColor = "white",
  <Layout pageTitle="Geek Squad">
      <br></br>
      <p>Welcome to our Senior Design Group Home Page!</p>
      <br></br>
      <StaticImage
        alt="Geek Squad Logo"
        src="../images/Geek.jpg"
      />
    </Layout>
  )
}

export default IndexPage
