import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const TommyPage = () => {
  return (
    <Layout pageTitle="About Tommy">
      <p>I'm gonna make them an offer they can't refuse. -Don Vito Corleone</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/Godfatha.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default TommyPage