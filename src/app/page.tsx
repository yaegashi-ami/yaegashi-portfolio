"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "@/components/ContactCard";
import SocialIcons from "@/components/SocialIcons";
import { services, policy } from "@/data/site";
import GalleryCarousel from "@/components/GalleryCarousel";

const sideNav = [
  { label: "Works", href: "/works" },
  { label: "Other", href: "/other" },
  { label: "Profile", href: "/profile" },
];

/** 余白付き contain 表示するサムネ判定 */
const isContain = (src: string) =>
  src.startsWith("/images/FADSTARt_Sticker_") ||
  src.startsWith("/images/t-shirt") ||
  src.startsWith("/images/garbpintino") ||
  [
    "/images/franny1.png",
    "/images/franny2.png",
    "/images/franny3.png",
    "/images/franny4.png",
    "/images/vivotree0.png",
    "/images/vivotree1.png",
  ].includes(src);

export default function Page() {
  // モーダル管理用のステート（/works と同じ仕組み）
  const [modal, setModal] = useState<{
    src: string;
    imgs: string[];
  } | null>(null);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = (src: string, imgs: string[]) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setClosing(false);
    setModal({ src, imgs });
  };

  const closeModal = () => {
    if (closeTimer.current) return;
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setModal(null);
      setClosing(false);
      closeTimer.current = null;
    }, 200);
  };

  const move = (dir: 1 | -1) => {
    if (closing) return;
    setModal((m) => {
      if (!m) return m;
      const idx = m.imgs.indexOf(m.src);
      const next = (idx + dir + m.imgs.length) % m.imgs.length;
      return { ...m, src: m.imgs[next] };
    });
  };

  // トップページで表示したい画像リスト
  const heroImages = [
    { src: "/images/pinokio10.png" },
    { src: "/images/franny3.png" },
    { src: "/images/FADSTARt_Sticker_4.png" },
    { src: "/images/screenshot01.png" },
  ];

  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-10 py-12 pl-10 pr-10 md:flex-row">
      {/* 左：署名＋ナビ（追従） */}
      <aside className="flex shrink-0 flex-col gap-6 md:sticky md:top-6 md:h-fit md:w-56 font-['Alata']">
        <div className="w-fit max-w-[220px]">
          <h1 className="flex bg-main text-3xl font-bold tracking-widest text-white p-4">Yaegashi</h1>
        </div>
        <nav className="flex flex-row gap-4 md:flex-col pl-2">
          {sideNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-bold tracking-widest transition-colors hover:text-main"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <SocialIcons />
      </aside>

      {/* 右：中身 */}
      <div className="flex flex-1 flex-col gap-12">
        <div className="flex flex-col gap-8">
          {/* Works digest */}
          <section className="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_0_8px_rgba(0,0,0,0.05)] md:p-8">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-bold tracking-wider text-main">
                Works
              </h2>
            </div>
            {/* カルーセル表示 ＆ クリックで拡大モーダル連動 */}
            <GalleryCarousel
              items={heroImages.map((img) => ({
                src: img.src,
                contain: isContain(img.src),
              }))}
              onImageClick={(src) =>
                openModal(
                  src,
                  heroImages.map((i) => i.src)
                )
              }
            />
            <div className="flex justify-end group">
              <Link
                className="group w-full flex items-center w-fit text-md font-bold tracking-widest text-main justify-end underline-offset-2"
                href="/works"
              >
                <span className="group-hover:underline font-['Alata']">View all --&gt;</span>
              </Link>
            </div>
          </section>

          <section className="flex flex-col gap-4 whitespace-pre-line">
            <h2 className="text-3xl font-bold tracking-wider text-main flex items-center gap-1">
              Service<span className="text-ink text-xs pt-2 tracking-[0.05rem]">できること</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col gap-3 rounded-3xl bg-main p-6 text-white"
                >
                  <section className="grid items-center gap-3 grid-cols-[auto_1fr]">
                    <span
                      aria-hidden="true"
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-white"
                    >
                      <span className="ms-fill text-[32px] text-main">
                        {s.icon}
                      </span>
                    </span>
                    <h3 className="text-base font-bold tracking-[0.15rem] font-['Alata'] text-xl">
                      {s.en}
                    </h3>
                  </section>
                  <p className="text-sm leading-6 text-white/90">{s.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-4">
          {/* Policy */}
          <section className="flex flex-col gap-3 rounded-2xl border-[0.5px] border-main bg-white p-8 md:p-12">
            <h2 className="text-3xl font-bold tracking-wider text-main">
              {policy.heading}
            </h2>
            <p className="text-sm leading-6 whitespace-pre-line">{policy.body}</p>
          </section>
          {/* About digest */}
          <section className="flex flex-col gap-2 rounded-2xl border-[0.5px] border-main bg-white p-8 md:p-10">
            <h2 className="text-3xl font-bold tracking-wider text-main">About</h2>
            <h2 className="text-lg font-bold tracking-wider">八重樫 亜実</h2>
            <p className="text-sm leading-6">
              桑沢デザイン研究所ビジュアルデザイン科卒。<br />
              WEB、コーディング、DTPなど、デザインにまつわることをいろいろやってきました。<br />
              デザインからWordPressのテーマ編集、ちょっとしたコーディングまで、なんでも屋寄りのデザイナーです。
            </p>
            <Link
              className="group w-full flex items-center w-fit text-md font-bold tracking-widest text-main justify-end"
              href="/profile"
            >
              <span className="group-hover:underline font-['Alata']">Profile --&gt;</span>
            </Link>
          </section>
          <ContactCard />
        </div>
      </div>

      {/* 拡大モーダル表示部分（/works と同じ仕組み） */}
      {modal && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 ${closing
            ? "animate-[fade-out_0.2s_ease-in]"
            : "animate-[fade-in_0.2s_ease-out]"
            }`}
        >
          <div
            className={`relative max-h-[90vh] max-w-[50vw] ${closing
              ? "animate-[modal-out_0.2s_ease-in]"
              : "animate-[modal-in_0.25s_ease-out]"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={modal.src}
              src={modal.src}
              alt="拡大画像"
              className={`max-h-[85vh] max-w-[50vw] rounded-lg object-contain shadow-2xl ${closing
                ? "animate-[fade-out_0.15s_ease-in]"
                : "animate-[modal-img-in_0.25s_ease-out]"
                }`}
            />
            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-2 w-[130%] left-[-15%]">
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
              onClick={closeModal}
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
    </main>
  );
}