"use client";
import Image from "next/image";
import Cards from "./components/Cards/Cards";
import { lato, playfairDisplay } from "./fonts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// images
import Photo from "@/public/photo.webp";
import altristImage from "@/public/altriste.webp";
import artistiqueImage from "@/public/artistique.webp";
import creativeImage from "@/public/creative.webp";
import jardinageImage from "@/public/jardinage.webp";
import meditationImage from "@/public/meditation.webp";
import organiseeImage from "@/public/organisee.webp";
import useScreenDetect from "./hooks/usescreenDetect";

export default function Home() {
  const isMobileScreenSize = useScreenDetect();

  return (
    <main
      className={`${lato.className} flex min-h-screen flex-col items-center justify-between`}
    >
      <Header />
      <div
        id="introduce-container"
        className="w-full grow flex flex-col md:flex-row"
      >
        <div className="grow flex flex-col justify-around items-center p-4 gap-4 md:w-2/5">
          <Image
            src={Photo}
            height={400}
            width={400}
            alt="photo Katia Lemaire"
            className="rounded-full shadow-black/60 shadow-lg"
          />
          <div className="flex flex-col gap-3 px-4 md:px-10">
            <p className="text-justify text-lg">
              Parcours atypique comme nombre d&apos;entre nous, j&apos;ai fait
              des études d&apos;arts et évolué dans le monde des bibliotheques
              au début de ma carrière. Mais le fil rouge de mon parcours
              professionnel à toujours été l&apos;univers de l&apos;éducation.
              Aujourd&apos;hui mes missions au sein de l&apos;IHECF seront
              variés et corréspondent à mes aspirations profondes :
            </p>
            <ul className="list-disc text-justify italic font-bold text-rose-300">
              <li>Veiller au bien être des étudiants et des intervenants</li>
              <li>
                Organiser au mieux le déroulé des journées au sein de
                l&apos;institut
              </li>
              <li>
                Participer à l&apos;animation et à la vie de l&apos;école pour
                défendre et mettre en lumière ces valeurs et qualités
              </li>
            </ul>
          </div>
        </div>
        <div className="relative grow flex flex-col items-center justify-center border-t-2 md:mt-5 md:border-t-0 md:border-l-2 border-black/30 md:w-3/5">
          <div className={`${playfairDisplay.className}`}>
            <p className="text-3xl text-rose-300 mt-5 md:mt-0">
              Qualités et Passions
            </p>
            <p className="text-xs text-center">
              {isMobileScreenSize ? "Cliquez sur les " : "Survolez les "}{" "}
              élements pour voir <br /> apparaitres les illustrations
            </p>
          </div>
          <div className="grow flex flex-wrap gap-2 justify-center items-center w-full p-4 md:px-8 md:py-2">
            <Cards img={altristImage} text="Altruiste" />
            <Cards img={creativeImage} text="Créative" />
            <Cards img={organiseeImage} text="Organisée" />
            <Cards img={artistiqueImage} text="Activités Manuelles" />
            <Cards img={jardinageImage} text="Jardinage" />
            <Cards img={meditationImage} text="Méditation" />
          </div>

          <Footer />
        </div>
      </div>
    </main>
  );
}
