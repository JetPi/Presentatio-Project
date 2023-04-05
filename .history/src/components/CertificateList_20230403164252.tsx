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

  function skillRemover(skill: string) {
    let tempList = initialList.filter((item) => {
      return item.skills.includes(skill);
    });
    setList(tempList);
  }

  return (
    <div className="flex flex-row">
      <div className="grid w-3/4 grid-cols-4 gap-4 mx-5 mt-10">
        {list?.map((item) => {
          return (
            <Card key={item.name} styling="flex flex-col h-12">
              {/* <CardTitle>{item.name}</CardTitle>
              <div className="w-full m-2 h-18">
                {item.skills.map((skill) => {
                  return skill + " ";
                })}
              </div> */}
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
