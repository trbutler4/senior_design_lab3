import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
const commentBox = require("commentbox.io");

const JordynPage = () => {
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

        <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
        <div className="commentbox" />
        <script>
          {window.addEventListener("load", function () {
            commentBox("5705371448508416-proj");
          })}
        </script>
      </Layout>
    )
  );
};

export default JordynPage;
