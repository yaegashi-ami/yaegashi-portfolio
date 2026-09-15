import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import ContactCard from "@/components/layout/ContactCard";
import PageShell from "@/components/layout/PageShell";
import RankingSyncDemo from "@/components/other/RankingSyncDemo";
import WordPressEditingFlow from "@/components/other/WordPressEditingFlow";

export const metadata: Metadata = {
  title: "WordPress管理画面のUI/UX改善 | AMI YAEGASHI PORTFOLIO",
  description:
    "エージェント比較サイトの管理画面を、更新する方が迷わず使えるように改善しました。調査から設計、実装、検証までをご紹介します。",
};

const process = [
  [
    "ニーズの確認",
    "LPごとに内容や順位を変えたい、というご要望を確認。運用者の交代もあり、非エンジニアの方でも扱いやすい形が必要だと分かりました。",
  ],
  [
    "構造を調査",
    "投稿・分類・テンプレートと表示先の関係を確認。設定が複数箇所に分かれ、更新時に迷いやすい構造になっていました。",
  ],
  [
    "既存データを整理",
    "現在使われている設定と不要な旧データを確認。既存のデータを残したまま、安全に変更できる範囲を整理しました。",
  ],
  [
    "設定方法を設計",
    "共通で使う設定とページごとの設定を分離。これまでの運用を保ちながら、必要な部分だけ変更できる構成を検討しました。",
  ],
  [
    "操作方法を調整",
    "選択・並べ替え・表示切り替えを中心に操作を整理。項目名や説明、配置も見直し、判断しやすい画面に整えました。",
  ],
  [
    "動作と影響を検証",
    "保存後の表示や設定の切り替え、既存ページへの影響を確認。実際の更新作業を想定しながら細かな調整を重ねました。",
  ],
];

const decisions = [
  {
    label: "PAGE SETTINGS",
    title: "必要なページだけ、個別に設定できるように。",
    body: "共通設定を残しながら、ページごとに表示内容や順番を変更できる仕組みにしました。",
    reason:
      "既存の運用を維持しつつ、必要な箇所だけ変更できる構成です。",
  },
  {
    label: "CONTEXT",
    title: "必要な選択肢だけを表示。",
    body: "設定内容に応じて、関連する選択肢だけが表示されるよう整理しました。",
    reason:
      "その場で必要な情報に絞り、判断しやすい状態にしています。",
  },
  {
    label: "VISIBILITY",
    title: "設定と表示の関係を分かりやすく。",
    body: "関連する設定をまとめ、項目名や説明、配置を見直しました。",
    reason:
      "操作と反映先の関係が追いやすい構成にしています。",
  },
  {
    label: "REVERSIBILITY",
    title: "いつでも元の設定に戻せるように。",
    body: "設定同士を連動させる場合も、それまでの選択内容は保持する設計にしました。",
    reason:
      "切り替え前の状態を保持し、いつでも戻せるようにしています。",
  },
];

function Chapter({
  number,
  label,
  title,
  intro,
  children,
}: {
  number: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={`chapter-${number}`}
      className="border-t border-ink/15 py-10 md:py-14"
    >
      <div className="mb-7 grid gap-3 md:grid-cols-[160px_1fr] md:gap-8">
        <p className="pt-1 font-['Alata'] text-[10px] tracking-widest text-main">
          {number} / {label}
        </p>
        <div>
          <h2
            id={`chapter-${number}`}
            className="text-xl font-bold leading-snug tracking-wide md:text-2xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink/75">
              {intro}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}

function OtherLink() {
  return (
    <Link
      href="/other#wordpress-ux"
      className="group flex w-fit items-center gap-2 text-2xl font-bold tracking-widest text-main"
    >
      <span aria-hidden="true" className="ms-fill text-[28px] text-main">
        arrow_circle_left
      </span>
      <span className="font-['Alata'] group-hover:underline">Other</span>
    </Link>
  );
}

export default function Page() {
  return (
    <PageShell>
      <article className="min-w-0">
        <OtherLink />

        <header className="pb-10 pt-8 md:pb-14 md:pt-10">
          <p className="text-xs font-bold tracking-widest text-main">
            WordPress管理画面のUI/UX改善
          </p>
          <h1 className="mt-5 text-[clamp(1.8rem,4.5vw,3rem)] font-bold leading-[1.35] tracking-wide">
            更新する方が迷わない、
            <br />
            <span className="text-main">管理画面に整えました。</span>
          </h1>
          <p className="mt-3 text-xs font-semibold tracking-wider text-muted">
            エージェント比較サイトの運用改善
          </p>
          <p className="mt-6 text-xs leading-5 md:text-base md:leading-6">
            「このページだけ、ランキングを変えたい」というご相談から、<br />
            既存の仕組みやデータを保ったまま、管理画面の構成と更新の流れを見直しました。
          </p>
          <p className="mt-5 text-xs leading-5">
            担当：運用整理 / 情報・UI設計 / 実装・検証
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {["WordPress", "ACF", "PHP", "Git"].map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-ink/20 bg-white px-2 py-0.5 text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </header>

        {/* <div className="mb-10 grid gap-3 rounded-2xl border border-main bg-white p-6 text-main md:mb-12 md:grid-cols-[0.8fr_auto_1.2fr] md:items-center md:gap-8 md:p-8">
          <p className="text-xl font-semibold leading-snug md:text-2xl">
            更新する方が、
            <br />
            迷わず使えるように。
          </p>
          <div
            aria-hidden="true"
            className="hidden self-stretch bg-main md:block md:w-[1px]" />
          <p className="text-sm leading-6 text-ink">
            既存の仕組みやデータをそのまま保ちながら、更新する方が迷わず使えるよう、
            設定と操作の流れを整理しました。
          </p>
        </div> */}

        <Chapter
          number="01"
          label="BEFORE / AFTER"
          title="更新場所が分かれ、変更の影響が見えにくい状態でした。"
          intro="設定が複数の場所に分かれており、内容を変更するにはサイトの仕組みを把握する必要がありました。"
        >
          <WordPressEditingFlow />
          <p className="mt-3 text-xs leading-6 text-ink/65">
            更新の流れを簡略化した図です。実際の管理画面とは異なります。
          </p>
        </Chapter>

        <Chapter
          number="02"
          label="PROCESS"
          title="実際の更新手順に沿って、少しずつ整えました。"
          intro="これまでの仕組みを活かしながら、実際の操作で感じる迷いや分かりづらさを一つずつ確認し、画面を調整していきました。"
        >
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(([title, body], index) => (
              <li key={title} className="rounded-xl bg-white p-5">
                <div className="flex items-center gap-2">
                  <span className="font-['Alata'] text-xl text-main">
                    0{index + 1}
                  </span>
                  <h3 className="text-sm font-semibold">{title}</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-ink/75">{body}</p>
              </li>
            ))}
          </ol>
        </Chapter>

        <Chapter
          number="03"
          label="UI DESIGN"
          title="迷わず使えるように、管理画面を見直しました。"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {decisions.map((decision) => (
              <section
                key={decision.label}
                className="flex flex-col rounded-2xl bg-white p-6 md:p-8"
              >
                <p className="font-['Alata'] text-[10px] tracking-widest text-main">
                  {decision.label}
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">
                  {decision.title}
                </h3>
                <p className="mb-5 mt-4 text-sm leading-6 text-ink/80">
                  {decision.body}
                </p>
                <p className="mt-auto border-t border-ink/10 pt-4 text-sm font-semibold leading-6 text-main">
                  {decision.reason}
                </p>
              </section>
            ))}
          </div>
        </Chapter>

        <Chapter
          number="04"
          label="DEMO"
          title="ランキングと比較表の連動を試せます。"
          intro="管理画面を直感的にする作業の一環で作成したパーツです。ランキングコンテナの内容がそのまま比較表に反映されます。"
        >
          <RankingSyncDemo />
        </Chapter>

        <Chapter
          number="05"
          label="RESULT"
          title="迷わず更新できる形に整いました。"
        >
          <div className="grid gap-3 md:grid-cols-3">
            <section className="rounded-2xl bg-white p-6">
              <div className="flex items-center gap-1">
                <span
                  aria-hidden="true"
                  className="ms-fill text-[30px] text-main"
                >
                  dashboard_customize
                </span>

                <h3 className="text-base font-semibold">
                  更新場所をまとめました
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-ink/80">
                必要な設定を、ひとつの編集画面から変更できるようになりました。
              </p>
            </section>

            <section className="rounded-2xl bg-white p-6">
              <div className="flex items-center gap-1">
                <span
                  aria-hidden="true"
                  className="ms-fill text-[30px] text-main"
                >
                  sync
                </span>

                <h3 className="text-base font-semibold">
                  既存データを保ったまま変更できます
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-ink/80">
                既存の設定を活かしながら、必要な部分だけ変更できるようにしました。
              </p>
            </section>

            <section className="rounded-2xl bg-main p-6 text-white">
              <div className="flex items-center gap-1">
                <span
                  aria-hidden="true"
                  className="ms-fill text-[30px] text-white"
                >
                  sentiment_satisfied
                </span>

                <h3 className="text-base font-semibold leading-snug">
                  「操作しやすい」
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-white/90">
                運用担当者から感想をいただき、実運用でも使いやすさを確認できました。
              </p>

              <p className="mt-1 font-['Alata'] text-[10px] tracking-widest text-white/80">
                USER FEEDBACK
              </p>
            </section>
          </div>
        </Chapter>

        <section className="border-t border-ink/15 py-10 md:py-14">
          <p className="font-['Alata'] text-[10px] tracking-widest text-main">
            TAKEAWAY
          </p>
          <h2 className="mt-4 text-xl font-bold leading-snug tracking-wider md:text-2xl">
            複雑な仕組みも、
            <br className="hidden sm:block" />
            使う人に合わせて整理します。
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/80">
            既存CMSの仕組みを読み解きながら、実際に更新する方の目線で情報と操作を整理しました。既存の仕組みやデータを保ちながら、使う方にとって分かりやすい形へ整えることを大切にしています。          </p>
        </section>

        <OtherLink />
      </article>
      <ContactCard />
    </PageShell>
  );
}
