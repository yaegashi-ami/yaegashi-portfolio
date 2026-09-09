"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import SubNav from "@/components/SubNav";
import { works, itemTags, lpDetails, thumbOf, type ItemTag } from "@/data/works";

const genreFilters = [
  { key: "all", label: "すべて" },
  { key: "web", label: "WEB" },
  { key: "dtp", label: "DTP" },
  { key: "illust", label: "illust" },
] as const;

type GenreKey = (typeof genreFilters)[number]["key"];
type View = "client" | "item";

const pill = (isActive: boolean) =>
  `rounded-full border px-4 py-1.5 text-xs font-bold tracking-widest transition-colors ${
    isActive
      ? "border-main bg-main text-white"
      : "border-main text-main hover:bg-main hover:text-white"
  }`;

export default function Page() {
  const [view, setView] = useState<View>("client");
  const [genre, setGenre] = useState<GenreKey>("all");
  const [item, setItem] = useState<ItemTag | "all">("all");

  const clientWorks =
    genre === "all"
      ? works
      : works.filter((work) => work.tags.some((tag) => tag.kind === genre));

  const itemImages = works.flatMap((work) =>
    work.gallery.flatMap((group, gi) =>
      group.images.map((img) => ({ work, gi, img })),
    ),
  );
  const visibleItems =
    item === "all"
      ? itemImages
      : itemImages.filter((entry) => entry.img.item === item);

  const booklets =
    item === "パンフレット"
      ? works.flatMap((work) =>
          work.gallery
            .map((group, gi) => ({ work, gi, group }))
            .filter(
              ({ group }) =>
                group.images.length > 2 &&
                group.images.every((img) => img.item === "パンフレット"),
            ),
        )
      : [];

  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col px-5 pb-12 pt-6">
      <SubNav />
      <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-3xl font-bold tracking-[0.2rem] text-main">
            WORKS
          </p>
          <p className="mt-1 text-base font-medium tracking-widest text-muted">
            実績一覧
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setView("client")}
            aria-pressed={view === "client"}
            className={pill(view === "client")}
          >
            企業で見る
          </button>
          <button
            type="button"
            onClick={() => setView("item")}
            aria-pressed={view === "item"}
            className={pill(view === "item")}
          >
            モノで見る
          </button>
        </div>
      </div>

      {view === "client" ? (
        <>
          <div className="mt-[20px] border-t-[0.5px] border-main pt-4">
            <div className="flex flex-wrap gap-2">
              {genreFilters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setGenre(f.key)}
                  aria-pressed={genre === f.key}
                  className={pill(genre === f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientWorks.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mt-[20px] border-t-[0.5px] border-main pt-4">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setItem("all")}
                aria-pressed={item === "all"}
                className={pill(item === "all")}
              >
                すべて
              </button>
              {itemTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setItem(tag)}
                  aria-pressed={item === tag}
                  className={pill(item === tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">{visibleItems.length}点</p>
          {item === "LP" ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {lpDetails.map((lp) => (
                <Link
                  key={lp.id}
                  href={`/works/lp/${lp.id}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_0_8px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1"
                >
                  <span className="block aspect-[3/4] w-full overflow-hidden border-b-[0.5px] border-main">
                    <Image
                      src={thumbOf(lp.src)}
                      alt=""
                      width={600}
                      height={800}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-col gap-1 p-4">
                    <span className="text-base font-semibold tracking-wider">
                      {lp.title}
                    </span>
                    <span className="text-xs text-muted">
                      {lp.description[0]}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : item === "パンフレット" ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {booklets.map(({ work, gi, group }) => (
                <Link
                  key={work.slug + gi}
                  href={`/works/${work.slug}#gallery-${gi}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-4 shadow-[0_0_8px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1"
                >
                  <span
                    className="block w-24 shrink-0 overflow-hidden border-[0.5px] border-main"
                    style={{ backgroundColor: work.bg }}
                  >
                    <Image
                      src={thumbOf(group.images[0].src)}
                      alt=""
                      width={200}
                      height={280}
                      className="h-auto w-full"
                    />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-base font-semibold tracking-wider">
                      {work.title} パンフレット
                    </span>
                    <span className="text-xs text-muted">
                      全{group.images.length}ページ・読む →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
          <div className="mt-6 columns-2 gap-4 lg:columns-4">
            {visibleItems.map(({ work, img }) => (
              <Link
                key={work.slug + img.src}
                href={`/works/${work.slug}`}
                className="group mb-4 block break-inside-avoid"
                aria-label={`${work.title}（${img.item}）へ`}
              >
                <span
                  className="block overflow-hidden border-[0.5px] border-main"
                  style={{ backgroundColor: work.bg }}
                >
                  <Image
                    src={img.src}
                    alt=""
                    width={600}
                    height={800}
                    className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                  />
                </span>
              </Link>
            ))}
          </div>
          )}
        </>
      )}
    </main>
  );
}
