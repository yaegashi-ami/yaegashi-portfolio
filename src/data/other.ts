export type OtherItem = {
  id?: string;
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  caseStudyHref?: string;
  caseStudyLabel?: string;
  gallery: {
    columns: number;
    images: { src: string }[];
  }[];
  links?: { label: string; href: string }[];
};

export const otherItems: OtherItem[] = [
  {
    id: "wordpress-ux",
    title: "WordPress管理画面のUI/UX改善",
    subtitle: "UI/UX・情報設計・WordPress",
    body: "エージェント比較サイトのWordPress管理画面を改修しました。ページごとに掲載内容と順位を設定できるようにし、ランキングと比較表の連動機能を追加しました。",
    gallery: [],
    caseStudyHref: "/other/wordpress-ux",
  },
  {
    id: "momiji",
    title: "momiji - 申請管理アプリ",
    subtitle: "UIデザイン・デザインシステム・プロトタイプ（自主制作）",
    body: "経費・発注・契約の申請を管理するアプリのUIを制作しました。カラー定義、共通パーツ、ダッシュボード、申請一覧のデザインとプロトタイプを作成しています。",
    gallery: [],
    caseStudyHref: "/other/momiji",
    caseStudyLabel: "デザインシステムを見る",
  },
  {
    id: "period",
    title: "period - 生理管理アプリ",
    subtitle: "UIデザイン・アプリ制作（自主制作）",
    body: "周期と予測をシンプルに記録する生理管理アプリ。本命・対抗、2つの開始日予測と、排卵予定日・生理前の時期を表示します。登録不要でブラウザから使えます。",
    gallery: [
      {
        columns:1,
        images: [
          { src: "/images/period-icon.png" },
          { src: "/images/period_sscreen2.png" },
          { src: "/images/period_sscreen4.png" },
          { src: "/images/period_sscreen1.png" },
        ],
      },
    ],
    caseStudyHref: "/other/period",
    caseStudyLabel: "periodの詳細を見る",
  },
  {
    title: "Now Playing Music - Retro Player",
    id: "now-playing-music",
    subtitle: "Chrome拡張機能",
    body: "YouTube MusicやSpotify、SoundCloudの再生中曲を、平成レトロなプレイヤーで常時表示する拡張機能。前・再生/停止・次ボタン、タブ移動、6色カラー、ドラッグ移動付き。デザイン/コーディング",
    image: "/images/icon128.png",
    gallery: [
      {
        columns: 1,
        images: [
          { src: "/images/screenshot01.png" },
          { src: "/images/screenshot02.png" },
          { src: "/images/screenshot03.png" },
          { src: "/images/screenshot04.png" },
        ],
      },
    ],
    links: [
      {
        label: "Chromeウェブストア",
        href: "https://chromewebstore.google.com/detail/now-playing-music-retro-p/holmmjmgkebncmfcigodefkneobbejbp",
      },
    ],
  },
  {
    title: "Tシャツ",
    subtitle: "original",
    body: "オリジナルデザインのTシャツを制作しました。友人からの依頼、もしくは自分用。",
    gallery: [
      {
        columns: 1,
        images: [
          { src: "/images/t-shirt_1.png" },
          { src: "/images/t-shirt_2.png" },
          { src: "/images/t-shirt_3.png" },
          { src: "/images/t-shirt_4.png" },
          { src: "/images/t-shirt_5.png" },
          { src: "/images/t-shirt_6.png" },
        ],
      },
    ],
  },
];
