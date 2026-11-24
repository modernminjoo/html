import { Buffer } from "buffer";
globalThis.Buffer = globalThis.Buffer || Buffer;
globalThis.process = globalThis.process || { env: {}, platform: "browser", versions: {}, cwd: () => "/", nextTick: (f,...a) => Promise.resolve().then(() => f(...a)), emitWarning(){} };
export { Buffer };
