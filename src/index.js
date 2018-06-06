import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/reducers'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {lightBlue700} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue700,
  },
});

const MaterialApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <MaterialApp />
  </Provider>
, document.getElementById('root'));
