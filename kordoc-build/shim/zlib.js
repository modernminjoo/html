import * as pako from "pako"; import { Buffer } from "buffer";
const B = x => Buffer.from(x);
export const inflateRawSync = (b) => B(pako.inflateRaw(b));
export const inflateSync = (b) => B(pako.inflate(b));
export const deflateRawSync = (b, o) => B(pako.deflateRaw(b, o));
export const deflateSync = (b, o) => B(pako.deflate(b, o));
export default { inflateRawSync, inflateSync, deflateRawSync, deflateSync };
