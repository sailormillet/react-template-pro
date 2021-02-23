import React, { Suspense }  from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';
import { root } from "@router";
import reportWebVitals from './reportWebVitals';
const route_key = [];
function sendToAnalytics(metric) {
  console.log(metric)
  // const body = JSON.stringify(metric);
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  // (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
  //     fetch('/analytics', {body, method: 'POST', keepalive: true});
}
const supportsHistory = 'pushState' in window.history

ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={!supportsHistory}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {root.map((item,index)=>{
            if (item.key) {
                if (route_key.includes(item.key)) {
                    throw new Error('router key ' + item.key + '已存在，请换一个')
                } else {
                    route_key.push(item.key)
                }
            }
            return <Route {...item} />
          })}
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToAnalytics);
