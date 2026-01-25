import dynamicImport from "next/dynamic";

export const dynamic = "force-dynamic";

const MotivationClient = dynamicImport(() => import("./MotivationClient"), {
  ssr: false,
});

export default function Page() {
  return <MotivationClient />;
}
