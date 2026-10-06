import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import ContactCard from "@/components/layout/ContactCard";
import MomijiBoard from "@/components/other/MomijiBoard";

export const metadata: Metadata = {
  title: "momiji - 申請管理アプリ | AMI YAEGASHI PORTFOLIO",
  description:
    "申請管理アプリmomijiのUIデザイン。カラー定義、共通パーツ、ダッシュボード、申請一覧を掲載しています。",
};
export default function MomijiPage() {
  return (
    <PageShell>
      <section className="flex flex-col gap-4">
        <Link
          href="/other#momiji"
          className="group flex w-fit items-center gap-2 text-2xl font-bold tracking-widest text-main"
        >
          <span aria-hidden="true" className="ms-fill text-[28px]">
            arrow_circle_left
          </span>
          <span className="font-['Alata'] group-hover:underline">Other</span>
        </Link>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold tracking-wider">
            momiji - 申請管理アプリ
          </h1>
          <p className="text-xs font-semibold tracking-wider text-muted">
            UIデザイン・デザインシステム・プロトタイプ（自主制作）
          </p>
        </div>
        <p className="max-w-3xl text-sm leading-6">
          経費・発注・契約の申請を管理するアプリのUIを制作しました。カラーと文字サイズを定義し、ボタンや入力欄などの共通パーツ、ダッシュボード、申請一覧を作成しています。
        </p>
      </section>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap"
      />
      <MomijiBoard />
      <section className="grid gap-4 border-t border-ink/15 pt-8 md:grid-cols-3">
        <div className="flex flex-col rounded-2xl bg-white p-5 md:p-7">
          <p className="mb-3 text-xs tracking-widest text-[#fc575e]">
            01 / COLOR & TOKENS
          </p>
          <h2 className="mb-3 font-bold">カラー定義</h2>
          <p className="text-sm leading-6 text-muted">
            メインカラーのmomijiと、文字・背景・罫線に使うinkの色を定義。実装でも同じカラー定義を使っています。
          </p>
        </div>
        <div className="flex flex-col rounded-2xl bg-white p-5 md:p-7">
          <p className="mb-3 text-xs tracking-widest text-[#fc575e]">
            02 / COMPONENTS
          </p>
          <h2 className="mb-3 font-bold">共通パーツと表示状態</h2>
          <p className="text-sm leading-6 text-muted">
            ボタン、入力欄、チェックボックスなどを共通パーツとして作成。選択中や操作できない状態の見た目も設定しました。
          </p>
        </div>
        <div className="flex flex-col rounded-2xl bg-white p-5 md:p-7">
          <p className="mb-3 text-xs tracking-widest text-[#fc575e]">
            03 / SCREENS
          </p>
          <h2 className="mb-3 font-bold">ダッシュボード・申請一覧</h2>
          <p className="text-sm leading-6 text-muted">
            ダッシュボードには申請作成、最近の申請、新着情報を配置。申請一覧では検索・絞り込み・並べ替えを実装しました。
          </p>
        </div>
      </section>
      <p className="text-xs leading-6 text-muted">
        掲載画面はプロトタイプです。表示データはサンプルです。
      </p>
      <ContactCard />
    </PageShell>
  );
}
