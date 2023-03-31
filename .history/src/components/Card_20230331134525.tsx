import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { useRouter } from "next/router";
import { Url } from "url";
import React, { MouseEventHandler, ReactNode, useState } from "react";
interface Props {
  children?: ReactNode;
  styling?: string;
  href?: string;
}

interface ButtonProps {
  children?: ReactNode;
  styling?: string;
  href: Url;
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

export function CardButton({ href, styling, children }: ButtonProps) {
  return (
    <Link
      className={`${
        styling ? styling : "w-32 text-center  flex justify-center"
      } p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
      href={href.href}
    >
      {children}
    </Link>
  );
}

export function CardTitle({ children }: Props) {
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">
      {children}
    </h5>
  );
}
