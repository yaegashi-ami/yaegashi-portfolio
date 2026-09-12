"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash() {
  const [phase, setPhase] = useState<"show" | "hide" | "done">("show");

  useEffect(() => {
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;
    const raf = requestAnimationFrame(() => {
      if (sessionStorage.getItem("splash-shown")) {
        setPhase("done");
        return;
      }
      t1 = setTimeout(() => setPhase("hide"), 1300);
      t2 = setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem("splash-shown", "1");
      }, 1900);
    });
    return () => {
      cancelAnimationFrame(raf);
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-main transition-opacity duration-500 ${
        phase === "hide" ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/images/signature.svg"
        alt=""
        width={928}
        height={200}
        priority
        className="splash-logo h-auto w-[70%] max-w-[320px] [filter:brightness(0)_invert(1)]"
      />
    </div>
  );
}
