import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Layout from '../components/layout';
import commentBox from 'commentbox.io'
import { Link } from 'gatsby';

// not sure what components are being us on home page
// just designing page for now
const ThomasPage = () => {
    return (
        document.body.style.backgroundColor = "green",
        <Layout pageTitle="About Thomas">
            <div>
                <div>
                    <p>I am Studying Computer Science and Engineering at the universtiy of iowa. You can usually find me banging away on my laptop blaring music on my headphones in any given cafe.
                        I love the outdoors, and grew up camping and hunting, even going as far as to become an eagle scout. Feel free 
                        to connect on linkedin, and checkout what i am currently working on at my github page!
                    </p>
                    <div className="links">
                        <li><Link to="https://github.com/trbutler4">Github</Link></li>
                        <li><Link to="https://www.linkedin.com/in/thomas-butler-1a435018b/">linkedin</Link></li>   
                    </div>
                    <ImageSlider slides={SliderData}/> 
                </div>

                <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
                <div className="commentbox" />
                <script>
                  {window.addEventListener("load", function () {
                    commentBox("5705371448508416-proj");
                  })}
                </script>


                <div class="commentbox"></div>
                <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
                <script>commentBox('5705371448508416-proj')</script>
            </div>
        </Layout>
    )
};

export default ThomasPage;
