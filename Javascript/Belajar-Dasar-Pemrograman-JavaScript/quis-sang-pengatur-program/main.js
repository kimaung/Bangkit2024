function categorizeNumber(input) {
  // 1. Jika input bukan number, bangkitkan (throw) error.
  if (typeof input !== "number") {
    throw new Error("Input harus berupa bilangan bulat");
  }

  // 2. Jika input adalah nol, kembalikan "Nol".
  if (input === 0) {
    return "Nol";
  }

  // 3. Jika input negatif, kembalikan "Negatif".
  if (input < 0) {
    return "Negatif";
  }

  // 4. Fungsi untuk memeriksa apakah bilangan prima
  function isPrime(num) {
    if (num < 2) return false; // Bilangan kurang dari 2 bukan prima
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 5. Jika input adalah bilangan prima, kembalikan "Prima".
  if (isPrime(input)) {
    return "Prima";
  }

  // 6. Jika input adalah bilangan genap, kembalikan "Genap".
  if (input % 2 === 0) {
    return "Genap";
  }

  // 7. Jika input adalah bilangan ganjil, kembalikan "Ganjil".
  return "Ganjil";
}

// Contoh penggunaan
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
  categorizeNumber("abc");
} catch (error) {
  console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}
