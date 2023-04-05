import { Card, CardTitle, CardButton } from "@/components/Card";
import CertificateList from "@/components/CertificateList";
import Image from "next/image";
import { Url } from "url";

const DUMMY_SKILL_LIST = [
  "react",
  "node.js",
  "mongoDB",
  "mongoose",
  "express",
  "css",
  "javascript",
  "python",
  "html",
];

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
    description: "DESCRIPTION HERE",
    image: "https://picsum.photos/200/300",
    skills: ["mongoDB", "Node.js", "Express"],
    url,
  },
  {
    name: "Test 2",
    source: "Source 2",
    description: "DESCRIPTION HERE",
    image: "https://picsum.photos/200/300",
    skills: ["react", "mongoDB", "Node.js"],
    url,
  },
  {
    name: "Test 3",
    description: "DESCRIPTION HERE",
    source: "Source 3",
    image: "https://picsum.photos/200/300",
    skills: ["react", "mongoDB", "Express"],
    url,
  },
  {
    name: "Test 4",
    source: "Source 4",
    description: "DESCRIPTION HERE",
    image: "https://picsum.photos/200/300",
    skills: ["react", "Node.js", "Express"],
    url,
  },
];

export default function Certificate() {
  return (
    <div>
      <CertificateList itemList={DUMMY_TEST} skillList={DUMMY_SKILL_LIST} />
    </div>
  );
}
