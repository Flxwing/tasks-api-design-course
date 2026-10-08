import { z } from 'zod';

export const envSchema = z.object({
  SUPABASE_URL: z.string().min(1, 'SUPABASE_URL es requerida'),
  SUPABASE_SECRET: z.string().min(1, 'SUPABASE_SECRET es requerida'),
  JWT_SECRET: z.string().min(32, 'Debe tener al menos 32 caracteres'),
  JWT_EXPIRES_IN: z.string().default('1h'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment variables', parsed.error.format());
  process.exit(1);
}

export const env = parsed.data;