import helmet from "helmet";
import rateLimit from "express-rate-limit";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pool } from "./db.js";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json({ limit: "50kb" }));
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(express.static("public"));

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

const reportsLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/reports", reportsLimiter);

app.post("/reports", async (req, res) => {
  try {
    const { title, description, steps } = req.body ?? {};

    const t = String(title ?? "").trim();
    const d = String(description ?? "").trim();
    const s = steps == null ? null : String(steps).trim();

    if (!t || !d) {
      return res
        .status(400)
        .json({ error: "title and description are required" });
    }
    if (t.length > 200) {
      return res.status(400).json({ error: "title must be <= 200 characters" });
    }
    if (d.length > 5000) {
      return res
        .status(400)
        .json({ error: "description must be <= 5000 characters" });
    }
    if (s && s.length > 5000) {
      return res
        .status(400)
        .json({ error: "steps must be <= 5000 characters" });
    }

    const [result] = await pool.execute(
      "INSERT INTO reports (title, description, steps) VALUES (?, ?, ?)",
      [t, d, s]
    );

    return res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error("POST /reports failed:", err);
    return res.status(500).json({ error: "internal server error" });
  }
});

const PORT = Number(process.env.PORT || 3001);
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
