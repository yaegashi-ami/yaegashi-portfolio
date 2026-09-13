import { flatImages, type GalleryGroup } from "@/data/works";
import { assetPath } from "@/lib/assetPath";

export default function ScrollGallery({ group }: { group: GalleryGroup }) {
  return (
    <section className="h-[70vh] overflow-y-auto rounded-2xl border-[0.5px] border-main bg-white">
      {flatImages(group.images).map((img) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={assetPath(img.src)}
          alt=""
          loading="lazy"
          className="h-auto w-full"
        />
      ))}
    </section>
  );
}
