import React,{useState} from 'react'
import SliderData from './SliderData'
import{FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons'

const ImageSlider = () => {
    const[current, setCurrent] = useState(0)
    const length = slide.length


    return (
        <>
        <section className="slider"></section>
            {SliderData.map((slide, index) => {
                rerturn (
                    <img src={slide.image} alt='karya sampah' />;
                )
            })} 
            <section>
        </>
    )
}

export default ImageSlider
