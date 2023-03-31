import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/Card";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

const navList = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about/me" },
  { text: "Certificates", href: "/about/certificates" },
  { text: "Contact Info", href: "/about/socials" },
];

export default function Home() {
  return (
    <>
      <NavBar navList={navList} />
      <div className="flex justify-center pt-5">
        <Card href="/aboutme/test">
          <CardTitle>Hello World</CardTitle>
        </Card>
      </div>
    </>
  );
}
