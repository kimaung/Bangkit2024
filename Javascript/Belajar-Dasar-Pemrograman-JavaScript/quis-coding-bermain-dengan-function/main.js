// 1. Buatlah sebuah fungsi bernama `hello` yang menerima 2 argumen: `name` dan `origin`.
function hello(name, origin = "Bandung") {
  // 2. Kembalikan fungsi tersebut dengan nilai string sesuai format yang diminta
  return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

// 4. Buat variabel bernama `rahmat` yang menampung nilai dari hasil pemanggilan fungsi `hello`
const rahmat = hello("Rahmat", "Semarang");

// 5. Buat variabel bernama `indra` yang menampung nilai dari hasil pemanggilan fungsi `hello` tanpa nilai `origin`
const indra = hello("Indra");

// Menampilkan hasil
console.log(rahmat); // Output: "Halo! Nama saya Rahmat. Saya tinggal di Semarang."
console.log(indra); // Output: "Halo! Nama saya Indra. Saya tinggal di Bandung."
