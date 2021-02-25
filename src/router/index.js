import { lazy } from "react";

const slow = (component, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(component);
    }, delay);
  });
};
export const root = [
  {
    exact: true,
    path: "/",
    key: "home",
    component: lazy(() => slow(import("@app/home"))),
  },
  {
    exact: true,
    path: "/my",
    key: "my",
    component: lazy(() => import("@app/userCenter")),
  },
  {
    key: "404",
    component: lazy(() => import("@app/notFound")),
  },
];
