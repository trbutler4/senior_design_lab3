import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    //const [current, setCurrent] = useState(0)
    //const length = slides.legnth

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" />
            <FaArrowAltCircleRight className="left-arrow" />
            {SliderData.map((slide) => {
                return <img src={slide.image} alt="alt image" />;
            })}
        </section>
    );
};

export default ImageSlider;