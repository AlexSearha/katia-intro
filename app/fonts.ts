import { Lato, Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
