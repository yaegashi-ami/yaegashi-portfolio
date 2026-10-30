import { otherItems, type OtherItem } from "./other";
import { works, type Work, type WorkTag, type ItemTag } from "./works";

export type PortfolioWork = Work & {
  overview?: OtherItem;
  itemCategory?: ItemTag;
};

const categories: Record<string, { tags: WorkTag[]; item: ItemTag }> = {
  momiji: { tags: [{ label: "UI/UX", kind: "uiux" }], item: "UI/UX" },
  period: {
    tags: [
      { label: "UI/UX", kind: "uiux" },
      { label: "アプリ", kind: "app" },
    ],
    item: "アプリ",
  },
  "wordpress-ux": {
    tags: [
      { label: "WEB", kind: "web" },
      { label: "UI/UX", kind: "uiux" },
    ],
    item: "UI/UX",
  },
  "now-playing-music": {
    tags: [{ label: "アプリ", kind: "app" }],
    item: "アプリ",
  },
  "t-shirts": {
    tags: [
      { label: "DTP", kind: "dtp" },
      { label: "illust", kind: "illust" },
    ],
    item: "Tシャツ",
  },
};

const projectWorks: PortfolioWork[] = otherItems.map((item) => {
  const slug = item.id!;
  const category = categories[slug];
  return {
    slug,
    title: item.title,
    subtitle: item.subtitle,
    tags: category.tags,
    description: [item.body],
    overview: item,
    itemCategory: category.item,
    gallery: item.gallery.map((group) => ({
      columns: 2,
      images: group.images.map((image) => ({ ...image, item: category.item })),
    })),
    bg: "#f5f5f3",
  };
});

export const portfolioWorks: PortfolioWork[] = [
  ...works.filter((work) => work.slug === "banner"),
  ...projectWorks,
  ...works.filter((work) => work.slug !== "banner"),
];
