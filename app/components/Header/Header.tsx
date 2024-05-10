import React from "react";
import { playfairDisplay } from "@/app/fonts";

export default function Header() {
  return (
    <div
      id="banner"
      className={`${playfairDisplay.className} w-full h-[130px] relative p-6  text-white shadow-md`}
    >
      <div className="absolute inset-0 z-0 blur-sm bg-header-bg bg-cover bg-center "></div>
      <div
        style={{ textShadow: "1px 1px 0 #000" }}
        className="absolute inset-0 flex flex-col w-full h-full justify-center items-start z-10 px-6"
      >
        <h1 className="text-4xl">Katia Lemaire</h1>
        <span className="ml-1 text-sm">Coordinatrice de scolarité</span>
      </div>
    </div>
  );
}
