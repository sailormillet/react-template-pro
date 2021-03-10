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
    component: lazy(() => slow(import("@pages/home"))),
  },
  {
    exact: true,
    path: "/product",
    key: "product",
    component: lazy(() => import("@pages/product")),
  },
  {
    exact: true,
    path: "/my",
    key: "my",
    component: lazy(() => import("@pages/userCenter")),
  },
  {
    key: "404",
    component: lazy(() => import("@pages/notFound")),
  },
];
