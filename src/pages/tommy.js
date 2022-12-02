import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import commentBox from "commentbox.io";

class TommyPage extends Component {
  componentDidMount() {
    this.removeCommentBox = commentBox("5705371448508416-proj");
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return (
      (
        <Layout pageTitle="About Tommy">
          <p> University of Iowa 2023 Computer Science and Engineering</p>
          <StaticImage alt="Tommy with Bear" src="../images/Tommypic.jpg" />
          <br></br>

          <p>
            My name is Tommy Subaric, I am from Carpentersville, IL. Some of my
            hobbies include: Watching movies, playing sports and doing anything
            outdoors like hiking, biking, skiing and traveling. I am also huge
            fan of the Chicago Bears and Chicago Cubs!
          </p>
          <br></br>
          <p>
            I'm gonna make them an offer they can't refuse. -Don Vito Corleone
          </p>
          <StaticImage
            alt="Tommy Godfather Picture"
            src="../images/Godfatha.jpg"
          />
          <div className="commentbox">
          </div>
        </Layout>
      )
    );
  }
}


export default TommyPage;
