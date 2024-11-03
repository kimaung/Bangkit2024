function fibonacci(n) {
  // Inisialisasi array dengan dua elemen pertama dari deret Fibonacci
  const result = [0, 1];

  // Menghasilkan deret Fibonacci hingga elemen ke-n
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  // Mengembalikan array berisi deret Fibonacci hingga elemen ke-n
  return result.slice(0, n + 1);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
