import Link from "next/link";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  styling?: string;
  href?: string;
}

export function Card({ styling, children }: Props) {
  return (
    <div
      className={`${
        styling ? styling : "flex justify-stretch"
      } p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
    >
      {children}
      <p className="font-normal text-gray-700 dark:text-gray-400"></p>
    </div>
  );
}

export function CardButton({ href, styling, children }: Props) {
  return (
    <Link
      href={{ pathname: href }}
      className={`${
        styling ? styling : "w-32 text-center justify-center"
      } p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
    >
      {children}
    </Link>
  );
}

export function CardTitle({ children }: Props) {
  return (
    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
}
