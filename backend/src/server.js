import express from "express";
import cors from "cors";
import { APP_NAME } from "../../shared/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, app: APP_NAME });
});

app.listen(PORT, () => console.log(`Backend: http://localhost:${PORT}`));
