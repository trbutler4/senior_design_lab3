import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const TommyPage = () => {
  return (
    <Layout pageTitle="About Tommy">
      <p>I'm gonna make them an offer they can't refuse. -Don Vito Corleone</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/Godfatha.jpg"
      />
      
      <div class="commentbox"></div>
      <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
      <script>commentBox('5705371448508416-proj')</script>
    </Layout>
  )
}

export default TommyPage