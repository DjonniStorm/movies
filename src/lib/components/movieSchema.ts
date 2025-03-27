import { z } from 'zod';

export const MovieSchema = z.object({
    id: z.number().transform((val) => val.toString()),
    name: z.string(),
    type: z.string().optional(),
    year: z.number(),
    description: z.string(),
    shortDescription: z.string(),
    ageRating: z.number(),
    poster: z.object({
        url: z.string(),
        previewUrl: z.string(),
    }),
});

export const MoviesArraySchema = z.array(MovieSchema);

export type Movie = z.infer<typeof MovieSchema> & {
    like: boolean;
};
