import Image from "next/image";
import Link from "next/link";
import ContactCard from "@/components/ContactCard";
import SocialIcons from "@/components/SocialIcons";
import { services, policy } from "@/data/site";
import { works, thumbOf } from "@/data/works";

const sideNav = [
  { label: "Works", href: "/works" },
  { label: "Other", href: "/other" },
  { label: "Profile", href: "/profile" },
];

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-10 py-12 pl-3 pr-5 md:flex-row">
      {/* 左：署名＋ナビ（追従） */}
      <aside className="flex shrink-0 flex-col gap-8 md:sticky md:top-6 md:h-fit md:w-56">
        <div className="w-fit max-w-[220px]">
          <Image
            src="/images/signature.svg"
            alt="ami yaegashi"
            width={928}
            height={200}
            priority
            className="h-auto w-full"
          />
        </div>
        <nav className="flex flex-row gap-6 md:flex-col">
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
      <div className="flex flex-1 flex-col gap-10">
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-wider text-main">
            SERVICE
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="flex flex-col gap-2 rounded-2xl border-[0.5px] border-main bg-white p-6"
              >
                <h3 className="text-base font-bold tracking-[0.15rem]">
                  {s.en}
                </h3>
                <p className="text-sm leading-6">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Policy */}
        <section className="flex flex-col gap-3 rounded-2xl border-[0.5px] border-main bg-white p-8 md:p-12">
          <p className="text-2xl font-bold tracking-wider text-main">
            {policy.heading.toUpperCase()}
          </p>
          <h2 className="text-xl font-bold leading-relaxed tracking-wider md:text-2xl">
            {policy.statement}
          </h2>
          <p className="text-sm leading-6">{policy.body}</p>
        </section>

        {/* Works digest */}
        <section className="flex flex-col gap-4">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-bold tracking-wider text-main">
              WORKS
            </p>
            <Link
              href="/works"
              className="text-xs font-bold tracking-widest text-main hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {works.slice(0, 3).map((work) => {
              const cover = work.gallery[0]?.images[0]?.src;
              const thumb = cover ? thumbOf(cover) : undefined;
              return (
                <Link
                  key={work.slug}
                  href={`/works/${work.slug}`}
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
        </section>

        {/* About digest */}
        <section className="flex flex-col gap-4 rounded-2xl border-[0.5px] border-main bg-white p-8 md:p-10">
          <p className="text-2xl font-bold tracking-wider text-main">ABOUT</p>
          <h2 className="text-2xl font-bold tracking-wider">八重樫 亜実</h2>
          <p className="text-sm leading-6">
            桑沢デザイン研究所卒。
            Adobe
            CCを中心に、近年はFigmaを主に利用。WordPressのテーマ編集や軽微なコーディングも対応します。詳しい道具・経歴はプロフィールページへ。
          </p>
          <Link
            href="/profile"
            className="w-fit text-xs font-bold tracking-widest text-main hover:underline"
          >
            Profile を見る →
          </Link>
        </section>

        <ContactCard />
      </div>
    </main>
  );
}
