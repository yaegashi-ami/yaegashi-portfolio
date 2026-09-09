export type WorkLink = {
  slug: string;
  label: string;
  href: string;
};

export const workLinks: WorkLink[] = [
  { slug: "profile", label: "Profile", href: "/profile" },
  { slug: "pinokio", label: "写真館ピノキオ", href: "/works/pinokio" },
  { slug: "pinokio-web", label: "写真館ピノキオ-WEB", href: "/works/pinokio-web" },
  { slug: "franny", label: "ジャズと喫茶 Franny", href: "/works/franny" },
  { slug: "fadstart", label: "FAD STARt", href: "/works/fadstart" },
  { slug: "vivotree", label: "大泉障害者支援施設 VIVOtree", href: "/works/vivotree" },
  {
    slug: "panasonic-beauty",
    label: "Panasonic beauty",
    href: "/works/panasonic-beauty",
  },
  { slug: "cadet", label: "GARB pintino / cadet", href: "/works/cadet" },
  {
    slug: "competition",
    label: "コンペ作品-コーポレートサイト改修",
    href: "/works/competition",
  },
  { slug: "yaegashi", label: "自主制作", href: "/works/yaegashi" },
];

export type Tool = {
  name: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  /** 経験年数の起点。固定文言の場合は experienceText を使う */
  startDate?: string;
  experienceText?: string;
};

export const tools: Tool[] = [
  {
    name: "Adobe Illustrator",
    description: "DTP、ロゴ、バナー、素材などなどなんでも",
    icon: "/images/icon-design.svg",
    image: "/images/tools-Illustrator.svg",
    alt: "Illustrator",
    startDate: "2018-04-01",
  },
  {
    name: "Adobe Photoshop",
    description: "写真レタッチ、モックアップ作成で主に利用",
    icon: "/images/icon-design.svg",
    image: "/images/tools-Photoshop.svg",
    alt: "Photoshop",
    startDate: "2019-04-01",
  },
  {
    name: "Adobe PremierePro",
    description: "中高生向け授業映像の編集で利用",
    icon: "/images/icon-design.svg",
    image: "/images/tools-Premier Pro.svg",
    alt: "Premier Pro",
    experienceText: "利用歴/0.5年",
  },
  {
    name: "Adobe InDesign",
    description: "教材制作、社内報制作で利用",
    icon: "/images/icon-design.svg",
    image: "/images/tools-InDesign.svg",
    alt: "InDesign",
    experienceText: "利用歴/1年",
  },
  {
    name: "Adobe XD",
    description: "案件に合わせてXDを利用することも",
    icon: "/images/icon-design.svg",
    image: "/images/tools-Xd.svg",
    alt: "Xd",
    experienceText: "利用歴/1年",
  },
  {
    name: "Procreate",
    description: "ラフ、イラスト、キャラクター制作で利用",
    icon: "/images/icon-illust.svg",
    image: "/images/tools-procreate.svg",
    alt: "procreate",
    startDate: "2020-04-01",
  },
  {
    name: "Figma",
    description: "WEBデザインは主にFigma",
    icon: "/images/icon-design.svg",
    image: "/images/tools-Figma.svg",
    alt: "Figma",
    startDate: "2021-04-01",
  },
  {
    name: "VS Code",
    description: "コーディングは主にVS Codeを利用",
    icon: "/images/icon-code.svg",
    image: "/images/tools-VSCode.svg",
    alt: "VSCode",
    startDate: "2022-04-01",
  },
];

export type AppLink = { name: string; image: string };

export const taskApps: AppLink[] = [
  { name: "Atlassian JIRA", image: "/images/tools-app-atlassian.svg" },
  { name: "Trello", image: "/images/tools-app-trello.svg" },
  { name: "miro", image: "/images/tools-app-miro.svg" },
];

export const chatApps: AppLink[] = [
  { name: "chatwork", image: "/images/tools-app-chatwork.svg" },
  { name: "Microsoft Teams", image: "/images/tools-app-microsoft-teams.svg" },
  { name: "Slack", image: "/images/tools-app-slack.svg" },
];

export type Strength = {
  title: string;
  en: string;
  body: string;
};

/** できること3分割（u-d-l式。文言はたたき台） */
export const services: Strength[] = [
  {
    title: "WEBデザイン",
    en: "WEB DESIGN",
    body: "LP・バナー・SNS告知画像をFigma中心に制作。使う人が迷わない、目的を達成できるデザインを心がけています。",
  },
  {
    title: "コーディング・運用",
    en: "CODING & OPERATION",
    body: "HTML/CSSでのコーディング、WordPressテーマ編集、CMS更新、キャンペーンの運用更新。作ったあとの「回し続けるところ」までやります。Chrome拡張機能の自作・公開経験あり。",
  },
  {
    title: "DTP",
    en: "DTP",
    body: "チラシ・パンフレット・名刺・ショップカード・ステッカー・ロゴ。印刷・納品まで一貫して対応します。",
  },
];

/** 軸・ポリシー（たたき台） */
export const policy = {
  heading: "Policy",
  statement: "任された範囲を、確実に、最後まで。",
  body: "紙でもwebでも、手を動かすのが好きです。言われたものをそのまま作るのではなく、使う人のことを考えて作ります。納品して終わりにせず、更新や運用まで面倒を見ます。まるっとでも、一部の作業だけでも。声をかけてもらえたらうれしいです。",
};

/** 連絡先 */
export const contact = {
  instagram: {
    label: "Instagram",
    account: "@unagicoke",
    href: "https://www.instagram.com/unagicoke",
  },
  email: {
    label: "メール",
    account: "000097.info@gmail.com",
    href: "mailto:000097.info@gmail.com",
  },
};

export type OtherItem = {
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  links: { label: string; href: string }[];
};

/** Otherページ用（たたき台） */
export const otherItems: OtherItem[] = [
  {
    title: "Now Playing Music - Retro Player",
    subtitle: "Chrome拡張機能（自作・公開中）",
    body: "YouTube MusicやSpotify、SoundCloudの再生中曲を、平成レトロなプレイヤーで常時表示する拡張機能。前・再生/停止・次ボタン、タブ移動、6色カラー、ドラッグ移動付き。デザインもコードも自分で書いています。",
    links: [
      {
        label: "Chromeウェブストアで見る →",
        href: "https://chromewebstore.google.com/detail/now-playing-music-retro-p/holmmjmgkebncmfcigodefkneobbejbp",
      },
    ],
  },
];
