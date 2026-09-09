"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workLinks } from "@/data/site";
import type { Work } from "@/data/works";

const tagStyles: Record<string, string> = {
  web: "bg-[#faff81]",
  dtp: "bg-[#c4e5b9]",
  illust: "bg-[#d7aaee]",
  date: "bg-white",
};

export default function Sidebar({ work }: { work?: Work }) {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col gap-6 p-8 lg:h-full lg:w-[560px] lg:shrink-0 lg:overflow-y-auto">
      <header className="flex items-center gap-4 border-b border-main pb-4 text-main">
        <h2 className="text-lg font-semibold tracking-widest">
          {work ? "WORKS" : "PROFILE"}
        </h2>
      </header>

      {work ? (
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold leading-7 tracking-widest">
              {work.title}
            </h1>
            <h4 className="text-xs font-semibold leading-4 tracking-widest">
              {work.subtitle}
            </h4>
            <div className="flex flex-wrap gap-1">
              {work.tags.map((tag) => (
                <span
                  key={tag.label}
                  className={`flex rounded-full border px-2 py-0.5 text-xs ${tagStyles[tag.kind] ?? "bg-white"}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          {work.description.map((p, i) => (
            <p key={i} className="text-xs leading-relaxed">
              {p}
            </p>
          ))}
          {work.links?.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-xs text-main hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : (
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="text-lg font-semibold tracking-widest">八重樫 亜実</h2>
        <h3 className="text-sm font-semibold tracking-widest">
          桑沢デザイン研究所卒
        </h3>
        <p className="text-xs leading-relaxed">
          Adobe CCソフトを中心に、近年はFigmaを主に利用してデザイン制作に取り組んでいます。
          <br />
          WordPressのテーマ編集、軽微なコーディングなどの業務も行ってます。
        </p>
        <p className="text-xs leading-relaxed">
          趣味：ローグライクゲーム、麻雀、ソフビ集め、勘料理 <br />
          好きなもの：鰻、コーラ、お湯、タオルケット
        </p>
      </div>
      )}

      <ul className="grid gap-3 text-xs">
        {workLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname === link.href;
          return (
            <li key={link.slug}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-bold tracking-widest transition-colors hover:text-main ${
                  isActive ? "pointer-events-none text-main" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <footer className="flex items-end justify-between border-t border-main pt-4 text-xs tracking-widest text-main">
        <h3 className="font-semibold leading-tight">
          AMI
          <br />
          YAEGASHI
        </h3>
        <p>PORTFORIO</p>
      </footer>
    </div>
  );
}
