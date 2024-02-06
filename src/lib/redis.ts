import { Redis } from "ioredis";

if (!process.env.REDIS_URL) {
  throw new Error("Missing REDIS_URL env var");
}

export const redis = new Redis(process.env.REDIS_URL)
