import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card, CardButton } from "@/components/Card";
import { CardTitle } from "@/components/Card";
import { Url } from "url";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const url: Url = {
    href: null,
    auth: null,
    hash: null,
    host: null,
    hostname: null,
    path: "/about/me",
    pathname: null,
    protocol: null,
    search: null,
    slashes: null,
    port: null,
    query: null,
  };
  return (
    <>
      <div className="flex justify-center pt-5">
        <Card styling="flex flex-col ">
          <Image
            className="rounded-full"
            src={"/Foto de Presentación.png"}
            width={400}
            height={400}
            alt={"Profile Photo"}
          />
          <CardTitle>Hello World</CardTitle>
          <CardButton href={url}>Sobre mí</CardButton>
        </Card>
      </div>
    </>
  );
}
