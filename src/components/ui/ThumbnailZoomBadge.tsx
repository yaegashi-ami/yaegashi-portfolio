export default function ThumbnailZoomBadge() {
  return (
    <span
      aria-hidden="true"
      data-thumbnail-zoom
      className="pointer-events-none absolute right-2 bottom-2 z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-main text-white shadow-sm"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="10" r="6.5" />
        <path d="m15 15 5.5 5.5M10 7v6M7 10h6" />
      </svg>
    </span>
  );
}
