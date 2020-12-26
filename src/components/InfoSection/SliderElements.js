import styled from 'styled-components'

/* * {
  box-sizing: border-box;
}
 
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
}
*/

/* Navigation */
export const Navigation = styled.div `
  position: absolute;
  width: 100%;
  height: 100px;
  padding: 0 100px;
  display: flex;  /*use flexbox to align elements within it*/
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`
 
export const NavigationLeft = styled.link `

    margin-left: -33px;
  text-decoration: none;
  text-transform: uppercase;
  color: #333745;
  font-size: 12px;
  font-weight: bold;
  width: 107px;
  height: 30px;
  border: 2px solid transparent;
  border-radius: 15px;
  display: inline-block;
  text-align: center;
  line-height: 25px;
  transition: all .2s;

    &:hover{
        border-color: rgb(234, 46, 73);
        background-color: rgba(44, 45, 47, 0);
    }

    &:focus{
        border-color: rgb(234, 46, 73);
        background-color: rgba(44, 45, 47, 0);
    }

`
  

export const NavigationCenter = styled.div `
  margin-right: 85px;
`
 
export const NavigationRight = styled.div `
    display: flex;
  align-items: center;
`

/*It will be a full-screen slider so we set it to position absolute.*/
export const SliderWrapper = styled.div `
  display: block;
  background: #FFF;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

/* Slider */
export const Slider = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
  z-index: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  -webkit-transition: -webkit-transform 1600ms;
  transition: -webkit-transform 1600ms, transform 1600ms;
  -webkit-transform: scale(1);
  transform: scale(1);
`
 
/* Slides Background Color
.slide-1 {
  background: #fbad99;
  left: 0;
}
.slide-2 {
  background: #a9785c;
  left: 100%
}
.slide-3 {
  background: #9ea6b3;
  left: 200%
}
.slide-4 {
  background: #b1a494;
  left: 300%;
}
*/

/*export const Slider = styled.div `
  display: flex;
  justify-content: flex-start;
`
*/

export const SliderContent = styled.div `
  width: 635px;
  padding-left: 100px;
`

/*Now style elements within each slide. text, a button and an image.*/
/* Slider Inner Slide Effect */
export const SliderH2 = styled.h2 `
  color: #333333;
  font-weight: 900;
  text-transform: capitalize;
  font-size: 60px;
  font-weight: 300;
  line-height: 1.2;
  opacity: 0;
  -webkit-transform: translateX(500px);
  transform: translateX(500px);
  margin-top: 0;
  letter-spacing: 2px;
  -webkit-transition: opacity 800ms, -webkit-transform 800ms;
  transition: transform 800ms, opacity 800ms;
  -webkit-transition-delay: 1s; /* Safari */
  transition-delay: 1s;

`
 
export const SliderH4 = styled.h4 `
  font-size: 22px;
  font-family: "Oswald";
  color: rgba(51, 51, 51, 0.349);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1.2;
  opacity: 0;
  -webkit-transform: translateX(500px);
  transform: translateX(500px);
  -webkit-transition: opacity 800ms, -webkit-transform 800ms;
  transition: transform 800ms, opacity 800ms;
  -webkit-transition-delay: 1.4s; /* Safari */
  transition-delay: 1.4s;

`
 
export const  SliderImg = styled.img `
  position: absolute;
  right: 10%;
  bottom: 0;
  height: 100%;
  opacity: 0;
  -webkit-transform: translateX(500px);
  transform: translateX(500px);
  -webkit-transition: opacity 800ms, -webkit-transform 800ms;
  transition: transform 800ms, opacity 800ms;
  -webkit-transition-delay: 1.2s; /* Safari */
  transition-delay: 1.2s;

`

/*Let’s also make sure that when the slide changes, elements within it — such as text and images — animate.
/* Animations 
.slider h2 {
  -webkit-transition: opacity 800ms, -webkit-transform 800ms;
  transition: transform 800ms, opacity 800ms;
  -webkit-transition-delay: 1s; // Safari //
  transition-delay: 1s;
}
.slider h4 {
  -webkit-transition: opacity 800ms, -webkit-transform 800ms;
  transition: transform 800ms, opacity 800ms;
  -webkit-transition-delay: 1.4s; // Safari //
  transition-delay: 1.4s;
}
.slider > img {
  -webkit-transition: opacity 800ms, -webkit-transform 800ms;
  transition: transform 800ms, opacity 800ms;
  -webkit-transition-delay: 1.2s; // Safari //
  transition-delay: 1.2s;
}
*/

/*number pagination in the right corner of each slide. Let’s style that, too*/
/* Number Pagination */

export const NumberPagination = styled.div `
  position: absolute;
  bottom: 30px;
  right: 100px;
  font-family: "Oswald";
  font-weight: bold;

&.span{
    font-size: 30px;
    color: #ea2e49;
    letter-spacing: 4px;
}

    &:after{
        content: "/4";
        font-size: 16px;
        color: #fff;
    }
`
 
/*Awesome! Now, style the slider pagination.*/
/* Slider Pagger */
export const SliderPagination = styled.div `
  position: absolute;
  bottom: 30px;
  width: 575px;
  left: 100px;
  z-index: 1000;
  display: flex;
  align-items: center;

  &.label{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    background: #fff;
    margin: 0 10px;
    cursor: pointer;
  }
`

/*magically style the radiobuttons to the label styles*/
/* Slider Pagger Event
.slide-radio1:checked ~ .slider-pagination .page1,
.slide-radio2:checked ~ .slider-pagination .page2,
.slide-radio3:checked ~ .slider-pagination .page3,
.slide-radio4:checked ~ .slider-pagination .page4 {
  width: 14px;
  height: 14px;
  border: 2px solid #ea2e49;
  background: transparent;
}
*/
 
/* Slider Slide Effect 
.slide-radio1:checked ~ .slider {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
}
.slide-radio2:checked ~ .slider {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}
.slide-radio3:checked ~ .slider {
  -webkit-transform: translateX(-200%);
  transform: translateX(-200%);
}
.slide-radio4:checked ~ .slider {
  -webkit-transform: translateX(-300%);
  transform: translateX(-300%);
}
*/


/*
.slide-radio1:checked ~ .slide-1 h2,
.slide-radio2:checked ~ .slide-2 h2,
.slide-radio3:checked ~ .slide-3 h2,
.slide-radio4:checked ~ .slide-4 h2,
.slide-radio1:checked ~ .slide-1 h4,
.slide-radio2:checked ~ .slide-2 h4,
.slide-radio3:checked ~ .slide-3 h4,
.slide-radio4:checked ~ .slide-4 h4,
.slide-radio1:checked ~ .slide-1 > img,
.slide-radio2:checked ~ .slide-2 > img,
.slide-radio3:checked ~ .slide-3 > img,
.slide-radio4:checked ~ .slide-4 > img {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1
}

*/

/* Responsive 
@media only screen and (max-width: 768px) {
  .slider h2 {
    font-size: 20px;
  }
  .slider h4 {
    font-size: 16px;
  }
 
  .slider-content {
    padding: 0 2%
  }
 
  .navigation {
    padding: 0 2%;
  }
 
  .navigation-left {
    display: none;
  }
 
  .number-pagination {
    right: 2%;
  }
  .slider-pagination {
    left: 2%;
  }
 
  .slider .buy-now-btn {
    padding: 0 15px;
    width: 175px;
    height: 42px;
  }
 
  .slider .buy-now-btn:after {
    top: 15px;
  }
 
  .slider > img {
    right: 2%;
  }
 
  .slide-1 > img {
    right: -110px;
  }
}
*/
