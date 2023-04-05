import React, { MouseEventHandler, useEffect, useState } from "react";
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
  const [currentSkills, setCurrentSkills] = useState(skillList);

  useEffect(() => {});

  function excludeFromList(skill: string) {
    const index = currentSkills.indexOf(skill);
    if (index > -1) {
      setCurrentSkills(currentSkills.splice(index, 1));
    }
  }

  function exclude() {
    const tempList: Array<any> = [];
    console.log("here");
    initialList.forEach((item) => {
      for (let index = 0; index < item.skills.length; index++) {
        const skill = item.skills[index];
        if (currentSkills.includes(skill)) {
          tempList.push(item);
          break;
        }
      }
    });
    setList(tempList);
  }

  // function include(skill: string) {
  //   setListIncludes(
  //     initialList.filter((item) => {
  //       return item.skills.includes(skill);
  //     })
  //   );
  // }

  return (
    <div className="flex flex-row">
      <div className="grid w-3/4 grid-cols-3 gap-4 mx-5 mt-10">
        {list?.map((item) => {
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
                <CertificateButton
                  skill={item}
                  onClickHandler={() => {
                    exclude();
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
