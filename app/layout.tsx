import type { Metadata } from "next";
import "./globals.css";
import { playfairDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "Katia Lemaire | Coordinatrice de scolarité",
  description:
    "Site de présentation de Katia Lemaire, nouvelle coordinatrice de scolarité à l'IHECF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100">{children}</body>
    </html>
  );
}
