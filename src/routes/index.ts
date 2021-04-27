import { lazy, ComponentType } from "react";

function slow<T extends { default: ComponentType<T> }>(page: Promise<T>, delay = 1000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(page);
    }, delay);
  });
}
export const root = [
  {
    exact: true,
    path: "/",
    key: "home",
    component: lazy(() => slow(import("@/pages/home"))),
  },
  {
    exact: true,
    path: "/product",
    key: "product",
    component: lazy(() => import("@/pages/product")),
  },
  {
    exact: true,
    path: "/my",
    key: "my",
    component: lazy(() => import("@/pages/userCenter")),
  },
  {
    key: "404",
    component: lazy(() => import("@/pages/notFound")),
  },
];
