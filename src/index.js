import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
function sendToAnalytics(metric) {
  console.log(metric)
  // const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  // (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
  //     fetch('/analytics', {body, method: 'POST', keepalive: true});
}
ReactDOM.render(
  <Router>
    <React.StrictMode>
    <Route  exact={true} path="/">
      <App />
    </Route>
    {/* <Route path="/home">
      <App />
    </Route> */}
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToAnalytics);
