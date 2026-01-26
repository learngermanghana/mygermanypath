"use client";

import dynamicImport from "next/dynamic";

const CVBuilderClient = dynamicImport(() => import("./CVBuilderClient"), {
  ssr: false,
});

export default function CVBuilderClientEntry() {
  return <CVBuilderClient />;
}
