export type WorkTag = {
  label: string;
  kind: "web" | "dtp" | "illust" | "date";
};

export const itemTags = [
  "フライヤー・ポスター・DTP",
  "LP",
  "パンフレット",
  "ロゴ",
  "カード",
  "ステッカー",
  "イラスト",
  "Tシャツ",
  "WEBサイト",
  "バナー",
] as const;

export type ItemTag = (typeof itemTags)[number];

export type GalleryImage = {
  src: string;
  item: ItemTag;
};

export type GalleryGroup = {
  images: GalleryImage[];
  columns: 1 | 2 | 3 | 4;
};

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  tags: WorkTag[];
  description: string[];
  links?: { label: string; href: string }[];
  gallery: GalleryGroup[];
  /** 右ペインの背景色（旧CSSのテーマ色を踏襲） */
  bg: string;
  padded?: boolean;
};

export const works: Work[] = [
  {
    slug: "pinokio",
    title: "写真館ピノキオ",
    subtitle: "パンフレット/リーフレット/バナー/HP/LP/コーディング/instagram etc.",
    tags: [
      { label: "WEB", kind: "web" },
      { label: "DTP", kind: "dtp" },
      { label: "illust", kind: "illust" },
      { label: "2022-2023", kind: "date" },
    ],
    description: [
      "キャンペーンごとに写真のレタッチや加工、LP制作、バナーやポスターの制作、印刷までを一貫して担当していました。加えて、新サービスや店舗のチラシ、季節のDM、パンフレット、Instagramでの告知画像の制作をしていました。",
    ],
    links: [
      { label: "キャンペーンページの詳細はこちら", href: "/works/pinokio-web" },
      { label: "https://www.pinokio.co.jp", href: "https://www.pinokio.co.jp" },
    ],
    gallery: [
      {
        columns: 3,
        images: [
          { src: "/images/pinokio1.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio2.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio3.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio4.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio5.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio6.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio7.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio8.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio9.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio10.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/pinokio11.png", item: "バナー" },
          { src: "/images/pinokio12.png", item: "フライヤー・ポスター・DTP" },
        ],
      },
      {
        columns: 4,
        images: [
          { src: "/images/pinokio-book1.png", item: "パンフレット" },
          { src: "/images/pinokio-book2.png", item: "パンフレット" },
          { src: "/images/pinokio-book3.png", item: "パンフレット" },
          { src: "/images/pinokio-book4.png", item: "パンフレット" },
          { src: "/images/pinokio-book5.png", item: "パンフレット" },
          { src: "/images/pinokio-book6.png", item: "パンフレット" },
          { src: "/images/pinokio-book7.png", item: "パンフレット" },
          { src: "/images/pinokio-book8.png", item: "パンフレット" },
          { src: "/images/pinokio-book9.png", item: "パンフレット" },
          { src: "/images/pinokio-book10.png", item: "パンフレット" },
          { src: "/images/pinokio-book11.png", item: "パンフレット" },
          { src: "/images/pinokio-book12.png", item: "パンフレット" },
          { src: "/images/pinokio-book13.png", item: "パンフレット" },
          { src: "/images/pinokio-book14.png", item: "パンフレット" },
          { src: "/images/pinokio-book15.png", item: "パンフレット" },
          { src: "/images/pinokio-book16.png", item: "パンフレット" },
        ],
      },
    ],
    bg: "#C4B49D",
  },
  {
    slug: "pinokio-web",
    title: "写真館ピノキオ-WEB",
    subtitle: "LP/コーディング/バナー/CMS",
    tags: [
      { label: "WEB", kind: "web" },
      { label: "2022-2023", kind: "date" },
    ],
    description: [
      "キャンペーンページのデザイン、コーディング、CMSでの更新、キャンペーンページ管理を一貫して行なっておりました。※サイトリニューアルやキャンペーン終了などの理由でサイト自体も残っていない状態のため、各URLは掲載できておりません。",
    ],
    links: [{ label: "https://www.pinokio.co.jp", href: "https://www.pinokio.co.jp" }],
    gallery: [
      {
        columns: 4,
        images: [
          { src: "/images/lp_furisode-lental@2x.png", item: "LP" },
          { src: "/images/lp_w-seijin@2x.png", item: "LP" },
          { src: "/images/lp_furisode@2x.png", item: "LP" },
          { src: "/images/lp_family@2x.png", item: "LP" },
        ],
      },
    ],
    bg: "#eedacf",
  },
  {
    slug: "franny",
    title: "ジャズと喫茶 Franny",
    subtitle: "ロゴデザイン/instagram告知画像/ショップカード/フライヤー/ステッカー",
    tags: [
      { label: "WEB", kind: "web" },
      { label: "DTP", kind: "dtp" },
      { label: "illust", kind: "illust" },
      { label: "2022-", kind: "date" },
    ],
    description: [
      "五線譜と喫茶店のテーブルのコーナーをイメージしたロゴを制作しました。開店後にステッカーの依頼を受け、お店の雰囲気に合うようモチーフやカラーの相談を重ね、ラフな雰囲気のステッカーを制作しました。初イベントのフライヤー制作も任せていただきました。爽やかな色合いと謎めいたイラストで目を引くようにデザインしました。",
    ],
    links: [
      {
        label: "ジャズと喫茶franny-instagram",
        href: "https://www.instagram.com/jazztokissafranny/",
      },
    ],
    gallery: [
      {
        columns: 2,
        images: [
          { src: "/images/franny1.png", item: "ロゴ" },
          { src: "/images/franny2.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/franny3.png", item: "カード" },
          { src: "/images/franny4.png", item: "ステッカー" },
          { src: "/images/franny5.png", item: "フライヤー・ポスター・DTP" },
        ],
      },
    ],
    bg: "#3b5362",
    padded: true,
  },
  {
    slug: "fadstart",
    title: "FAD STARt",
    subtitle: "ステッカー/イラスト/キャラクターデザイン",
    tags: [
      { label: "DTP", kind: "dtp" },
      { label: "illust", kind: "illust" },
      { label: "2024-", kind: "date" },
    ],
    description: [
      "ジャズと喫茶franny様での制作物を見て、ステッカーデザインのご依頼をいただきました。Jimnyのリペアやカスタムなどを行っている自動車整備工場で、デモ車の資料を頂いてイラストを描き起こしました。ポップ、アメリカン、ビンテージ、モダン、標識風など様々なテイストのデザイン案から相談と調整を重ねて選んでいただきました。追加でキャラクターデザインの依頼を頂き、鋭意制作中です。",
    ],
    gallery: [
      {
        columns: 2,
        images: [
          { src: "/images/FADSTARt_Sticker_5.png", item: "ステッカー" },
          { src: "/images/FADSTARt_Sticker_2.png", item: "ステッカー" },
          { src: "/images/FADSTARt_Sticker_1.png", item: "ステッカー" },
          { src: "/images/FADSTARt_Sticker_4.png", item: "ステッカー" },
          { src: "/images/FADSTARt_Sticker_3.png", item: "ステッカー" },
          { src: "/images/FADSTARt_Sticker_6.png", item: "ステッカー" },
        ],
      },
    ],
    bg: "#C4B7A5",
    padded: true,
  },
  {
    slug: "vivotree",
    title: "大泉障害者支援施設 VIVOtree",
    subtitle: "ロゴタイポグラフィ/ロゴカラーリング/パンフレット/キャラクターデザイン",
    tags: [
      { label: "DTP", kind: "dtp" },
      { label: "illust", kind: "illust" },
      { label: "2021-2022", kind: "date" },
    ],
    description: [
      "vivo treeには、様々な種類の図形が相愛しあうことですばらしい力が発揮できるという意味が込められています。vivoは音楽用語で「生き生きした」を意味しており、個性的で元気な利用者さんの雰囲気をイメージしています。",
      "メインロゴの他に施設内の部屋、併設カフェ、水耕栽培で仕様するためにカラーバリエーションを作成しました。色覚特性に配慮しつつ、活動的な印象になるよう作成しました。",
    ],
    gallery: [
      {
        columns: 1,
        images: [
          { src: "/images/vivotree1.png", item: "ロゴ" },
          { src: "/images/vivotree2.png", item: "パンフレット" },
          { src: "/images/vivotree3.png", item: "パンフレット" },
          { src: "/images/vivotree4.png", item: "パンフレット" },
          { src: "/images/vivotree5.png", item: "パンフレット" },
        ],
      },
    ],
    bg: "#ADD0C9",
  },
  {
    slug: "panasonic-beauty",
    title: "Panasonic beauty",
    subtitle: "ファサード/イラスト/カラーリング/アシスタント",
    tags: [
      { label: "DTP", kind: "dtp" },
      { label: "illust", kind: "illust" },
      { label: "2021-2022", kind: "date" },
    ],
    description: [
      "主にカラーリング調整、商品イラストの作成、その他イラスト素材の作成を担当しました。メインイラストに合わせたイラストの作成ということで、馴染むように、可愛さを底上げできるようにイラストを作成しました。また単調にならず、うるさくならないようバランスを取りながら制作しました。",
    ],
    gallery: [
      {
        columns: 3,
        images: [
          { src: "/images/panasonicbeauty1.png", item: "イラスト" },
          { src: "/images/panasonicbeauty2.png", item: "イラスト" },
          { src: "/images/panasonicbeauty6.png", item: "イラスト" },
          { src: "/images/panasonicbeauty7.png", item: "イラスト" },
        ],
      },
      {
        columns: 3,
        images: [
          { src: "/images/panasonicbeauty3.png", item: "イラスト" },
          { src: "/images/panasonicbeauty4.png", item: "イラスト" },
          { src: "/images/panasonicbeauty5.png", item: "イラスト" },
        ],
      },
    ],
    bg: "#F0D9D9",
  },
  {
    slug: "cadet",
    title: "GARB pintino / cadet",
    subtitle: "ショップカードデザイン/名刺デザイン/チラシ",
    tags: [
      { label: "DTP", kind: "dtp" },
      { label: "2021", kind: "date" },
    ],
    description: [
      "ショップカードのデザイン、名刺のデザインを担当しました。カジュアルにフレンチを楽しむことが出来るお店なので、ロゴに使われている松ぼっくりのシルエットで親しみやすさを押し出しました。",
      "忘新年会のフライヤーはゴールドカラーを基調にして安っぽさが出ないようにしつつ、ポップな雰囲気でお手頃価格で楽しめることが伝わるようデザインしました。",
    ],
    gallery: [
      {
        columns: 2,
        images: [
          { src: "/images/garbpintino5.png", item: "フライヤー・ポスター・DTP" },
          { src: "/images/garbpintino3.png", item: "カード" },
          { src: "/images/garbpintino4.png", item: "カード" },
          { src: "/images/garbpintino1.png", item: "カード" },
          { src: "/images/garbpintino2.png", item: "カード" },
        ],
      },
    ],
    bg: "#BEC0C3",
  },
  {
    slug: "competition",
    title: "Sokoage",
    subtitle: "コーポレートサイト改修",
    tags: [
      { label: "WEB", kind: "web" },
      { label: "2025", kind: "date" },
    ],
    description: [
      "コーポレートサイトのリデザインコンペに参加しました。工務店とマルチな制作という組み合わせを表現するため、ポップでありながら規則性の強いデザインに仕上げました。特にファーストビューではロゴマークを模ったパネルを浮遊させることで、軽やかで先進的な雰囲気を演出しました。",
    ],
    gallery: [
      {
        columns: 1,
        images: [{ src: "/images/socoage_top.png", item: "WEBサイト" }],
      },
    ],
    bg: "lightsteelblue",
  },
  {
    slug: "yaegashi",
    title: "自主制作",
    subtitle: "Tシャツデザイン/イラスト/グラフィック制作",
    tags: [{ label: "illust", kind: "illust" }],
    description: [],
    gallery: [
      {
        columns: 2,
        images: [
          { src: "/images/t-shirt_1.png", item: "Tシャツ" },
          { src: "/images/t-shirt_2.png", item: "Tシャツ" },
          { src: "/images/t-shirt_3.png", item: "Tシャツ" },
          { src: "/images/t-shirt_4.png", item: "Tシャツ" },
          { src: "/images/t-shirt_5.png", item: "Tシャツ" },
          { src: "/images/t-shirt_6.png", item: "Tシャツ" },
        ],
      },
    ],
    bg: "#3b5362",
    padded: true,
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

/** カード表示用の軽量サムネパス（*-thumb.jpg） */
export function thumbOf(src: string): string {
  return src.replace(/\.[^.]+$/, "-thumb.jpg");
}

export type LPDetail = {
  id: string;
  src: string;
  title: string;
  client: string;
  description: string[];
  /** カンプ（タブ切替で表示） */
  comp?: { src: string; label: string };
};

/** LP個別ページ用（タイトル・説明はたたき。本人修正前提） */
export const lpDetails: LPDetail[] = [
  {
    id: "furisode-rental",
    src: "/images/lp_furisode-lental@2x.png",
    title: "振袖レンタル キャンペーンLP",
    client: "写真館ピノキオ",
    description: [
      "振袖レンタルのキャンペーンページ。\nデザイン・コーディング・CMS更新まで一貫して担当。",
    ],
    comp: {
      src: "/images/lp_furisode-rental-wf@2x.png",
      label: "カンプ",
    },
  },
  {
    id: "w-seijin",
    src: "/images/lp_w-seijin@2x.png",
    title: "成人式 WキャンペーンLP",
    client: "写真館ピノキオ",
    description: [
      "成人式向けキャンペーンページ。デザイン・コーディング・CMS更新まで一貫して担当。（説明文たたき）",
    ],
  },
  {
    id: "furisode",
    src: "/images/lp_furisode@2x.png",
    title: "振袖 キャンペーンLP",
    client: "写真館ピノキオ",
    description: [
      "振袖のキャンペーンページ。デザイン・コーディング・CMS更新まで一貫して担当。（説明文たたき）",
    ],
  },
  {
    id: "family",
    src: "/images/lp_family@2x.png",
    title: "ファミリー キャンペーンLP",
    client: "写真館ピノキオ",
    description: [
      "ファミリー向けキャンペーンページ。デザイン・コーディング・CMS更新まで一貫して担当。（説明文たたき）",
    ],
  },
];

export function getLPDetail(id: string): LPDetail | undefined {
  return lpDetails.find((d) => d.id === id);
}

/** 一覧・マソナリーに出さない画像（カンプ等） */
export const hiddenItemSrcs: string[] = lpDetails.flatMap((d) =>
  d.comp ? [d.comp.src] : [],
);
