import styled from 'styled-components'
import {Link as LinkRouter} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'


 const theme = {
   mint: "#60C5BA",
    green: "#ADD8AB"
};

export const Nav = styled.nav`
background: ${({ scrollNav}) => (scrollNav ? '#000' : 'transparent')};
height: 80px;
display: flex;
margin-top:-80px;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index 10;
-moz-transition: 0.8s all ease;

@media screen and (max-width: 960px){
    -moz-transition: 0.8s all ease;
    -webkit-transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width 1100px;
`;

export const NavLogo = styled(LinkRouter)`
color: white;
justify-self: start;
cursor: pointer;
font-size: 1.5rem;
display: flex:
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
margin-top: 2%;
`;

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 768px) {
    display:block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%)
    font-size : 1.8rem;
    cursor: pointer;
    color:white;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px) {
    display:none;
}
`

export const NavItem = styled.li`
height: 80px;
`
export const NavLinks = styled(LinkScroll)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
//border-bottom: 3px solid #01bf71;

&.active{
    border-bottom: 3px solid #60C5BA;
}
`;