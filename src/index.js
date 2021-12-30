import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import './index.css'
import App from './App'
import muiTheme from './config/theme'
import reportWebVitals from './reportWebVitals'

const content = (
    <ThemeProvider theme={muiTheme}>
        <App />
    </ThemeProvider>
)
ReactDOM.render(content, document.getElementById('root'))
