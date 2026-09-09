"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function LpMock({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ratio, setRatio] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setRatio(max > 0 ? el.scrollTop / max : 0);
  };

  return (
    <div className="group/mock mx-auto w-[85%] max-w-[340px]">
      <div className="rounded-[3rem] bg-[#141419] p-2 shadow-[0_0_16px_rgba(0,0,0,0.25)]">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white">
          <div
            ref={ref}
            onScroll={onScroll}
            className="lp-scroll aspect-[9/19.5] overflow-y-auto"
          >
            <Image
              src={src}
              alt={title}
              width={760}
              height={4000}
              className="h-auto w-full"
            />
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-4 bottom-4 right-1 w-1 opacity-0 transition-opacity group-hover/mock:opacity-100"
          >
            <span
              aria-hidden="true"
              className="absolute w-full rounded-full bg-black/25"
              style={{ height: "25%", top: `${ratio * 75}%` }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
