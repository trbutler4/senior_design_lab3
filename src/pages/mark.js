import React, { Component } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import commentBox from "commentbox.io";

class MarkPage extends Component {
  componentDidMount() {
    this.removeCommentBox = commentBox("5705371448508416-proj");
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }
  render() {
    return (
      (
        <Layout pageTitle="About Mark">
          <p>
            My name is Mark Brom, I am a senior at the University of Iowa
            majoring in Computer Science and Engineering. I am from La Grange,
            Illinois. My skills are mainly in the computing world but I also
            play 3 instruments. I love going to the theater, hanging out with
            friends, and spending time with family.
          </p>
          <br />
          <br />
          <StaticImage alt="Picture of Mark" src="../images/youngmarcus.jpg" />
          <br />
          <br />
          <p>And now for my favorite song!</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="commentbox" />
        </Layout>
      )
    );
  }
}

// const MarkPage = () => {
//   // commentBox("5705371448508416-proj");
//   return (
//     (document.body.style.backgroundColor = "yellow"),
//     (
//       <Layout pageTitle="About Mark">
//         <p>
//           My name is Mark Brom, I am a senior at the University of Iowa majoring
//           in Computer Science and Engineering. I am from La Grange, Illinois. My
//           skills are mainly in the computing world but I also play 3
//           instruments. I love going to the theater, hanging out with friends,
//           and spending time with family.
//         </p>
//         <br />
//         <br />
//         <StaticImage alt="Picture of Mark" src="../images/youngmarcus.jpg" />
//         <br />
//         <br />
//         <p>And now for my favorite song!</p>
//         <iframe
//           width="560"
//           height="315"
//           src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//           title="YouTube video player"
//           frameborder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowfullscreen
//         ></iframe>
//         <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
//         <div className="commentbox" />
//         <script>
//           {window.addEventListener("load", function () {
//             commentBox("5705371448508416-proj");
//           })}
//         </script>
//         {/* {commentBox("5705371448508416-proj")} */}

//         {/* <div class="commentbox"></div> */}

//         {/* <script>commentBox('5705371448508416-proj')</script> */}
//       </Layout>
//     )
//   );
// };

export default MarkPage;
