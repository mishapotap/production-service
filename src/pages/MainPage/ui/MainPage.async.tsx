import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      // Synthetic delay to test Suspense HOC
      setTimeout(() => resolve(import("./MainPage")), 1000);
    })
);
