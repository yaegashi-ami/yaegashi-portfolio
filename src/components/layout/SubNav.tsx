"use client";

import { usePathname } from "next/navigation";

import AnimatedNavLink from "@/components/ui/AnimatedNavLink";
import { navigationLinks } from "@/data/navigation";

export default function SubNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between gap-4">
      <div className="flex gap-4 font-['Alata'] text-xs font-bold tracking-widest">
        {navigationLinks.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <AnimatedNavLink
              key={item.href}
              href={item.href}
              isCurrent={isActive}
            >
              {item.label}
            </AnimatedNavLink>
          );
        })}
      </div>
    </nav>
  );
}
