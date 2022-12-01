import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Layout from '../components/layout';
import commentBox from 'commentbox.io'

// not sure what components are being us on home page
// just designing page for now 
const ThomasPage = () => {
    return (
        document.body.style.backgroundColor = "green",
        <Layout pageTitle="About Thomas">
            <div>
                <h2>nav bar should be here</h2>
                <p>Welcome to my profile </p>
                <div>
                    <p>about me</p>
                    <p>bunch of text about me that i can edit later going here.....</p>
                    <ImageSlider slides={SliderData}/>
                </div>
                <div class="commentbox"></div>
                <script src="https://unpkg.com/commentbox.io/dist/commentBox.min.js"></script>
                <script>commentBox('5705371448508416-proj')</script>
            </div>
        </Layout>
    )
}

export default ThomasPage
 
