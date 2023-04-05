import { useRouter } from "next/router";

export default function Certificate() {
  const router = useRouter();
  const { certID } = router.query;
  return <div className="flex w-4/5">console.log(certID)</div>;
}
