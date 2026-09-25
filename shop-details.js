/* ==========================================================================
   DETAIL TOKO — SATU-SATUNYA FILE YANG PERLU ANDA UBAH
   --------------------------------------------------------------------------
   Ubah teks di dalam tanda kutip " " di bawah ini.
   Kedua halaman (Kebijakan Privasi dan Hapus Akun) otomatis ikut berubah,
   dalam bahasa Indonesia maupun Inggris.

   ATURANNYA CUMA SATU: jangan hapus tanda kutip dan tanda koma.

      BENAR  ->  alamat: "Jl. Andi Oddang No. 12, Sengkang",
      SALAH  ->  alamat: Jl. Andi Oddang No. 12, Sengkang

   Setelah mengubah, simpan file ini (Cmd + S), lalu buka ulang halamannya
   di browser (tekan Cmd + R) untuk melihat hasilnya.
   ========================================================================== */

var DETAIL_TOKO = {

  // Alamat lengkap toko.
  alamat: "Jl. R.A. Kartini No. 108, Sengkang, Kabupaten Wajo, Sulawesi Selatan",

  // Email yang benar-benar Anda baca. Google dan pelanggan menghubungi lewat sini.
  email: "mesranmotor84@gmail.com",

  // Nomor WhatsApp toko, ditulis seperti yang dibaca orang.
  whatsapp: "+62 853-9853-5358",

  // Tanggal halaman ini mulai berlaku.
  berlakuSejak: "25 September 2026",

  // Tanggal terakhir halaman ini diubah. Ganti setiap kali Anda mengubah isinya.
  diperbarui: "25 September 2026",

};

/* ==========================================================================
   JANGAN UBAH APA PUN DI BAWAH GARIS INI.
   Bagian ini yang menyalin detail di atas ke seluruh halaman.
   ========================================================================== */

(function () {
  function isi() {
    var kotak = document.querySelectorAll("[data-toko]");
    for (var i = 0; i < kotak.length; i++) {
      var kunci = kotak[i].getAttribute("data-toko");
      if (Object.prototype.hasOwnProperty.call(DETAIL_TOKO, kunci)) {
        kotak[i].textContent = DETAIL_TOKO[kunci];
      }
    }
    var surat = document.querySelectorAll("[data-toko-email-link]");
    for (var j = 0; j < surat.length; j++) {
      surat[j].setAttribute("href", "mailto:" + DETAIL_TOKO.email);
      surat[j].textContent = DETAIL_TOKO.email;
    }
    var wa = document.querySelectorAll("[data-toko-wa-link]");
    for (var k = 0; k < wa.length; k++) {
      wa[k].setAttribute(
        "href",
        "https://wa.me/" + DETAIL_TOKO.whatsapp.replace(/[^0-9]/g, "")
      );
      wa[k].textContent = DETAIL_TOKO.whatsapp;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", isi);
  } else {
    isi();
  }
})();
