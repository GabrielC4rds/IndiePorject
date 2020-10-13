import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './Store';
import { HashRouter } from 'react-router-dom'
// import { hydrate, render } from "react-dom";


// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(<StoreProvider><App /></StoreProvider>, rootElement);
// } else {
//   render(<StoreProvider><App /></StoreProvider>, rootElement);
// }

ReactDOM.render(
  <React.StrictMode>

    <StoreProvider>

      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
