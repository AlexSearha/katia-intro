import { playfairDisplay } from "@/app/fonts";
import React from "react";

export default function TextElement({ text }: { text: string }) {
  return (
    <p
      className={`${playfairDisplay.className} text-3xl bg-slate-50 flex justify-center items-center w-full h-full`}
    >
      {text}
    </p>
  );
}
