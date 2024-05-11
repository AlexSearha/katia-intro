"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import TextElement from "./Text";
import useScreenDetect from "@/app/hooks/usescreenDetect";

export default function Cards({
  text,
  img,
}: {
  text: string;
  img: StaticImageData;
}) {
  const [isOnHover, setIsOnOver] = useState(false);
  const isMobileScreenSize = useScreenDetect();

  const handleToggleClick = () => {
    if (isMobileScreenSize) {
      setIsOnOver(!isOnHover);
    }
  };
  const handleMouseEnter = () => {
    if (!isMobileScreenSize) {
      setIsOnOver(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobileScreenSize) {
      setIsOnOver(false);
    }
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleClick}
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
