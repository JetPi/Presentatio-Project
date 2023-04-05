import React, { MouseEventHandler, useEffect, useState } from "react";
import { Url } from "url";
import { Card, CardButton, CardTitle } from "./Card";
import Image from "next/image";
import { LinkButton } from "./Button";

interface Props {
  itemList: Array<{
    name: string;
    image: string;
    description: string;
    skills: Array<string>;
    url: Url;
  }>;
  skillList: Array<string>;
}

interface buttonProps {
  skill: string;
  onClickHandler: MouseEventHandler;
}

function CertificateButton({ skill, onClickHandler }: buttonProps) {
  return (
    <button
      className="px-2 py-1 m-1 font-semibold bg-green-200 border-green-800 rounded"
      onClick={onClickHandler}
    >
      {skill}
    </button>
  );
}

export default function CertificateList({ itemList, skillList }: Props) {
  const initialList = itemList.map((item) => {
    return {
      ...item,
      skills: item.skills.map((skill) => {
        return skill.toLowerCase();
      }),
    };
  });
  const [list, setList] = useState(initialList);

  function skillRemover(skill: string) {
    let tempList = initialList.filter((item) => {
      return item.skills.includes(skill);
    });
    setList(tempList);
  }

  const url: Url = {
    href: "/",
    auth: null,
    hash: null,
    host: null,
    hostname: null,
    path: null,
    pathname: null,
    protocol: null,
    search: null,
    slashes: null,
    port: null,
    query: null,
  };

  return (
    <div className="flex flex-row">
      <div className="grid w-3/4 grid-cols-4 gap-4 mx-5 mt-10">
        {list?.map((item) => {
          return (
            <Card key={item.name} styling="flex flex-row p-2 h-fit">
              <div className="flex flex-col">
                <div className="font-bold">{item.name}</div>
                <div className="w-full m-1 text-xs font-semibold text-gray-500">
                  {item.skills.map((skill) => {
                    return skill + " ";
                  })}
                </div>
              </div>
              <LinkButton href={url} styling="w-fit ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 512"
                >
                  <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                </svg>
                <span className="sr-only">Arrow key right</span>
              </LinkButton>
            </Card>
          );
        })}
      </div>
      <div className="w-1/4 mt-10 ml-5">
        <Card styling="mr-2">
          <ul className="flex flex-row flex-wrap">
            <CertificateButton
              skill={"all"}
              onClickHandler={() => setList(initialList)}
            />
            {skillList?.map((item) => {
              return (
                <li key={item}>
                  <CertificateButton
                    skill={item}
                    onClickHandler={() => {
                      skillRemover(item);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </div>
  );
}
