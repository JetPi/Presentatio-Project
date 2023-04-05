import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/Card";
import { Url } from "url";
import { LinkButton } from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";

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

let myDescriptionES =
  "Soy un Desarrollador Full Stack con dominio del inglés y el español, dedicado y comprometido a su trabajo y siempre dispuesto cooperar. Apunto a colaborar con mis compañeros con tal de lograr los objetivos del grupo de la forma más eficaz. Siempre estoy dispuesto a aprender nuevas tecnologías para alcanzar un mejor producto.";
let myDescriptionEN =
  "I am a Full Stack Software Developer, determined and focused, with a great affinity for teamwork and shared work. I strive to collaborate with my team's tasks, helping my co-workers to the best of my abilities to achieve our goals. To that end, I am always willing to learn new technologies and hear my team's tips";
for (let i = 0; i < mySkills.length; i++) {
  const element = mySkills[i];
  if (i === mySkills.length - 1) {
    mySkills[i] = element + ".";
  } else {
    mySkills[i] = element + " / ";
  }
}

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  return (
    <>
      <div className="flex justify-center pt-5 ">
        <Card styling="flex flex-col w-4/5">
          <div className="grid grid-cols-2">
            <Image
              className="flex mx-auto mt-4 rounded-full "
              src={"/Foto de Presentación.png"}
              width={250}
              height={250}
              alt={"Profile Photo"}
            />
            <div className="my-auto">
              <Card styling="bg-green-600 mx-cover h-fit text-white p-6 m-4 flex flex-col"></Card>
            </div>
          </div>
          <CardTitle>Ibrahim Zárraga</CardTitle>
          <div className="mx-auto text-xs font-semibold text-gray-500">
            {locale === "es-ES" ? "Competencias" : "Skills"}: {mySkills}
          </div>
          <div className="m-2 text-base text-center">
            {locale === "es-ES" ? myDescriptionES : myDescriptionEN}
          </div>
          <LinkButton href="/about/certificates">
            {locale === "es-ES"
              ? "Ver mis certificados"
              : "See my certificates"}
          </LinkButton>
        </Card>
      </div>
    </>
  );
}
