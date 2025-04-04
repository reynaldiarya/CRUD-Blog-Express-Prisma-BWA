# Express.js CRUD API dengan Prisma

Proyek ini merupakan implementasi dari konsep CRUD (Create, Read, Update, Delete) menggunakan Express.js dan Prisma sebagai ORM. Proyek ini juga mencakup pengelolaan routing serta interaksi dengan database sederhana.

## 📚 Sumber Belajar
Proyek ini dikembangkan berdasarkan kelas dari BuildWithAngga:
[Express JS - Membuat CRUD API Blog Post](https://buildwithangga.com/kelas/express-js-membuat-crud-api-blog-post)

## 🚀 Fitur
- **Create**: Menambahkan data baru ke database
- **Read**: Mengambil dan menampilkan data dari database
- **Update**: Memperbarui data yang sudah ada
- **Delete**: Menghapus data dari database
- **Routing**: Mengelola endpoint API dengan Express.js
- **ORM**: Menggunakan Prisma untuk interaksi dengan database

## 🛠️ Teknologi yang Digunakan
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework untuk membangun server
- **Prisma** - ORM untuk mengelola database
- **SQLite / PostgreSQL / MySQL** - Database yang bisa digunakan

## 🔥 Penggunaan API
Berikut adalah beberapa endpoint utama:
- **GET** `/posts` - Mendapatkan semua postingan
- **POST** `/posts` - Menambahkan postingan baru
- **PUT** `/posts/:id` - Memperbarui postingan berdasarkan ID
- **DELETE** `/posts/:id` - Menghapus postingan berdasarkan ID
