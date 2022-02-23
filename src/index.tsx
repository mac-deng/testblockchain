import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import { MoralisProvider } from "react-moralis";


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <MoralisProvider appId={`iv7zTPgTvA88UVT41lnZvM01wv6JbBvCUiFpIKtO`} serverUrl={`https://xjmluu5xwcwm.usemoralis.com:2053/server`}>
        <App />
      </MoralisProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
