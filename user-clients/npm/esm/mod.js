import { hc } from "hono/client";
export const UserApiClient = (options) => {
  const client = hc(options.url);
  return client;
};
