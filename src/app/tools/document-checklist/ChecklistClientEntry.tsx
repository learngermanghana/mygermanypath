"use client";

import dynamicImport from "next/dynamic";

const ChecklistClient = dynamicImport(() => import("./ChecklistClient"), {
  ssr: false,
});

export default function ChecklistClientEntry() {
  return <ChecklistClient />;
}
