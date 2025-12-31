import styles from "./ShopItemCard.module.scss";

export default function ShopItemCard({
  photo,
  platformIcon,
  platform,
  title,
  regionLabel,
  regionOk,
  // hasDiscount,
  basePrice,
  discount,
  currentPrice,
  priceInfo,
  hasCashback,
  cashback,
  wishlisted,
  available,
}) {
  if (!available) {
    return (
      <article className={`${styles.card} ${styles.sold} `}>
        <div className={styles.media}>
          <img className={styles.photo} src={photo} alt={title} />

          <button
            type="button"
            className={styles.wishlistBtn}
            aria-label="Add to wishlist"
          >
            ♡
          </button>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelBg} />

          <div className={styles.platformBar}>
            <img className={styles.platformIcon} src={platformIcon} />
            <span className={styles.platformText}>{platform}</span>
          </div>

          <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>

            <div className={styles.regionRow}>
              <span className={regionOk ? styles.regionOk : styles.regionBad}>
                {regionLabel}
              </span>
            </div>

            <div className={styles.baseRowUnavailable}>
              <svg
                className={styles.soldOutIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="4"
                  ry="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="9" cy="10" r="1.2" fill="currentColor" />
                <circle cx="15" cy="10" r="1.2" fill="currentColor" />
                <path
                  d="M8 16c1.2-1 2.8-1.5 4-1.5s2.8.5 4 1.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
              <span className={styles.soldOutText}>Sold out</span>
            </div>

            <div className={styles.wishlistCount}>
              <span className={styles.heart}>♡</span>
              <span>{wishlisted}</span>
            </div>
          </div>
        </div>
        <div className={styles.soldOverlay} />
      </article>
    );
  }

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img className={styles.photo} src={photo} alt={title} />

        <button
          type="button"
          className={styles.wishlistBtn}
          aria-label="Add to wishlist"
        >
          ♡
        </button>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelBg} />

        {hasCashback && (
          <div className={styles.cashbackBadge}>
            <span className={styles.badgeIcon}>↺</span>
            <span>CASHBACK</span>
          </div>
        )}

        <div className={styles.platformBar}>
          <img className={styles.platformIcon} src={platformIcon} />
          <span className={styles.platformText}>{platform}</span>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.regionRow}>
            <span className={regionOk ? styles.regionOk : styles.regionBad}>
              {regionLabel}
            </span>
          </div>

          <div className={styles.baseRowAvailable}>
            <span className={styles.from}>From</span>
            <span className={styles.basePrice}>{basePrice}</span>
            <span className={styles.discount}>{discount}</span>
          </div>

          <div className={styles.currentRow}>
            <span className={styles.currentPrice}>{currentPrice}</span>

            <span className={styles.infoWrap}>
              <span className={styles.infoIcon} aria-label="Price info">
                ⓘ
              </span>
              {priceInfo ? (
                <span className={styles.tooltip}>{priceInfo}</span>
              ) : null}
            </span>
          </div>

          <div className={styles.cashbackText}>
            Cashback: <span className={styles.cashbackValue}>{cashback}</span>
          </div>

          <div className={styles.wishlistCount}>
            <span className={styles.heart}>♡</span>
            <span>{wishlisted}</span>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.btnPrimary}>
              Add to cart
            </button>
            <button type="button" className={styles.btnSecondary}>
              Explore options
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
