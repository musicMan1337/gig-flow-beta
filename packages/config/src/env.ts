import { z } from "zod"

export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  AUTH_SECRET: z.string().min(1),
  CLAUDE_API_KEY: z.string().min(1),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  APP_NAME: z.string().min(1),
  APP_URL: z.string().url(),
  API_URL: z.string().url(),
})

export const clientSchema = z.object({
  APP_NAME: z.string().min(1),
  APP_URL: z.string().url(),
  API_URL: z.string().url(),
})

export const formatEnvForServer = () => {
  const parsed = serverSchema.safeParse(process.env)

  if (!parsed.success) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    )
    throw new Error("Invalid environment variables")
  }

  return parsed.data
}

export const formatEnvForClient = () => {
  const parsed = clientSchema.safeParse({
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL,
  })

  if (!parsed.success) {
    console.error(
      "❌ Invalid public environment variables:",
      parsed.error.flatten().fieldErrors,
    )
    throw new Error("Invalid environment variables")
  }

  return parsed.data
}
