import type { ReactNode } from "react";
import SubNav from "./SubNav";

type PageShellProps = {
  children: ReactNode;
  /** LP詳細は、従来どおり広めの左右余白を使う。 */
  horizontalPadding?: "normal" | "wide";
  /** Works一覧は、各セクション側で間隔を調整する。 */
  spacing?: "normal" | "none";
};

export default function PageShell({
  children,
  horizontalPadding = "normal",
  spacing = "normal",
}: PageShellProps) {
  const paddingClass = horizontalPadding === "wide" ? "px-10" : "px-5";
  const gapClass = spacing === "normal" ? "gap-12" : "";

  return (
    <main
      className={`mx-auto flex w-full max-w-[1000px] flex-1 flex-col ${gapClass} ${paddingClass} pb-12 pt-6`}
    >
      <SubNav />
      {children}
    </main>
  );
}
