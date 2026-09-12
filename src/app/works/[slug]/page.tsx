import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubNav from "@/components/SubNav";
import FlipBook from "@/components/FlipBook";
import SlashText from "@/components/SlashText";
import { works, getWork, lpDetails, flatImages, thumbOf } from "@/data/works";

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
  3: "grid-cols-1 md:grid-cols-3 xl:grid-cols-3",
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
  const scrollGroup = work.gallery.find((group) => group.scrollView);

  const infoSection = (
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

  const scrollViewSection = scrollGroup ? (
    <section className="h-[70vh] overflow-y-auto rounded-2xl border-[0.5px] border-main bg-white">
      {flatImages(scrollGroup.images).map((img) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt=""
          loading="lazy"
          className="h-auto w-full"
        />
      ))}
    </section>
  ) : null;

  return (
    <main className="mx-auto flex w-full max-w-[1000px] flex-1 flex-col gap-12 px-5 pb-12 pt-6">
      <SubNav />

      {scrollGroup ? (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
          {infoSection}
          {scrollViewSection}
        </div>
      ) : (
        <>
          {infoSection}

      {work.gallery.some(
        (group) =>
          !(
            flatImages(group.images).length > 2 &&
            flatImages(group.images).every(
              (img) => img.item === "パンフレット",
            )
          ),
      ) && (
        <section className="flex flex-col gap-4 rounded-2xl border-[0.5px] border-main bg-white p-5 md:p-8">
          {work.gallery.map((group, gi) => {
            const isBooklet =
              flatImages(group.images).length > 2 &&
              flatImages(group.images).every(
                (img) => img.item === "パンフレット",
              );
            if (isBooklet) return null;
            if (group.scrollView) return null;
            const flat = flatImages(group.images);
            const isLPGroup =
              flat.length > 0 && flat.every((img) => img.item === "WEBサイト");
            if (isLPGroup) {
              return (
                <div key={gi} className="grid grid-cols-2 gap-4">
                  {flat.map((img) => {
                    const lp = lpDetails.find((d) => d.src === img.src);
                    if (!lp) return null;
                    return (
                      <Link
                        key={img.src}
                        href={`/works/lp/${lp.id}?from=${slug}`}
                        aria-label={`${lp.title}のページへ`}
                        className="group block overflow-hidden rounded-xl border-[0.5px] border-main"
                      >
                        <Image
                          src={thumbOf(img.src)}
                          alt=""
                          width={600}
                          height={600}
                          className="aspect-square h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="block bg-white p-3 text-sm font-semibold tracking-wider">
                          {lp.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              );
            }
            return (
              <div key={gi}>
                <div
                  className={
                    work.naturalGallery
                      ? "grid h-fit grid-cols-3 items-center gap-4"
                      : `grid h-fit gap-4 ${gridCols[group.columns]}`
                  }
                >
                  {group.images.map((entry) => {
                    if (Array.isArray(entry)) {
                      return (
                        <div
                          key={entry.map((e) => e.src).join("+")}
                          className={
                            group.stackDir === "col"
                              ? "mx-auto flex w-[80%] flex-col gap-4"
                              : "grid grid-cols-2 gap-4"
                          }
                        >
                          {entry.map((img) => (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              key={img.src}
                              src={img.src}
                              alt=""
                              loading="lazy"
                              className="h-auto w-full"
                            />
                          ))}
                        </div>
                      );
                    }
                    const img = entry;
                    const lp =
                      lpDetails.find((d) => d.src === img.src) ??
                      lpDetails.find((d) => d.comp?.src === img.src);
                    const target = lp
                      ? { id: lp.id, title: lp.title }
                      : undefined;
                    const image = (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={img.src}
                        src={img.src}
                        alt={target?.title ?? ""}
                        loading="lazy"
                        className={
                          work.naturalGallery
                            ? "h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
                            : target
                              ? "aspect-square h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                              : "h-auto max-h-[70vh] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        }
                      />
                    );
                    const frame = (
                      <span className="block w-full overflow-hidden">
                        {image}
                      </span>
                    );
                    return target ? (
                      <Link
                        key={img.src}
                        href={`/works/lp/${target.id}?from=${slug}`}
                        aria-label={`${target.title}のページへ`}
                        className="group block"
                      >
                        {frame}
                        <span className="mt-1 block text-xs text-main group-hover:underline">
                          {target.title} →
                        </span>
                      </Link>
                    ) : (
                      <span key={img.src} className="block">
                        {frame}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      )}

      {work.gallery.map((group, gi) => {
        const flat = flatImages(group.images);
        const isBooklet =
          flat.length > 2 && flat.every((img) => img.item === "パンフレット");
        if (!isBooklet) return null;
        return (
          <section
            key={gi}
            id={`gallery-${gi}`}
            className="flex scroll-mt-24 flex-col gap-4 rounded-2xl border-[0.5px] border-main bg-white p-5 md:p-8"
          >
            <Suspense>
              <FlipBook
                images={flat.map((img) => img.src)}
                title={`${work.title} パンフレット`}
                order={group.order}
                pageWidth={group.bookSize?.[0] ?? 550}
                pageHeight={group.bookSize?.[1] ?? 777}
              />
            </Suspense>
          </section>
        );
      })}
        </>
      )}
    </main>
  );
}