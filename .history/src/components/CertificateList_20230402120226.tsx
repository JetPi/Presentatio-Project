import React, { useState } from "react";
import { Url } from "url";
import { Card, CardButton, CardTitle } from "./Card";
import Image from "next/image";

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
  funcs: Array<Function>;
}

function CertificateButton({ skill, funcs }: buttonProps) {
  const [current, setCurrent] = useState(0);

  function onClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    switch (current) {
      case 0:
        funcs[0](skill);
        setCurrent(1);
      case 1:
        funcs[1](skill);
        setCurrent(0);
    }
  }

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
      skills: item.skills.map((item) => {
        return item.toLowerCase();
      }),
    };
  });

  const [listIncludes, setListIncludes] = useState(initialList);

  function exclude(skill: string) {
    setListIncludes(
      initialList.filter((item) => {
        return !item.skills.includes(skill);
      })
    );
  }

  function include(skill: string) {
    if (skillList.includes(skill)) {
      let tempList = initialList.filter((item) => {
        return item.skills.includes(skill);
      });
      setListIncludes(listIncludes.concat(tempList));
    }
  }

  return (
    <div className="flex flex-row">
      <div className="grid w-3/4 grid-cols-3 gap-4 mx-5 mt-10">
        {listIncludes?.map((item) => {
          return (
            <Card key={item.name} styling="flex flex-col">
              <Image
                className="flex justify-center rounded w-fit"
                src={item.image}
                width={150}
                height={150}
                alt={item.name}
              />
              <CardTitle>{item.name}</CardTitle>
              <div>
                Skills:{" "}
                {item.skills.map((skill) => {
                  return skill + " ";
                })}
              </div>
              <CardButton href={item.url} styling="w-full">
                {item.description}
              </CardButton>
            </Card>
          );
        })}
      </div>
      <div className="w-1/4 mt-10 ml-5">
        <ul className="flex flex-row flex-wrap">
          {skillList?.map((item) => {
            return (
              <li key={item}>
                <CertificateButton skill={item} funcs={[exclude, include]} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
