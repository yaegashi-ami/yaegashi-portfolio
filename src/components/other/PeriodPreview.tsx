import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import styles from "./PeriodPreview.module.css";

export default function PeriodPreview({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <figure className={`${styles.preview} ${compact ? styles.compact : ""}`}>
      <Image
        src={assetPath("/images/period-story.png")}
        alt="periodのプロモーションカード。周期と予測をシンプルに記録。本命・対抗、2つの開始日予測。排卵予定日・生理前の時期も表示。登録不要・ブラウザで使える。画面はサンプルです。予測は目安です。"
        width={1080}
        height={1920}
        className={styles.card}
      />
    </figure>
  );
}
