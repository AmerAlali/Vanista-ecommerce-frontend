import { z } from "zod";

export const SignUpValidator = z.object({
  email: z
    .string({ required_error: "email field is required" })
    .email({ message: "Please enter a valid email" }),
  password: z
    .string({ required_error: "password field is required" })
    .min(6, { message: "password must be at least 6 digits" }),
  name: z
    .string({ required_error: "Name field is Required" })
    .min(3, { message: "Name must be at least 3 digits" }),
});

export type SignUpCredentials = z.infer<typeof SignUpValidator>;
