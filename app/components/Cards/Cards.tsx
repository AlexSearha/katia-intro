"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import TextElement from "./Text";

export default function Cards({
  text,
  img,
}: {
  text: string;
  img: StaticImageData;
}) {
  const [isOnHover, setIsOnOver] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsOnOver(true)}
      onMouseLeave={() => setIsOnOver(false)}
      className="border-2 border-black/15 shadow rounded w-[48%] relative md:w-[20%] h-[180px]"
    >
      {isOnHover ? (
        <Image
          src={img}
          alt="test"
          layout="fill"
          objectFit="cover"
          className="rounded transition-colors hover:bg-red-400"
        />
      ) : (
        <TextElement text={text} />
      )}
    </div>
  );
}
