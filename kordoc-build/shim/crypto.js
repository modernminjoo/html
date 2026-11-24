// 브라우저용 대체: 캐시 키 등에만 쓰이는 해시는 간단한 FNV로, 암호 기능은 미지원
export function createHash(){ let h1=0x811c9dc5, h2=0x01000193; const o={update(d){ const s=typeof d==="string"?new TextEncoder().encode(d):d; for(let i=0;i<s.length;i++){h1=Math.imul(h1^s[i],16777619)>>>0;h2=Math.imul(h2^s[i],2246822519)>>>0;} return o;}, digest(){ return (h1.toString(16).padStart(8,"0")+h2.toString(16).padStart(8,"0")).repeat(4);} }; return o; }
export const randomUUID = () => globalThis.crypto.randomUUID();
const no = n => () => { throw new Error("브라우저에서는 지원하지 않는 기능: " + n); };
export const createCipheriv = no("createCipheriv"), createDecipheriv = no("createDecipheriv"), pbkdf2Sync = no("pbkdf2Sync");
export const timingSafeEqual = (a,b) => a.length===b.length && a.every((x,i)=>x===b[i]);
export default { createHash, randomUUID, createCipheriv, createDecipheriv, pbkdf2Sync, timingSafeEqual };
