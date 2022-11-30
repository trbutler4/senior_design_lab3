import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'


const JordynPage = () => {
  return (
    <Layout pageTitle="About Jordyn">
      <br></br>
      
      <p>University of Iowa</p>
      <p>Major: Computer Science and Engineering</p>

      <a href="https://www.linkedin.com/in/jordyn-iannuzzelli/" target="_blank" rel="noopener noreferrer">linkedin</a>
      <br></br>
      <br></br>

      <StaticImage
        alt="Picture of Jordyn"
        src="../images/jordynpicture.jpg"
      />
    </Layout>
  )
}

export default JordynPage