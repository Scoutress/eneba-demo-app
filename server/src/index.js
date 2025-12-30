import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/list", async (req, res) => {
  const q = (req.query.search || "").trim();
  const like = `%${q}%`;

  try {
    const [rows] = await pool.query(
      `
      SELECT
        id,
        photo,
        platform_icon,
        platform,
        title,
        region_label,
        region_ok,
        has_discount,
        base_price,
        discount,
        current_price,
        price_info,
        has_cashback,
        cashback,
        wishlisted,
        available
      FROM offers
      WHERE (? = '' OR title LIKE ?)
      ORDER BY id DESC
      LIMIT 100
      `,
      [q, like]
    );

    const out = rows.map((r) => ({
      id: r.id,
      photo: r.photo,
      platformIcon: r.platform_icon,
      platform: r.platform,
      title: r.title,
      regionLabel: r.region_label,
      regionOk: Boolean(r.region_ok),
      hasDiscount: Boolean(r.has_discount),
      basePrice: String(r.base_price),
      discount: r.discount == null ? null : String(r.discount),
      currentPrice: String(r.current_price),
      priceInfo: r.price_info,
      hasCashback: Boolean(r.has_cashback),
      cashback: r.cashback == null ? null : String(r.cashback),
      wishlisted: r.wishlisted,
      available: Boolean(r.available),
    }));

    res.json(out);
  } catch (e) {
    console.error("DB error:", e);
    res.status(500).json({ status: "fail", error: e.message });
  }
});

const PORT = Number(process.env.PORT || 3001);
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
