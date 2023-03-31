import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Card } from "@/components/Card";
import { CardTitle } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-200">
        <Card href="/aboutme/test">
          <CardTitle>Hello</CardTitle>
        </Card>
      </div>
    </>
  );
}
