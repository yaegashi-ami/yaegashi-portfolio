"use client";

import { useEffect, useId, useRef, useState } from "react";

const initialRanking = ["エージェントA", "エージェントB", "エージェントC"];
const manualSelection = ["エージェントC", "エージェントA"];

type Direction = "up" | "down";

export default function RankingSyncDemo() {
  const [ranking, setRanking] = useState(initialRanking);
  const [synced, setSynced] = useState(true);
  const [announcement, setAnnouncement] = useState("");
  const titleId = useId();
  const noteId = useId();
  const buttons = useRef(new Map<string, HTMLButtonElement>());
  const pendingFocus = useRef<{
    agent: string;
    direction: Direction;
  } | null>(null);

  useEffect(() => {
    const target = pendingFocus.current;
    if (!target) return;

    const button = buttons.current.get(`${target.agent}-${target.direction}`);
    const oppositeDirection = target.direction === "up" ? "down" : "up";
    const focusTarget = button?.disabled
      ? buttons.current.get(`${target.agent}-${oppositeDirection}`)
      : button;

    focusTarget?.focus({ preventScroll: true });
    pendingFocus.current = null;
  }, [ranking]);

  function moveAgent(agent: string, direction: Direction) {
    const currentIndex = ranking.indexOf(agent);
    const nextIndex = currentIndex + (direction === "up" ? -1 : 1);
    if (nextIndex < 0 || nextIndex >= ranking.length) return;

    const nextRanking = [...ranking];
    [nextRanking[currentIndex], nextRanking[nextIndex]] = [
      nextRanking[nextIndex],
      nextRanking[currentIndex],
    ];

    pendingFocus.current = { agent, direction };
    setRanking(nextRanking);
    setAnnouncement(`${agent}を${nextIndex + 1}位に移動しました。`);
  }

  const comparison = synced ? ranking : manualSelection;

  return (
    <div className="min-w-0 rounded-2xl border border-ink/15 bg-white p-4 text-ink sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p id={titleId} className="text-sm font-bold">
          エージェントランキング
        </p>
        <span className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-medium text-ink/70">
          操作デモ
        </span>
      </div>

      <ol aria-labelledby={titleId} className="space-y-2">
        {ranking.map((agent, index) => (
          <li
            key={agent}
            className="flex items-center gap-2 rounded-xl bg-cream px-2 py-2 sm:px-3"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold tabular-nums">
              <span className="sr-only">順位：</span>
              {index + 1}
            </span>
            <span className="min-w-0 flex-1 text-[13px] font-medium sm:text-sm">
              {agent}
            </span>
            <div className="flex shrink-0 gap-1">
              {(["up", "down"] as const).map((direction) => (
                <button
                  key={direction}
                  ref={(element) => {
                    const key = `${agent}-${direction}`;
                    if (element) buttons.current.set(key, element);
                    else buttons.current.delete(key);
                  }}
                  type="button"
                  aria-label={`${agent}の順位を一つ${direction === "up" ? "上げる" : "下げる"}`}
                  disabled={
                    direction === "up"
                      ? index === 0
                      : index === ranking.length - 1
                  }
                  onClick={() => moveAgent(agent, direction)}
                  className="flex size-10 items-center justify-center rounded-lg border border-ink/20 bg-white transition-colors hover:border-main hover:bg-main/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main disabled:cursor-not-allowed disabled:border-ink/10 disabled:bg-transparent disabled:text-ink/25 disabled:hover:border-ink/10"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className={direction === "down" ? "rotate-180" : undefined}
                  >
                    <path d="M12 19V5m-6 6 6-6 6 6" />
                  </svg>
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <p role="status" className="sr-only">
        {announcement}
      </p>

      <label className="my-4 flex min-h-10 cursor-pointer items-start gap-2.5 rounded-lg py-2 text-[13px] leading-6 sm:text-sm">
        <input
          type="checkbox"
          checked={synced}
          onChange={(event) => setSynced(event.target.checked)}
          aria-describedby={noteId}
          className="mt-1 size-4 shrink-0 cursor-pointer accent-main focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main"
        />
        ランキングの内容を比較表に反映
      </label>

      <div
        aria-live="polite"
        aria-atomic="true"
        className="rounded-xl border border-main/25 bg-main/5 p-4"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold">比較表に表示する内容</p>
          <span className="text-[11px] font-bold text-main">
            {synced ? "ランキングと同期中" : "手動設定を使用中"}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6">{comparison.join(" → ")}</p>
      </div>

      <p id={noteId} className="mt-3 text-xs leading-6 text-ink/75">
        保持されている手動設定：
        <br />
        {manualSelection.join(" → ")}
        <br />
        同期を外すと、この選択に戻ります。
      </p>
    </div>
  );
}
