import { initTRPC } from "@trpc/server";
import { z } from "zod";
import {inquireNow} from './utils/inquireNowForm.ts';
import {fetchMoreInfo} from './database/retrieveMoreInfo.ts'

const t = initTRPC.create();

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const x = await inquireNow();
      console.log(x);
      return { message: `Hello, ${input.name}!` };
    }),
  fetchData: t.procedure
    .input(z.object({ searchQuery: z.string() }))
    .query(async ({ input }) => {
      const data = await fetchMoreInfo(input.searchQuery);
      return data;
    }),
});

// ✅ Export only the type
export type AppRouter = typeof appRouter;
