import { z } from "zod";

export const weeklyPhilosphySchema = z.object({
	text: z.string().min(1, "Must be at least 1 character"),
	authorName: z.string().min(1, "Must be at least 1 character"),
});

export type WeeklyPhilosophy = z.infer<typeof weeklyPhilosphySchema>;
