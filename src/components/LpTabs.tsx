"use client";

import { useState } from "react";
import LpMock from "@/components/LpMock";

export default function LpTabs({
  main,
  comp,
}: {
  main: { src: string; title: string };
  comp: { src: string; label: string };
}) {
  const [tab, setTab] = useState<"main" | "comp">("main");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={() => setTab("main")}
          aria-pressed={tab === "main"}
          className={`rounded-full border px-5 py-1.5 text-xs font-bold tracking-widest transition-colors ${
            tab === "main"
              ? "border-main bg-main text-white"
              : "border-main text-main hover:bg-main hover:text-white"
          }`}
        >
          LP
        </button>
        <button
          type="button"
          onClick={() => setTab("comp")}
          aria-pressed={tab === "comp"}
          className={`rounded-full border px-5 py-1.5 text-xs font-bold tracking-widest transition-colors ${
            tab === "comp"
              ? "border-main bg-main text-white"
              : "border-main text-main hover:bg-main hover:text-white"
          }`}
        >
          {comp.label}
        </button>
      </div>
      {tab === "main" ? (
        <LpMock src={main.src} title={main.title} />
      ) : (
        <LpMock src={comp.src} title={`${main.title}（${comp.label}）`} />
      )}
    </div>
  );
}
