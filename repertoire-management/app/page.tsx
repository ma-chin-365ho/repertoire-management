'use client'

import Image from "next/image";
import { useState } from 'react';

import RepertoireCategories from "./repertoireCategories";
import RepertoireSongs from "./repertoireSongs";
import RepertoireSection from "./repertoireSection";

import { repertoires } from "../testdata";

export default function Home() {

  const [repertoireIdx, setRepertoireIdx] = useState<number | null>(null);
  const [repertoireSongIdx, setRepertoireSongIdx] = useState<number | null>(null);

  return (
    <div className="grid grid-rows-[20px_1fr_20px]  min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2  sm:items-start">
        <RepertoireCategories repertoires={repertoires} onClickCategory={(idx) => { setRepertoireSongIdx(null); setRepertoireIdx(idx) }} />
        <RepertoireSongs repertoireSongs={repertoireIdx === null ? [] : repertoires[repertoireIdx].songs} onClickSong={(idx) => setRepertoireSongIdx(idx)} />
        {(repertoireIdx === null || repertoireSongIdx === null) ? [] : repertoires[repertoireIdx].songs[repertoireSongIdx].sections.map((section) => (
          <RepertoireSection repertoireSection={section} repertoireSectionDefault={repertoires[repertoireIdx].songs[repertoireSongIdx].default} />
        ))}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
