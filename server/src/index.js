import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const itemsPath = path.join(__dirname, "items.json");
const items = JSON.parse(fs.readFileSync(itemsPath, "utf-8"));

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const id = Number(req.params.id);
  const item = items.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
