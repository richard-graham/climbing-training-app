import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core' 
import { green, lightBlue,  } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: lightBlue.A400,
      light: lightBlue[400],
      dark: lightBlue[800]
    },
    type: 'dark'
  }
})

console.log('theme: ', theme);



ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
