import { z } from "zod";

export const serviceSchema = z.object({
	name: z.string().min(1, "Name must have at least 1 character"),
	description: z.string().min(1, "Description must have at least 1 character"),
});

export type Service = z.infer<typeof serviceSchema>;
