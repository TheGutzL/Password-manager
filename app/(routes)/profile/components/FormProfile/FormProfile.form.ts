import { z } from "zod";

export const formProfileSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  profileImage: z.string(),
  username: z.string().min(2).max(50),
  id: z.string(),
});

export type FormProfileSchema = z.infer<typeof formProfileSchema>;

export const defaultValues: FormProfileSchema = {
  name: "",
  email: "",
  profileImage: "",
  username: "",
  id: "",
};
