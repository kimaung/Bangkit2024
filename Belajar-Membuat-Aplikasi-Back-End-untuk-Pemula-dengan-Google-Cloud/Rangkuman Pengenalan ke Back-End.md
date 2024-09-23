# Pengertian Back-End

Dalam pengembangan aplikasi, istilah **Front-End** dan **Back-End** sering terdengar, terutama bagi mereka yang baru memasuki dunia pemrograman. Kedua istilah ini merujuk pada dua aspek utama dalam profesi **Software Developer**. Penting untuk memahami perbedaan dan menentukan fokus.

**Front-End** adalah bagian dari aplikasi yang terlihat dan langsung berinteraksi dengan pengguna (end-user). Developer yang menggeluti bidang ini disebut **Front-End Developer**. Mereka bertanggung jawab membangun aplikasi web, mobile, atau desktop yang memiliki tampilan menarik, mudah digunakan, dan berperforma baik.

Sebaliknya, **Back-End** adalah bagian aplikasi yang bekerja di belakang layar untuk memastikan data disimpan, diolah, dan dikelola dengan aman. Back-End mendukung Front-End agar berfungsi dengan baik. Developer yang fokus di sini dikenal sebagai **Back-End Developer**.

---

# Web Server dan Web Service

Untuk membangun sistem aplikasi, diperlukan program yang dijalankan untuk memenuhi kebutuhan bisnis. Program ini disimpan di server dan bisa diakses melalui internet atau intranet. Agar aplikasi Front-End dan Back-End dapat berkomunikasi, kita memerlukan dua komponen penting:

1. **Web Server**: Server yang menjalankan program dan bisa diakses secara remote melalui internet atau intranet.
2. **Web Service**: Program yang dijalankan di web server untuk menjalankan logika bisnis. Web service menghubungkan aplikasi Front-End (client) dengan Back-End.

Web service dijalankan di web server dan bisa diakses melalui internet untuk memfasilitasi komunikasi antara client dan server.

---

# Komunikasi Client-Server

Dalam komunikasi melalui protokol HTTP, client mengirimkan request ke server yang harus memiliki informasi cukup agar dapat diproses. Beberapa elemen yang terdapat dalam request tersebut adalah:

- **Request Line**: Mengandung method (seperti GET, POST, PUT, DELETE), path, dan versi HTTP.
- **Header**: Berisi informasi tambahan seperti format dokumen, kunci akses, dll.
- **Body** (opsional): Data yang diperlukan server, dapat berupa teks atau JSON.

Setiap request akan mendapatkan respons dari server yang terdiri dari:

- **Status Line**: Berisi versi HTTP, status code (tiga digit angka), dan pesan status.
- **Header**: Informasi tambahan terkait respons, seperti format dokumen.
- **Body** (opsional): Data yang dikirim server, bisa berupa HTML, JSON, atau format lain.

---

# REST Web Service

**REST** (REpresentational State Transfer) adalah arsitektur yang banyak digunakan dalam pembangunan web service. Beberapa prinsip penting dari REST API adalah:

1. **Client-Server**: Server merespons permintaan client dengan menggunakan protokol HTTP.
2. **Stateless**: REST API tidak menyimpan status client; semua informasi harus terkandung dalam setiap request.
3. **Cacheable**: Permintaan dapat di-cache agar respons lebih cepat.
4. **Layered**: Arsitektur server bisa kompleks, namun client tidak perlu mengetahui detail tersebut.

Sebelum membangun REST API, penting untuk memahami beberapa konsep kunci, seperti:

- **Format Request dan Response**: Menentukan format data yang dikirim dan diterima.
- **HTTP Verbs/Methods**: Memilih metode HTTP yang tepat (GET, POST, PUT, DELETE).
- **HTTP Response Code**: Menggunakan kode status yang sesuai untuk setiap respons.
- **URL Design**: Mendesain URL yang logis dan mudah diakses.

Dengan memahami semua konsep tersebut, Anda dapat membangun REST API yang efisien dan sesuai standar.

---

# Referensi

1. Paessler, “Server,” Paessler. [Online]. Available: [https://www.paessler.com/it-explained/server](https://www.paessler.com/it-explained/server).
2. IBM, “IBM Knowledge Center,” IBM. [Online]. Available: [https://www.ibm.com/support/knowledgecenter/SSGMCP_5.3.0/com.ibm.cics.ts.internet.doc/topics/dfhtl21.html](https://www.ibm.com/support/knowledgecenter/SSGMCP_5.3.0/com.ibm.cics.ts.internet.doc/topics/dfhtl21.html).
3. Badger, “The name,” Everything curl. [Online]. Available: [https://everything.curl.dev/project/name](https://everything.curl.dev/project/name).
