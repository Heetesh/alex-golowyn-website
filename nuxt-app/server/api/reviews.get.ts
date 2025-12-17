// We get reviews from database when db is up and return to user

import { reviewSchema } from "@@/types/reviews";
// import { reviewSchema } from "../../types/reviews";

import type { Review } from "@@/types/reviews";
import { z } from "zod";

export default defineEventHandler((_event): Review[] => {
	const reviews = [
		{
			name: "Alex helped me find clarity and purpose I never knew I had.",
			description: "Sarah Johnson",
		},
		{
			name: "Went from unsure to unstoppable with the right guidance.",
			description: "James Wilson",
		},
		{
			name: "Transformed my mindset from fixed to growth in just weeks.",
			description: "Michael Chen",
		},
		{
			name: "The guidance I received completely shifted my perspective on life.",
			description: "Emma Rodriguez",
		},
		{
			name: "I finally understand what it means to live with intention and purpose.",
			description: "David Thompson",
		},
		{
			name: "From overwhelmed to organized, this experience changed everything.",
			description: "Lisa Chen",
		},
		{
			name: "I discovered strengths I didn't know I had and learned to use them.",
			description: "Marcus Bennett",
		},
		{
			name: "The support and wisdom helped me navigate my toughest challenges.",
			description: "Rachel Martinez",
		},
		{
			name: "I went from feeling stuck to building momentum toward my goals.",
			description: "Kevin O'Brien",
		},
	];

	return z.array(reviewSchema).parse(reviews);
});

// export default defineEventHandler(async (_event): Promise<Review[]> => {
// 	await new Promise(resolve => setTimeout(resolve, 5_000));

// 	const reviews = [
// 		{
// 			name: "Alex helped me find clarity and purpose I never knew I had.",
// 			description: "Sarah Johnson",
// 		},
// 		{
// 			name: "Went from unsure to unstoppable with the right guidance.",
// 			description: "James Wilson",
// 		},
// 		{
// 			name: "Transformed my mindset from fixed to growth in just weeks.",
// 			description: "Michael Chen",
// 		},
// 		{
// 			name: "Transformed my mindset from fixed to growth in just weeks.",
// 			description: "Michael Chen",
// 		},
// 		{
// 			name: "Transformed my mindset from fixed to growth in just weeks.",
// 			description: "Michael Chen",
// 		},
// 		{
// 			name: "Transformed my mindset from fixed to growth in just weeks.",
// 			description: "Michael Chen",
// 		},

// 	] as Review[];

// 	return z.array(reviewSchema).parse(reviews);
// });
