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
    <Card styling="flex flex-col bg-white w-4/5 mx-auto mt-6 p-4 relative">
      <Image
        className="mx-auto"
        alt={DUMMMY_CERT.name}
        src={DUMMMY_CERT.image}
        height={200}
        width={250}
      />
      <div className="grid grid-cols-2">
        <div>Name: {DUMMMY_CERT.name}</div>
        <div>Source: {DUMMMY_CERT.source}</div>
      </div>
      <div className="mx-auto">{DUMMMY_CERT.description}</div>
      <div className="text-bold">Competencias</div>
      <div className="grid grid-cols-4">
        {DUMMMY_CERT.skills.map((skill) => {
          return <div key={Math.random()}>{skill}</div>;
        })}
      </div>
    </Card>
  );
}
