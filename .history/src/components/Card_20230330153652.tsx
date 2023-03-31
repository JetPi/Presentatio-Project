import Link from "next/link";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  href?: string;
}

export function Card({ href, children }: Props) {
  console.log(href);
  return (
    <Link
      href={{ pathname: href }}
      className="block object-contain p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {children}
      <p className="font-normal text-gray-700 dark:text-gray-400"></p>
    </Link>
  );
}

export function CardTitle({ children }: Props) {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {children}
    </h5>
  );
}
