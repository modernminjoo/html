import { parse } from "kordoc";
window.kordocParse = async (arrayBuffer) => parse(new Uint8Array(arrayBuffer));
