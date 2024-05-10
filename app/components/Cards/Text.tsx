import React from "react";

export default function TextElement({ text }: { text: string }) {
  return (
    <p className="flex justify-center items-center w-full h-full">{text}</p>
  );
}
