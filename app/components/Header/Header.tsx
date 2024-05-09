import { playfairDisplay } from "@/app/fonts";
import React from "react";

export default function Header() {
  return (
    <div
      id="banner"
      className={`${playfairDisplay.className} w-full bg-red-200 h-[130px] flex flex-col justify-center items-start p-6 border-b-2 border-black/15`}
    >
      <h1 className="text-4xl">Katia Lemaire</h1>
      <span className="ml-1 text-sm">Coordinatrice de scolarité</span>
    </div>
  );
}
