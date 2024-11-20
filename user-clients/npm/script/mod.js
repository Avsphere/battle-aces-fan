"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApiClient = void 0;
const client_1 = require("hono/client");
const UserApiClient = (options) => {
  const client = (0, client_1.hc)(options.url);
  return client;
};
exports.UserApiClient = UserApiClient;
