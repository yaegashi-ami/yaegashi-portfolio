import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import SubNav from "@/components/SubNav";
import LpMock from "@/components/LpMock";
import BackLink from "@/components/BackLink";
import { lpDetails, getLPDetail } from "@/data/works";

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
    <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col gap-12 px-5 pb-12 pt-6">
      <SubNav />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <section className="flex flex-col gap-4">
          <Suspense>
            <BackLink />
          </Suspense>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold tracking-wider">{detail.title}</h1>
            <p className="text-xs font-semibold tracking-wider">
              client：{detail.client}
            </p>
          </div>
          {detail.description.map((p, i) => (
            <p key={i} className="max-w-3xl text-sm leading-6 whitespace-pre-line">
              {p}
            </p>
          ))}
        </section>
        <LpMock src={detail.src} title={detail.title} />
      </div>
    </main>
  );
}
