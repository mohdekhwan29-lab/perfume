# Argenté Parfum — Laman Web Premium (Silver & Gold)

Laman statik (HTML/CSS/JS sahaja), bento grid, tema hitam + silver + gold, tempahan melalui WhatsApp.

## Struktur
- `index.html` — kandungan laman (hero, koleksi, nota wangian, kenapa kami, 3 langkah, soalan lazim, CTA)
- `css/style.css` — warna (token di `:root`), susun atur, animasi
- `js/main.js` — **nombor WhatsApp** dan **senarai produk/harga**
- `favicon.svg`, `robots.txt`

## Cara tukar
- **Nombor WhatsApp:** `js/main.js` → `WA_NUMBER` (cth. `60123456789`)
- **Produk, nota, harga:** `js/main.js` → `PRODUCTS`. Warna botol: `gold`, `silver`, `rose`, `onyx`
- **Nama jenama:** cari & ganti "Argenté" dalam `index.html` dan `js/main.js`
- **Warna:** `css/style.css` → `:root`

## Deploy
Netlify (seret folder ke app.netlify.com/drop) atau GitHub Pages (Settings → Pages → branch ini, root).

## Perlu disahkan pemilik
Nama jenama, nombor WhatsApp, harga, nota wangian, tempoh penghantaran, cara bayaran, status halal — semuanya **draf/contoh**.
