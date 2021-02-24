import { lazy } from "react";

export const root = [
  {
    exact: true,
    path: "/",
    key: "home",
    component: lazy(() => import("@app/Home")),
  },
  {
    exact: true,
    path: "/my",
    key: "my",
    component: lazy(() => import("@app/My")),
  },
  {
    key: "404",
    component: lazy(() => import("@app/notFound")),
  },
];
