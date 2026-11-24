const no = n => (..._a) => { throw new Error("브라우저에서는 지원하지 않는 기능: " + n); };
export const readFileSync = no("fs"), existsSync = () => false, statSync = no("fs"), readlinkSync = no("fs"), realpathSync = no("fs"), createReadStream = no("fs"), createWriteStream = no("fs");
export const constants = {};
export const readFile = no("fs"), stat = no("fs"), mkdir = no("fs"), unlink = no("fs"), rename = no("fs"), open = no("fs"), realpath = no("fs"), readdir = no("fs");
export const homedir = () => "/", hostname = () => "browser", platform = () => "browser";
import * as CFB from "cfb";
const MODS = { cfb: CFB.default || CFB };
export const createRequire = () => (m) => { if (MODS[m]) return MODS[m]; throw new Error("브라우저에서는 불러올 수 없음: " + m); };
export const execFileSync = no("child_process");
export const fileURLToPath = (u) => String(u);
export const format = (...a) => a.join(" ");
export class Readable { static from(){ throw new Error("stream 미지원"); } }
export default {};
export const pipeline = no("stream/promises");
