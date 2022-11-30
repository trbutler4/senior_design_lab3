import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
  <Layout pageTitle="Geek Squad">
      <br></br>
      <p>Welcome to our Senior Design Group Home Page!</p>
      <br></br>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/Geek.jpg"
      />
    </Layout>
  )
}

export default IndexPage
