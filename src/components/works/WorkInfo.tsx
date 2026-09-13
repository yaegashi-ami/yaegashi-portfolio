import Link from "next/link";
import SlashText from "@/components/ui/SlashText";
import type { Work } from "@/data/works";

const tagStyles: Record<string, string> = {
  web: "bg-[#faff81]",
  dtp: "bg-[#c4e5b9]",
  illust: "bg-[#d7aaee]",
  date: "bg-white",
};

export default function WorkInfo({ work }: { work: Work }) {
  return (
    <section className="flex flex-col gap-4">
      <Link
        href="/works"
        className="group flex w-fit items-center gap-2 text-2xl font-bold tracking-widest text-main"
      >
        <span aria-hidden="true" className="ms-fill text-[28px] text-main">
          arrow_circle_left
        </span>
        <span className="group-hover:underline font-['Alata']">Works</span>
      </Link>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold tracking-wider">{work.title}</h1>
        <p className="text-xs font-semibold tracking-wider text-muted">
          <SlashText text={work.subtitle} />
        </p>
      </div>
      <div className="flex flex-wrap gap-1">
        {work.tags.map((tag) => (
          <span
            key={tag.label}
            className={`rounded-full border px-2 py-0.5 text-xs ${tagStyles[tag.kind] ?? "bg-white"}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
      {work.description.map((p, i) => (
        <p key={i} className="max-w-3xl text-sm leading-6 whitespace-pre-line">
          <SlashText text={p} />
        </p>
      ))}
      {work.links?.map((link) => (
        <Link
          key={link.href + link.label}
          href={link.href}
          className="w-fit text-xs text-main hover:underline"
        >
          {link.label}
        </Link>
      ))}
    </section>
  );
}
