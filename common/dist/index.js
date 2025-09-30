import { optional, string, z } from "zod";
export const signupInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
    name: string(), optional
});
export const signinInput = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});
export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});
export const updatePostInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
});
//# sourceMappingURL=index.js.map