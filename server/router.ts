import { contactForm, moreInfoForm, moreInfoInquire, subscribeForm } from "./formHandlers";
import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { inquireNow } from "./utils/inquireNowForm.ts";
import { fetchMoreInfo } from "./database/retrieveMoreInfo.ts";
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
  subscribeForm: t.procedure
    .input(z.object({ contact: z.string() }))
    .query(async ({ input }) => {
      const data = await subscribeForm(input.contact);
      return data;
    }),
  productInquiryeForm: t.procedure
    .input(z.object({ contact: z.string() }))
    .query(async ({ input }) => {
      const data = await moreInfoInquire(input.contact);
      return data;
    }),
  moreinfoForm: t.procedure
    .input(z.object({ contact: z.string() }))
    .query(async ({ input }) => {
      const data = await moreInfoForm(input.contact);
      return data;
    }),
  contactForm: t.procedure
    .input(z.object({ contact: z.string() }))
    .query(async ({ input }) => {
      const data = await contactForm(input.contact);
      return data;
    }),
});

export type AppRouter = typeof appRouter;
