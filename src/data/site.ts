export type WorkLink = {
  slug: string;
  label: string;
  href: string;
};

export const workLinks: WorkLink[] = [
  { slug: "profile", label: "Profile", href: "/" },
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
