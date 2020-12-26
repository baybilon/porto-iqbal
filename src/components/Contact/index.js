import React from 'react'
import { Button } from 'react-scroll'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
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

const ContactSection = ({
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
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>Contact</TopLine>
                            <Heading lightText={lightText}>Contact me at</Heading>
                            <Subtitle darkText={darkText}> <span><FiMail />&nbsp;&nbsp;</span>iqbal.py@outlook.com </Subtitle>
                            <Subtitle darkText={darkText}> <span><FaWhatsapp />&nbsp;</span> +62 8515 8173 324 </Subtitle>
                            <BtnWrap>
                                {/*<Button to='home'>Button</Button>*/}
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ContactSection
