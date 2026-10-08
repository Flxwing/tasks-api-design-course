import { z } from 'zod';

export const credentialsSchema = z.object({
  email: z.string().trim().toLowerCase().pipe(z.email()).meta({ format: 'email', example: 'ana@test.com' }),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres').max(72).meta({ example: 'supersecreta' }),
});
