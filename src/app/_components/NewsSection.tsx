"use client";

import { useState } from "react";
import Link from "next/link";

const newsItems: { title: string; date: string; href?: string }[] = [
  {
    title: "Works - バナー制作 追加",
    date: "2026-10-29",
    href: "/works#banner",
  },
  {
    title: "Works - period 生理管理アプリ 追加",
    date: "2026-10-06",
    href: "/other/period",
  },
  {
    title: "Works - momiji UIデザイン・デザインシステム 追加",
    date: "2026-10-06",
    href: "/other/momiji",
  },
  {
    title: "Works - WordPress管理画面のUI/UX改善 追加",
    date: "2026-09-15",
    href: "/other/wordpress-ux",
  },
  { title: "ポートフォリオリニューアル", date: "2026-09-12" },
  {
    title: "Chrome拡張機能公開",
    date: "2026-09-07",
    href: "/works#now-playing-music",
  },
];

const visibleCount = 3;
const itemClassName =
  "flex items-baseline justify-between gap-4 rounded-lg border-[0.5px] border-main bg-white px-5 py-2.5 md:px-6";

export default function NewsSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      aria-labelledby="news-heading"
      className="flex flex-col gap-5 pb-5"
    >
      <h2
        id="news-heading"
        className="flex items-center gap-3 text-3xl font-bold tracking-wider text-main"
      >
        <span aria-hidden="true" className="ms-fill shrink-0 text-[30px]">
          campaign
        </span>
        <span>News</span>
      </h2>
      <div className="flex flex-col gap-2">
        <ul
          id="news-list"
          className="flex w-full flex-col gap-2 text-sm leading-6"
        >
          {newsItems.map((item, index) => {
            const content = (
              <>
                <span>
                  <span
                    className={
                      item.href
                        ? "underline-offset-4 group-hover:underline"
                        : undefined
                    }
                  >
                    {item.title}
                  </span>
                  {item.href && (
                    <span
                      aria-hidden="true"
                      className="ms-fill relative -top-px ml-1 align-middle text-[18px]"
                    >
                      north_east
                    </span>
                  )}
                </span>
                <time
                  dateTime={item.date}
                  className="shrink-0 text-right tabular-nums text-muted"
                >
                  {item.date.split("-").map(Number).join("/")}
                </time>
              </>
            );

            return (
              <li key={item.title} hidden={!expanded && index >= visibleCount}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`${itemClassName} group text-main focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div className={itemClassName}>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
        {newsItems.length > visibleCount && (
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls="news-list"
            onClick={() => setExpanded((current) => !current)}
            className="group flex min-h-10 w-fit cursor-pointer items-center gap-1 self-end rounded px-1 text-xs text-main focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main"
          >
            <span className="underline-offset-4 group-hover:underline">
              {expanded ? "過去のお知らせを閉じる" : "過去のお知らせを表示"}
            </span>
            <span aria-hidden="true" className="ms-fill text-[20px]">
              {expanded ? "expand_less" : "expand_more"}
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
