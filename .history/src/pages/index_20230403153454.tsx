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

for (let i = 0; i < mySkills.length; i++) {
  const element = mySkills[i];
  if (i === mySkills.length - 1) {
    mySkills[i] = element + ".";
  } else {
    mySkills[i] = element + " /";
  }
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
          <div>Competencias: {mySkills}.</div>
          <div>
            Soy un Desarrollador Full Stack dominante del inglés y el español,
            dedicado y comprometido a sus objetivos con una gran afinidad para
            el trabajo en equipo. Yo apunto a collaborar con mis compañeros en
            pos de lograr los objetivos del grupo de la forma más eficaz.
            Siempre dispuesto a aprender nuevas tecnologías, ya estoy
            familiarizado con
          </div>
          <CardButton href={url} styling="w-auto p-2 ">
            Certificados
          </CardButton>
        </Card>
      </div>
    </>
  );
}
