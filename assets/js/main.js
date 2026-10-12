/* HMRT Medical Clinic — shared layout, language switcher and page behaviour */
(function () {
  "use strict";

  const CLINIC = {
    phone: "+97142655888",
    phoneDisplay: "+971 4 265 5888",
    mobile: "+971567790202",
    mobileDisplay: "+971 56 779 0202",
    whatsapp: "971567790202",
    facebook: "https://www.facebook.com/profile.php?id=100064871582592",
    maps: "https://www.google.com/maps/search/?api=1&query=25.2880101,55.3652862",
  };

  const NAV = [
    { href: "index.html", key: "nav.home", label: "Home", page: "home" },
    { href: "about.html", key: "nav.about", label: "About Us", page: "about" },
    { href: "services.html", key: "nav.services", label: "Services", page: "services" },
    { href: "doctors.html", key: "nav.doctors", label: "Our Doctors", page: "doctors" },
    { href: "contact.html", key: "nav.contact", label: "Contact Us", page: "contact" },
  ];

  const SERVICES = [
    ["surgery", "Oral & Maxillofacial Surgery"],
    ["implants", "Dental Implants"],
    ["cosmetic", "Cosmetic Dentistry"],
    ["ortho", "Orthodontics"],
    ["general", "General & Preventive"],
    ["aesthetics", "Facial Aesthetics"],
  ];

  const LOGO_SVG =
    '<svg class="logo__mark" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M16.5 8.5 18 3.5l3.3 2.6L24 2.5l2.7 3.6L30 3.5l1.5 5z" fill="currentColor" stroke-width="1.6"/>' +
    '<path d="M24 15.5c-3-2.6-6.6-3.7-10.2-2.9C9.4 13.6 7.3 17.4 7.7 22c.3 3.6 1.8 6 3.2 9.2 1.5 3.4 1.9 7.8 3.2 11 .8 1.7 2.8 1.8 3.5.2 1.1-2.6 1.6-6.2 2.7-8.9.6-1.5 2.4-1.5 3.1 0 1.1 2.7 1.6 6.3 2.7 8.9.7 1.6 2.7 1.5 3.5-.2 1.3-3.2 1.7-7.6 3.2-11 1.4-3.2 2.9-5.6 3.2-9.2.4-4.6-1.7-8.4-6.1-9.4-3.6-.8-7.2.3-10.1 2.9z"/>' +
    '<path d="M14.5 19.5c1.8-1.3 4.4-1.4 7 .3" opacity=".55"/></svg>';

  const ICON_FB =
    '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z"/></svg>';
  const ICON_WA =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2S21.8 6.6 21.8 12 17.4 21.8 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.4-1.7A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z"/></svg>';

  const page = document.body.dataset.page || "";
  const t = (key, en) => `<span data-i18n="${key}">${en}</span>`;

  /* ---------- shared chrome ---------- */
  function renderHeader() {
    const mount = document.getElementById("site-header");
    if (!mount) return;
    const links = NAV.map(
      (n) =>
        `<li><a class="nav__link${n.page === page ? " is-active" : ""}" href="${n.href}"${n.page === page ? ' aria-current="page"' : ""}>${t(n.key, n.label)}</a></li>`
    ).join("");

    mount.outerHTML = `
      <div class="topbar">
        <div class="container">
          <div class="topbar__group topbar__group--start">
            <span class="topbar__item"><i data-lucide="clock"></i>${t("top.hours", "Sat – Thu: 11:00 AM – 8:00 PM · Friday closed")}</span>
          </div>
          <div class="topbar__group">
            <a class="topbar__item topbar__hide-md" href="${CLINIC.maps}" target="_blank" rel="noopener"><i data-lucide="map-pin"></i>${t("top.address", "Mai Tower, Amman St, Al Nahda 1, Dubai")}</a>
            <a class="topbar__item" href="tel:${CLINIC.phone}"><i data-lucide="phone"></i><bdi dir="ltr">${CLINIC.phoneDisplay}</bdi></a>
          </div>
        </div>
      </div>
      <header class="header" id="header">
        <div class="container">
          <a class="logo" href="index.html" aria-label="HMRT Medical Clinic — home">
            ${LOGO_SVG}
            <span><span class="logo__name">HM<span>RT</span></span><span class="logo__sub" data-i18n="logo.sub">Medical Clinic</span></span>
          </a>
          <nav class="nav" id="nav" aria-label="Main">
            <ul class="nav__list">${links}</ul>
            <div class="nav__actions">
              <button class="lang-toggle" type="button" data-lang-toggle aria-label="Switch language"><i data-lucide="languages"></i><span data-lang-label>العربية</span></button>
              <a class="btn btn--primary btn--sm" href="contact.html#book">${t("btn.book", "Book Appointment")}</a>
            </div>
          </nav>
          <button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav" data-burger><i data-lucide="menu"></i></button>
        </div>
      </header>`;
  }

  function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount) return;
    const svc = SERVICES.map(
      ([k, en]) => `<li><a href="services.html#${k}">${t("svc." + k + ".t", en)}</a></li>`
    ).join("");
    const quick = NAV.map((n) => `<li><a href="${n.href}">${t(n.key, n.label)}</a></li>`).join("");

    mount.outerHTML = `
      <section class="cta-band">
        <div class="container">
          <div class="cta-band__lead">
            <span class="cta-band__icon"><i data-lucide="calendar-check"></i></span>
            <div>
              <h2 data-i18n="cta.title">Ready for a Healthier, Brighter Smile?</h2>
              <p data-i18n="cta.text">Book your visit today — call us or send us a message on WhatsApp.</p>
            </div>
          </div>
          <div class="cta-band__btns">
            <a class="btn btn--white" href="contact.html#book">${t("btn.book", "Book Appointment")}<i data-lucide="arrow-right"></i></a>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="container footer__grid">
          <div>
            <a class="logo" href="index.html" aria-label="HMRT Medical Clinic — home">
              ${LOGO_SVG}
              <span><span class="logo__name">HM<span>RT</span></span><span class="logo__sub" data-i18n="logo.sub">Medical Clinic</span></span>
            </a>
            <p class="footer__about" data-i18n="footer.about">Healthcare &amp; Medical Royal Treatment — expert dental, oral surgery and aesthetic care in Al Nahda, Dubai, since 2006.</p>
            <div class="socials">
              <a href="${CLINIC.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICON_FB}</a>
              <a href="https://wa.me/${CLINIC.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICON_WA.replace("<svg ", '<svg width="16" height="16" ')}</a>
              <a href="${CLINIC.maps}" target="_blank" rel="noopener" aria-label="Google Maps"><i data-lucide="map-pin"></i></a>
            </div>
          </div>
          <div>
            <h4 data-i18n="footer.quick">Quick Links</h4>
            <ul>${quick}</ul>
          </div>
          <div>
            <h4 data-i18n="footer.services">Services</h4>
            <ul>${svc}</ul>
          </div>
          <div>
            <h4 data-i18n="footer.contact">Contact Us</h4>
            <ul class="footer__contact">
              <li><i data-lucide="map-pin"></i><span data-i18n="footer.address">Office 1107–1108, Mai Tower, Amman Street, Al Nahda 1, Dubai, UAE</span></li>
              <li><i data-lucide="phone"></i><a href="tel:${CLINIC.phone}"><bdi dir="ltr">${CLINIC.phoneDisplay}</bdi></a></li>
              <li><i data-lucide="smartphone"></i><a href="tel:${CLINIC.mobile}"><bdi dir="ltr">${CLINIC.mobileDisplay}</bdi></a></li>
            </ul>
          </div>
          <div>
            <h4 data-i18n="footer.hours">Opening Hours</h4>
            <ul class="footer__hours">
              <li>${t("day.satthu", "Sat – Thu")}<span><bdi dir="ltr">11:00 – 20:00</bdi></span></li>
              <li>${t("day.fri", "Friday")}${t("hours.closed", "Closed")}</li>
            </ul>
            <p style="margin-top:16px" data-open-status></p>
          </div>
        </div>
        <div class="footer__bottom">
          <div class="container">
            <span data-i18n="footer.rights">© 2026 HMRT Medical Clinic — Healthcare &amp; Medical Royal Treatment. All rights reserved.</span>
            <span data-i18n="footer.insured">Accepting major UAE insurance plans</span>
          </div>
        </div>
      </footer>
      <a class="wa-float" href="https://wa.me/${CLINIC.whatsapp}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${ICON_WA}</a>`;
  }

  /* ---------- language ---------- */
  const LANG_KEY = "hmrt-lang";
  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) || "en";
    } catch (e) {
      return "en";
    }
  }
  function setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* storage unavailable — language still switches for this view */
    }
    applyLang(lang);
  }

  function applyLang(lang) {
    const dict = (window.HMRT_I18N && window.HMRT_I18N.ar) || {};
    const ar = lang === "ar";
    document.documentElement.lang = ar ? "ar" : "en";
    document.documentElement.dir = ar ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      const key = el.dataset.i18n;
      el.innerHTML = ar && dict[key] !== undefined ? dict[key] : el.dataset.en;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      if (el.dataset.enPh === undefined) el.dataset.enPh = el.placeholder;
      const key = el.dataset.i18nPh;
      el.placeholder = ar && dict[key] !== undefined ? dict[key] : el.dataset.enPh;
    });

    const titleEl = document.querySelector("title");
    if (titleEl) {
      if (!titleEl.dataset.en) titleEl.dataset.en = titleEl.textContent;
      titleEl.textContent = ar && document.body.dataset.titleAr ? document.body.dataset.titleAr : titleEl.dataset.en;
    }
    document.querySelectorAll("[data-lang-label]").forEach((el) => (el.textContent = ar ? "English" : "العربية"));

    updateOpenStatus();
    if (window.lucide) window.lucide.createIcons();
  }

  /* ---------- open / closed (Dubai time) ---------- */
  function dubaiNow() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Dubai",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    return { day: get("weekday"), minutes: (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10) };
  }

  function updateOpenStatus() {
    const ar = document.documentElement.lang === "ar";
    const { day, minutes } = dubaiNow();
    const open = day !== "Fri" && minutes >= 11 * 60 && minutes < 20 * 60;
    const label = open ? (ar ? "مفتوح الآن" : "Open now") : ar ? "مغلق الآن" : "Closed now";
    document.querySelectorAll("[data-open-status]").forEach((el) => {
      el.innerHTML = `<span class="open-pill ${open ? "is-open" : "is-closed"}" style="margin:0">${label}</span>`;
    });
    document.querySelectorAll("[data-day]").forEach((row) => {
      row.classList.toggle("is-today", row.dataset.day.split(",").includes(day));
    });
  }

  /* ---------- behaviour ---------- */
  function initHeader() {
    const header = document.getElementById("header");
    const nav = document.getElementById("nav");
    const burger = document.querySelector("[data-burger]");
    if (header) {
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    if (burger && nav) {
      burger.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", String(open));
        burger.innerHTML = `<i data-lucide="${open ? "x" : "menu"}"></i>`;
        if (window.lucide) window.lucide.createIcons();
      });
    }
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) =>
      btn.addEventListener("click", () => setLang(document.documentElement.lang === "ar" ? "en" : "ar"))
    );
  }

  function initSliders() {
    document.querySelectorAll("[data-slider]").forEach((slider) => {
      const viewport = slider.querySelector(".slider__viewport");
      const step = (dir) => {
        const card = viewport.querySelector(".testimonial");
        const amount = card ? card.getBoundingClientRect().width + 22 : viewport.clientWidth;
        const rtl = document.documentElement.dir === "rtl";
        viewport.scrollBy({ left: amount * dir * (rtl ? -1 : 1), behavior: "smooth" });
      };
      slider.querySelector("[data-prev]").addEventListener("click", () => step(-1));
      slider.querySelector("[data-next]").addEventListener("click", () => step(1));
    });
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));
  }

  function initBookingForm() {
    const form = document.getElementById("booking-form");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const d = new FormData(form);
      const ar = document.documentElement.lang === "ar";
      const lines = ar
        ? [
            "مرحباً عيادة HMRT، أرغب في حجز موعد.",
            `الاسم: ${d.get("name")}`,
            `الهاتف: ${d.get("phone")}`,
            `الخدمة: ${d.get("service")}`,
            d.get("date") ? `التاريخ المفضل: ${d.get("date")}` : "",
            d.get("message") ? `ملاحظات: ${d.get("message")}` : "",
          ]
        : [
            "Hello HMRT Medical Clinic, I would like to book an appointment.",
            `Name: ${d.get("name")}`,
            `Phone: ${d.get("phone")}`,
            `Service: ${d.get("service")}`,
            d.get("date") ? `Preferred date: ${d.get("date")}` : "",
            d.get("message") ? `Notes: ${d.get("message")}` : "",
          ];
      const text = encodeURIComponent(lines.filter(Boolean).join("\n"));
      window.open(`https://wa.me/${CLINIC.whatsapp}?text=${text}`, "_blank", "noopener");
    });
  }

  /* ---------- boot ---------- */
  renderHeader();
  renderFooter();
  initHeader();
  initSliders();
  initReveal();
  initBookingForm();
  applyLang(getLang());
  setInterval(updateOpenStatus, 60 * 1000);
})();
