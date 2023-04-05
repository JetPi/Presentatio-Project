import { useRouter } from "next/router";
import Image from "next/image";
import { Card } from "@/components/Card";

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
  return (
    <Card styling="flex flex-col bg-white w-4/5 mx-auto">
      <Image
        alt={DUMMMY_CERT.name}
        src={DUMMMY_CERT.image}
        width={10}
        height={10}
      />
    </Card>
  );
}
