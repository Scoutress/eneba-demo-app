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

            <div className={styles.baseRow}>
              <span className={styles.from}>X</span>
              <span className={styles.from}>Sold out</span>
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

          <div className={styles.baseRow}>
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
