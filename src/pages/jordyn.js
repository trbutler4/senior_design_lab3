import React, { Component } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import commentBox from "commentbox.io";

class JordynPage extends Component {
  componentDidMount() {
    this.removeCommentBox = commentBox("5705371448508416-proj");
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return (
      (
        <Layout pageTitle="About Jordyn">
          <br></br>

          <p>University of Iowa</p>
          <p>Major: Computer Science and Engineering</p>

          <a
            href="https://www.linkedin.com/in/jordyn-iannuzzelli/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <br></br>
          <br></br>

          <StaticImage
            alt="Picture of Jordyn"
            src="../images/jordynpicture.jpg"
          />
          <br></br>
          <br></br>

          <p>This is my dog Murphy</p>
          <br></br>
          <StaticImage alt="Picture of Jordyn" src="../images/murphy.jpg" />

          <div className="commentbox" />
        </Layout>
      )
    );
  }
}

export default JordynPage;
