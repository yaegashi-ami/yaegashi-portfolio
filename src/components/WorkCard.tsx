import Image from "next/image";
import Link from "next/link";
import { thumbOf, flatImages, type Work } from "@/data/works";

const tagStyles: Record<string, string> = {
  web: "bg-[#faff81]",
  dtp: "bg-[#c4e5b9]",
  illust: "bg-[#d7aaee]",
  date: "bg-white",
};

export default function WorkCard({
  work,
  href,
  coverSrc,
  caption,
}: {
  work: Work;
  href?: string;
  coverSrc?: string;
  caption?: string;
}) {
  const cover =
    coverSrc ??
    (work.gallery[0]
      ? flatImages(work.gallery[0].images)[0]?.src
      : undefined);
  const thumb = cover ? thumbOf(cover) : undefined;

  return (
    <Link
      href={href ?? `/works/${work.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border-[0.5px] border-main bg-white transition-transform hover:-translate-y-1"
    >
      {thumb ? (
        <span
          className="block aspect-[16/10] w-full overflow-hidden"
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
        {caption ? (
          <span className="text-xs text-muted">{caption}</span>
        ) : (
          <>
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
          </>
        )}
      </span>
    </Link>
  );
}
