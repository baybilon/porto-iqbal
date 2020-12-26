import React from 'react';
import { Timeline, TimelineBody, TimelineItem, Time, TimelineContent, TitleH2, TimelineP } from './TimelineElements';

const TimelinePage = () => {
    return (
        <>
            <Timeline>
                <TimelineBody>
                    <TimelineItem>
                        <Time>2015 - 2018</Time>
                        <TimelineContent>
                            <TitleH2>JAPAN COMMUNITY WIDYATAMA</TitleH2>
                            <TimelineP>Publication and Documentation</TimelineP>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Time>2015 - 2018</Time>
                        <TimelineContent>
                            <TitleH2>WIDYATAMA SYSTEM INFORMATION ASSOCIATION</TitleH2>
                            <TimelineP>Staff</TimelineP>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <Time>2017</Time>
                        <TimelineContent>
                            <TitleH2>EVENT PHOTOGRAPHER</TitleH2>
                            <TimelineP>Grow English Club Widyatama Event</TimelineP>
                            <TimelineP>(Run n' Shoot Creative)</TimelineP>
                        </TimelineContent>
                    </TimelineItem>
                </TimelineBody>
            </Timeline>
        </>
    )
}

export default TimelinePage
