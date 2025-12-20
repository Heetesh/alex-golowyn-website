import { weeklyPhilosphySchema } from "@@/types/weekly_philosophy";
import type { WeeklyPhilosophy } from "@@/types/weekly_philosophy";
import { z } from "zod";

export default defineEventHandler((_event): WeeklyPhilosophy[] => {
	const weeklyPhilosophy = [
		{
			text: "The pen is mightier than the sword.",
			authorName: "Edward Bulwer-Lytton",
		},
		{
			text: "The pen is mightier than the sword.",
			authorName: "Edward Bulwer-Lytton",
		},
		{
			text: "The pen is mightier than the sword.",
			authorName: "Edward Bulwer-Lytton",
		},
		{
			text: "The pen is mightier than the sword.",
			authorName: "Edward Bulwer-Lytton",
		},
		{
			text: "The pen is mightier than the sword.",
			authorName: "Edward Bulwer-Lytton",
		},
		{
			text: "The pen is mightier than the sword.",
			authorName: "Edward Bulwer-Lytton",
		},
		{
			text: "The pen is mightier than the sword.",
			authorName: "Edward Bulwer-Lytton",
		},
	] as WeeklyPhilosophy[];

	return z.array(weeklyPhilosphySchema).parse(weeklyPhilosophy);
});
