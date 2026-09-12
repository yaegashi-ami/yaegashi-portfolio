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
      <span className="absolute right-2 bottom-2 flex h-8 min-w-8 items-center gap-0 overflow-hidden rounded-full border border-main bg-white text-main shadow-md transition-all">
        {label && (
          <span className="max-w-0 overflow-hidden pl-0 text-xs font-bold tracking-wider whitespace-nowrap opacity-0 transition-all duration-300 max-sm:max-w-[160px] max-sm:pl-3 max-sm:mr-[-3px] max-sm:opacity-100 group-hover:max-w-[160px] group-hover:pl-3 group-hover:mr-[-3px] group-hover:opacity-100">
            {label}
          </span>
        )}
        <span
          aria-hidden="true"
          className="ms-fill mx-[7px] text-[18px] leading-none"
        >
          arrow_outward
        </span>
      </span>
    </>
  );
}