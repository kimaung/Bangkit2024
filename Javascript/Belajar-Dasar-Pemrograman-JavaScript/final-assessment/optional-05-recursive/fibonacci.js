function fibonacci(n) {
  // Base case: return n if n is 0 or 1
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  // Recursive case: fibonacci(n-1) + fibonacci(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
