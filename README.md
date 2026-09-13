# Yaegashi Portfolio

## よく編集する場所

| 変更したいもの | ファイル |
| --- | --- |
| トップページの構成 | `src/app/page.tsx` |
| ニュースの文章・日付・リンク・カードの見た目 | `src/app/_components/NewsSection.tsx` |
| Service・Policyの文章、トップの作品サムネイル | `src/data/home.ts` |
| Profileのツール情報 | `src/data/profile.ts` |
| Otherの作品・画像・リンク | `src/data/other.ts` |
| Worksの作品情報・ギャラリー | `src/data/works.ts` |
| メール・Instagramの連絡先 | `src/data/contact.ts` |
| ナビゲーションの名前とリンク先 | `src/data/navigation.ts` |
| 作品詳細のタイトル・タグ・説明欄のレイアウト | `src/components/works/WorkInfo.tsx` |
| 作品詳細の縦スクロール画像枠 | `src/components/works/ScrollGallery.tsx` |
| 作品詳細の画面幅ごとの列数 | `src/components/works/galleryStyles.ts` |
| サイト共通の色・フォント・アニメーション | `src/app/globals.css` |
| ファビコン | `src/app/favicon.ico`（元画像は `favicon.png`） |

トップのAbout文とProfileの自己紹介文は内容が異なるため、それぞれのページで編集します。

## フォルダの役割

```text
src/
  app/                   ページとURL、サイト全体の設定
    _components/         トップページ専用の部品
    other/               /other
    profile/             /profile
    works/               /works
      [slug]/            作品詳細
      lp/[id]/           LP詳細
      pamphlet/[id]/     パンフレット詳細
  components/
    layout/              共通のページ枠、ナビ、連絡先
    ui/                  小さな表示部品
    works/               ギャラリー、冊子、LP表示の部品
    profile/             Profile用の部品
  data/                  掲載する文章・作品情報
  lib/                   共通の補助処理
  types/                 外部ライブラリの型定義
public/                  画像などの素材
```

`app` 内のフォルダ名はURLに対応しています。ページを追加するときは、そのフォルダに `page.tsx` を置きます。`_components` は部品用なのでURLにはなりません。

## ページごとのカスタム調整

下層ページの共通枠は `src/components/layout/PageShell.tsx` にあります。

```tsx
// 標準：左右20px、セクション間48px
<PageShell>...</PageShell>

// LP詳細：左右40pxを維持
<PageShell horizontalPadding="wide">...</PageShell>

// Works一覧：間隔をページ側で指定
<PageShell spacing="none">...</PageShell>
```

トップページは構成が異なるため専用の枠を使っています。各ページや部品にある `className`、画像の収まり方、冊子サイズなどは個別の調整として残しています。

共通化するのは同じ役割・同じ見た目の部分です。異なる見た目が必要な場合は、上記のような名前付きオプション、またはページ専用の部品で調整します。

ページ内に表示用の大きな `const` を置く代わりに、名前付きの部品を読み込む形にしています。たとえば作品詳細では `<WorkInfo work={work} />` と `<ScrollGallery group={scrollGroup} />` を並べます。文章・画像リストなどの固定データは `data` に、画面を組み立てる部品は `components` に置きます。選択中の画像など、操作に応じて変わる状態は、それを使うページ・部品に残します。

## 編集後の確認

```sh
npm run dev           # ローカルで表示
npm run format        # インデント・改行などを統一
npm run format:check  # 書式の確認
npm run lint          # コードの確認
npm run build         # 公開用ファイルの生成・型チェック
```

書式のルールは `.prettierrc.json` にあります。整形は余白・改行などを揃えるもので、色やサイズなどのデザイン値を統一するものではありません。

公開用のURL先頭 `/yaegashi-portfolio` は `next.config.ts` で指定しています。素材へのパスは、既存の `assetPath` を使ってこの設定に対応させます。
