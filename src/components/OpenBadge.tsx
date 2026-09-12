export default function OpenBadge({
  label,
  tint,
}: {
  label?: string;
  tint?: boolean;
}) {
  return (
    <>
      {tint && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-main/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {label && (
        <span
          className="pointer-events-none absolute bottom-2 left-2 border border-main bg-cream px-2 py-0.5 text-xs font-bold tracking-wider whitespace-nowrap text-main opacity-0 transition-opacity group-hover:opacity-100"
        >
          {label}
        </span>
      )}
      <span
        aria-hidden="true"
        className="absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-main text-white shadow-md"
      >
        <span className="ms-fill text-[18px] leading-none">
          arrow_outward
        </span>
      </span>
    </>
  );
}