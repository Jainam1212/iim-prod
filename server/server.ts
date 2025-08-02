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

try {
  connectToDatabaseIIM();
} catch (error) {
  console.log('database error',error);
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// export type AppRouter = typeof appRouter;
