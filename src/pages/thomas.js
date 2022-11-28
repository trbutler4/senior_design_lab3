import React from 'react';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';

// not sure what components are being us on home page
// just designing page for now 
export default function ThomasPage() {
    return (
        <div>
            <h2>nav bar should be here</h2>
            <p>Welcome to my profile </p>
            <div>
                <p>about me</p>
                <p>bunch of text about me that i can edit later going here.....</p>
                <ImageSlider slides={SliderData}/>
            </div>
        </div>
    )
}
 
