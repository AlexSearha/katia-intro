import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="shrink h-12 flex justify-center items-center gap-1 text-sm">
      Développé par{" "}
      <Link
        href="https://alexsearha.github.io"
        target="_blank"
        className="italic hover:underline hover:underline-offset-2 transition"
      >
        Alex Searha
      </Link>
    </footer>
  );
}
