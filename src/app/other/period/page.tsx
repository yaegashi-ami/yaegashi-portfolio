import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import ContactCard from "@/components/layout/ContactCard";
import PeriodPreview from "@/components/other/PeriodPreview";

export const metadata: Metadata = {
  title: "period - 生理管理アプリ | AMI YAEGASHI PORTFOLIO",
  description:
    "生理や体調をシンプルに管理するために制作したperiod。予測できない不安を減らしつつ、余計な情報を入れない設計にしました。",
};
const decisions = [
  {
    title: "本命・対抗、2つの開始日予測",
    points: [
      "普段の周期をもとにした目安",
      "直近の体調による周期の変化も考える",
    ],
    body: "予定日に始まらないときも、別の目安を確認できるようにしたいという考えから2つの開始予測日を表示させました。",
  },
  {
    title: "排卵予定日・生理前の時期も表示",
    points: ["PMSが出やすい時期を確認", "排卵予定日を確認し、排卵痛に備える"],
    body: "気持ちが落ち着かないときに「PMSの時期かも」と考え、過ごし方を見直すきっかけに。非表示に設定できます。",
  },
];
export default function PeriodPage() {
  return (
    <PageShell>
      <section className="flex flex-col gap-4">
        <Link
          href="/other#period"
          className="group flex w-fit items-center gap-2 text-2xl font-bold tracking-widest text-main"
        >
          <span aria-hidden="true" className="ms-fill text-[28px]">
            arrow_circle_left
          </span>
          <span className="font-['Alata'] group-hover:underline">Other</span>
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold tracking-wider">
            period - 生理管理アプリ
          </h1>
          <p className="text-xs font-semibold tracking-wider text-muted">
            UIデザイン・アプリ制作
          </p>
        </div>
      </section>
      <section className="rounded-2xl bg-white p-5 md:p-7">
        <h2 className="mb-3 font-bold">制作のきっかけ</h2>
        <p className="mb-3 text-sm leading-6 text-muted">
          体調管理や薬、生理用品の準備のために、記録と予定の確認に絞ったアプリを作りました。
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm leading-6 marker:text-[#937bff]">
          <li>アドバイスやコラムなしで、シンプルに管理したい</li>
          <li>予定日に生理が始まらないときの不安を減らしたい</li>
          <li>PMSや排卵痛に備えて、体調の目安を確認したい</li>
        </ul>
      </section>
      <PeriodPreview />
      <section aria-label="periodの機能" className="grid gap-4 md:grid-cols-2">
        {decisions.map((item) => (
          <section
            key={item.title}
            className="flex flex-col rounded-2xl bg-white p-5 md:p-7"
          >
            <h2 className="mb-3 font-bold">{item.title}</h2>
            <ul className="mb-3 list-disc space-y-1 pl-5 text-sm leading-6 marker:text-[#937bff]">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="text-sm leading-6 text-muted">{item.body}</p>
          </section>
        ))}
      </section>
      <section className="grid gap-4 border-t border-ink/15 pt-8 md:grid-cols-3">
        <div className="flex flex-col rounded-2xl bg-white p-5 md:p-7">
          <p className="mb-3 text-xs tracking-widest text-[#937bff]">
            01 / DATA
          </p>
          <h2 className="mb-3 font-bold">記録は端末内に保存</h2>
          <p className="text-sm leading-6 text-muted">
            生理や体調の記録は、利用しているブラウザ内に保存します。記録を管理するためのアカウント登録は不要です。
          </p>
        </div>
        <div className="flex flex-col rounded-2xl bg-white p-5 md:p-7">
          <p className="mb-3 text-xs tracking-widest text-[#937bff]">
            02 / INSTALL
          </p>
          <h2 className="mb-3 font-bold">ホーム画面から使える</h2>
          <p className="text-sm leading-6 text-muted">
            ブラウザからスマートフォンにインストールして、ホーム画面から開けます。記録したいときに、アプリとしてすぐに使えるようにしました。
          </p>
        </div>
        <div className="flex flex-col rounded-2xl bg-white p-5 md:p-7">
          <p className="mb-3 text-xs tracking-widest text-[#937bff]">
            03 / BACKUP
          </p>
          <h2 className="mb-3 font-bold">記録を書き出して引き継ぐ</h2>
          <p className="text-sm leading-6 text-muted">
            記録をエクスポートして、手元に保管できます。ブラウザや端末を変えるときは、保存したデータをインポートして引き継げます。
          </p>
        </div>
      </section>
      <p className="text-xs leading-6 text-muted">
        各予定日・時期の表示は目安であり、症状の原因を判定するものではありません。
      </p>
      <ContactCard />
    </PageShell>
  );
}
