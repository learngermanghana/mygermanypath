import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const CVBuilderClient = dynamic(() => import("./CVBuilderClient"), {
  ssr: false,
});

export default function Page() {
  return <CVBuilderClient />;
}
