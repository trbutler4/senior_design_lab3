import * as React from "react";
import Layout from "../components/layout";
const commentBox = require("commentbox.io");
const MarkPage = () => {
  // commentBox("5705371448508416-proj");
  return (
    (document.body.style.backgroundColor = "yellow"),
    (
      <Layout pageTitle="About Mark">
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
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
