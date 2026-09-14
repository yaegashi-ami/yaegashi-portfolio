export type OtherItem = {
  id?: string;
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  caseStudyHref?: string;
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
    body: "エージェント比較サイトの管理画面を、更新する方が迷わず使えるように改善しました。ページごとに表示内容を選び、並べ替えや表示切り替えまで行えるようにしています。",
    gallery: [],
    caseStudyHref: "/other/wordpress-ux",
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
