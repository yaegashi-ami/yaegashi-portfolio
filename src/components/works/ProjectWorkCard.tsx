import Image from "next/image";
import Link from "next/link";
import MomijiBoard from "@/components/other/MomijiBoard";
import { RankingSyncPreview } from "@/components/other/RankingSyncDemo";
import type { OtherItem } from "@/data/other";
import { assetPath } from "@/lib/assetPath";
import ThumbnailZoomBadge from "@/components/ui/ThumbnailZoomBadge";

export default function ProjectWorkCard({
  item,
  onImageClick,
}: {
  item: OtherItem;
  onImageClick: (src: string, images: string[]) => void;
}) {
  const images = item.gallery.flatMap((group) =>
    group.images.map((image) => image.src),
  );

  return (
    <article
      id={item.id}
      className="flex min-w-0 scroll-mt-6 flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_0_8px_rgba(0,0,0,0.05)] md:p-8"
    >
      <p className="text-xs font-bold tracking-widest text-main">
        {item.subtitle}
      </p>
      <h2 className="flex items-center gap-2 text-xl font-bold tracking-wider">
        {item.image && (
          <Image
            src={assetPath(item.image)}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 shrink-0 object-cover"
          />
        )}
        {item.title}
      </h2>
      {item.id === "momiji" && (
        <Link
          href={item.caseStudyHref!}
          aria-label={`${item.title}の詳細を見る`}
          className="relative my-2 block"
        >
          <MomijiBoard compact />
        </Link>
      )}
      {item.id === "wordpress-ux" && (
        <Link
          href={item.caseStudyHref!}
          aria-label={`${item.title}の詳細を見る`}
          className="relative my-2 block"
        >
          <RankingSyncPreview />
        </Link>
      )}
      {item.gallery.map((gallery, galleryIndex) => (
        <div
          key={galleryIndex}
          className="my-2 grid grid-cols-2 gap-2 lg:grid-cols-4"
        >
          {gallery.images.map(({ src }, index) => {
            const contain = src.startsWith("/images/t-shirt");
            const aspect =
              item.id === "period"
                ? "aspect-square"
                : contain
                  ? "aspect-[4/3]"
                  : "aspect-[5/3]";
            return (
              <button
                key={src}
                type="button"
                onClick={() => onImageClick(src, images)}
                aria-label={`${item.title}の画像${index + 1}を拡大`}
                className={`group relative min-w-0 cursor-zoom-in overflow-hidden rounded-lg bg-gray-100 ${aspect} transition-shadow hover:ring-2 hover:ring-main`}
              >
                <Image
                  src={assetPath(src)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className={`${contain ? "object-contain object-center p-2.5" : "object-cover object-top"} transition-transform duration-300 group-hover:scale-105`}
                />
                <ThumbnailZoomBadge />
              </button>
            );
          })}
        </div>
      ))}
      <p className="w-full text-sm leading-6">{item.body}</p>
      {item.caseStudyHref && (
        <Link
          href={item.caseStudyHref}
          className="mt-2 flex min-h-11 w-fit items-center rounded-full bg-main px-5 py-2 text-xs font-bold tracking-wider text-white hover:opacity-90"
        >
          {item.caseStudyLabel ?? "詳細を見る"}
        </Link>
      )}
      {item.links?.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex min-h-11 w-fit items-center rounded-full bg-main px-5 py-2 text-xs font-bold tracking-wider text-white hover:opacity-90"
        >
          {link.label}
        </Link>
      ))}
    </article>
  );
}
