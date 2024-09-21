// Fungsi splitString
function splitString(string) {
  if (typeof string !== "string") {
    return [];
  }
  return Array.from(string);
}

// Fungsi unique
function unique(array) {
  const set = new Set(array);
  return Array.from(set.values());
}

// TODO:
// 1. Ekspor fungsi splitString secara named export
// 2. Ekspor fungsi unique secara default export

export { splitString }; // Ekspor splitString sebagai named export
export default unique; // Ekspor unique sebagai default export
