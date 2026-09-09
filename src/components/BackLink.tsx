"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { works } from "@/data/works";

export default function BackLink() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const work = works.find((w) => w.slug === from);
  const back = work
    ? { href: `/works/${work.slug}`, label: work.title }
    : { href: "/works", label: "Works" };

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
