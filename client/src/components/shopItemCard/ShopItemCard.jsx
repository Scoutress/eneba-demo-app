import styles from "./ShopItemCard.module.scss";

export default function ShopItemCard({
  photo,
  platform,
  title,
  region,
  fullprice,
  discount,
  price,
  cashback,
  wishlisted,
}) {
  return (
    <>
      <div className={styles.card}>
        {/* Wishlist */}
        <button className={styles.wishlist}>♡</button>

        {/* Image */}
        <div className={styles.photo}>
          <img src={photo} alt={title} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <div className={styles.platform}>{platform}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.region}>{region}</div>

          <div className={styles.old_prices}>
            <span>From </span>
            <span className={styles.fullprice}>{fullprice}</span>
            <span className={styles.discount}>{discount}</span>
          </div>

          <div className={styles.price}>{price}</div>
          <div className={styles.cashback}>{cashback}</div>
          <div className={styles.wishlisted}>{wishlisted}</div>

          <div className={styles.actions}>
            <button className={styles.primary}>Add to cart</button>
            <button className={styles.secondary}>Explore options</button>
          </div>
        </div>
      </div>
    </>
  );
}
