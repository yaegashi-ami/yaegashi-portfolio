"use client";

import { Suspense, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import SubNav from "@/components/SubNav";
import {
  works,
  itemTags,
  pamphletDetails,
  thumbOf,
  flatImages,
  hiddenItemSrcs,
  type ItemTag,
  type GalleryImage,
} from "@/data/works";

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
  return (
    <Suspense>
      <WorksInner />
    </Suspense>
  );
}

function WorksInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const validView = (v: string | null): View =>
    v === "item" ? "item" : "client";
  const validGenre = (g: string | null): GenreKey =>
    genreFilters.some((f) => f.key === g) ? (g as GenreKey) : "all";
  const validItem = (t: string | null): ItemTag | "all" =>
    t === "all" || itemTags.some((tag) => tag === t)
      ? (t as ItemTag | "all")
      : "all";

  const [view, setView] = useState<View>(() =>
    validView(searchParams.get("view")),
  );
  const [genre, setGenre] = useState<GenreKey>(() =>
    validGenre(searchParams.get("genre")),
  );
  const [item, setItem] = useState<ItemTag | "all">(() =>
    validItem(searchParams.get("item")),
  );

  const changeView = (v: View) => {
    setView(v);
    syncUrl(v, genre, item);
    rememberFilter(v, genre, item);
  };
  const changeGenre = (g: GenreKey) => {
    setGenre(g);
    syncUrl(view, g, item);
    rememberFilter(view, g, item);
  };
  const changeItem = (t: ItemTag | "all") => {
    setItem(t);
    syncUrl(view, genre, t);
    rememberFilter(view, genre, t);
  };

  const rememberFilter = (v: View, g: GenreKey, t: ItemTag | "all") => {
    try {
      sessionStorage.setItem(
        "works-filter",
        JSON.stringify({ view: v, genre: g, item: t }),
      );
    } catch {
      /* private mode等は無視 */
    }
  };

  const syncUrl = (v: View, g: GenreKey, t: ItemTag | "all") => {
    const params = new URLSearchParams();
    if (v !== "client") params.set("view", v);
    if (g !== "all") params.set("genre", g);
    if (t !== "all") params.set("item", t);
    const query = params.toString();
    router.replace(`${pathname}${query ? `?${query}` : ""}`, {
      scroll: false,
    });
  };

  const clientWorks =
    genre === "all"
      ? works
      : works.filter((work) => work.tags.some((tag) => tag.kind === genre));

  const itemImages = works.flatMap((work) =>
    work.gallery.flatMap((group, gi) =>
      flatImages(group.images)
        .filter((img) => !hiddenItemSrcs.includes(img.src))
        .map((img) => ({ work, gi, img })),
    ),
  );
  const seenBooklets = new Set<string>();
  const visibleItems = (
    item === "all" ? itemImages : itemImages.filter((entry) => entry.img.item === item)
  )
    .filter((entry) => {
      if (entry.img.item !== "パンフレット") return true;
      const key = `${entry.work.slug}#${entry.gi}`;
      if (seenBooklets.has(key)) return false;
      seenBooklets.add(key);
      return true;
    })
    .map((entry) => {
      // 同一グループ内のネスト（表裏セット）は代表1枚だけ出す
      const group = entry.work.gallery[entry.gi];
      const nested = group.images.find(
        (e): e is GalleryImage[] =>
          Array.isArray(e) && e.some((im) => im.src === entry.img.src),
      );
      if (nested) return nested[0].src === entry.img.src ? { ...entry, img2: undefined } : null;
      return { ...entry, img2: undefined };
    })
    .filter((entry) => entry !== null);

  const booklets =
    item === "パンフレット"
      ? works.flatMap((work) =>
          work.gallery
            .map((group, gi) => ({ work, gi, group }))
            .filter(({ group }) => {
              const flat = flatImages(group.images);
              return (
                flat.length > 2 &&
                flat.every((img) => img.item === "パンフレット")
              );
            }),
        )
      : [];

  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col px-5 pb-12 pt-6">
      <SubNav />
      <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex gap-2 items-center">
          <p className="text-3xl font-bold tracking-[0.2rem] text-main">
            Works
          </p>
          <p className="mt-1 text-base font-medium tracking-widest text-muted">
            実績一覧
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => changeView("client")}
            aria-pressed={view === "client"}
            className={pill(view === "client")}
          >
            企業/ジャンルで見る
          </button>
          <button
            type="button"
            onClick={() => changeView("item")}
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
                  onClick={() => changeGenre(f.key)}
                  aria-pressed={genre === f.key}
                  className={pill(genre === f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {clientWorks.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mt-4 mb-4 border-t-[0.5px] border-main pt-4">
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => changeItem("all")}
                aria-pressed={item === "all"}
                className={pill(item === "all")}
              >
                すべて
              </button>
              {itemTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => changeItem(tag)}
                  aria-pressed={item === tag}
                  className={pill(item === tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          {item === "パンフレット" ? (
            <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {booklets.map(({ work, gi, group }) => {
                const pages = flatImages(group.images);
                const pamphlet = pamphletDetails.find(
                  (p) => p.workSlug === work.slug && p.gi === gi,
                );
                return (
                  <Link
                    key={work.slug + gi}
                    href={
                      pamphlet
                        ? `/works/pamphlet/${pamphlet.id}`
                        : `/works/${work.slug}#gallery-${gi}`
                    }
                    aria-label={`${work.title} パンフレット`}
                    className="group block overflow-hidden rounded-xl border-[0.5px] border-main"
                    style={{ backgroundColor: work.bg }}
                  >
                    <Image
                      src={thumbOf(pages[0]?.src ?? "")}
                      alt=""
                      width={600}
                      height={600}
                      className="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                );
              })}
            </div>
          ) : (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {visibleItems.map(({ work, img }) => (
              <Link
                key={work.slug + img.src}
                href={`/works/${work.slug}`}
                className="group block overflow-hidden rounded-xl border-[0.5px] border-main"
                aria-label={`${work.title}（${img.item}）へ`}
              >
                <Image
                  src={img.src}
                  alt=""
                  width={600}
                  height={600}
                  className="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            ))}
          </div>
          )}
        </>
      )}
    </main>
  );
}
