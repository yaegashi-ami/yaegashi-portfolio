import Link from "next/link";
import ContactCard from "@/components/ContactCard";
import SubNav from "@/components/SubNav";
import { otherItems } from "@/data/site";

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-[1100px] flex-1 flex-col gap-12 px-5 pb-12 pt-6">
      <SubNav />
      <div>
        <p className="text-sm font-bold tracking-[0.2rem] text-main">OTHER</p>
        <h1 className="mt-1 text-3xl font-bold tracking-wider">
          その他のアウトプット
        </h1>
        <p className="mt-2 text-sm leading-6 text-muted">
          受託制作のほかにも、手を動かして作ったもの置き場。
        </p>
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
            <h2 className="text-xl font-bold tracking-wider">{item.title}</h2>
            <p className="max-w-3xl text-sm leading-6">{item.body}</p>
            {item.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-xs font-bold tracking-widest text-main hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </article>
        ))}
      </div>

      <ContactCard />
    </main>
  );
}
