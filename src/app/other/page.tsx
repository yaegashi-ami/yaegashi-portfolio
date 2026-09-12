"use client";

import Link from "next/link";
import ContactCard from "@/components/ContactCard";
import { useState } from "react";
import SubNav from "@/components/SubNav";
import { otherItems } from "@/data/site";

export default function Page() {
  const [modal, setModal] = useState<{
    src: string;
    imgs: string[];
  } | null>(null);

  const move = (dir: 1 | -1) => {
    setModal((m) => {
      if (!m) return m;
      const idx = m.imgs.indexOf(m.src);
      const next = (idx + dir + m.imgs.length) % m.imgs.length;
      return { ...m, src: m.imgs[next] };
    });
  };
  
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col gap-12 px-5 pb-12 pt-6">
      <SubNav />
      <div>
        <h2 className="text-3xl font-bold tracking-[0.2rem] text-main">Other</h2>
      </div>

      <div className="flex flex-col gap-4">
        {otherItems.map((item) => (
          <article
            key={item.title}
            className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_0_8px_rgba(0,0,0,0.05)] md:p-8"
          >
            <p className="text-xs font-bold tracking-widest text-main">
              {item.subtitle}
            </p>
            <h2 className="text-xl font-bold tracking-wider flex items-center">{item.image && (
              <img src={item.image} alt="" className="inline-block h-6 w-6 mr-2 object-cover" />
            )}{item.title}</h2>
            
            {/* 単体の画像がある場合
            {item.image && (
              <div className="my-2 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                <div
                  onClick={() => setActiveImage(item.image ?? null)}
                  className="group relative cursor-zoom-in overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] transition-all duration-300 hover:ring-2 hover:ring-main"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            )} */}

            {/* ギャラリー画像がある場合 */}
            {item.gallery?.map((gallery, galleryIndex) => (
              <div key={galleryIndex} className="my-2 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-4">
                {gallery.images.map((image, imgIndex) => {
                  const src = typeof image === "string" ? image : image.src;
                  return (
                    <div
                      key={imgIndex}
                      onClick={() =>
                        setModal({
                          src,
                          imgs: item.gallery.flatMap((g) =>
                            g.images.map((im) =>
                              typeof im === "string" ? im : im.src,
                            ),
                          ),
                        })
                      }
                      className="group relative cursor-zoom-in overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] transition-all duration-300 hover:ring-2 hover:ring-main"
                    >
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  );
                })}
              </div>
            ))}

            <p className="w-full text-sm leading-6">{item.body}</p>
            
            {item.links?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[1rem] pb-1 underline-offset-3 w-fit text-xs font-bold tracking-widest text-main hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </article>
        ))}
      </div>

      {/* 拡大表示用のモーダル */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div className="relative max-h-[90vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <img
              src={modal.src}
              alt="拡大画像"
              className="max-h-[85vh] max-w-[85vw] rounded-lg object-contain shadow-2xl"
            />
            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-2">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="前の画像"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-2xl leading-none text-white shadow-md transition-colors hover:opacity-90"
              >
                <span className="ms-outlined text-[24px] leading-none">
                  chevron_left
                </span>
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="次の画像"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-2xl leading-none text-white shadow-md transition-colors hover:opacity-90"
              >
                <span className="ms-outlined text-[24px] leading-none">
                  chevron_right
                </span>
              </button>
            </div>
            <p className="absolute right-0 -bottom-7 text-xs font-semibold tracking-widest text-white/80">
              {modal.imgs.indexOf(modal.src) + 1} / {modal.imgs.length}
            </p>
            <button
              onClick={() => setModal(null)}
              className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-md hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#32323c"
              >
                <path d="m177-120-57-57 184-183H200v-80h240v240h-80v-104L177-120Zm343-400v-240h80v104l183-184 57 57-184 183h104v80H520Z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <ContactCard />
    </main>
  );
}