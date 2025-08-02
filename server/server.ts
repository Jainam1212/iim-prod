import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import dotenv from "dotenv";
import {connectToDatabaseIIM} from './database/database.ts';
import compression from 'compression';
import {appRouter} from './router.ts'


dotenv.config();

const app = express();
app.use(cors());
app.use(compression());
app.use(express.json());

// Attach tRPC to Express
app.use("/trpc", createExpressMiddleware({ router: appRouter }));

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await connectToDatabaseIIM();
    console.log("✅ Database connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed", error);
    process.exit(1); // Stop if DB fails
  }
})();