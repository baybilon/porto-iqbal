import React from 'react'
import Icon1 from '../../images/contact.svg'
import Icon2 from '../../images/contact.svg'
import Icon3 from '../../images/contact.svg'
import {CardContainer, CardH1, CardWrapper, Card, CardIcon, CardH2, CardP} from './CardElements'

const CardStack = () => {
    return (
    <CardContainer id="card">
        <CardH1>Hehe kartu</CardH1>
        <CardWrapper>
            <Card>
                <CardIcon src={Icon1}/>
                <CardH2>Judul</CardH2>
                <CardP>Deskripsi</CardP>
            </Card>
            <Card>
                <CardIcon src={Icon2}/>
                <CardH2>Judul</CardH2>
                <CardP>Deskripsi</CardP>
            </Card>
            <Card>
                <CardIcon src={Icon3}/>
                <CardH2>Judul</CardH2>
                <CardP>Deskripsi</CardP>
            </Card>
        </CardWrapper>
    </CardContainer>
    )
}

export default CardStack
