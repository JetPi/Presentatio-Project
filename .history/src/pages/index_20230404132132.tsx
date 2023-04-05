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
            <Card styling="bg-green-600 mx-cover text-white p-6 m-4">
              <div className="flex flex-row">
                <b>LinkedIn:</b>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </div>
              <b>Email:</b>
              <b>Phone:</b>
            </Card>
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
