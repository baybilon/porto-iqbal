import React from 'react';
import { HeroContainer, HeroContent, HeroBg, HeroH1, HeroP } from'./HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hi my name is Iqbal</HeroH1>
                <HeroP>
                   I'm a System Information Software Engineer
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
