import React, { Component } from 'react'
import TodoTemplate from 'components/TodoTemplate'
import ThemeProvider from 'theme/themeProvider'

const App = () => {
    return (
        <ThemeProvider>
            <TodoTemplate />
        </ThemeProvider>
    )
}

export default App
