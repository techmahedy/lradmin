import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import {store, persistor} from './config/redux/store';
import { PersistGate } from "redux-persist/integration/react";
import '../css/style.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
);

reportWebVitals();