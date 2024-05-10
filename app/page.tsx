import Image from "next/image";
import Photo from "@/public/photo.png";
import Cards from "./components/Cards/Cards";
import Link from "next/link";
// images
import testImage from "@/public/testCardImage.jpeg";
import Header from "./components/Header/Header";
import { lato } from "./fonts";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main
      className={`${lato.className} flex min-h-screen flex-col items-center justify-between`}
    >
      <Header />
      <div id="container" className="w-full grow flex flex-col md:flex-row">
        <div className="grow flex flex-col justify-evenly items-center p-8 gap-2 md:w-2/6">
          <Image
            src={Photo}
            height={250}
            width={250}
            alt="photo Katia Lemaire"
            className="rounded shadow-md"
          />
          <p className="text-center">{`Bonjour, je m'appelle Katia mélanie Lemaire et j'adore le préfou et mon amoureux développeur !`}</p>
        </div>
        <div className="grow flex flex-col items-center justify-center border-t-2 md:border-t-0 md:border-l-2 border-black/15 md:w-4/6">
          <div className="grow flex flex-wrap gap-2 justify-center items-center w-full p-4 md:p-0">
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
            <Cards img={testImage} text="Coucou" />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
