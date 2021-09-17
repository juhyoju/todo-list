import React from 'react'

const useDateString = () => {
    const Today = new Date()
    const DateString = Today.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    })
    const DateName = Today.toLocaleDateString('en-US', {
        weekday: 'long'
    })

    return { DateString, DateName }
}

export default useDateString
