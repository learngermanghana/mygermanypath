"use client";

import dynamicImport from "next/dynamic";

const MotivationClient = dynamicImport(() => import("./MotivationClient"), {
  ssr: false,
});

export default function MotivationClientEntry() {
  return <MotivationClient />;
}
