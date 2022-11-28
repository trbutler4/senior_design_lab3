import * as React from 'react'
import NavBar from '../components/navbar'
import { StaticImage } from 'gatsby-plugin-image'

const TommyPage = () => {
  return (
    <NavBar pageTitle="About Tommy">
      <p>I'm gonna make them an offer they can't refuse. -Don Vito Corleone</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/Godfatha.jpg"
      />
    </NavBar>
  )
}

export default TommyPage