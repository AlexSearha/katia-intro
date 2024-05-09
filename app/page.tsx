import Image from "next/image";
import Photo from "@/public/photo.png";
import Cards from "./components/Cards/Cards";
import Link from "next/link";
// images
import testImage from "@/public/testCardImage.jpeg";
import Header from "./components/Header/Header";
import { lato } from "./fonts";

export default function Home() {
  return (
    <main
      className={`${lato.className} flex min-h-screen flex-col items-center justify-between`}
    >
      <Header />
      <div id="container" className="w-full grow flex">
        <div className="w-2/6 grow flex flex-col justify-evenly items-center p-8">
          <Image
            src={Photo}
            height={250}
            width={250}
            alt="photo Katia Lemaire"
            className="rounded shadow-md"
          />
          <p className="text-center">{`Bonjour, je m'appelle Katia mélanie Lemaire et j'adore le préfou et mon amoureux développeur !`}</p>
        </div>
        <div className="w-4/6 grow flex flex-col items-center justify-center border-l-2 border-black/15">
          <div className="grow flex flex-wrap gap-2 justify-center items-center w-full">
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
          </div>
          <footer className="shrink h-12 flex justify-center items-center gap-1 text-sm">
            Développé par{" "}
            <Link href="https://alexsearha.github.io" target="_blank">
              Alex Searha
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}
