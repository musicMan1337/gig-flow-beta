import { z } from "zod"

export const SongSchema = z.object({
  id: z.string(),
  title: z.string(),
  source: z.object({
    game: z.string(),
    platform: z.string(),
    year: z.number(),
  }),
  // ... rest of song schema
})

export type Song = z.infer<typeof SongSchema>
