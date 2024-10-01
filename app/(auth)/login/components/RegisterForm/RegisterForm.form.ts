import { z } from "zod";

export const registerFormSchema = z.object({
  email: z.string().min(2).max(50).email(),
  password: z.string().min(2).max(50),
  username: z.string().min(2).max(50)
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export const defaultValues: RegisterFormSchema = {
  email: "",
  password: "",
  username: ""
};
