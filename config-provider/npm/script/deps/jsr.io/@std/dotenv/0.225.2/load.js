"use strict";
var __createBinding = (this && this.__createBinding) ||
  (Object.create
    ? (function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (
        !desc ||
        ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
      ) {
        desc = {
          enumerable: true,
          get: function () {
            return m[k];
          },
        };
      }
      Object.defineProperty(o, k2, desc);
    })
    : (function (o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }));
var __setModuleDefault = (this && this.__setModuleDefault) ||
  (Object.create
    ? (function (o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    })
    : function (o, v) {
      o["default"] = v;
    });
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) {
      if (
        k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)
      ) __createBinding(result, mod, k);
    }
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
const dntShim = __importStar(require("../../../../../_dnt.shims.js"));
const mod_js_1 = require("./mod.js");
if (!(dntShim.Deno.readTextFileSync instanceof Function)) {
  // Avoid errors that occur in deno deploy: https://github.com/denoland/deno_std/issues/1957
  console.warn(
    `Deno.readTextFileSync is not a function: No .env data was read.`,
  );
} else {
  (0, mod_js_1.loadSync)({ export: true });
}
