import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "@/components/NavBar";

const navList = [
  { text: "Home", href: "/" },
  { text: "About Me", href: "/about/me" },
  { text: "Certificates", href: "/about/certificates" },
  { text: "Contact Info", href: "/about/socials" },
];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-300 h-cover">
      <NavBar navList={navList} />
      <Component {...pageProps} />
    </div>
  );
}
