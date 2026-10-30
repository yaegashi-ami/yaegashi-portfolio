export const navigationLinks = [
  { label: "Top", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Profile", href: "/profile" },
];

export const sideNavigationLinks = navigationLinks.filter(
  (link) => link.href !== "/",
);
