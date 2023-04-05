import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/Card";
import { Url } from "url";
import { LinkButton } from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

let mySkills = [
  "HTML",
  "CSS",
  "Javascript",
  "Python",
  "React",
  "Node.js",
  "MongoDB",
  "Mongoose",
];

let myDescription =
  "Soy un Desarrollador Full Stack con dominio del inglés y el español, dedicado y comprometido a su trabajo y siempre dispuesto cooperar. Apunto a colaborar con mis compañeros con tal de lograr los objetivos del grupo de la forma más eficaz. Siempre estoy dispuesto a aprender nuevas tecnologías para alcanzar un mejor producto.";

for (let i = 0; i < mySkills.length; i++) {
  const element = mySkills[i];
  if (i === mySkills.length - 1) {
    mySkills[i] = element + ".";
  } else {
    mySkills[i] = element + " / ";
  }
}

export default function Home() {
  const url: Url = {
    href: "/about/certificates",
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
  return (
    <>
      <div className="flex justify-center pt-5 ">
        <Card styling="flex flex-col w-4/5">
          <div className="grid grid-cols-2">
            <Image
              className="flex mx-auto mt-4 rounded-full align-center"
              src={"/Foto de Presentación.png"}
              width={250}
              height={250}
              alt={"Profile Photo"}
            />
            <Card styling="bg-green-600 mx-cover p-6 m-4">Hello</Card>
          </div>
          <CardTitle>Ibrahim Zárraga</CardTitle>
          <div className="mx-auto text-xs font-semibold text-gray-500">
            Competencias: {mySkills}
          </div>
          <div className="m-2 text-base text-center">{myDescription}</div>
          <LinkButton href={url}>Ver Mis Certificados</LinkButton>
        </Card>
      </div>
    </>
  );
}
