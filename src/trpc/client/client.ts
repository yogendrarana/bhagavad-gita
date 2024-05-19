import { createTRPCReact } from '@trpc/react-query';
import { type TAppRouter } from '@/trpc/server/router';

export const trpc = createTRPCReact<TAppRouter>({});