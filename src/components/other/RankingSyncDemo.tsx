"use client";

import { useState } from "react";

const initialRanking = [
  "エージェントA",
  "エージェントB",
  "エージェントC",
];

const manualSelection = [
  "エージェントC",
  "エージェントA",
];

const agentData = {
  "エージェントA": {
    cost: "◎",
    projects: "○",
    support: "△",
  },
  "エージェントB": {
    cost: "○",
    projects: "◎",
    support: "○",
  },
  "エージェントC": {
    cost: "△",
    projects: "○",
    support: "◎",
  },
};

export default function RankingSyncDemo() {
  const [ranking, setRanking] = useState(initialRanking);
  const [synced, setSynced] = useState(true);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  function handleDrop(targetIndex: number) {
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      return;
    }

    const nextRanking = [...ranking];
    const [draggedItem] = nextRanking.splice(draggedIndex, 1);

    nextRanking.splice(targetIndex, 0, draggedItem);

    setRanking(nextRanking);
    setDraggedIndex(null);
  }

  const comparison = synced ? ranking : manualSelection;

  return (
    <div className="overflow-hidden rounded-2xl border border-ink/15 bg-white">
      <div className="grid md:grid-cols-2">
        {/* 左：操作 */}
        <section className="border-b border-ink/10 p-6 md:border-b-0 md:border-r md:p-8">
          <div className="mb-4">
            <p className="font-['Alata'] text-[10px] tracking-widest text-main">
              CONTROL
            </p>

            <h3 className="mt-2 text-lg font-semibold leading-snug">
              ランキングを編集
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/65">
              項目をドラッグして、表示する順番を変更できます。
            </p>
            <div className="mt-3 border-t border-ink/10 pt-3">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={synced}
                  onChange={(event) => setSynced(event.target.checked)}
                  className="size-4 shrink-0 cursor-pointer accent-main"
                />
                <span className="block text-sm font-semibold">
                  ランキングを比較表に反映
                </span>
              </label>
            </div>
          </div>
          <div
            className={`
    transition-opacity
    ${synced ? "opacity-100" : "pointer-events-none opacity-40"}
  `}
          >
            <ol className="space-y-2">
              {ranking.map((agent, index) => (
                <li
                  key={agent}
                  draggable={synced}
                  onDragStart={() => {
                    if (!synced) return;
                    setDraggedIndex(index);
                  }}
                  onDragEnd={() => setDraggedIndex(null)}
                  onDragOver={(event) => {
                    if (!synced) return;
                    event.preventDefault();
                  }}
                  onDrop={() => {
                    if (!synced) return;
                    handleDrop(index);
                  }}
                  className={`
          flex items-center gap-3 rounded-xl border px-4 py-3
          transition
          ${synced
                      ? "cursor-grab active:cursor-grabbing"
                      : "cursor-not-allowed"
                    }
          ${draggedIndex === index
                      ? "border-main bg-main/5"
                      : "border-ink/10 bg-white"}
                      `}
                >
                  <span
                    aria-hidden="true"
                    className="ms-fill shrink-0 text-[22px] text-ink/35"
                  >
                    drag_indicator
                  </span>

                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-main/10 text-xs font-bold text-main">
                    {index + 1}
                  </span>

                  <span className="min-w-0 flex-1 text-sm font-medium">
                    {agent}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className={`mt-3 border-t border-ink/10 pt-5 transition-opacity ${synced ? "opacity-50" : "opacity-100"}`}>
            <p className="text-xs font-semibold text-ink">
              比較表：デフォルト設定
            </p>
            <div className="mt-3 flex flex-col flex-wrap gap-2">
              {manualSelection.map((agent) => (
                <span
                  key={agent}
                  className="rounded-md border border-ink/10 bg-white px-3 py-1.5 text-xs text-ink/70"
                >
                  {agent}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 右：結果 */}
        <section className="bg-main/[0.025] p-6 md:p-8">
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <p className="font-['Alata'] text-[10px] tracking-widest text-main">
                RESULT
              </p>

              <h3 className="mt-2 text-lg font-semibold leading-snug">
                比較表の表示
              </h3>

              <p className="mt-2 text-sm leading-6 text-ink/65">
                設定に応じて、比較表の表示順が切り替わります。
              </p>
            </div>

            <span
              className={`
        shrink-0 rounded-full px-3 py-1
        text-[10px] font-bold
        ${synced
                  ? "bg-main text-white"
                  : "border border-ink/15 bg-white text-ink/55"
                }
      `}
            >
              {synced ? "同期" : "手動"}
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border border-ink/10 bg-white">
            <div className="grid grid-cols-[1.5fr_repeat(3,0.7fr)] border-b border-ink/10 bg-main/[0.035] px-4 py-3 text-xs font-semibold text-ink/60">
              <span>エージェント</span>
              <span className="text-center">費用</span>
              <span className="text-center">案件数</span>
              <span className="text-center">サポート</span>
            </div>

            <div>
              {comparison.map((agent) => {
                const data = agentData[agent as keyof typeof agentData];

                return (
                  <div
                    key={agent}
                    className="grid grid-cols-[1.5fr_repeat(3,0.7fr)] items-center border-b border-ink/10 px-4 py-4 last:border-b-0"
                  >
                    <span className="text-sm font-medium">
                      {agent}
                    </span>

                    <span className="text-center text-lg font-semibold text-main">
                      {data.cost}
                    </span>

                    <span className="text-center text-lg font-semibold text-main">
                      {data.projects}
                    </span>

                    <span className="text-center text-lg font-semibold text-main">
                      {data.support}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-5 rounded-xl bg-main/20 px-4 py-3
  after:absolute
  after:-top-3
  after:left-10
  after:h-0
  after:w-0
  after:border-x-[8px]
  after:border-b-[12px]
  after:border-x-transparent
  after:border-b-main/20
">
            <p className="text-xs leading-5 text-ink">
              {synced
                ? "ランキングの並び順が、そのまま比較表の表示順に反映されています。"
                : "同期を外すと、デフォルト設定の内容に戻ります。"}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}