import { cardData } from '../Data';

import React from 'react'
import CardContainer from './CardContainer';

function mappingCardData(temp) {
    return (
        <CardContainer
            pic={temp.pic}
            title={temp.title}
            tag={temp.tag}
            subtitle={temp.subtitle}
        />
    )
}

export default function Card() {
    return (
        <div className='card_container'>{cardData.map(mappingCardData)}</div>
    )
}
