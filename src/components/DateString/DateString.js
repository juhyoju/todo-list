import React from 'react'
import useDateString from './useDateString'
import { DateNameStyle } from './DateStringStyle'

const DateString = () => {
    const { DateString, DateName } = useDateString()
    return (
        <DateNameStyle>
            {DateString}
            <span>{DateName}</span>
        </DateNameStyle>
    )
}

export default DateString
