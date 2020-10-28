import './index.css';
import 'fontsource-roboto';

import App from './Components/App/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import { configureStore } from './Store/store';
import { createBrowserHistory } from "history";
import { persistStore } from 'redux-persist'
import reportWebVitals from './reportWebVitals';
import theme from './theme';

const history = createBrowserHistory();
const store = configureStore()
const persistor = persistStore(store)

const loading = <div>Loading...</div>;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Provider store={store}>
          <PersistGate loading={loading} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
