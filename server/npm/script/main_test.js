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
const dntShim = __importStar(require("./_dnt.test_shims.js"));
const app_js_1 = require("./app.js");
const hono_1 = require("hono");
const testDeps_js_1 = require("./testDeps.js");
const testing_1 = require("hono/testing");
dntShim.Deno.test('smokes', async () => {
    const app = new hono_1.Hono();
    app.get('/', (c) => c.text('Please test me'));
    const res = await app.request('http://localhost/');
    (0, testDeps_js_1.assertEquals)(res.status, 200);
});
dntShim.Deno.test('Hello World', async () => {
    const app = app_js_1.BattleAcesFanRoutes;
    // const grr = hc<AppType>('http://localhost/')
    const client = (0, testing_1.testClient)(app);
    // this throws due to connection refused
    const t = await client.author.$post({
        json: {
            age: 25,
            name: 'John Doe',
            hairColor: 'brown'
        }
    });
    console.log('t', t);
    // this works
    // const postRes = await app.request('http://localhost/author', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: 'John Doe',
    //         age: 25
    //     })
    // })
    // // console.log('res', await getRes.text())
    // console.log('res', await postRes.json())
});
