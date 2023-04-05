import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card, CardButton } from "@/components/Card";
import { CardTitle } from "@/components/Card";
import { Url } from "url";

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

function skillFixer(array: Array<string>) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (i === array.length - 1) {
      array[i] = element + ".";
    } else {
      array[i] = element + " / ";
    }
  }
  return array;
}

export default function Home() {
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
  return (
    <>
      <div className="flex justify-center pt-5 ">
        <Card styling="flex flex-col w-4/5">
          <Image
            className="flex mx-auto rounded-full align-center"
            src={"/Foto de Presentación.png"}
            width={250}
            height={250}
            alt={"Profile Photo"}
          />
          <CardTitle>Ibrahim Zárraga</CardTitle>
          <div className="mx-auto text-xs font-semibold text-gray-500">
            Competencias: {skillFixer(mySkills)}
          </div>
          <div className="m-2 text-base text-center">{myDescription}</div>
          <CardButton href={url} styling="w-auto p-2 ">
            Ver mis certificados
          </CardButton>
        </Card>
      </div>
    </>
  );
}
