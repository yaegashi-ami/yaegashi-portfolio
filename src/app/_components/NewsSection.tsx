import Link from "next/link";

export default function NewsSection() {
  return (
    <section
      aria-labelledby="news-heading"
      className="flex flex-col gap-5 pb-5"
    >
      <h2
        id="news-heading"
        className="flex items-center gap-3 text-3xl font-bold tracking-wider text-main"
      >
        <span aria-hidden="true" className="ms-fill shrink-0 text-[30px]">
          campaign
        </span>
        <span>News</span>
      </h2>
      <ul className="flex w-full flex-col gap-3 text-sm leading-6">
        <li className="flex items-baseline justify-between gap-4 border-[0.5px] border-main bg-white px-5 py-2.5 shadow-[3px_3px_0] shadow-main/100 md:px-6">
          <span>ポートフォリオリニューアル</span>
          <span className="shrink-0 text-right tabular-nums text-muted">
            2026/9/12
          </span>
        </li>
        <li>
          <Link
            href="/other#now-playing-music"
            className="group flex items-baseline justify-between gap-4 border-[0.5px] border-main bg-white px-5 py-2.5 shadow-[3px_3px_0] shadow-main/100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-main md:px-6"
          >
            <span className="text-main">
              <span className="underline-offset-4 group-hover:underline">
                Chrome拡張機能公開
              </span>
              <span
                aria-hidden="true"
                className="ms-fill ml-1 align-middle text-[18px]"
              >
                north_east
              </span>
            </span>
            <span className="shrink-0 text-right tabular-nums text-muted">
              9/7
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
