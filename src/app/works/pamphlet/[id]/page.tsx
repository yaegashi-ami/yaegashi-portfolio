import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubNav from "@/components/SubNav";
import FlipBook from "@/components/FlipBook";
import SlashText from "@/components/SlashText";
import {
  pamphletDetails,
  getPamphlet,
  getWork,
  flatImages,
} from "@/data/works";

export const dynamicParams = false;

export async function generateStaticParams() {
  return pamphletDetails.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const pamphlet = getPamphlet(id);
  if (!pamphlet) return { title: "Not Found" };
  return {
    title: `${pamphlet.title} | AMI YAEGASHI PORTFOLIO`,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pamphlet = getPamphlet(id);
  if (!pamphlet) notFound();
  const work = getWork(pamphlet.workSlug);
  const group = work?.gallery[pamphlet.gi];
  const images = group ? flatImages(group.images).map((img) => img.src) : [];

  return (
    <main className="mx-auto flex w-full max-w-[1000px] flex-1 flex-col gap-12 px-5 pb-12 pt-6">
      <SubNav />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
        <section className="flex flex-col gap-4">
          <Link
            href="/works?view=item&item=パンフレット"
            className="group flex w-fit items-center gap-2 text-2xl font-bold tracking-widest text-main"
          >
            <span aria-hidden="true" className="ms-fill text-[28px] text-main">
              arrow_circle_left
            </span>
            <span className="group-hover:underline font-['Alata']">Works</span>
          </Link>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold tracking-wider">
              {pamphlet.title}
            </h1>
            <p className="text-xs font-semibold tracking-wider">
              client：{pamphlet.client}
            </p>
          </div>
        </section>
        {images.length > 0 && (
          <Suspense>
            <FlipBook
              images={images}
              title={pamphlet.title}
              order={group?.order}
              pageWidth={group?.bookSize?.[0] ?? 550}
              pageHeight={group?.bookSize?.[1] ?? 777}
            />
          </Suspense>
        )}
      </div>
    </main>
  );
}
