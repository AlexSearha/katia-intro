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
      className="border-2 border-rose-300/65 shadow rounded w-[48%] relative md:w-[32%] h-[230px]"
    >
      {isOnHover ? (
        <Image
          src={img}
          alt="test"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      ) : (
        <TextElement text={text} />
      )}
    </div>
  );
}
