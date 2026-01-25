import dynamicImport from "next/dynamic";

export const dynamic = "force-dynamic";

const CVBuilderClient = dynamicImport(() => import("./CVBuilderClient"), {
  ssr: false,
});

export default function Page() {
  return <CVBuilderClient />;
}
