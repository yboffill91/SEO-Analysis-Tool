import { z } from "zod";

export const urlSchema = z.object({
  url: z
    .string()
    .regex(
      /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/,
      "URL Must be a valid website, ex: www.ejemplo.com"
    )
    .min(2, "Please enter a valid URL")
    .max(2048, "URL is too long"),
});

export type URL = z.infer<typeof urlSchema>;
