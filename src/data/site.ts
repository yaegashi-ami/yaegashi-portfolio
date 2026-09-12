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
  {
    name: "GitHub",
    description: "このサイトやWordPressテーマ、拡張機能のコードの管理に利用",
    icon: "/images/icon-code.svg",
    image: "/images/GitHub_Invertocat_Black.svg",
    alt: "GitHub",
    startDate: "2024-05-01",
  },
  {
    name: "WordPress",
    description: "サイト更新が中心、ここ半年はテーマ編集も対応",
    icon: "/images/icon-code.svg",
    image: "/images/tools-WordPress.svg",
    alt: "WordPress",
    experienceText: "利用歴/2年",
  },
  {
    name: "RCMS",
    description: "過去案件のサイト更新で利用",
    icon: "/images/icon-code.svg",
    image: "/images/tools-RCMS.png",
    alt: "RCMS",
    experienceText: "利用歴/1年半",
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
  icon: string;
  body: string;
};

export const services: Strength[] = [
  {
    title: "WEBデザイン",
    en: "WEB DESIGN",
    icon: "web",
    body: "LP・バナー・UIデザインをFigma中心に制作。写真のレタッチやイラストも。\n使う人が迷わず、目的を達成できるデザインを心がけています。",
  },
  {
    title: "コーディング・運用",
    en: "CODING & OPERATION",
    icon: "code",
    body: "HTML/CSSのコーディング、WordPressテーマ編集・更新。\nFigmaを便利に使うプラグインの作成などをしています。",
  },
  {
    title: "DTP",
    en: "DTP",
    icon: "print",
    body: "チラシ・パンフレット・カード・ステッカー・ロゴなど。同人誌頒布経験あり。\n企画・印刷・納品まで一貫して対応できます。",
  },
];

export const policy = {
  heading: "Policy",
  statement: "任された範囲を、確実に、最後まで。",
  body: "紙でもwebでも、手を動かすのが好きです。まるっとでも、一部の作業だけでも。\n使う人のことを考えて作ります。納品して終わりにせず、更新や運用まで責任を持ちます。",
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
  gallery: {
    columns: number;
    images: { src: string }[];
  }[];
  links?: { label: string; href: string }[];
};

export const otherItems: OtherItem[] = [
  {
    title: "Now Playing Music - Retro Player",
    subtitle: "Chrome拡張機能",
    body: "YouTube MusicやSpotify、SoundCloudの再生中曲を、平成レトロなプレイヤーで常時表示する拡張機能。前・再生/停止・次ボタン、タブ移動、6色カラー、ドラッグ移動付き。デザイン/コーディング",
    image: "/images/icon128.png",
    gallery: [
      {
        columns: 1,
        images: [
          { src: "/images/screenshot01.png"},
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
          { src: "/images/t-shirt_1.png"},
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
