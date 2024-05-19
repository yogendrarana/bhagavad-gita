import { publicProcedure, router } from './trpc'

export const appRouter = router({
    getUser: publicProcedure.query(async () => {
        return { name: 'John Doe' };
    })
});

export type TAppRouter = typeof appRouter;