"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PageShell from "@/components/layout/PageShell";

export default function OtherPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/works${window.location.hash}`);
  }, [router]);

  return (
    <PageShell>
      <Link href="/works" className="text-main underline">
        Worksを見る
      </Link>
    </PageShell>
  );
}
