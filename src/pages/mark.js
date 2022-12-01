import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
const commentBox = require("commentbox.io");
const MarkPage = () => {
  // commentBox("5705371448508416-proj");
  return (
    (document.body.style.backgroundColor = "yellow"),
    (
      <Layout pageTitle="About Mark">
        <p>
          My name is Mark Brom, I am a senior at the University of Iowa majoring
          in Computer Science and Engineering. I am from La Grange, Illinois. My
          skills are mainly in the computing world but I also play 3
          instruments. I love going to the theater, hanging out with friends,
          and spending time with family.
        </p>
        <br />
        <br />
        <StaticImage alt="Picture of Mark" src="../images/youngmarcus.jpg" />
        <br />
        <br />
        <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
        <div className="commentbox" />
        <script>
          {window.addEventListener("load", function () {
            commentBox("5705371448508416-proj");
          })}
        </script>

        {/* <div class="commentbox"></div> */}

        {/* <script>commentBox('5705371448508416-proj')</script> */}
      </Layout>
    )
  );
};

export default MarkPage;
