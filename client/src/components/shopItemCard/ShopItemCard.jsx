import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import styles from "./ShopItemCard.module.scss";
import AddToWishlistBtn from "../addToWishlist/AddToWishlistBtn.jsx";

export default function ShopItemCard({
  photo,
  platformIcon,
  platform,
  title,
  regionLabel,
  regionOk,
  hasDiscount,
  basePrice,
  discount,
  currentPrice,
  priceInfo,
  hasCashback,
  cashback,
  wishlisted,
  available,
}) {
  const navigate = useNavigate();
  const goDemo = () => navigate("/demo");

  const showDiscount = Boolean(
    hasDiscount && basePrice != null && discount != null
  );

  const formatEuro = (v) => {
    if (v === null || v === undefined || v === "") return "";
    const s = String(v).trim();
    return s.includes("€") ? s : `€${s}`;
  };

  const formatPercent = (v) => {
    if (v === null || v === undefined || v === "") return "";
    const num = Math.trunc(Number(v));
    if (Number.isNaN(num)) return "";
    return `-${num}%`;
  };

  const displayPrice = showDiscount ? currentPrice : basePrice ?? currentPrice;

  const PRICE_INFO_TEXT = {
    short: "Price is not final. Service fee applies at checkout.",
    big:
      "Strike-through price is the recommended retail price, not a reduction of price.\n\n" +
      "Price is not final. Service fee applies at checkout.",
  };

  const WISHLIST_INFO_TEXT = "Times wishlisted";
  const resolvedPriceInfo = PRICE_INFO_TEXT?.[priceInfo] ?? null;

  const [tipOpen, setTipOpen] = useState(false);
  const [tipText, setTipText] = useState(null);
  const [tipPos, setTipPos] = useState({ left: 0, top: 0 });

  const onTipEnter = (e, text) => {
    if (!text) return;

    setTipPos({
      left: e.clientX,
      top: e.clientY - 12,
    });

    setTipText(text);
    setTipOpen(true);
  };

  const onTipMove = (e) => {
    if (!tipOpen) return;

    setTipPos({
      left: e.clientX,
      top: e.clientY - 12,
    });
  };

  const onTipLeave = () => {
    setTipOpen(false);
    setTipText(null);
  };

  const Tip = useMemo(() => {
    if (!tipOpen || !tipText) return null;

    return createPortal(
      <div
        className={styles.tooltipPortal}
        style={{ left: `${tipPos.left}px`, top: `${tipPos.top}px` }}
        role="tooltip"
      >
        {tipText}
      </div>,
      document.body
    );
  }, [tipOpen, tipText, tipPos.left, tipPos.top]);

  const goDemoStop = (e) => {
    e.stopPropagation();
    goDemo();
  };

  if (!available) {
    return (
      <article
        className={`${styles.card} ${styles.sold}`}
        role="button"
        tabIndex={0}
        onClick={goDemo}
        onKeyDown={(e) => e.key === "Enter" && goDemo()}
      >
        <div className={styles.media}>
          <img className={styles.photo} src={photo} alt={title} />

          <div className={styles.wishlistBtnHost}>
            <AddToWishlistBtn onClick={goDemoStop} />
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelBg} />

          <div className={styles.platformBar}>
            <img
              className={styles.platformIcon}
              src={platformIcon}
              alt={platform}
            />
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

            <div
              className={styles.wishlistCount}
              onMouseEnter={(e) => {
                e.stopPropagation();
                onTipEnter(e, WISHLIST_INFO_TEXT);
              }}
              onMouseMove={onTipMove}
              onMouseLeave={(e) => {
                e.stopPropagation();
                onTipLeave();
              }}
            >
              <svg
                className={styles.heartIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="
                    M12 21
                    C12 21 4 14.6 4 9.5
                    C4 7 6 5 8.5 5
                    C10.1 5 11.5 5.9 12 7
                    C12.5 5.9 13.9 5 15.5 5
                    C18 5 20 7 20 9.5
                    C20 14.6 12 21 12 21
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>

              <span className={styles.wishlistValue}>{wishlisted}</span>
            </div>
          </div>
        </div>

        {Tip}
        <div className={styles.soldOverlay} />
      </article>
    );
  }

  return (
    <article
      className={styles.card}
      role="button"
      tabIndex={0}
      onClick={goDemo}
      onKeyDown={(e) => e.key === "Enter" && goDemo()}
    >
      <div className={styles.media}>
        <img className={styles.photo} src={photo} alt={title} />

        <div className={styles.wishlistBtnHost}>
          <AddToWishlistBtn onClick={goDemoStop} />
        </div>
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
          <img
            className={styles.platformIcon}
            src={platformIcon}
            alt={platform}
          />
          <span className={styles.platformText}>{platform}</span>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>

          <div className={styles.regionRow}>
            <span className={regionOk ? styles.regionOk : styles.regionBad}>
              {regionLabel}
            </span>
          </div>

          {!hasCashback && <div className={styles.spacer} />}

          <div className={styles.baseRowAvailable}>
            <span className={styles.from}>From</span>
            {showDiscount && (
              <>
                <span className={styles.basePrice}>
                  {formatEuro(basePrice)}
                </span>
                <span className={styles.discount}>
                  {formatPercent(discount)}
                </span>
              </>
            )}
          </div>

          <div className={styles.currentRow}>
            <span className={styles.currentPrice}>
              {formatEuro(displayPrice)}
            </span>

            {resolvedPriceInfo && (
              <span
                className={styles.infoWrap}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  onTipEnter(e, resolvedPriceInfo);
                }}
                onMouseMove={onTipMove}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  onTipLeave();
                }}
              >
                <span className={styles.infoIcon}>ⓘ</span>
              </span>
            )}
          </div>

          {Tip}

          {hasCashback && (
            <div className={styles.cashbackText}>
              Cashback:{" "}
              <span className={styles.cashbackValue}>
                {formatEuro(cashback)}
              </span>
            </div>
          )}

          <div
            className={styles.wishlistCount}
            onMouseEnter={(e) => {
              e.stopPropagation();
              onTipEnter(e, WISHLIST_INFO_TEXT);
            }}
            onMouseMove={onTipMove}
            onMouseLeave={(e) => {
              e.stopPropagation();
              onTipLeave();
            }}
          >
            <svg
              className={styles.heartIcon}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="
                  M12 21
                  C12 21 4 14.6 4 9.5
                  C4 7 6 5 8.5 5
                  C10.1 5 11.5 5.9 12 7
                  C12.5 5.9 13.9 5 15.5 5
                  C18 5 20 7 20 9.5
                  C20 14.6 12 21 12 21
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>

            <span className={styles.wishlistValue}>{wishlisted}</span>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={goDemoStop}
            >
              Add to cart
            </button>
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={goDemoStop}
            >
              Explore options
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
