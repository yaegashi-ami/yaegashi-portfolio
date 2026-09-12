import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SubNav from "@/components/SubNav";
import LpMock from "@/components/LpMock";
import LpTabs from "@/components/LpTabs";
import BackLink from "@/components/BackLink";
import SlashText from "@/components/SlashText";
import { lpDetails, getLPDetail, thumbOf } from "@/data/works";

export const dynamicParams = false;

export async function generateStaticParams() {
  return lpDetails.map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const detail = getLPDetail(id);
  if (!detail) return { title: "Not Found" };
  return {
    title: `${detail.title} | AMI YAEGASHI PORTFOLIO`,
    description: detail.description[0] ?? detail.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const detail = getLPDetail(id);
  if (!detail) notFound();

  return (
    <main className="mx-auto flex w-full max-w-[1000px] flex-1 flex-col gap-12 px-10 pb-12 pt-6">
      <SubNav />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:items-start lg:grid-cols-2">
        <section className="flex flex-col gap-4">
          <Suspense>
            <BackLink />
          </Suspense>
          <div className="flex flex-col gap-2">
            <h1 className="text-md font-bold tracking-wider">{detail.title}</h1>
            <p className="text-xs font-semibold tracking-wider">
              client：{detail.client}
            </p>
          </div>
{detail.description.map((p, i) => (
            <p key={i} className="max-w-3xl text-xs leading-4.5 whitespace-pre-line">
              <SlashText text={p} />
            </p>
          ))}
          <div className="mt-2 flex flex-col gap-2">
            <p className="text-xs tracking-widest text-muted">
              他のキャンペーン
            </p>
            <div className="grid grid-cols-4 gap-2">
              {lpDetails
                .filter((d) => d.client === detail.client)
                .map((d) =>
                  d.id === id ? (
                    <span
                      key={d.id}
                      className="relative block overflow-hidden rounded-lg border-2 border-main"
                    >
                      <Image
                        src={thumbOf(d.src)}
                        alt={d.title}
                        width={300}
                        height={300}
                        className="aspect-[4/3] w-full object-cover object-top"
                      />
                    </span>
                  ) : (
                    <Link
                      key={d.id}
                      href={`/works/lp/${d.id}`}
                      aria-label={`${d.title}のページへ`}
                      className="group relative block overflow-hidden rounded-lg border-[0.5px] border-main"
                    >
                      <Image
                        src={thumbOf(d.src)}
                        alt={d.title}
                        width={300}
                        height={300}
                        className="aspect-[4/3] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  ),
                )}
            </div>
          </div>
        </section>
        {detail.comp ? (
          <Suspense>
            <LpTabs
              main={{ src: detail.src, title: detail.title }}
              comp={detail.comp}
            />
          </Suspense>
        ) : (
          <LpMock src={detail.src} title={detail.title} />
        )}
      </div>
    </main>
  );
}
