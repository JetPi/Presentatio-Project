import React, { useState } from "react";
import { Url } from "url";
import { Card, CardButton, CardTitle } from "./Card";
import Image from "next/image";

interface Props {
  itemList?: Array<{
    name: string;
    image: string;
    description: string;
    url: Url;
  }>;
  skillList: Array<string>;
}

interface buttonProps {
  skill: string;
}

export default function CertificateList({ itemList, skillList }: Props) {
  const [listIncludes, setListIncludes] = useState(skillList);

  function exclude(skill: string) {
    setListIncludes(
      listIncludes.filter((item) => {
        item != skill;
      })
    );
  }

  function include(skill: string) {
    if (skillList.includes(skill)) {
      let tempList = listIncludes;
      tempList.push(skill);
      setListIncludes(tempList);
    }
  }

  function CertificateButton({ skill }: buttonProps) {
    const [active, setActive] = useState(true);

    function onClickHandler(event: React.MouseEvent) {
      event.preventDefault();

      if (active) {
        exclude(skill);
        setActive(!active);
      }
      if (!active) {
        include(skill);
        setActive(!active);
      }
    }

    return (
      <button className="p-2" onClick={onClickHandler}>
        {skill}
      </button>
    );
  }

  return (
    <div className="flex flex-row">
      <div className="grid w-3/4 grid-cols-3 gap-4 mx-5 mt-10">
        {itemList?.map((item) => {
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
