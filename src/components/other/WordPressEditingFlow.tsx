const before = ["固定ページ", "複数の設定画面", "PHP編集"];
const after = ["職種を選ぶ", "順位を変える", "表示を切り替える"];

export default function WordPressEditingFlow({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div
        className={`rounded-xl bg-[#efefec] ${compact ? "p-5" : "p-6 md:p-8"}`}
      >
        <p className="font-['Alata'] text-[10px] tracking-[0.18em] text-ink/65">
          BEFORE
        </p>
        <p
          className={`mt-2 font-semibold leading-snug ${compact ? "text-base" : "text-lg"}`}
        >
          更新先と影響範囲を探して編集
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {before.map((item) => (
            <li
              key={item}
              className="rounded-md border border-black/10 bg-white/70 px-3 py-2 text-xs leading-5"
            >
              {item}
            </li>
          ))}
        </ul>
        {!compact && (
          <p className="mt-5 text-sm leading-6 text-ink/75">
            表示先とデータの関係を確認しながら、編集する場所を探す必要がありました。
          </p>
        )}
      </div>
      <div className={`rounded-xl bg-main/5 ${compact ? "p-5" : "p-6 md:p-8"}`}>
        <p className="font-['Alata'] text-[10px] tracking-[0.18em] text-main">
          AFTER
        </p>
        <p
          className={`mt-2 font-semibold leading-snug ${compact ? "text-base" : "text-lg"}`}
        >
          更新したいページから、一括で編集
        </p>
        <ol className="mt-5 flex flex-wrap gap-2">
          {after.map((item, index) => (
            <li
              key={item}
              className="rounded-md border border-main/15 bg-white/80 px-3 py-2 text-xs leading-5"
            >
              <span className="mr-1.5 font-['Alata'] text-main">
                {index + 1}.
              </span>
              {item}
            </li>
          ))}
        </ol>
        {!compact && (
          <p className="mt-5 text-sm leading-6 text-ink/75">
            ページごとの表示設定を、固定ページの編集画面にまとめました。記事本文などは、これまでどおり各投稿から編集できます。
          </p>
        )}
      </div>
    </div>
  );
}
