import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

import React from "react";
import { Invoice } from "./components/Invoice";

const routeConfig = createRouteConfig().addChildren((createRoute) => [
  createRoute({ path: "/:invoiceId", element: <Invoice /> })
]);

export const router = createReactRouter({
  routeConfig
});
