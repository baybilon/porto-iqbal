import React from 'react'
import { Button } from 'react-scroll'
import { 
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img 
    } from '../InfoSection/InfoElements'
import TimelinePage from './TimelinePage'

const TimelineSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    img,
    alt
    }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                        <Column1>
                        <TextWrapper>
                        <TimelinePage />
                        </TextWrapper>
                        </Column1>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default TimelineSection
