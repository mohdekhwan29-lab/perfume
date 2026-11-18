/* ===== Argenté Parfum ===== */
(() => {
  // >>> TUKAR NOMBOR WHATSAPP DI SINI (format antarabangsa, tanpa + atau sengkang) <<<
  const WA_NUMBER = "60123456789";

  // >>> SENARAI PRODUK — tukar nama, nota, harga di sini <<<
  // finish: "gold" | "silver" | "rose" | "onyx"
  const PRODUCTS = [
    { name: "Aurum Noir", tag: "Unisex · Oud & Ambar", cat: "unisex", finish: "gold", badge: "Terlaris", feature: true,
      notes: ["Oud", "Ambar", "Safron", "Vanila"],
      desc: "Wangian tandatangan kami — hangat, gelap dan berkarisma. Sesuai untuk malam dan majlis istimewa.", price: 189 },
    { name: "Argent Musk", tag: "Unisex · Musk Bersih", cat: "unisex", finish: "silver",
      notes: ["Musk Putih", "Iris", "Kapas"],
      desc: "Bersih seperti linen baru dicuci. Lembut, sesuai dipakai setiap hari.", price: 159 },
    { name: "Rose d'Or", tag: "Wanita · Bunga", cat: "wanita", finish: "rose", badge: "Baharu",
      notes: ["Mawar Taif", "Lici", "Peoni"],
      desc: "Mawar Taif yang mewah, disentuh manis lici dan peoni.", price: 169 },
    { name: "Onyx Royale", tag: "Lelaki · Kayu", cat: "lelaki", finish: "onyx",
      notes: ["Cendana", "Vetiver", "Lada Hitam"],
      desc: "Kayu berasap dan rempah — maskulin, yakin, tahan lama.", price: 179 },
    { name: "Silver Breeze", tag: "Lelaki · Segar", cat: "lelaki", finish: "silver",
      notes: ["Bergamot", "Garam Laut", "Sage"],
      desc: "Segar seperti angin pantai. Ideal untuk cuaca panas Malaysia.", price: 149 },
    { name: "Golden Vanille", tag: "Wanita · Manis", cat: "wanita", finish: "gold",
      notes: ["Vanila Bourbon", "Tonka", "Karamel"],
      desc: "Manis, lembut dan memeluk — seperti pelukan hangat.", price: 159 },
  ];

  const FINISH = {
    gold:   { a: "#9c7638", b: "#f4dc9f", c: "#d4ad5f", liquid: "#e8b860", cap: ["#3a2a10", "#f4dc9f"] },
    silver: { a: "#7c838e", b: "#ffffff", c: "#c9cfd8", liquid: "#dfe6ee", cap: ["#2a2d33", "#f2f4f7"] },
    rose:   { a: "#9a5d4f", b: "#ffd9c9", c: "#d99a86", liquid: "#f0b6a4", cap: ["#3a1f18", "#f4dc9f"] },
    onyx:   { a: "#111114", b: "#5b5d66", c: "#24242a", liquid: "#3a3a44", cap: ["#3a2a10", "#f4dc9f"] },
  };

  let uid = 0;
  function bottleSVG(finish, label) {
    const f = FINISH[finish] || FINISH.gold;
    const id = "b" + (++uid);
    return `<svg viewBox="0 0 120 200" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="${id}g" x1="0" x2="1"><stop offset="0" stop-color="${f.a}"/><stop offset=".35" stop-color="${f.b}"/><stop offset=".55" stop-color="${f.c}"/><stop offset=".8" stop-color="${f.b}"/><stop offset="1" stop-color="${f.a}"/></linearGradient>
        <linearGradient id="${id}c" x1="0" x2="1"><stop offset="0" stop-color="${f.cap[0]}"/><stop offset=".4" stop-color="${f.cap[1]}"/><stop offset=".7" stop-color="${f.cap[0]}"/><stop offset="1" stop-color="${f.cap[1]}"/></linearGradient>
        <linearGradient id="${id}l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${f.liquid}" stop-opacity=".55"/><stop offset="1" stop-color="${f.liquid}" stop-opacity=".95"/></linearGradient>
      </defs>
      <rect x="44" y="6" width="32" height="34" rx="4" fill="url(#${id}c)"/>
      <rect x="40" y="38" width="40" height="8" rx="2" fill="url(#${id}g)"/>
      <rect x="50" y="46" width="20" height="12" fill="url(#${id}g)" opacity=".85"/>
      <rect x="12" y="58" width="96" height="136" rx="14" fill="url(#${id}g)"/>
      <rect x="20" y="66" width="80" height="120" rx="9" fill="url(#${id}l)"/>
      <rect x="24" y="70" width="8" height="110" rx="4" fill="#fff" opacity=".35"/>
      <rect x="30" y="112" width="60" height="34" rx="3" fill="#0b0b0d" opacity=".82"/>
      <rect x="30.5" y="112.5" width="59" height="33" rx="3" fill="none" stroke="${f.b}" stroke-opacity=".7"/>
      <text x="60" y="128" text-anchor="middle" font-family="Cinzel,serif" font-size="8.5" letter-spacing="1.5" fill="${finish === "silver" ? "#f2f4f7" : "#f4dc9f"}">${label}</text>
      <text x="60" y="139" text-anchor="middle" font-family="Manrope,sans-serif" font-size="4.5" letter-spacing="1.6" fill="#c9cfd8">EAU DE PARFUM</text>
    </svg>`;
  }

  const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  const rm = (n) => `RM${n}`;

  // Render products
  const grid = document.getElementById("products");
  grid.innerHTML = PRODUCTS.map((p) => `
    <article class="tile prod${p.feature ? " prod--feature" : ""} reveal" data-cat="${p.cat}">
      <div class="prod__stage">
        ${p.badge ? `<span class="prod__badge">${p.badge}</span>` : ""}
        <div class="bottle-slot" data-bottle="${p.finish}" data-label="${p.name.split(" ")[0].toUpperCase()}"></div>
      </div>
      <div class="prod__body">
        <p class="prod__tag">${p.tag}</p>
        <h3>${p.name}</h3>
        <p class="prod__desc">${p.desc}</p>
        <ul class="prod__notes" aria-label="Nota wangian">${p.notes.map((n) => `<li>${n}</li>`).join("")}</ul>
        <div class="prod__foot">
          <span class="price">${rm(p.price)}<small>/ 50ml</small></span>
          <a class="btn btn--gold btn--sm" data-wa data-msg="Hai Argenté, saya mahu tempah ${p.name} 50ml (${rm(p.price)})." href="#">Tempah</a>
        </div>
      </div>
    </article>`).join("");

  // Draw all bottles
  document.querySelectorAll(".bottle-slot").forEach((el) => {
    el.innerHTML = bottleSVG(el.dataset.bottle, el.dataset.label || "ARGENTÉ");
  });

  // WhatsApp links
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = waLink(a.dataset.msg || "Hai Argenté!");
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Filters
  const chips = document.querySelectorAll(".chip");
  chips.forEach((c) => c.addEventListener("click", () => {
    chips.forEach((x) => { x.classList.toggle("is-on", x === c); x.setAttribute("aria-pressed", x === c); });
    const f = c.dataset.filter;
    grid.classList.toggle("is-filtered", f !== "all");
    grid.querySelectorAll(".prod").forEach((p) => { p.hidden = f !== "all" && p.dataset.cat !== f; });
  }));

  // Reveal on scroll
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });
  } else {
    items.forEach((el) => el.classList.add("is-in"));
  }

  document.getElementById("yr").textContent = new Date().getFullYear();
})();
