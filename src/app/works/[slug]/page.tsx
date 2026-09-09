import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubNav from "@/components/SubNav";
import Pager from "@/components/Pager";
import { works, getWork, lpDetails } from "@/data/works";

export const dynamicParams = false;

export async function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return { title: "Not Found" };
  return {
    title: `${work.title} | AMI YAEGASHI PORTFOLIO`,
    description: work.subtitle,
  };
}

const tagStyles: Record<string, string> = {
  web: "bg-[#faff81]",
  dtp: "bg-[#c4e5b9]",
  illust: "bg-[#d7aaee]",
  date: "bg-white",
};

const gridCols: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-2 xl:grid-cols-4",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col gap-12 px-5 pb-12 pt-6">
      <SubNav />

      <section className="flex flex-col gap-4">
        <Link
          href="/works"
          className="group flex w-fit items-center gap-2 text-2xl font-bold tracking-widest text-main"
        >
          <span aria-hidden="true" className="ms-fill text-[28px] text-main">
            arrow_circle_left
          </span>
          <span className="group-hover:underline">Works</span>
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold tracking-wider">{work.title}</h1>
          <p className="text-xs font-semibold tracking-wider text-muted">
            {work.subtitle}
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
          <p key={i} className="max-w-3xl text-sm leading-6">
            {p}
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

      <section className="flex flex-col gap-4 rounded-2xl border-[0.5px] border-main bg-white p-5 md:p-8">
        {work.gallery.map((group, gi) => {
          const isBooklet =
            group.images.length > 2 &&
            group.images.every((img) => img.item === "パンフレット");
          return (
            <div key={gi} id={`gallery-${gi}`} className="scroll-mt-24">
              {isBooklet ? (
                <Pager
                  images={group.images.map((img) => img.src)}
                  title={`${work.title} パンフレット`}
                  spread={group.images.length > 6}
                />
              ) : (
                <div
                  className={`grid h-fit gap-4 ${gridCols[group.columns]}`}
                >
                  {group.images.map((img) => {
                    const lp = lpDetails.find((d) => d.src === img.src);
                    const image = (
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={lp?.title ?? ""}
                        width={800}
                        height={600}
                        className="h-auto w-full"
                      />
                    );
                    return lp ? (
                      <Link
                        key={img.src}
                        href={`/works/lp/${lp.id}?from=${slug}`}
                        aria-label={`${lp.title}のページへ`}
                        className="group block"
                      >
                        <span className="block transition-transform duration-300 group-hover:scale-[1.02]">
                          {image}
                        </span>
                        <span className="mt-1 block text-xs text-main group-hover:underline">
                          {lp.title} →
                        </span>
                      </Link>
                    ) : (
                      image
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </section>
    </main>
  );
}
