import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const ChecklistClient = dynamic(() => import("./ChecklistClient"), {
  ssr: false,
});

export default function Page() {
  return <ChecklistClient />;
}
