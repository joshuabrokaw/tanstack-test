import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { router } from "./router";

// Provide our location and routes to our application
export function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
      <TanStackRouterDevtools router={router} position="bottom-right" />
    </>
  );
}