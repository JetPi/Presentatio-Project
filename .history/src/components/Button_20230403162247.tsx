import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  text?: string;
  styling?: string;
  onClick?: React.MouseEventHandler;
}

interface LinkProps {
  text?: string;
  styling?: string;
  href: Url;
}

export function Button({ text, onClick, styling }: ButtonProps) {
  return (
    <button
      className={`${styling} px-2 py-1 m-1 font-semibold bg-green-200 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export function LinkButton({ text, href, styling }: LinkProps) {
  return (
    <Link
      href={href}
      className={`${styling} px-2 py-1 m-1 font-semibold bg-green-200 rounded`}
    >
      {text}
    </Link>
  );
}
