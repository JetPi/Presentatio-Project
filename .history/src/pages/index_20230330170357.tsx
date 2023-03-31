import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card, CardButton } from "@/components/Card";
import { CardTitle } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex pt-5 justify-center">
        <Card styling="flex flex-col align-middle">
          <Image
            className="rounded-full"
            src={"/Foto de Presentación.png"}
            width={400}
            height={400}
            alt={"Profile Photo"}
          />
          <CardTitle>Hello World</CardTitle>
          <CardButton href="/about/me">Sobre mí</CardButton>
        </Card>
      </div>
    </>
  );
}
