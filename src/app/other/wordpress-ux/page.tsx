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
    "エージェント比較サイトのWordPress管理画面を改修。ページ別の掲載設定、並べ替え、ランキングと比較表の連動機能を紹介します。",
};

const process = [
  [
    "ニーズの確認",
    "LPごとに掲載内容や順位を変えたいというご要望を確認しました。運用担当者の交代に合わせて、管理画面の操作方法も見直しました。",
  ],
  [
    "構造を調査",
    "投稿・分類・テンプレートと表示先の関係を調査しました。設定が複数の画面に分かれていたため、更新に必要な箇所を確認しました。",
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
    "掲載内容の選択、並べ替え、表示切り替えの操作を実装しました。設定項目の名称と説明文も変更しました。",
  ],
  [
    "動作と影響を検証",
    "保存後の表示や設定の切り替え、既存ページへの影響を確認。実際の更新作業を想定しながら細かな調整を重ねました。",
  ],
];

const decisions = [
  {
    label: "PAGE SETTINGS",
    title: "ページごとの掲載内容・順位の設定",
    body: "共通設定とは別に、ページ単位で表示内容や順番を指定できるようにしました。",
  },
  {
    label: "CONTEXT",
    title: "選択内容に応じた項目の表示",
    body: "選んだ内容に応じて、次に必要な選択肢だけを表示するようにしました。",
  },
  {
    label: "VISIBILITY",
    title: "設定項目と説明の見直し",
    body: "関連する設定をまとめ、項目名・説明・配置を見直しました。",
  },
  {
    label: "REVERSIBILITY",
    title: "連動を解除したときの設定保持",
    body: "設定を連動させている間も、それまで選んでいた内容は消さない設計にしました。",
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
          <h1 className="text-xl font-bold tracking-wider">
            WordPress管理画面のUI/UX改善
          </h1>
          <p className="mt-3 text-xs font-semibold tracking-wider text-muted">
            エージェント比較サイトの運用改善
          </p>
          <p className="mt-6 text-xs leading-5 md:text-base md:leading-6">
            ページごとにランキングを変更できるよう、管理画面を改修しました。
            既存の設定や入力データを残し、掲載内容の選択・並べ替え・比較表との連動機能を追加しています。
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

        <Chapter
          number="01"
          label="BEFORE / AFTER"
          title="改修前後の更新手順"
          intro="更新場所が複数に分かれ、どこを変更すると何に反映されるのか分かりにくい状態でした。"
        >
          <WordPressEditingFlow />
          <p className="mt-3 text-xs leading-6 text-ink/65">
            更新の流れを簡略化した図です。実際の管理画面とは異なります。
          </p>
        </Chapter>

        <Chapter
          number="02"
          label="PROCESS"
          title="調査・設計・実装の手順"
          intro="既存の設定とデータを確認し、管理画面の設計、実装、動作確認を行いました。"
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

        <Chapter number="03" label="UI DESIGN" title="管理画面の変更点">
          <div className="grid gap-4 md:grid-cols-2">
            {decisions.map((decision) => (
              <section
                key={decision.label}
                className="flex flex-col rounded-2xl bg-white p-5 md:p-7"
              >
                <p className="font-['Alata'] text-[10px] tracking-widest text-main">
                  {decision.label}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug">
                  {decision.title}
                </h3>
                <p className="my-3 text-sm leading-6 text-ink/80">
                  {decision.body}
                </p>
              </section>
            ))}
          </div>
        </Chapter>

        <Chapter
          number="04"
          label="DEMO"
          title="ランキングと比較表の連動デモ"
          intro="ランキングの掲載内容や順番を変更すると、比較表にも反映されます。下のデモで操作を試せます。"
        >
          <RankingSyncDemo />
        </Chapter>

        <Chapter
          number="05"
          label="RESULT"
          title="改修後の操作と運用担当者の感想"
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
                  ページごとに設定を集約
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-ink/80">
                編集するページから、掲載内容や順位を設定できる構成に変更しました。
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

                <h3 className="text-base font-semibold">既存データを保持</h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-ink/80">
                これまでの設定や入力内容を消さずに、必要な部分だけ変更できます。
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
                運用担当者から、実際の操作について感想をいただきました。
              </p>

              <p className="mt-1 font-['Alata'] text-[10px] tracking-widest text-white/80">
                USER FEEDBACK
              </p>
            </section>
          </div>
        </Chapter>

        <OtherLink />
      </article>
      <ContactCard />
    </PageShell>
  );
}
