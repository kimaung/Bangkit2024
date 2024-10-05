# 📌 Langkah-Langkah Deploy Money Tracker App ke Google Cloud

## 🌟 Langkah 1: Membuat Project Baru di Google Cloud

1. **Masuk ke Google Cloud Console**:

   - Kunjungi [Google Cloud Console](https://console.cloud.google.com/).
   - Login dengan akun Google yang sesuai.

2. **Membuat Project Baru**:

   - Klik ikon **hamburger menu** di kiri atas.
   - Pilih **Manage resources** di bagian Home.
   - Klik tombol **Create Project**.
   - Pada kolom **Project Name**, masukkan nama proyek dengan format `submission-mgce-namapeserta`.
     - Ganti `namapeserta` dengan nama Anda.
   - Pilih **Billing Account** (Jika belum ada, buat akun pembayaran terlebih dahulu).
   - Klik **Create**.

3. **Mengaktifkan API yang Dibutuhkan**:
   - Setelah membuat project, aktifkan beberapa API yang diperlukan:
     - ✅ Cloud Storage API
     - ✅ Cloud SQL API
     - ✅ App Engine Admin API
     - ✅ Compute Engine API
   - Untuk mengaktifkannya:
     - Pergi ke **API & Services** > **Library** di menu Google Cloud Console.
     - Cari setiap API yang disebutkan di atas, lalu klik **Enable** untuk masing-masing.

---

## 🌟 Langkah 2: Memberikan Hak Akses ke Reviewer

1. **Mengatur IAM (Identity and Access Management)**:
   - Di Google Cloud Console, pergi ke menu **IAM & Admin**.
   - Klik tombol **+ Add** di bagian atas untuk menambahkan anggota.
   - Masukkan email: `reviewer_googlecloud@dicoding.com`.
   - Pada bagian **Select a role**, pilih **Viewer**.
     - Ini adalah prinsip **Least Privilege**, memberi hak minimal agar reviewer hanya dapat melihat konfigurasi dan layanan yang Anda gunakan.
   - Klik **Save**.

---

## 🌟 Langkah 3: Deploy Back-End (Node.js API)

### 1. Clone Repository Back-End

- Buka **Cloud Shell** di Google Cloud Console:
  - Klik ikon terminal di kanan atas untuk membuka **Cloud Shell**.
- Clone repository back-end:

  ```bash
  git clone -b money-tracker-api https://github.com/dicodingacademy/a133-gcp-labs.git money-tracker-api
  cd money-tracker-api
  ```

### 2. Buat Service Account untuk Mengakses Cloud Storage

- Di Google Cloud Console, buka **IAM & Admin > Service Accounts**.
- Klik **Create Service Account**.
  - Berikan nama, seperti `money-tracker-storage-access`.
  - Klik **Create and Continue**.
- Pada langkah berikutnya, pilih role **Storage Object Admin**.
  - Klik **Done**.
- Setelah service account dibuat, kembali ke halaman **Service Accounts**, klik **Actions** (ikon titik tiga) di samping nama service account yang baru Anda buat, dan pilih **Manage Keys**.
  - Klik **Add Key** > **Create New Key**.
  - Pilih **JSON** dan download file key JSON.
- Setelah file JSON di-download, buka **Cloud Shell** dan buat file `serviceaccountkey.json` di direktori proyek:

  ```bash
  nano serviceaccountkey.json
  ```

- Salin isi dari file JSON yang baru di-download dan paste ke dalam file ini.
- Simpan dan keluar dari editor (Ctrl + X, lalu Y untuk menyimpan).

### 3. Buat Cloud Storage Bucket

- Di Google Cloud Console, pergi ke **Cloud Storage > Buckets**.
- Klik **Create Bucket** dan ikuti langkah berikut:
  - **Name**: Masukkan nama bucket yang unik (misal: `money-tracker-uploads`).
  - **Location**: Pilih lokasi yang dekat dengan target pengguna Anda (sesuai dengan arsitektur yang dirancang).
  - **Storage Class**: Pilih **Standard**.
  - Klik **Create**.
- Setelah bucket dibuat, pastikan bucket tersebut dapat diakses publik untuk menyimpan gambar:
  - Klik nama bucket > **Permissions**.
  - Tambahkan member **allUsers** dengan role **Storage Object Viewer** untuk memberi akses publik.
- Kembali ke file `imgUpload.js` di proyek back-end dan masukkan nama bucket dan project ID:

  ```javascript
  const projectId = 'YOUR_PROJECT_ID' // Ganti dengan Project ID
  const bucketName = 'YOUR_BUCKET_NAME' // Ganti dengan nama bucket yang Anda buat
  ```

### 4. Membuat Cloud SQL Instance

- Di Google Cloud Console, pergi ke **SQL > Create Instance**.
- Pilih **MySQL** sebagai jenis database.
  - Berikan nama instance, seperti `money-tracker-sql`.
  - Pilih versi **MySQL 5.7**.
  - Pilih region yang sesuai.
  - Aktifkan **Public IP**.
- Buat user dan password untuk mengakses database.
- Setelah instance siap, buka **Cloud Shell** dan hubungkan ke instance:

  ```bash
  gcloud sql connect money-tracker-sql --user=root
  ```

- Setelah terhubung, buat database baru dan impor skema dari file `create_table.sql`:

  ```sql
  CREATE DATABASE moneytracker;
  USE moneytracker;
  SOURCE create_table.sql;
  ```

- Edit file `record.js` dan masukkan kredensial MySQL:

  ```javascript
  const db = mysql.createPool({
    host: 'YOUR_CLOUD_SQL_PUBLIC_IP', // Ganti dengan Public IP dari Cloud SQL instance
    user: 'root',
    password: 'YOUR_PASSWORD', // Ganti dengan password yang Anda buat
    database: 'moneytracker',
  })
  ```

### 5. Deploy Back-End ke App Engine

- Buat file `app.yaml` di root direktori back-end:

  ```yaml
  runtime: nodejs14
  env: standard
  service: backend
  ```

- Deploy back-end ke App Engine:

  ```bash
  gcloud app deploy
  ```

- Setelah deploy berhasil, catat URL back-end yang muncul di terminal (misal: `https://backend-dot-YOUR_PROJECT_ID.et.r.appspot.com`).

---

## 🌟 Langkah 4: Deploy Front-End (PHP dengan CodeIgniter)

### 1. Clone Repository Front-End

- Buka **Cloud Shell** dan clone repository front-end:

  ```bash
  git clone -b money-tracker https://github.com/dicodingacademy/a133-gcp-labs.git money-tracker
  cd money-tracker
  ```

### 2. Konfigurasi Front-End

- Buka file `Record_model.php` dan tambahkan URL dari back-end yang telah Anda deploy:

  ```php
  'base_uri' => "https://backend-dot-YOUR_PROJECT_ID.et.r.appspot.com",
  ```

- Buka file `config.php` dan tambahkan base URL untuk front-end (ini akan diisi setelah front-end berhasil di-deploy):

  ```php
  $config['base_url'] = 'https://frontend-dot-YOUR_PROJECT_ID.et.r.appspot.com';
  ```

### 3. Deploy Front-End ke App Engine

- Buat file `app.yaml` di root direktori front-end:

  ```yaml
  runtime: php55
  env: standard
  service: frontend
  ```

- Deploy front-end ke App Engine:

  ```bash
  gcloud app deploy
  ```

- Setelah deploy berhasil, catat URL front-end yang muncul di terminal.

---

## 🌟 Langkah 5: Menerapkan Lifecycle Management pada Cloud Storage

1. **Buka Cloud Storage di Google Cloud Console**.
2. **Pilih bucket yang Anda buat untuk menyimpan gambar**.
3. **Pergi ke tab Lifecycle**.
   - Tambahkan aturan untuk menghapus objek setelah 30 hari atau sesuai kebutuhan.
   - Klik **Save**.

---

## 🌟 Langkah 6: Pengisian Berkas `project.json`

1. **Buat file `project.json` di root direktori proyek dengan format berikut**:

   ```json
   {
     "project_name": "submission-mgce-namapeserta",
     "url_fe": "URL aplikasi front-end",
     "url_be": "URL aplikasi back-end",
     "bucket_name": "Nama Cloud Storage bucket"
   }
   ```

2. **Isi dengan informasi yang sesuai**.

3. **Zip direktori yang berisi file `project.json`**:

   ```bash
   zip -r submission.zip project.json
   ```

---

## 🌟 Langkah 7: Pengiriman Submission

1. **Upload file `submission.zip` ke platform sesuai ketentuan**.
2. **Pastikan semua URL dan fitur aplikasi berjalan dengan baik sebelum mengirimkan submission**.

🚀 **Jika Anda mengikuti langkah-langkah ini dengan tepat, proyek Anda akan siap untuk dinilai. Jika ada yang masih membingungkan, jangan ragu untuk bertanya!** 🚀
