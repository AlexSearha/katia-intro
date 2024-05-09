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
      className="border-2 border-black/15 shadow w-[20%] h-[180px] rounded"
    >
      {isOnHover ? (
        <Image src={img} alt="test" className="rounded" />
      ) : (
        <TextElement text={text} />
      )}
    </div>
  );
}
