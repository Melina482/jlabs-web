import { z } from "zod";

export const UserInfoSchema = z.object({
  userId: z.int(),
  name: z.string(),
  email: z.email(),
});

export type UserInfoType = z.infer<typeof UserInfoSchema>;
