import { config } from "dotenv"
config()

import { z } from 'zod'

const envVariables = z.object({
  PORT: z.string().optional(),
})

export const env = envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}