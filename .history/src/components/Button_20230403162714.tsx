import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  styling?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

interface LinkProps {
  styling?: string;
  href: Url;
  children?: React.ReactNode;
}

export function Button({ onClick, styling, children }: ButtonProps) {
  return (
    <button
      className={`${styling} px-2 py-1 m-1 font-semibold bg-green-200 rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function LinkButton({ href, styling, children }: LinkProps) {
  return (
    <Link
      href={href}
      className={`${styling} flex justify-center px-2 py-1 m-1 font-semibold bg-green-200 rounded shadow hover:bg-green-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
    >
      {children}
    </Link>
  );
}
