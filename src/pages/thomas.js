import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Layout from '../components/layout';

// not sure what components are being us on home page
// just designing page for now 
const ThomasPage = () => {
    return (
        <Layout pageTitle="About Thomas">
            <div>
                <h2>nav bar should be here</h2>
                <p>Welcome to my profile </p>
                <div>
                    <p>about me</p>
                    <p>bunch of text about me that i can edit later going here.....</p>
                    <ImageSlider slides={SliderData}/>
                </div>
            </div>
        </Layout>
    )
}

export default ThomasPage
 
