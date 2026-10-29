import type { Metadata } from "next";
import Link from "next/link";
import ContactCard from "@/components/layout/ContactCard";
import PageShell from "@/components/layout/PageShell";
import RankingSyncDemo from "@/components/other/RankingSyncDemo";
import WorkResponsibilities from "@/components/works/WorkResponsibilities";

export const metadata: Metadata = {
  title: "WordPress管理画面のUI/UX改善 | AMI YAEGASHI PORTFOLIO",
  description:
    "サイトの更新担当者が使うWordPress管理画面を改修。画面設計から機能の実装・動作確認まで担当しました。操作デモを掲載しています。",
};

export default function Page() {
  return (
    <PageShell>
      <section className="flex flex-col gap-4">
        <Link
          href="/other#wordpress-ux"
          className="group flex w-fit items-center gap-2 text-2xl font-bold tracking-widest text-main"
        >
          <span aria-hidden="true" className="ms-fill text-[28px]">
            arrow_circle_left
          </span>
          <span className="font-['Alata'] group-hover:underline">
            Other Works
          </span>
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold tracking-wider">
            WordPress管理画面のUI/UX改善
          </h1>
          <p className="text-xs font-semibold tracking-wider text-muted">
            エージェント比較サイトの管理画面改修
          </p>
        </div>
      </section>

      <section aria-labelledby="demo-heading" className="flex flex-col gap-3">
        <h2 id="demo-heading" className="font-bold">
          ランキングを並べ替えると、比較表も更新
        </h2>
        <RankingSyncDemo />
        <p className="text-xs leading-5 text-muted">
          実装した機能を再現したデモです。画面と掲載データはサンプルです。
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="flex flex-col gap-3 rounded-2xl bg-white p-5 md:p-7">
          <h2 className="font-bold">改善したこと</h2>
          <p className="text-sm leading-6 text-muted">
            更新するたびに複数の設定画面を開いていたため、変更する場所が分かりにくい状態でした。必要な設定を、編集するページにまとめました。
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 marker:text-main">
            <li>掲載する会社の選択・並べ替えが、同じ画面でできます。</li>
            <li>
              ランキングと比較表を、別々に並べ替える必要がなくなりました。
            </li>
            <li>これまでの設定や入力内容も、そのまま使えます。</li>
          </ul>
        </section>

        <section className="flex flex-col gap-3 rounded-2xl bg-white p-5 md:p-7">
          <h2 className="font-bold">担当したこと</h2>
          <WorkResponsibilities
            items={["運用整理", "情報・UI設計", "実装・検証"]}
          />
          <p className="text-sm leading-6 text-muted">
            更新担当者の要望と既存のコード・設定を確認し、画面設計から機能の実装・動作確認まで担当しました。
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 marker:text-main">
            <li>作業に合わせて、設定項目の名前・説明・配置を見直し</li>
            <li>WordPressに掲載内容の選択・並べ替え・連動機能を追加</li>
          </ul>
          <p className="text-xs leading-5 text-muted">
            使用技術：WordPress / ACF / PHP
          </p>
        </section>
      </div>

      <ContactCard />
    </PageShell>
  );
}
