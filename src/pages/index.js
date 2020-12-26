import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Card from '../components/Card'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
//import SliderContents from '../components/InfoSection/SliderContents'
//import TimelinePage from '../components/InfoSection/TimelinePage'
import TimelineSection from '../components/TimelineSection'
import { timeObjOne, timeObjTwo } from '../components/TimelineSection/Data'
import ContactSection from '../components/Contact'
import { contactObj } from '../components/Contact/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <TimelineSection {...timeObjOne} />
            <TimelineSection {...timeObjTwo} />
            <InfoSection {...homeObjTwo}/>
            <Card />
            {/*<SliderContents />*/}
            <ContactSection {...contactObj}/>
            <Footer />
        </>
    );
};

export default Home
