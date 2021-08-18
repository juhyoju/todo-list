import React from 'react'
import styled from 'styled-components'

const DateString = () => {
    const Today = new Date()
    const DateString = Today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
    })
    const DateName = Today.toLocaleDateString('en-US', {
        weekday: 'long'
    })

    return (
        <DateNameStyle>
            {DateString}
            <span>{DateName}</span>
        </DateNameStyle>
    )
}

export default DateString

const DateNameStyle = styled.h2`
    text-align: center;

    & span {
        font-size: 0.7em;
        font-weight: 300;
        color: #e6b74a;
        display: block;
    }
`
