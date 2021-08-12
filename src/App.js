import React, { Component } from 'react'
import TodoTemplate from 'components/TodoTemplate'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <TodoTemplate />
        </ThemeProvider>
    )
}

export default App
