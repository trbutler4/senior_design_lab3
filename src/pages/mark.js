import * as React from 'react'
import Layout from '../components/layout'

const MarkPage = () => {
  return (
    document.body.style.backgroundColor = "yellow",
    <Layout pageTitle="About Mark">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>

      
      <div class="commentbox"></div>
      <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
      <script>commentBox('5705371448508416-proj')</script>
    </Layout>
  )
}

export default MarkPage