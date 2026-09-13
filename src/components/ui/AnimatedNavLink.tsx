import Link from "next/link";
import styles from "./AnimatedNavLink.module.css";

type AnimatedNavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  isCurrent?: boolean;
};

export default function AnimatedNavLink({
  href,
  children,
  className = "",
  isCurrent = false,
}: AnimatedNavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={`${styles.link} inline-block w-fit self-start transition-colors ${
        isCurrent ? `${styles.current} text-main` : ""
      } ${className}`}
    >
      {children}
    </Link>
  );
}
