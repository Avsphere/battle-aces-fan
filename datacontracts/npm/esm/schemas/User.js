import { z } from "zod";
export const UserSchema = z.object({
  _id: z.string(),
  ips: z.array(z.string()),
  createdAt: z.number(),
  lastUpdatedAt: z.number(),
  battleAcesUsername: z.string().optional(),
});
export class User {
  constructor(data) {
    Object.defineProperty(this, "data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: data,
    });
  }
  get id() {
    return this.data._id;
  }
}
Object.defineProperty(User, "parse", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: (data) => new User(UserSchema.parse(data)),
});
