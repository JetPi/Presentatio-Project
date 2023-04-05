import React, { useState } from "react";
import { Url } from "url";
import { Card, CardButton, CardTitle } from "./Card";
import Image from "next/image";

const DUMMY_SKILL_LIST = [
  "react",
  "node.js",
  "mongoDB",
  "mongoose",
  "express",
  "css",
  "javascript",
  "python",
  "html",
];

interface Props {
  itemList?: Array<{
    name: string;
    image: string;
    description: string;
    url: Url;
  }>;
}

export default function CertificateList({ itemList }: Props) {
  const [listIncludes, setListIncludes] = useState("all");

  return (
    <div className="grid grid-cols-3 gap-4 mx-5 mt-10">
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
  );
}
