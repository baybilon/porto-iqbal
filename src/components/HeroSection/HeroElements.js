import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: left;
    align-items: left;
    padding: 0 30px;
    height:800px;
    position:relative;
    z-index:1;

    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

:before {
    content:'';
    position:absolute;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%
        ), 
        linear-gradient(180deg,
        rgba(0,0,0,0.2)0%, transparent 100%); 
    z-index:2;
}
`;

export const HeroBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%
    height:100%;
    overflow:hidden;
`;

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 10% 5%;
display:flex;
flex-direction:column;
align-items:left;

`
export const HeroH1 = styled.h1`
color: white;
font-size: 48px;
text-align: left;
margin-top:0px;

@media screen and (max-width: 768px){
    font-size:40px;
}

@media screen and (max-white: 480px){
    font-size: 32px;
}
`
export const HeroP = styled.p`
margin-top:24px;
color:white;
font-size:24px;
text-align:left;
max-width:600px;

@media screen and (max-width: 768px){
    font-size:24px;
}

@media screen and (max-white: 480px){
    font-size: 18px;
}

`