import { API, sampleErrorData, sampleSuccessData } from "./support.mjs";

/**
 * TODO:
 * Lengkapi fungsi processData di bawah ini dengan ketentuan:
 * 1. Mengembalikan data dari pemanggilan API.fetch berdasarkan argumen `data` yang diberikan.
 * 2. Membangkitkan error jika API.fetch mengembalikan Promise reject.
 *
 * Parameter:
 * - `data` merupakan array of object dengan struktur { delay, simulateError }.
 * - Jalankan kode untuk melihat contoh nilai argumen `data`
 */
function processData(data) {
  // Menggunakan Promise.all untuk menangani array of Promises
  return Promise.all(
    data.map(({ delay, simulateError }) =>
      API.fetch(delay, simulateError)
        .then((response) => response) // Jika berhasil, kembalikan responsenya
        .catch((error) => {
          // Jika gagal, lemparkan error
          throw new Error(`Error from delay ${delay}`);
        })
    )
  );
}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log); // expected output: ['Data from delay 100', 'Data from delay 50']
