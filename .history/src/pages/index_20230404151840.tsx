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
  const { locale, locales, defaultLocale, asPath, pathname, query } = router;
  console.log(defaultLocale);
  return (
    <>
      <Link href={{ pathname, query }} as={asPath} locale={locale}>
        {" "}
        Right here
      </Link>
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
              <Card styling="bg-green-600 mx-cover h-fit text-white p-6 m-4 flex flex-col">
                <div className="flex flex-row flex-wrap">
                  <b>Email:</b>{" "}
                  <span className="ml-auto">
                    ialejandromonasterios@gmail.com
                  </span>
                </div>
                <div className="flex flex-row">
                  <b>{locale === "es-ES" ? "Teléfono" : "Phone"}</b>{" "}
                  <span className="ml-auto">0424-1434083</span>
                </div>
                <div className="flex flex-row">
                  <b>LinkedIn:</b>{" "}
                  <Link
                    href="https://www.linkedin.com/in/ibrahim-z%C3%A1rraga-56ba29240/?locale=es_ES"
                    className="ml-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </Link>
                </div>
                <div className="flex flex-row">
                  <b>GitHub:</b>{" "}
                  <Link href="https://github.com/JetPi" className="ml-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Link>
                </div>
              </Card>
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
