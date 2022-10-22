import * as React from "react";
import { router } from "../router";

export function Invoice() {
  const { params } = router.useMatch("/:invoiceId");

  const { invoiceId } = params;

  console.log(params);

  return <div>Hi</div>;
}
