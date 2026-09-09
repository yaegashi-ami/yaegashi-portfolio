import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { works, getWork } from "@/data/works";

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
    title: `${work.title} | AMI YAEGASHI PORTFORIO`,
    description: work.subtitle,
  };
}

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
    <main className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col lg:h-screen lg:flex-row lg:overflow-hidden">
      <Sidebar work={work} />

      <div
        className={`flex w-full flex-col gap-4 p-8 lg:h-full lg:overflow-y-auto lg:p-12 ${work.padded ? "lg:p-16" : ""}`}
        style={{ backgroundColor: work.bg }}
      >
        {work.gallery.map((group, gi) => (
          <div
            key={gi}
            className={`grid h-fit gap-4 ${gridCols[group.columns]}`}
          >
            {group.images.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={800}
                height={600}
                className="h-auto w-full"
              />
            ))}
          </div>
        ))}
      </div>

      <footer className="flex items-end justify-between p-8 text-xs tracking-widest text-main lg:hidden">
        <h3 className="font-semibold leading-tight">
          AMI
          <br />
          YAEGASHI
        </h3>
        <p>PORTFORIO</p>
      </footer>
    </main>
  );
}
