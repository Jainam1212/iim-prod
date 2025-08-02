import express from "express";
import cors from "cors";
// import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
// import { z } from "zod";
import dotenv from "dotenv";
import {connectToDatabaseIIM} from './database/database';
import compression from 'compression';
// import {inquireNow} from './utils/inquireNowForm.ts';
// import {fetchMoreInfo} from './database/retrieveMoreInfo.ts'
import {appRouter} from './router'


dotenv.config();

// const t = initTRPC.create();

// const appRouter = t.router({
//   hello: t.procedure
//     .input(z.object({ name: z.string() }))
//     .query(async ({ input }) => {
//       const x = await inquireNow();
//       console.log(x);
//       return { message: `Hello, ${input.name}!` };
//     }),
//   fetchData: t.procedure.input(z.object({searchQuery: z.string()}))
//   .query(async({input})=>{
//       const data = await fetchMoreInfo(input.searchQuery);
//       return data
//     }
//   )
// });

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
