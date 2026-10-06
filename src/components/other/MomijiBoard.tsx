import Image from "next/image";
import MomijiComponents from "./MomijiComponents";
import { assetPath } from "@/lib/assetPath";
import { momijiPalette, inkPalette } from "@/data/momiji";
import styles from "./MomijiBoard.module.css";

function MomijiBrand() {
  return (
    <div className={styles.brand}>
      <div>
        <Image
          src={assetPath("/images/momiji-logo.svg")}
          alt="momiji"
          width={140}
          height={48}
        />
        <p>
          申請管理アプリ
          <br />
          UIデザイン
        </p>
        <small>APPLICATION MANAGEMENT SYSTEM</small>
      </div>
    </div>
  );
}

function MomijiPalette() {
  return (
    <section className={styles.frame}>
      <div className={styles.frameTitle}>
        <h3>Color palette</h3>
      </div>
      <p className={styles.caption}>Momiji</p>
      <div className={styles.palette}>
        {momijiPalette.map(([n, color]) => (
          <div key={n}>
            <i style={{ background: color }} />
            <b>{n}</b>
          </div>
        ))}
      </div>
      <p className={styles.caption}>Ink</p>
      <div className={styles.inks}>
        {inkPalette.map(([n, color]) => (
          <div key={n}>
            <i style={{ background: color }} />
            <small>{n}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MomijiBoard({
  compact = false,
}: {
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className={styles.thumbnail} aria-label="momijiの紹介サムネイル">
        <MomijiBrand />
        <div className={styles.thumbnailPalette}>
          <MomijiPalette />
        </div>
      </div>
    );
  }
  return (
    <div
      className={styles.editor}
      aria-label="momijiのデザインシステム紹介ボード"
    >
      <div className={styles.topbar}>
        <span>
          ◇ <b>momiji</b> <span className={styles.muted}> / Design system</span>
        </span>
        <span className={styles.fileBadge}>UI DESIGN · PROTOTYPE</span>
      </div>
      <div className={styles.workspace}>
        <div className={styles.canvas}>
          <MomijiBrand />
          <div className={styles.foundationGrid}>
            <MomijiPalette />
            <section className={styles.frame}>
              <div className={styles.frameTitle}>
                <h3>Typography</h3>
              </div>
              <div className={styles.typeSample}>
                Aa<span>あ</span>
              </div>
              <b>Noto Sans JP</b>
              <div className={styles.typeRow}>
                <b>見出し Heading</b>
                <small>20 / Bold</small>
              </div>
              <div className={styles.typeRow}>
                <span>申請内容を確認してください</span>
                <small>14 / Regular</small>
              </div>
              <div className={styles.typeRow}>
                <small>補足テキスト・更新日時</small>
                <small>12 / Regular</small>
              </div>
            </section>
          </div>
          <section className={`${styles.frame} ${styles.components}`}>
            <div className={styles.frameTitle}>
              <h3>Components</h3>
            </div>
            <MomijiComponents />
          </section>
          <section className={`${styles.frame} ${styles.screen}`}>
            <div className={styles.frameTitle}>
              <h3>ダッシュボード</h3>
            </div>
            <Image
              src={assetPath("/images/momiji-dashboard.png")}
              alt="momijiの実際のダッシュボード。申請作成、最近の申請、新着情報を表示。"
              width={1440}
              height={760}
            />
          </section>
          <section className={`${styles.frame} ${styles.screen}`}>
            <div className={styles.frameTitle}>
              <h3>申請一覧</h3>
            </div>
            <Image
              src={assetPath("/images/momiji-applications.png")}
              alt="momijiの申請一覧。検索・絞り込みと申請ごとのステータスを表示。"
              width={1440}
              height={760}
            />
          </section>
          <section className={`${styles.frame} ${styles.screen}`}>
            <div className={styles.frameTitle}>
              <h3>申請画面</h3>
            </div>
            <Image
              src={assetPath("/images/momiji-application-form.png")}
              alt="momijiの経費申請画面。件名・利用日・金額・申請対象・添付書類の入力欄を表示。"
              width={1440}
              height={1314}
            />
          </section>
          <div className={styles.boardFooter}>
            <span>FOUNDATIONS → COMPONENTS → SCREENS</span>
            <span>momiji / UI design study</span>
          </div>
        </div>
      </div>
    </div>
  );
}
