import React, { Component } from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import Layout from "../components/layout";
import commentBox from "commentbox.io";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";


class ThomasPage extends Component {
  componentDidMount() {
    this.removeCommentBox = commentBox("5705371448508416-proj");
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return (
      (
        <Layout pageTitle="About Thomas">
          <div>
            <div>
              <p>
                I am Studying Computer Science and Engineering at the universtiy
                of iowa. You can usually find me banging away on my laptop
                blaring music on my headphones in any given cafe. I love the
                outdoors, and grew up camping and hunting, even going as far as
                to become an eagle scout. I also like to cook, when i can find the time for it.
                Feel free to connect on linkedin, and checkout what i am currently working on at my github page!
              </p>
              <div className="links">
                <li>
                  <Link to="https://github.com/trbutler4">Github</Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/thomas-butler-1a435018b/">
                    linkedin
                  </Link>
                </li>
              </div>
              <br></br>
              <br></br>

              <p>Heres a picture of me on a mountain</p>
              <br></br>
              <StaticImage alt = "picture of thomas on a mountain" src="../images/mountain_selfie.jpg" />

              <br></br>
              <br></br>

              <p>Heres a picture of some awesome steaks i cooked!</p>
              <br></br>
              <StaticImage alt = "picture of some delicious steaks" src="../images/steak.jpg" />
            </div>

            <div className="commentbox" />
          </div>
        </Layout>
      )
    );
  }
}


export default ThomasPage;
