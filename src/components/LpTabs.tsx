"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import LpMock from "@/components/LpMock";

export default function LpTabs({
  main,
  comp,
}: {
  main: { src: string; title: string };
  comp: { src: string; label: string };
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<"main" | "comp">(() =>
    searchParams.get("tab") === "comp" ? "comp" : "main",
  );

  const changeTab = (t: "main" | "comp") => {
    setTab(t);
    const params = new URLSearchParams(searchParams.toString());
    if (t === "comp") params.set("tab", "comp");
    else params.delete("tab");
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center gap-2">
        <button
          type="button"
          onClick={() => changeTab("main")}
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
          onClick={() => changeTab("comp")}
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
