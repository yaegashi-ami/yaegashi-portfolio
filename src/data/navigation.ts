export const navigationLinks = [
  { label: "Top", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Other", href: "/other" },
  { label: "Profile", href: "/profile" },
];

export const sideNavigationLinks = navigationLinks.filter(
  (link) => link.href !== "/",
);
