# Kebijakan Privasi & Hapus Akun — Aplikasi MesranBaru

Halaman resmi milik **Toko Mesran Baru Motor Sengkang** untuk aplikasi
MesranBaru (`com.jev123.MesranBaru`), sebagaimana disyaratkan Google Play.

| Halaman | Alamat |
|---|---|
| Halaman depan | https://jev123198.github.io/mesranbaru-legal |
| Kebijakan Privasi | https://jev123198.github.io/mesranbaru-legal/privacy-policy.html |
| Hapus Akun | https://jev123198.github.io/mesranbaru-legal/hapus-akun.html |

Halaman-halaman inilah yang dibaca Google dan pelanggan. **Tidak ada salinan
lain di mana pun** — kalau ada yang perlu diubah, ubahnya di sini.

---

## Mau mengubah alamat, email, nomor WhatsApp, atau tanggal?

**Buka `shop-details.js`. Hanya itu.**

Di dalamnya ada lima baris. Ubah teks di antara tanda kutip `" "`, simpan,
selesai. Ketiga halaman langsung ikut berubah — bagian Indonesia maupun bagian
Inggris, semuanya sekaligus.

```
  alamat:       alamat lengkap toko
  email:        email yang benar-benar dibaca
  whatsapp:     nomor WhatsApp toko
  berlakuSejak: tanggal halaman mulai berlaku
  diperbarui:   tanggal terakhir halaman diubah
```

Satu-satunya aturan: **jangan hapus tanda kutip dan tanda koma.**

```
  BENAR  ->  alamat: "Jl. R.A. Kartini No. 108, Sengkang",
  SALAH  ->  alamat: Jl. R.A. Kartini No. 108, Sengkang
```

Nomor WhatsApp cukup ditulis sekali dengan cara biasa. Tautan `wa.me` dibuat
otomatis dari nomor itu, jadi tidak perlu ditulis dua kali dan tidak mungkin
berbeda satu sama lain.

**Setiap kali isi halaman diubah, ganti juga tanggal `diperbarui`.** Itulah yang
menunjukkan kepada peninjau Google dan kepada pelanggan bahwa kebijakan ini
masih berlaku. `berlakuSejak` dibiarkan saja kecuali perubahannya besar.

---

## Dua cara menyuntingnya

**1. Langsung di GitHub — tanpa memasang apa pun**

Buka file di halaman repo ini, klik ikon pensil, ubah, lalu klik tombol hijau
**Commit changes**. Sekitar satu menit kemudian halaman yang online ikut
berubah.

**2. Di komputer, lewat VS Code**

Salinan kerjanya ada di `~/Downloads/mesranbaru-legal`. Buka folder itu di
VS Code, ubah, simpan, lalu push.

---

## Isi repo ini

| File | Apa ini | Perlu diubah? |
|---|---|---|
| `shop-details.js` | Detail toko | **Ya — ini saja** |
| `privacy-policy.html` | Kebijakan Privasi (Indonesia + Inggris) | Hanya bila kalimatnya mau diubah |
| `hapus-akun.html` | Halaman permintaan hapus akun | Hanya bila kalimatnya mau diubah |
| `index.html` | Halaman depan berisi tautan ke keduanya | Jarang |

Keempat file **harus selalu berada dalam satu folder yang sama**. Kalau
`shop-details.js` tertinggal, alamat dan email tidak akan muncul di halaman.

---

## Kalau mau mengubah kalimat di halamannya

Boleh, tetapi ada dua hal yang perlu diperhatikan.

- **Ubah kata-katanya, jangan sentuh tanda kurung siku** `< >`. Teks yang
  terlihat orang selalu berada di antara `>` dan `<`.
- **Setiap kalimat ada dua kali** — bahasa Indonesia di bagian atas, bahasa
  Inggris di bagian bawah. Ubah keduanya, atau isinya jadi berbeda.
- Jangan ubah bagian di antara `<style>` dan `</style>` — itu warna dan tata letak.
- Jangan ubah kotak bertanda `data-toko="..."` — itu yang diisi otomatis dari
  `shop-details.js`.
- **Jangan buka file `.html` dengan TextEdit.** TextEdit merusak file HTML saat
  disimpan. Pakai VS Code, atau sunting langsung di GitHub.

---

## Kalau aplikasinya berubah

Kalau aplikasi mulai mengumpulkan data baru — alamat pengiriman, pembayaran,
fitur chat, atau alat analitik — **kebijakan ini harus ikut diubah, dan formulir
Data safety di Play Console juga.** Google membandingkan apa yang dilakukan
aplikasi dengan apa yang dinyatakan di formulir, dan perbedaannya adalah alasan
penolakan yang nyata, termasuk untuk aplikasi yang sudah terbit.

---

Halaman ini memakai JavaScript untuk mengisi detail toko. Semua browser biasa
menjalankannya, termasuk yang dipakai peninjau Google.
