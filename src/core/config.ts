import { z } from "zod";
import { Environments } from "../types";

const envSchema = z.object({
  NODE_ENV: z.enum(
    [Environments.LOCAL, Environments.DEVELOPMENT, Environments.PRODUCTION],
    {
      errorMap: () => ({
        message: `NODE_ENV must be either ${Environments.LOCAL}, ${Environments.DEVELOPMENT} or ${Environments.PRODUCTION}`,
      }),
    }
  ),
  PORT: z
    .string()
    .min(1, { message: "PORT is required" })
    .transform((val) => {
      const parsed = parseInt(val, 10);
      if (isNaN(parsed)) {
        throw new Error("PORT must be a valid number");
      }
      return parsed;
    }),
  MONGODB_URI: z.string().url({ message: "MONGODB_URI is required" }),
  DB_NAME: z.string().min(1, { message: "DB_NAME is required" }),
  CLERK_PUBLISHABLE_KEY: z
    .string()
    .min(1, { message: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is required" })
    .startsWith("pk_", {
      message: 'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY must start with "pk_"',
    }),

  CLERK_SECRET_KEY: z
    .string()
    .min(1, { message: "CLERK_SECRET_KEY is required" })
    .startsWith("sk_", { message: 'CLERK_SECRET_KEY must start with "sk_"' }),
});

function validateConfig() {
  try {
    const config = envSchema.parse({
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
      MONGODB_URI: process.env.MONGODB_URI,
      DB_NAME: process.env.DB_NAME,
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
        process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    });

    return config;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(
        "❌ Invalid environment variables:",
        error.errors[0].message
      );
      // terminate the Node.js process, # 0 :Everything is OK, 1 :Something went wrong
      process.exit(1);
    }
    throw error;
  }
}

export const config = validateConfig();
