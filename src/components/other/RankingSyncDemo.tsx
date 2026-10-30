"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import { createPortal } from "react-dom";

const initialRanking = [
  "エージェントA",
  "エージェントB",
  "エージェントC",
] as const;
type AgentName = (typeof initialRanking)[number];

const manualSelection: AgentName[] = ["エージェントC", "エージェントA"];
const previewRanking: AgentName[] = [
  "エージェントB",
  "エージェントA",
  "エージェントC",
];
const agentData = {
  エージェントA: {
    cost: "◎",
    projects: "○",
    support: "△",
    color: "text-emerald-500",
  },
  エージェントB: {
    cost: "○",
    projects: "◎",
    support: "○",
    color: "text-sky-600",
  },
  エージェントC: {
    cost: "△",
    projects: "○",
    support: "◎",
    color: "text-violet-600",
  },
};

function AgentLabel({ agent }: { agent: AgentName }) {
  return (
    <span className="whitespace-nowrap font-normal">
      エージェント
      <span className={"ml-0.5 " + agentData[agent].color}>
        {agent.slice(-1)}
      </span>
    </span>
  );
}

function ComparisonTable({
  agents,
  compact = false,
  id,
}: {
  agents: readonly AgentName[];
  compact?: boolean;
  id?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border-[0.5px] border-ink/15 bg-white">
      <table id={id} className="w-full table-fixed text-xs sm:text-sm">
        <caption className="sr-only">サイトに表示される比較表</caption>
        <thead className="bg-cream text-[10px] text-muted sm:text-xs">
          <tr>
            <th
              scope="col"
              className={
                "w-[48%] text-left font-medium sm:w-[40%] " +
                (compact ? "px-1.5 py-2 sm:px-2" : "px-2 py-3 sm:px-3")
              }
            >
              エージェント
            </th>
            <th scope="col" className="py-2 font-medium">
              費用
            </th>
            <th scope="col" className="py-2 font-medium">
              案件数
            </th>
            <th scope="col" className="py-2 font-medium">
              サポート
            </th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent} className="border-t border-ink/10">
              <th
                scope="row"
                className={
                  "text-left font-medium " +
                  (compact
                    ? "px-1.5 py-3 text-[11px] sm:px-2 sm:text-xs"
                    : "px-2 py-4 sm:px-3")
                }
              >
                <AgentLabel agent={agent} />
              </th>
              <td className="text-center text-lg text-main">
                {agentData[agent].cost}
              </td>
              <td className="text-center text-lg text-main">
                {agentData[agent].projects}
              </td>
              <td className="text-center text-lg text-main">
                {agentData[agent].support}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function RankingSyncPreview() {
  return (
    <div className="grid items-center gap-4 rounded-xl bg-cream p-4 sm:grid-cols-[1fr_auto_1.25fr] sm:p-6">
      <div className="hidden min-w-0 sm:block">
        <p className="mb-3 text-sm font-bold">ランキングを並べ替え</p>
        <ol className="space-y-2">
          {previewRanking.map((agent, index) => (
            <li
              key={agent}
              className="flex items-center gap-3 rounded-lg bg-white px-3 py-2.5 text-xs"
            >
              <span
                aria-hidden="true"
                className="ms-fill text-[18px] text-muted"
              >
                drag_indicator
              </span>
              <span className="text-main">{index + 1}</span>
              <AgentLabel agent={agent} />
            </li>
          ))}
        </ol>
      </div>
      <span
        aria-hidden="true"
        className="hidden text-main sm:block"
      >
        <span className="ms-fill text-[28px]">arrow_forward</span>
      </span>
      <div className="min-w-0">
        <p className="mb-3 text-sm font-bold">比較表も同じ順番に更新</p>
        <ComparisonTable agents={previewRanking} compact />
      </div>
    </div>
  );
}

type DragSession = {
  pointerId: number;
  from: number;
  agent: AgentName;
  startX: number;
  startY: number;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
  active: boolean;
  insertionIndex: number | null;
};

export default function RankingSyncDemo() {
  const [ranking, setRanking] = useState<AgentName[]>([...initialRanking]);
  const [synced, setSynced] = useState(true);
  const [drag, setDrag] = useState<DragSession | null>(null);
  const dragRef = useRef<DragSession | null>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const isDragging = drag !== null;

  useEffect(() => {
    if (!isDragging) return;
    const previousCursor = document.body.style.cursor;
    const previousSelection = document.body.style.userSelect;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";

    const cancelOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      dragRef.current = null;
      setDrag(null);
    };
    window.addEventListener("keydown", cancelOnEscape);
    return () => {
      document.body.style.cursor = previousCursor;
      document.body.style.userSelect = previousSelection;
      window.removeEventListener("keydown", cancelOnEscape);
    };
  }, [isDragging]);

  function moveAgent(from: number, to: number) {
    if (!synced || from === to || to < 0 || to >= ranking.length) return;
    setRanking((current) => {
      const next = [...current];
      const [agent] = next.splice(from, 1);
      next.splice(to, 0, agent);
      return next;
    });
  }

  function cancelDrag() {
    dragRef.current = null;
    setDrag(null);
  }

  function startDrag(event: PointerEvent<HTMLLIElement>, from: number) {
    if (!synced || !event.isPrimary || event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button")) return;

    const box = event.currentTarget.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      from,
      agent: ranking[from],
      startX: event.clientX,
      startY: event.clientY,
      x: event.clientX,
      y: event.clientY,
      offsetX: event.clientX - box.left,
      offsetY: event.clientY - box.top,
      width: box.width,
      height: box.height,
      active: false,
      insertionIndex: null,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function updateDrag(event: PointerEvent<HTMLLIElement>) {
    const current = dragRef.current;
    if (!current || current.pointerId !== event.pointerId || !listRef.current)
      return;
    if (
      !current.active &&
      Math.hypot(
        event.clientX - current.startX,
        event.clientY - current.startY,
      ) < 4
    )
      return;

    const listBox = listRef.current.getBoundingClientRect();
    let insertionIndex: number | null = null;
    if (
      event.clientX >= listBox.left &&
      event.clientX <= listBox.right &&
      event.clientY >= listBox.top - 12 &&
      event.clientY <= listBox.bottom + 12
    ) {
      const rows = Array.from(listRef.current.children);
      const index = rows.findIndex((row) => {
        const box = row.getBoundingClientRect();
        return event.clientY < box.top + box.height / 2;
      });
      insertionIndex = index < 0 ? rows.length : index;
    }

    const next = {
      ...current,
      active: true,
      x: event.clientX,
      y: event.clientY,
      insertionIndex,
    };
    dragRef.current = next;
    setDrag(next);
  }

  function finishDrag(event: PointerEvent<HTMLLIElement>) {
    const current = dragRef.current;
    if (!current || current.pointerId !== event.pointerId) return;
    if (current.active && current.insertionIndex !== null) {
      const to =
        current.insertionIndex > current.from
          ? current.insertionIndex - 1
          : current.insertionIndex;
      moveAgent(current.from, to);
    }
    cancelDrag();
  }

  function agentContents(agent: AgentName, index: number, preview = false) {
    return (
      <>
        <span
          aria-hidden="true"
          className="hidden shrink-0 text-muted md:block"
        >
          <span className="ms-fill text-[20px]">drag_indicator</span>
        </span>
        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-main-light text-xs font-bold text-main">
          {index + 1}
        </span>
        <span className="min-w-0 flex-1 text-sm">
          <AgentLabel agent={agent} />
        </span>
        <div className="flex shrink-0 gap-1">
          {[
            { direction: -1, label: "上", icon: "arrow_upward" },
            { direction: 1, label: "下", icon: "arrow_downward" },
          ].map(({ direction, label, icon }) =>
            preview ? (
              <span
                key={direction}
                className="flex size-9 items-center justify-center text-main"
              >
                <span aria-hidden="true" className="ms-fill text-[20px]">
                  {icon}
                </span>
              </span>
            ) : (
              <button
                key={direction}
                type="button"
                aria-label={agent + "を" + label + "へ"}
                disabled={
                  !synced ||
                  index + direction < 0 ||
                  index + direction >= ranking.length
                }
                onClick={() => moveAgent(index, index + direction)}
                className="flex size-9 items-center justify-center rounded-lg text-main enabled:cursor-pointer enabled:hover:bg-main-light focus-visible:outline-2 focus-visible:outline-main disabled:cursor-default disabled:opacity-25"
              >
                <span aria-hidden="true" className="ms-fill text-[20px]">
                  {icon}
                </span>
              </button>
            ),
          )}
        </div>
      </>
    );
  }

  const comparison = synced ? ranking : manualSelection;
  const insertionIndex =
    drag &&
    drag.insertionIndex !== drag.from &&
    drag.insertionIndex !== drag.from + 1
      ? drag.insertionIndex
      : null;

  return (
    <div className="grid gap-6 rounded-2xl bg-white p-5 md:grid-cols-2 md:gap-8 md:p-7">
      <section aria-labelledby="ranking-heading" className="min-w-0">
        <h3 id="ranking-heading" className="font-bold">
          管理画面で並べ替え
        </h3>
        <p className="mt-2 text-xs leading-5 text-muted">
          項目を動かし、線の位置で離すと並べ替えできます。
        </p>
        <ol
          ref={listRef}
          aria-label="ランキングの並び順"
          className={"mt-4 space-y-2 " + (synced ? "" : "opacity-40")}
        >
          {ranking.map((agent, index) => (
            <li
              key={agent}
              data-ranking-row
              onPointerDown={(event) => startDrag(event, index)}
              onPointerMove={updateDrag}
              onPointerUp={finishDrag}
              onPointerCancel={cancelDrag}
              onLostPointerCapture={cancelDrag}
              className={
                "relative flex select-none items-center gap-2 rounded-xl border-[0.5px] border-ink/15 bg-white px-3 py-2 " +
                (synced
                  ? "touch-pinch-zoom cursor-grab active:cursor-grabbing "
                  : "") +
                (drag?.from === index ? "opacity-40" : "")
              }
            >
              {insertionIndex === index && (
                <span
                  aria-hidden="true"
                  data-drop-indicator
                  className="pointer-events-none absolute -top-[5px] inset-x-0 z-10 h-0.5 rounded-full bg-main"
                />
              )}
              {agentContents(agent, index)}
              {index === ranking.length - 1 &&
                insertionIndex === ranking.length && (
                  <span
                    aria-hidden="true"
                    data-drop-indicator
                    className="pointer-events-none absolute -bottom-[5px] inset-x-0 z-10 h-0.5 rounded-full bg-main"
                  />
                )}
            </li>
          ))}
        </ol>
        <label className="mt-4 flex cursor-pointer items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={synced}
            onChange={(event) => {
              cancelDrag();
              setSynced(event.target.checked);
            }}
            aria-controls="comparison-table"
            className="size-4 shrink-0 cursor-pointer accent-main"
          />
          ランキングと比較表を連動
        </label>
      </section>

      <section aria-labelledby="comparison-heading" className="min-w-0">
        <div className="flex items-center justify-between gap-3">
          <h3 id="comparison-heading" className="font-bold">
            サイトの比較表
          </h3>
          <span className="text-xs text-main">
            {synced ? "連動中" : "元の設定"}
          </span>
        </div>
        <p className="mt-2 text-xs leading-5 text-muted">
          掲載する会社と表示順が、設定に合わせて切り替わります。
        </p>
        <div className="mt-4">
          <ComparisonTable id="comparison-table" agents={comparison} />
        </div>
        <p role="status" className="mt-3 text-xs leading-5 text-muted">
          {synced
            ? "ランキングと同じ順番で表示しています。"
            : "連動を外すと、元の掲載内容・順番に戻ります。"}
        </p>
      </section>

      {drag &&
        createPortal(
          <div
            aria-hidden="true"
            data-drag-preview
            className="pointer-events-none fixed z-[100] flex items-center gap-2 overflow-hidden rounded-xl border-[0.5px] border-main bg-white px-3 py-2 shadow-lg"
            style={{
              left: drag.x - drag.offsetX,
              top: drag.y - drag.offsetY,
              width: drag.width,
              height: drag.height,
            }}
          >
            {agentContents(drag.agent, drag.from, true)}
          </div>,
          document.body,
        )}
    </div>
  );
}
