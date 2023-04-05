import { Card, CardTitle, CardButton } from "@/components/Card";
import Image from "next/image";
import { Url } from "url";

const url: Url = {
  href: "/about/me",
  auth: null,
  hash: null,
  host: null,
  hostname: null,
  path: null,
  pathname: null,
  protocol: null,
  search: null,
  slashes: null,
  port: null,
  query: null,
};

const DUMMY_TEST = [
  {
    name: "Test 1",
    source: "Source 1",
    description: "TEXT HERE",
    image: "https://picsum.photos/200/300",
    url,
  },
  {
    name: "Test 2",
    source: "Source 2",
    description: "TEXT HERE",
    image: "https://picsum.photos/200/300",
    url,
  },
  {
    name: "Test 3",
    description: "TEXT HERE",
    source: "Source 3",
    image: "https://picsum.photos/200/300",
    url,
  },
  {
    name: "Test 4",
    source: "Source 4",
    description: "TEXT HERE",
    image: "https://picsum.photos/200/300",
    url,
  },
];

export default function Certificate() {
  return (
    <div>
      <h1 className="flex justify-center text-xl font-bold">
        Mis Certificados
      </h1>
    </div>
  );
}
