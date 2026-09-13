"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PageFlip } from "page-flip";
import { assetPath } from "@/lib/assetPath";

export default function FlipBook({
  images: rawImages,
  title,
  order,
  pageWidth = 550,
  pageHeight = 777,
}: {
  images: string[];
  title: string;
  order?: number[];
  pageWidth?: number;
  pageHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const flipRef = useRef<PageFlip | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(0);
  const [, setCount] = useState(0);
  const [orientation, setOrientation] = useState<"landscape" | "portrait">(
    "landscape",
  );

  const images = order ? order.map((i) => rawImages[i]) : rawImages;

  // 見開き表示中のペアを両方ハイライト（1ページ表示時は1枚のみ）
  const visiblePages =
    page === 0 || orientation === "portrait"
      ? [page]
      : (() => {
          const left = page % 2 === 1 ? page : page - 1;
          return [left, left + 1].filter((p) => p < images.length);
        })();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { PageFlip } = await import("page-flip");
      if (cancelled || !ref.current) return;
      // セクション全体が80vhに収まるよう本幅を逆算
      const maxW = Math.min(
        pageWidth,
        Math.max(240, (window.innerHeight * 0.58 * pageWidth) / pageHeight),
      );
      const flip = new PageFlip(ref.current, {
        width: pageWidth,
        height: pageHeight,
        size: "stretch",
        minWidth: Math.round(maxW * 0.55),
        maxWidth: Math.round(maxW),
        minHeight: Math.round((maxW * 0.55 * pageHeight) / pageWidth),
        maxHeight: Math.round((maxW * pageHeight) / pageWidth),
        showCover: true,
        drawShadow: false,
        flippingTime: 800,
        usePortrait: true,
        showPageCorners: true,
        disableFlipByClick: false,
        mobileScrollSupport: false,
      });
      const pages = ref.current.querySelectorAll<HTMLElement>(".flip-page");
      flip.loadFromHTML(pages);
      const syncUrl = (n: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (n > 0) params.set("p", String(n));
        else params.delete("p");
        const query = params.toString();
        router.replace(`${pathname}${query ? `?${query}` : ""}`, {
          scroll: false,
        });
      };
      flip.on("flip", (e) => {
        const n = e.data as number;
        setPage(n);
        syncUrl(n);
      });
      flip.on("changeOrientation", (e) =>
        setOrientation(e.data as "landscape" | "portrait"),
      );
      setCount(flip.getPageCount());
      const initial = Number(searchParams.get("p") ?? 0);
      if (Number.isFinite(initial) && initial > 0) {
        flip.turnToPage(initial);
        setPage(initial);
      }
      flipRef.current = flip;
    })();
    return () => {
      cancelled = true;
      flipRef.current?.destroy();
      flipRef.current = null;
    };
  }, []);

  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div className="overflow-hidden border-[0.5px] border-main bg-white p-4 md:p-8">
        <div ref={ref} className="mx-auto w-fit max-w-full">
          {images.map((src, i) => (
            <div
              key={src}
              className="flip-page"
              data-density={
                i === 0 || i === images.length - 1 ? "hard" : "soft"
              }
            >
              <Image
                src={assetPath(src)}
                alt={`${title} ${i + 1}ページ目`}
                width={550}
                height={777}
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => flipRef.current?.flipPrev()}
          className="rounded-full border border-main px-5 py-2 text-xs font-bold tracking-widest text-main transition-colors hover:bg-main hover:text-white"
        >
          ← 前
        </button>
        <p className="text-xs font-bold tracking-widest text-main">{title}</p>
        <button
          type="button"
          onClick={() => flipRef.current?.flipNext()}
          className="rounded-full border border-main px-5 py-2 text-xs font-bold tracking-widest text-main transition-colors hover:bg-main hover:text-white"
        >
          次 →
        </button>
      </div>
      <div className="flex w-full min-w-0 gap-1">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => flipRef.current?.turnToPage(i)}
            aria-label={`${i + 1}ページ目へ`}
            className={`min-w-0 flex-1 border-[0.5px] transition-opacity ${
              visiblePages.includes(i)
                ? "border-main opacity-100"
                : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            <Image
              src={assetPath(src)}
              alt=""
              width={80}
              height={112}
              className="h-auto w-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
