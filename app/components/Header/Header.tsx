import React from "react";
import { playfairDisplay } from "@/app/fonts";

export default function Header() {
  return (
    <div
      id="banner"
      className={`${playfairDisplay.className} w-full h-[130px] relative p-6`}
    >
      <div className="absolute inset-0 z-0 bg-rose-300 bg-cover bg-center "></div>
      <div className="absolute inset-0 flex flex-col w-full h-full justify-center items-start z-10 px-6">
        <h1 className="text-4xl">Katia Lemaire</h1>
        <span className="ml-1">Coordinatrice pédagogique</span>
      </div>
    </div>
  );
}
