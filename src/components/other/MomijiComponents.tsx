import styles from "./MomijiComponents.module.css";

// Specimens adapted from momiji-tailwind/src/components.jsx (ActionButton,
// CheckControl, StatusBadge, TypeBadge) and src/styles.css (.field, .required, .target-options).
// Buttons are non-interactive samples, not application actions.
export default function MomijiComponents() {
  return (
    <div className={styles.specimens}>
      <section className={styles.sample}>
        <h4>Button</h4>
        <div className={styles.buttons}>
          <span className={`${styles.button} ${styles.gray}`}>下書き保存</span>
          <span className={`${styles.button} ${styles.main}`}>
            <span className={styles.icon} aria-hidden="true">
              arrow_forward
            </span>
            確認へ進む
          </span>
          <span className={styles.textButton}>
            <span
              className={`${styles.icon} ${styles.smallIcon}`}
              aria-hidden="true"
            >
              arrow_back
            </span>
            申請一覧へ戻る
          </span>
        </div>
      </section>
      <section className={styles.sample}>
        <h4>Text field</h4>
        <label className={styles.field}>
          <span>
            件名<span className={styles.required}>必須</span>
          </span>
          <input
            placeholder="例）9月 横浜出張"
            readOnly
            aria-label="件名の入力欄サンプル"
          />
        </label>
      </section>
      <section className={styles.sample}>
        <h4>Checkbox</h4>
        <div className={styles.options}>
          {["交通費", "備品", "その他"].map((label, i) => (
            <label className={styles.check} key={label}>
              <input
                type="checkbox"
                defaultChecked={i === 0}
                aria-label={`${label}のチェックボックスサンプル`}
              />
              <span className={styles.box} aria-hidden="true" />
              <strong>{label}</strong>
            </label>
          ))}
        </div>
      </section>
      <section className={styles.sample}>
        <h4>Radio button</h4>
        <div className={styles.options}>
          <label className={styles.radio}>
            <input
              type="radio"
              name="momiji-date-mode-sample"
              value="single"
              defaultChecked
            />
            利用日
          </label>
          <label className={styles.radio}>
            <input type="radio" name="momiji-date-mode-sample" value="period" />
            利用期間
          </label>
        </div>
      </section>
      <section className={styles.sample}>
        <h4>Badge</h4>
        <div className={styles.badgeRows}>
          <div className={styles.badges} aria-label="申請ステータス">
            <span className={`${styles.badge} ${styles.draft}`}>下書き</span>
            <span className={`${styles.badge} bg-sky-100 text-sky-700`}>
              申請中
            </span>
            <span className={`${styles.badge} bg-green-100 text-green-700`}>
              承認済
            </span>
            <span className={`${styles.badge} bg-purple-50 text-purple-700`}>
              差戻し
            </span>
          </div>
          <div className={styles.badges} aria-label="申請種別">
            {[
              ["経費申請", "shopping_cart"],
              ["発注案件", "shopping_bag"],
              ["契約申請", "deployed_code"],
            ].map(([label, icon]) => (
              <span
                key={label}
                className={`${styles.badge} ${styles.typeBadge}`}
              >
                <span
                  aria-hidden="true"
                  className={`${styles.icon} ${styles.badgeIcon}`}
                >
                  {icon}
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
