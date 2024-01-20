import { z } from "zod";

export const SignInValidator = z.object({
  email: z
    .string({ required_error: "email field is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "password field is required" })
    .min(6, { message: "password must be at least 6 digits" }),
});

export type SignInCredentials = z.infer<typeof SignInValidator>;
