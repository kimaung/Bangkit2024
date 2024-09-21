// TODO:
// 1. Impor fungsi unique dari utils.mjs secara default
// 2. Impor fungsi splitString dari utils.mjs secara named

import unique from "./utils.mjs"; // Impor default untuk fungsi unique
import { splitString } from "./utils.mjs"; // Impor named untuk fungsi splitString

const string = "saippuakivikauppias";
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);
