import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.scss";
import { root } from "@router";
// import reportWebVitals from "./reportWebVitals";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));
let routeKey: any[];
// function sendToAnalytics(metric) {
//   // console.log(metric);
//   // const body = JSON.stringify(metric);
//   // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
//   // (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
//   //     fetch('/analytics', {body, method: 'POST', keepalive: true});
// }
const supportsHistory = "pushState" in window.history;

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/react-template-pro">
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Router basename="/react-template-pro" forceRefresh={!supportsHistory}>
      <Suspense maxDuration={500} fallback={<div>Loading...</div>}> */}
        <Switch>
          {root.map((item) => {
            if (item.key) {
              if (routeKey.includes(item.key)) {
                throw new Error(`router key ${item.key}已存在，请换一个`);
              } else {
                routeKey.push(item.key);
              }
            }
            return <Route exact={item.exact} path={item.path} key={item.key} component={item.component} />;
          })}
        </Switch>
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(sendToAnalytics);
