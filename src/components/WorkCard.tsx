import Image from "next/image";
import Link from "next/link";
import { thumbOf, type Work } from "@/data/works";

const tagStyles: Record<string, string> = {
  web: "bg-[#faff81]",
  dtp: "bg-[#c4e5b9]",
  illust: "bg-[#d7aaee]",
  date: "bg-white",
};

export default function WorkCard({ work }: { work: Work }) {
  const cover = work.gallery[0]?.images[0]?.src;
  const thumb = cover ? thumbOf(cover) : undefined;

  return (
    <Link
      href={`/works/${work.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_0_8px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1"
    >
      {thumb ? (
        <span
          className="block aspect-[4/3] w-full overflow-hidden"
          style={{ backgroundColor: work.bg }}
        >
          <Image
            src={thumb}
            alt=""
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </span>
      ) : null}
      <span className="flex flex-col gap-2 p-4">
        <span className="text-base font-semibold tracking-wider">
          {work.title}
        </span>
        <span className="text-xs text-muted">{work.subtitle}</span>
        <span className="flex flex-wrap gap-1">
          {work.tags.map((tag) => (
            <span
              key={tag.label}
              className={`rounded-full border px-2 py-0.5 text-[11px] ${tagStyles[tag.kind] ?? "bg-white"}`}
            >
              {tag.label}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}
