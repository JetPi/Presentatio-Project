import Link from "next/link";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  linkTo?: string;
}

export function Card(props: Props) {
  console.log(props.linkTo);
  return (
    <Link
      href={{ pathname: props.linkTo }}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      {props.children}
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