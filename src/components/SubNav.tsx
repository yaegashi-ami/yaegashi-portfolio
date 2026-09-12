"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Top", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Other", href: "/other" },
  { label: "Profile", href: "/profile" },
];

export default function SubNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between gap-4">
      <div className="flex gap-4 font-['Alata'] text-xs font-bold tracking-widest">
        {links.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href ||
              pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`transition-colors hover:text-main ${isActive ? "text-main" : ""
                }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
