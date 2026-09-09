export type WorkTag = {
  label: string;
  kind: "web" | "dtp" | "illust" | "date";
};

export type GalleryGroup = {
  images: string[];
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
          "/images/pinokio1.png",
          "/images/pinokio2.png",
          "/images/pinokio3.png",
          "/images/pinokio4.png",
          "/images/pinokio5.png",
          "/images/pinokio6.png",
          "/images/pinokio7.png",
          "/images/pinokio8.png",
          "/images/pinokio9.png",
          "/images/pinokio10.png",
          "/images/pinokio11.png",
          "/images/pinokio12.png",
        ],
      },
      {
        columns: 4,
        images: [
          "/images/pinokio-book1.png",
          "/images/pinokio-book2.png",
          "/images/pinokio-book3.png",
          "/images/pinokio-book4.png",
          "/images/pinokio-book5.png",
          "/images/pinokio-book6.png",
          "/images/pinokio-book7.png",
          "/images/pinokio-book8.png",
          "/images/pinokio-book9.png",
          "/images/pinokio-book10.png",
          "/images/pinokio-book11.png",
          "/images/pinokio-book12.png",
          "/images/pinokio-book13.png",
          "/images/pinokio-book14.png",
          "/images/pinokio-book15.png",
          "/images/pinokio-book16.png",
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
          "/images/lp_furisode-lental@2x.png",
          "/images/lp_w-seijin@2x.png",
          "/images/lp_furisode@2x.png",
          "/images/lp_family@2x.png",
          "/images/lp_furisode-rental-wf@2x.png",
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
          "/images/franny1.png",
          "/images/franny2.png",
          "/images/franny3.png",
          "/images/franny4.png",
          "/images/franny5.png",
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
          "/images/FADSTARt_Sticker_5.png",
          "/images/FADSTARt_Sticker_2.png",
          "/images/FADSTARt_Sticker_1.png",
          "/images/FADSTARt_Sticker_4.png",
          "/images/FADSTARt_Sticker_3.png",
          "/images/FADSTARt_Sticker_6.png",
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
          "/images/vivotree1.png",
          "/images/vivotree2.png",
          "/images/vivotree3.png",
          "/images/vivotree4.png",
          "/images/vivotree5.png",
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
          "/images/panasonicbeauty1.png",
          "/images/panasonicbeauty2.png",
          "/images/panasonicbeauty6.png",
          "/images/panasonicbeauty7.png",
        ],
      },
      {
        columns: 3,
        images: [
          "/images/panasonicbeauty3.png",
          "/images/panasonicbeauty4.png",
          "/images/panasonicbeauty5.png",
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
          "/images/garbpintino5.png",
          "/images/garbpintino3.png",
          "/images/garbpintino4.png",
          "/images/garbpintino1.png",
          "/images/garbpintino2.png",
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
    gallery: [{ columns: 1, images: ["/images/socoage_top.png"] }],
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
          "/images/t-shirt_1.png",
          "/images/t-shirt_2.png",
          "/images/t-shirt_3.png",
          "/images/t-shirt_4.png",
          "/images/t-shirt_5.png",
          "/images/t-shirt_6.png",
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
