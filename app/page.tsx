import Image from "next/image";
import Photo from "@/public/photo.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id="banner" className="w-full h-[150px] bg-red-500"></div>
      <div id="container" className="w-full grow flex">
        <div className="w-2/5 grow bg-blue-400 flex flex-col justify-evenly items-center">
          <Image
            src={Photo}
            height={250}
            width={250}
            alt="photo Katia Lemaire"
            className="rounded shadow-md"
          />
          <p>{`Bonjour, je m'appelle Katia mélanie Lemaire et j'adore le préfou et mon amoureux développeur !`}</p>
        </div>
        <div className="w-3/5 grow bg-yellow-400 flex justify-center items-center">
          test
        </div>
      </div>
    </main>
  );
}
