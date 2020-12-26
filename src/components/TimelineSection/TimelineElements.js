import styled from 'styled-components';

export const TimelineP = styled.p`
font-size:14px;
font-weight:300px;
line-height:1.5;
opacity:0.7;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
`
export const Timeline = styled.div`
max-width:900px;
margin:0 auto;
padding:20px 0 20px;
color: white;


`
export const TimelineBody = styled.div `
    position: relative;
    background-color: transparent;
    margin-left: 100px;
    border-radius: 0 8px 8px 0;
    padding: 5px 0;

    :after{
        content: '';
        width:4px;
        height:100%;
        background-color: #60C5BA;
        position:absolute;
        left:-4px;
        top:0;
    }
`
    

    export const TimelineItem = styled.div`
        position:relative;

        :after{
            content:'';
            width:20px;
            height: 20px;
            border-radius:50%;
            border:4px solid #60C5BA;
            background:black;
            position:absolute;
            left:-16px;
            top: 4px;
            z-index:9;
        }
        `
        export const Time = styled.div `
            position:absolute;
            left:-120px;
            top:4;
            margin-top:10px;
            opacity: 0.5;
            font-size:13px;
            justify-items:center;
            color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
        `

        export const TimelineContent = styled.div`
            margin:40px;
            padding-bottom:40px;
            border-bottom:1px dashed #555;
            `
            export const TitleH2 = styled.h2`
                color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
                font-weight:500;
                margin-bottom:15px;
`