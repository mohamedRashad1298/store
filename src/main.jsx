import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from "./utils/store.js"

const theme = createTheme({
  // Your theme configuration goes here
  // Example:
  palette: {
    primary: {
      main: '#ff0000', // Example primary color
    },
    secondary: {
      main: '#ff3f3f', // Example secondary color
    },
    // Other theme configurations...
  },
  // Other theme configurations...
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
