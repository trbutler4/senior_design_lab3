import * as React from 'react'
import NavBar from '../components/navbar'
import { StaticImage } from 'gatsby-plugin-image'
import CommentSection from '../components/CommentSection'


const IndexPage = () => {
  return (
    <NavBar pageTitle="Geek Squad">
      <p>Welcome to our Senior Design Group Home Page!</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/Geek.jpg"
      />
    <CommentSection />
    </NavBar>
  )
}

export default IndexPage
