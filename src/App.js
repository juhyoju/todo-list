import React, { Component } from 'react'
import TodoTemplate from 'components/TodoTemplate'
import ThemeProvider from 'theme/themeProvider'
//import { GlobalStyle } from 'theme/GlobalStyles'

const App = () => {
    return (
        <ThemeProvider>
            <TodoTemplate />
        </ThemeProvider>
    )
}

export default App
