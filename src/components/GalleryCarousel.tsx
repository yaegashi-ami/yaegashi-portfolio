"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import OpenBadge from "@/components/OpenBadge";

export type GalleryCarouselItem = {
  src: string;
  /** LP 等、個別ページへ遷移する場合の href */
  href?: string;
  /** 「開く」バッジを常時表示する */
  badge?: boolean;
  /** バッジ横に表示するホバーツールチップ */
  label?: string;
  /** contain 表示（余白付き・中央寄せ）で描画する */
  contain?: boolean;
  /** hover 時に main 色の薄いオーバーレイを表示する */
  tint?: boolean;
};

export default function GalleryCarousel({
  items,
  onImageClick,
}: {
  items: GalleryCarouselItem[];
  onImageClick: (src: string) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const scrollByOne = (dir: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    const nodes = node.querySelectorAll<HTMLElement>("[data-carousel-item]");
    const step =
      nodes.length > 1
        ? nodes[1].offsetLeft - nodes[0].offsetLeft
        : node.clientWidth;
    node.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = node;
      const nodes = node.querySelectorAll<HTMLElement>(
        "[data-carousel-item]",
      );
      const step =
        nodes.length > 1
          ? nodes[1].offsetLeft - nodes[0].offsetLeft
          : node.clientWidth;
      const threshold = step * 0.5;
      setCanPrev(scrollLeft > threshold);
      setCanNext(scrollWidth - clientWidth - scrollLeft > threshold);
    };
    update();
    node.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      node.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  if (items.length === 0) return null;

  const itemClass =
    "group relative aspect-[4/3] w-[calc(50%-4px)] shrink-0 snap-start overflow-hidden rounded-lg border border-neutral-300 bg-gray-100 transition-colors duration-300 hover:border-main lg:w-[calc(25%-6px)]";

  return (
    <div className="my-2 flex items-center gap-2">
      {items.length > 4 && (
        <button
          type="button"
          onClick={() => scrollByOne(-1)}
          disabled={!canPrev}
          aria-label="前の画像"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main text-white shadow-md transition-opacity enabled:hover:opacity-90 disabled:cursor-default disabled:opacity-30"
        >
          <span className="ms-outlined text-[24px] leading-none">
            chevron_left
          </span>
        </button>
      )}
      <div
        ref={trackRef}
        className="no-scrollbar flex flex-1 snap-x snap-mandatory gap-2 overflow-x-auto"
      >
        {items.map((img) => {
          const media = (
            <>
              <Image
                src={img.src}
                alt=""
                width={600}
                height={450}
                className={
                  img.contain
                    ? "aspect-[4/3] h-full w-full object-contain object-center p-2.5 transition-transform duration-300 group-hover:scale-105"
                    : "aspect-[4/3] h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                }
              />
              {img.tint && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-main/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
              {img.badge && <OpenBadge label={img.label} />}
            </>
          );
          return img.href ? (
            <Link
              key={img.src}
              href={img.href}
              data-carousel-item
              aria-label="詳細ページを開く"
              className={`${itemClass} cursor-pointer`}
            >
              {media}
            </Link>
          ) : (
            <button
              key={img.src}
              type="button"
              data-carousel-item
              onClick={() => onImageClick(img.src)}
              aria-label="画像を拡大"
              className={`${itemClass} cursor-zoom-in`}
            >
              {media}
            </button>
          );
        })}
      </div>
      {items.length > 4 && (
        <button
          type="button"
          onClick={() => scrollByOne(1)}
          disabled={!canNext}
          aria-label="次の画像"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main text-white shadow-md transition-opacity enabled:hover:opacity-90 disabled:cursor-default disabled:opacity-30"
        >
          <span className="ms-outlined text-[24px] leading-none">
            chevron_right
          </span>
        </button>
      )}
    </div>
  );
}