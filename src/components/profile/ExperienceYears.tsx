"use client";

import { useEffect, useState } from "react";

export default function ExperienceYears({ start }: { start: string }) {
  const [years, setYears] = useState("0");

  useEffect(() => {
    const startDate = new Date(start);
    const today = new Date();
    const y = Math.floor(
      (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25),
    );
    queueMicrotask(() => setYears(String(Math.max(y, 0))));
  }, [start]);

  return <>{years}</>;
}
