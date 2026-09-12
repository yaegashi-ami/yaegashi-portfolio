import Image from "next/image";
import Link from "next/link";
import ContactCard from "@/components/ContactCard";
import SocialIcons from "@/components/SocialIcons";
import Splash from "@/components/Splash";
import { services, policy } from "@/data/site";
import { works, thumbOf, flatImages } from "@/data/works";

const sideNav = [
  { label: "Works", href: "/works" },
  { label: "Other", href: "/other" },
  { label: "Profile", href: "/profile" },
];

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-10 py-12 pl-10 pr-10 md:flex-row">
      {/* <Splash /> */}
      {/* 左：署名＋ナビ（追従） */}
      <aside className="flex shrink-0 flex-col gap-6 md:sticky md:top-6 md:h-fit md:w-56 font-['Alata']">
        <div className="w-fit max-w-[220px]">
          <h1 className="flex bg-main text-3xl font-bold tracking-widest text-white p-4">Yaegashi</h1>
        </div>
        <nav className="flex flex-row gap-4 md:flex-col">
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
        {/* Works digest */}
        <div className="flex flex-col gap-8">
          <section className="flex flex-col gap-4">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-bold tracking-wider text-main">
                Works
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {works.slice(0, 3).map((work) => {
                const cover = work.gallery[0]
                  ? flatImages(work.gallery[0].images)[0]?.src
                  : undefined;
                const thumb = cover ? thumbOf(cover) : undefined;
                return (
                  <Link
                    key={work.slug}
                    href="/works"
                    aria-label={work.title}
                    className="group block overflow-hidden rounded-xl border-[0.5px] border-main bg-white"
                    style={{ backgroundColor: work.bg }}
                  >
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt=""
                        width={600}
                        height={450}
                        className="aspect-[4/3] h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : null}
                  </Link>
                );
              })}
            </div>
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
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
                    </h3></section>
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
              桑沢デザイン研究所ビジュアルデザイン科卒。
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
    </main>
  );
}
