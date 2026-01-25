import dynamicImport from "next/dynamic";

export const dynamic = "force-dynamic";

const ChecklistClient = dynamicImport(() => import("./ChecklistClient"), {
  ssr: false,
});

export default function Page() {
  return <ChecklistClient />;
}
