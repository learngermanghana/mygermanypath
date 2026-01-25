import dynamic from "next/dynamic";

export const dynamic = "force-dynamic";

const MotivationClient = dynamic(() => import("./MotivationClient"), {
  ssr: false,
});

export default function Page() {
  return <MotivationClient />;
}
