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
}

export default function CertificateList({ itemList, skillList }: Props) {
  const [listIncludes, setListIncludes] = useState(itemList);

  function exclude(skill: string) {
    setListIncludes(
      itemList.filter((item) => {
        return !item.skills.includes(skill);
      })
    );
  }

  function include(skill: string) {
    if (skillList.includes(skill)) {
      let tempList = itemList.filter((item) => {
        return item.skills.includes(skill);
      });
      setListIncludes(listIncludes.concat(tempList));
    }
  }

  function CertificateButton({ skill }: buttonProps) {
    const [active, setActive] = useState(true);

    function onClickHandler(event: React.MouseEvent) {
      event.preventDefault();

      if (active) {
        exclude(skill);
        setActive(false);
      }
      if (!active) {
        include(skill);
        setActive(true);
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
                <CertificateButton skill={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
