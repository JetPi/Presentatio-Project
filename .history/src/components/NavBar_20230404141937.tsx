import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
type NavData = {
  href: string;
  text: string;
};

interface Props {
  children?: ReactNode | string;
  href?: string;
  navList?: Array<NavData>;
}

function NavItem({ children, href }: Props) {
  return (
    <li>
      <Link
        href={{ pathname: href }}
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
      >
        {children}
      </Link>
    </li>
  );
}

export function NavBar({ navList }: Props) {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Curriculum
        </span>

        <div className="block w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navList?.map((item) => {
              return (
                <NavItem href={item.href} key={Math.random()}>
                  {item.text}
                </NavItem>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
