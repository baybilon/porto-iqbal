import React, { useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
            }
            else{
            setScrollNav(false)
            }
        }
        
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop();
    };
        
    return (
      <>
      <IconContext.Provider value={{ color :'White'}}>
      <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <NavLogo to='/' onClick={toggleHome}>Porto Ampas</NavLogo>
              <MobileIcon onClick={toggle}>
                  <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                      <NavLinks 
                      to="about" 
                      smooth={true} 
                      duration={500} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                      >
                    About</NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks 
                      to="education"
                      smooth={true} 
                      duration={500} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                      activeClass="active"
                      >
                    Education</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks 
                      to="experience"
                      smooth={true} 
                      duration={500} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                      activeClass="active"
                      >
                    Experience</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks 
                        to="portofolio"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        activeClass="active"
                      >
                    Portofolio</NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks 
                      to="contact"
                      smooth={true} 
                      duration={500} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                      activeClass="active"
                      >
                    Contact</NavLinks>
                  </NavItem>
              </NavMenu>
          </NavbarContainer>
      </Nav>
      </IconContext.Provider>
      </>
    );
};

export default Navbar;
