import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "@/components/NavBar";

const navList = [
  {
    text: {
      es: "Presentación",
      en: "Home",
    },
    href: "/",
  },
  {
    text: {
      es: "Certificados",
      en: "Certificates",
    },
    href: "/about/certificates",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen pb-2 bg-gray-300 h-cover">
      <NavBar navList={navList} />
      <Component {...pageProps} />
    </div>
  );
}
