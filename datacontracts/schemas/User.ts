import { z } from "zod";

export const UserSchema = z.object({
  _id: z.string(),
  ips: z.array(z.string()),
  createdAt: z.number(),
  lastUpdatedAt: z.number(),
  battleAcesUsername: z.string().optional(),
});

export type UserSchema = z.infer<typeof UserSchema>;

export class User {
  constructor(readonly data: UserSchema) {}

  static parse = (data: unknown) => new User(UserSchema.parse(data));

  get id() {
    return this.data._id;
  }
}
