"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BackLink() {
  const searchParams = useSearchParams();
  const [back, setBack] = useState({ href: "/works", label: "Works" });

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("works-filter");
      if (!raw) return;
      const f = JSON.parse(raw) as {
        view?: string;
        genre?: string;
        item?: string;
      };
      const params = new URLSearchParams();
      if (f.view === "item") params.set("view", "item");
      if (f.genre && f.genre !== "all") params.set("genre", f.genre);
      if (f.item && f.item !== "all") params.set("item", f.item);
      const query = params.toString();
      if (query) setBack({ href: `/works?${query}`, label: "Works" });
    } catch {
      /* 無視 */
    }
  }, [searchParams]);

  return (
    <Link
      href={back.href}
      className="group flex w-fit items-center gap-2 text-2xl font-bold tracking-widest text-main"
    >
      <span aria-hidden="true" className="ms-fill text-[28px] text-main">
        arrow_circle_left
      </span>
      <span className="group-hover:underline">{back.label}</span>
    </Link>
  );
}
