import Link from "next/link";
import { contact } from "@/data/site";

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link
        href={contact.instagram.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Instagram（${contact.instagram.account}）`}
        className="group relative rounded-full border border-main p-2.5 text-main transition-colors hover:bg-main hover:text-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 border border-main bg-cream px-2 py-0.5 text-xs font-bold tracking-wider whitespace-nowrap text-main opacity-0 transition-opacity group-hover:opacity-100"
        >
          Instagram
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </Link>
      <Link
        href={contact.email.href}
        aria-label={`メール（${contact.email.account}）`}
        className="group relative rounded-full border border-main p-2.5 text-main transition-colors hover:bg-main hover:text-white"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 border border-main bg-cream px-2 py-0.5 text-xs font-bold tracking-wider whitespace-nowrap text-main opacity-0 transition-opacity group-hover:opacity-100"
        >
          mail
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </Link>
    </div>
  );
}
