"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
const dntShim = __importStar(require("../../../../../_dnt.shims.js"));
const RE_KEY_VALUE = /^\s*(?:export\s+)?(?<key>[^\s=#]+?)\s*=[\ \t]*('\n?(?<notInterpolated>(.|\n)*?)\n?'|"\n?(?<interpolated>(.|\n)*?)\n?"|(?<unquoted>[^\n#]*)) *#*.*$/gm;
const RE_VALID_KEY = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
const RE_EXPAND_VALUE = /(\${(?<inBrackets>.+?)(\:-(?<inBracketsDefault>.+))?}|(?<!\\)\$(?<notInBrackets>\w+)(\:-(?<notInBracketsDefault>.+))?)/g;
function expandCharacters(str) {
    const charactersMap = {
        "\\n": "\n",
        "\\r": "\r",
        "\\t": "\t",
    };
    return str.replace(/\\([nrt])/g, ($1) => charactersMap[$1] ?? "");
}
function expand(str, variablesMap) {
    if (RE_EXPAND_VALUE.test(str)) {
        return expand(str.replace(RE_EXPAND_VALUE, function (...params) {
            const { inBrackets, inBracketsDefault, notInBrackets, notInBracketsDefault, } = params[params.length - 1];
            const expandValue = inBrackets || notInBrackets;
            const defaultValue = inBracketsDefault || notInBracketsDefault;
            let value = variablesMap[expandValue];
            if (value === undefined) {
                value = dntShim.Deno.env.get(expandValue);
            }
            return value === undefined ? expand(defaultValue, variablesMap) : value;
        }), variablesMap);
    }
    else {
        return str;
    }
}
/**
 * Parse `.env` file output in an object.
 *
 * Note: The key needs to match the pattern /^[a-zA-Z_][a-zA-Z0-9_]*$/.
 *
 * @example Usage
 * ```ts
 * import { parse } from "@std/dotenv/parse";
 * import { assertEquals } from "@std/assert";
 *
 * const env = parse("GREETING=hello world");
 * assertEquals(env, { GREETING: "hello world" });
 * ```
 *
 * @param text The text to parse.
 * @returns The parsed object.
 */
function parse(text) {
    const env = {};
    let match;
    const keysForExpandCheck = [];
    while ((match = RE_KEY_VALUE.exec(text)) !== null) {
        const { key, interpolated, notInterpolated, unquoted } = match
            ?.groups;
        if (!RE_VALID_KEY.test(key)) {
            console.warn(`Ignored the key "${key}" as it is not a valid identifier: The key need to match the pattern /^[a-zA-Z_][a-zA-Z0-9_]*$/.`);
            continue;
        }
        if (unquoted) {
            keysForExpandCheck.push(key);
        }
        env[key] = typeof notInterpolated === "string"
            ? notInterpolated
            : typeof interpolated === "string"
                ? expandCharacters(interpolated)
                : unquoted.trim();
    }
    //https://github.com/motdotla/dotenv-expand/blob/ed5fea5bf517a09fd743ce2c63150e88c8a5f6d1/lib/main.js#L23
    const variablesMap = { ...env };
    keysForExpandCheck.forEach((key) => {
        env[key] = expand(env[key], variablesMap);
    });
    return env;
}
