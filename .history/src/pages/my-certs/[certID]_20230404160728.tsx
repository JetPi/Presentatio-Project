import { useRouter } from "next/router";

const DUMMMY_CERT = {
  name: "Test 1",
  source: "Source 1",
  description: "DESCRIPTION HERE",
  image: "https://picsum.photos/200/300",
  skills: ["mongoDB", "Node.js", "Express"],
};

export default function Certificate() {
  const router = useRouter();
  const { certID } = router.query;
  return <div className="flex w-4/5">{certID}</div>;
}
