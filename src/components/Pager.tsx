"use client";

import { useState } from "react";
import Image from "next/image";

function spreadIndexOf(page: number): number {
  return page === 0 ? 0 : Math.ceil(page / 2);
}

function spreadPages(spread: number, total: number): number[] {
  if (spread === 0) return [0];
  const first = (spread - 1) * 2 + 1;
  return [first, first + 1].filter((p) => p < total);
}

export default function Pager({
  images,
  title,
  spread = false,
}: {
  images: string[];
  title: string;
  spread?: boolean;
}) {
  const total = images.length;
  const totalSpreads = spread ? spreadIndexOf(total - 1) + 1 : total;
  const [pos, setPos] = useState(0);

  const current: number[] = spread
    ? spreadPages(pos, total)
    : [pos];

  const go = (dir: 1 | -1) =>
    setPos((p) => (p + dir + totalSpreads) % totalSpreads);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold tracking-widest">
          {title}（全{total}ページ）
        </p>
        <p className="text-xs text-muted">
          {spread
            ? `見開き ${pos + 1} / ${totalSpreads}`
            : `${pos + 1} / ${total}`}
        </p>
      </div>
      <div className="overflow-hidden border-[0.5px] border-main bg-white">
        <div
          className={
            spread && current.length > 1
              ? "grid grid-cols-2"
              : "mx-auto max-w-[50%]"
          }
        >
          {current.map((p) => (
            <Image
              key={images[p]}
              src={images[p]}
              alt={`${title} ${p + 1}ページ目`}
              width={1000}
              height={1400}
              className="h-auto max-h-[80vh] w-full object-contain"
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        {spread ? (
          <>
            <button
              type="button"
              onClick={() => go(1)}
              className="rounded-full border border-main px-5 py-2 text-xs font-bold tracking-widest text-main transition-colors hover:bg-main hover:text-white"
            >
              ← 次へ
            </button>
            <button
              type="button"
              onClick={() => go(-1)}
              className="rounded-full border border-main px-5 py-2 text-xs font-bold tracking-widest text-main transition-colors hover:bg-main hover:text-white"
            >
              前へ →
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="rounded-full border border-main px-5 py-2 text-xs font-bold tracking-widest text-main transition-colors hover:bg-main hover:text-white"
            >
              ← 前
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="rounded-full border border-main px-5 py-2 text-xs font-bold tracking-widest text-main transition-colors hover:bg-main hover:text-white"
            >
              次 →
            </button>
          </>
        )}
      </div>
      <div className="flex gap-1 overflow-x-auto">
        {images.map((src, i) => {
          const s = spread ? spreadIndexOf(i) : i;
          const isActive = spread ? s === pos : i === pos;
          return (
            <button
              key={src}
              type="button"
              onClick={() => setPos(s)}
              aria-label={`${i + 1}ページ目へ`}
              className={`shrink-0 border-[0.5px] transition-opacity ${
                isActive
                  ? "border-main opacity-100"
                  : "border-transparent opacity-50 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt=""
                width={80}
                height={112}
                className="h-14 w-auto"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
