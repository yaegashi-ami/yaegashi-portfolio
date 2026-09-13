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

// トップページで表示したい画像リスト
export const heroImages = [
  { src: "/images/pinokio10.png" },
  { src: "/images/franny3.png" },
  { src: "/images/FADSTARt_Sticker_4.png" },
  { src: "/images/screenshot01.png" },
];
