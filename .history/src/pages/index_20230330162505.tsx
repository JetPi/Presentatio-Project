import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/Card";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-5">
        <Card href="/about/me">
          <CardTitle>Hello World</CardTitle>
        </Card>
      </div>
    </>
  );
}
