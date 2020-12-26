import React from 'react'
import {Link} from 'react-router-dom'
import { Navigation, NavigationCenter, NavigationLeft, NavigationRight, NumberPagination, Slider, SliderContent, SliderH2, SliderH4, SliderImg, SliderPagination, SliderWrapper } from './SliderElements';

const SliderContents = () => {
  return (
    <>
      <Navigation>
        <NavigationLeft>
          <Link to='/'>Shoes</Link>
          <Link to='/'>Clothes</Link>
          <Link to='/'>Linkccessories</Link>
          </NavigationLeft>
        <NavigationCenter>
          <SliderImg src="https://designmodo.com/demo/full-screen-slider/images/logo.png" />
        </NavigationCenter>
        <NavigationRight>
          <Link to='/' ><SliderImg src="https://designmodo.com/demo/full-screen-slider/images/shopping-bag.png" /></Link>
          </NavigationRight>
      </Navigation>
      
      <SliderWrapper>

        {/* 
        <input type="radio" name="slider" class="slide-radio1" checked id="slider_1">
        <input type="radio" name="slider" class="slide-radio2" id="slider_2"></input>
        <input type="radio" name="slider" class="slide-radio3" id="slider_3"></input>
        <input type="radio" name="slider" class="slide-radio4" id="slider_4"></input>
      */}

        <SliderPagination>
          {/* 
          <label for="slider_1" class="page1"></label>
          <label for="slider_2" class="page2"></label>
          <label for="slider_3" class="page3"></label>
          <label for="slider_4" class="page4"></label>
          */}
          </SliderPagination>
      </SliderWrapper>
      
        <Slider>
          <SliderImg src="https://designmodo.com/demo/full-screen-slider/images/model-1.png" />
          <SliderContent>
            <SliderH4>New Product</SliderH4>
            <SliderH2>Denim Longline T-Shirt Dress With Split</SliderH2>
            
          </SliderContent>
          <NumberPagination>
            
            </NumberPagination>
            </Slider>
      
        <Slider>
        <SliderImg src="https://designmodo.com/demo/full-screen-slider/images/model-2.png" />
          <SliderContent>
            <SliderH4>New Product</SliderH4>
            <SliderH2>Denim Longline T-Shirt Dress With Split</SliderH2>
           
            </SliderContent>
          <NumberPagination>
            
            </NumberPagination>
          </Slider>
      
        <Slider>
        <SliderImg src="https://designmodo.com/demo/full-screen-slider/images/model-3.png" alt=""/>
          <SliderContent>
            <SliderH4>New Product</SliderH4>
            <SliderH2>Denim Longline T-Shirt Dress With Split</SliderH2>
            
            </SliderContent>
          <SliderPagination>
           
          </SliderPagination>
          </Slider>

        <Slider>
        <SliderImg src="https://designmodo.com/demo/full-screen-slider/images/model-4.png" />
          <SliderContent>
            <SliderH4>New Product</SliderH4>
            <SliderH2>Denim Longline T-Shirt Dress With Split</SliderH2>
            
            </SliderContent>
          <NumberPagination>
            
            </NumberPagination>
        </Slider>
</>
    )
}

export default SliderContents