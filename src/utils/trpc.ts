import { type inferRouterOutputs } from '@trpc/server';
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../server/router";
type RouterOutput = inferRouterOutputs<AppRouter>;
export const trpc = createTRPCReact<AppRouter>();
export type FetchDataOutput = RouterOutput['fetchData'];
