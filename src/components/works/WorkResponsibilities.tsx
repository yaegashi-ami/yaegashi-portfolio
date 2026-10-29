export default function WorkResponsibilities({ items }: { items?: string[] }) {
  if (!items?.length) return null;

  return (
    <ul aria-label="担当内容" className="flex flex-wrap gap-1">
      {items.map((item) => (
        <li
          key={item}
          className="max-w-full rounded-full border-[0.5px] border-main bg-white px-2.5 py-0.5 text-xs leading-5 text-main"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
