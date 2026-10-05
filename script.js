/* ==========================================================================
   Seif Eddine Toureche — Portfolio
   --------------------------------------------------------------------------
   EDIT THE DATA BELOW to update the site. No other code needs to change.

   1. siteConfig  → name, email, phone, location
   2. stats       → the animated numbers in the About section
   3. projects    → video cards in "Selected Work"
   4. featured    → the large "Featured Story" video
   5. events      → "Events & Experiences" cards
   6. gallery     → "Moments" photo grid + lightbox
   7. socials     → social media cards

   Where to put real files:
     assets/images/hero.jpg, profile.jpg   → portraits
     assets/images/projects/               → video thumbnails
     assets/images/events/                 → event photos
     assets/images/gallery/                → gallery photos
     assets/videos/                        → .mp4 files
   ========================================================================== */


/* ==========================================================================
   DATA
   ========================================================================== */

/* 1. Site configuration ---------------------------------------------------- */
const siteConfig = {
    name: "Seif Eddine Toureche",
    email: "seifeddinetoureche@gmail.com",          // ← replace with the real email
    phone: "+213 675 64 96 18",          // ← replace with the real phone number
    location: "Skikda"                  // ← replace if needed
};

/* 2. Statistics -------------------------------------------------------------
   Use `value` + `suffix` for animated counters, or `symbol` for a static one. */
const stats = [
    { value: 100, suffix: "+", label: "Content Pieces" },
    { value: 20,  suffix: "+", label: "Events" },
    { value: 10,  suffix: "+", label: "Cities / Experiences" },
    { symbol: "∞",             label: "Ideas & Stories" }
];

/* 3. Projects ---------------------------------------------------------------
   PLACEHOLDER_VIDEO is a sample clip so the modal works out of the box.
   To use your own video, replace `video` with a local path such as
   "assets/videos/video-01.mp4" (or a direct .mp4 link).                      */
const PLACEHOLDER_VIDEO = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const projects = [
    {
        title: "الجائزة الوطنية للإبداع والتميز",
        category: "Creativity",
        thumbnail: "assets/images/projects/project-01.png",
        video: "assets/videos/video-01.mp4",        // → "assets/videos/video-01.mp4"
        description: "الحصول على المرتبة الأولى وطنياً في مسابقة أفضل عمل إعلامي ترويجي سياحي في الجزائر، ضمن منافسة ضمّت أكثر من 480 عملاً"
    },
    {
        title: "الترويج السياحي و المعارض الدولية",
        category: "Collaborations",
        thumbnail: "assets/images/projects/project-02.jpg",
        video: "assets/videos/video-02.mp4",        // → "assets/videos/video-02.mp4"
        description: "محتوى يروج للوجهات و المعالم و التراث و الهوية الثقافية الجزائرية."
    },
    {
        title: "الاعلانات و المحتوى التجاري  ",
        category: "Collaborations",
        thumbnail: "assets/images/projects/project-03.jpg",
        video: "assets/videos/video-03.mp4",        // → "assets/videos/video-03.mp4"
        description: "انتاج فيديوهات ترويجية اعلانية للشركات و اعلانات تجارية ومحتوى تسويقي للمؤسسات الخاصة"
    },
    {
        title: "Ines-compitition-English",
        category: "Compititions",
        thumbnail: "assets/images/projects/project-04.jpg",
        video: "assets/videos/video-04.mp4",
        description: "فعاليات تجمع الشباب وأصحاب المشاريع والمبدعين في فضاء تفاعلي يركز على ريادة الأعمال، الابتكار وتبادل الخبرات."
    },
    {
        title: "الصالون الدولي للمراة الحرفية",
        category: "احياء تراث",
        thumbnail: "assets/images/projects/project-05.jpg",
        video: "assets/videos/video-05.mp4",
        description: "فعالية دولية احتفت بإبداعات المرأة الحرفية، وجمعت مشاركات من عدة دول لعرض المنتجات التقليدية وتبادل الخبرات والثقافات، في إطار يعزز حضور المرأة ودورها في مجال الصناعة التقليدية."
    },
    {
        title: "اشهار للاماكن السياحية",
        category: "Travel",
        thumbnail: "assets/images/projects/project-06.jpg",
        video: "assets/videos/video-06.mp4",
        description: "يهدف هذا الاشهار الى اعطاء لمحة عن الاماكن السياحية و الظروف المناسبة للخرجات العائلية"
    }
];

/* 4. Featured video -------------------------------------------------------- */
const featured = {
    title: "The Story Behind The Journey",
    category: "Featured Story",
    thumbnail: "assets/images/projects/featured.png",
    video: "assets/videos/featured.mp4",           // → "assets/videos/featured.mp4"
    description: "A cinematic look at the moments, people and lessons that shaped the journey — and why sharing them matters."
};

/* 5. Events (placeholder examples — replace with real events) -------------- */
const events = [
    {
        name: "Salon International de la Femme Artisanale",
        location: "Niamey",
        country: "Niger",
        year: "2024",
        image: "assets/images/events/event-01.jpg",
        description: "فعالية دولية احتفت بإبداعات المرأة الحرفية، وجمعت مشاركات من عدة دول لعرض المنتجات التقليدية وتبادل الخبرات والثقافات، في إطار يعزز حضور المرأة ودورها في مجال الصناعة التقليدية"
    },
    {
        name: "معرض تراثنا",
        location: "القاهرة",
        country: "مصر",
        year: "2025",
        image: "assets/images/events/event-02.jpg",
        description: "معرض متخصص في الحرف اليدوية والصناعات التراثية، يجمع الحرفيين والمبدعين لعرض أعمالهم ومنتجاتهم، والتعريف بالتراث الثقافي، إلى جانب تعزيز فرص التسويق والتبادل والتعاون بين المشاركين"
    },
    {
        name: "Startera – INES Co-working & Incubator",
        location: "Skikda",
        country: "Algeria",
        year: "2025",
        image: "assets/images/events/event-03.jpg",
        description: "فعاليات تجمع الشباب وأصحاب المشاريع والمبدعين في فضاء تفاعلي يركز على ريادة الأعمال، الابتكار وتبادل الخبرات، من خلال لقاءات وأنشطة تهدف إلى بناء شبكة من العلاقات وتشجيع الأفكار والمبادرات الجديدة"
    }
];

/* 6. Gallery ----------------------------------------------------------------
   Different image heights create the masonry effect.                         */
const gallery = [
    { src: "assets/images/gallery/gallery-01.jpg", alt: "Photo from an event",               label: "Events",            width: 800, height: 1000 },
    { src: "assets/images/gallery/gallery-02.jpg", alt: "Behind the scenes of a video shoot", label: "Behind the scenes", width: 800, height: 560 },
    { src: "assets/images/gallery/gallery-03.jpg", alt: "Content creation in progress",       label: "Content creation",  width: 800, height: 800 },
    { src: "assets/images/gallery/gallery-04.jpg", alt: "Travel moment abroad",               label: "Travel",            width: 800, height: 1100 },
    { src: "assets/images/gallery/gallery-05.jpg", alt: "Public appearance on stage",         label: "Public appearance", width: 800, height: 600 },
    { src: "assets/images/gallery/gallery-06.jpg", alt: "Collaboration with other creators",  label: "Certificates",     width: 800, height: 900 },
    { src: "assets/images/gallery/gallery-07.jpg", alt: "Event audience and atmosphere",      label: "Daily life ",            width: 800, height: 700 },
    { src: "assets/images/gallery/gallery-08.jpg", alt: "Academic aspect",        label: "Academic aspect ",            width: 800, height: 1000 }
];

/* 7. Social media (replace USERNAME and links with the real ones) ---------- */
const socials = [
    { key: "instagram", name: "Instagram", url: "https://www.instagram.com/saiftoureche?stkn=ZTh5YW1jN3A3b2lu",           text: "Daily stories and behind the scenes." },
    { key: "tiktok",    name: "TikTok",    url: "https://www.tiktok.com/@saifeddtoureche?_r=1&_t=ZS-9AFpctFwUIW",             text: "Short motivational videos." },
    { key: "facebook",  name: "Facebook",  url: "https://www.facebook.com/share/1Eom8pRu9A/",            text: "Updates, events and community." },
    { key: "linkedin",  name: "LinkedIn",  url: "https://www.linkedin.com/in/saif-toureche-624620310?utm_source=share_via&utm_content=profile&utm_medium=member_android",         text: "Professional journey and collaborations." }
];


/* ==========================================================================
   ICONS (inline SVG, stroke-based so they inherit the accent color)
   ========================================================================== */
const svgAttrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';

const icons = {
    instagram: `<svg ${svgAttrs}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
    tiktok:    `<svg ${svgAttrs}><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2 4.2 5 4.5"/></svg>`,
    facebook:  `<svg ${svgAttrs}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5z"/></svg>`,
    youtube:   `<svg ${svgAttrs}><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5.5 3L10 15z" fill="currentColor" stroke="none"/></svg>`,
    linkedin:  `<svg ${svgAttrs}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 11v6M8 7.5v.01M12 17v-6m0 3a3 3 0 0 1 6 0v3"/></svg>`,
    mail:      `<svg ${svgAttrs}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
    phone:     `<svg ${svgAttrs}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>`,
    pin:       `<svg ${svgAttrs}><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    play:      `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>`
};


/* ==========================================================================
   HELPERS
   ========================================================================== */
const $  = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/* Escape text before injecting it into HTML (protects against stray characters) */
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, ch => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
}


/* ==========================================================================
   RENDERING
   ========================================================================== */

/* Statistics ---------------------------------------------------------------- */
function renderStats() {
    $("#stats").innerHTML = stats.map((s, i) => {
        const valueHTML = s.symbol
            ? `<span class="stat__value" aria-hidden="false">${escapeHTML(s.symbol)}</span>`
            : `<span class="stat__value" data-count="${s.value}" data-suffix="${escapeHTML(s.suffix || "")}">0${escapeHTML(s.suffix || "")}</span>`;
        return `
            <div class="stat reveal" style="--delay:${i * 0.1}s">
                ${valueHTML}
                <span class="stat__label">${escapeHTML(s.label)}</span>
            </div>`;
    }).join("");
}

/* Projects ------------------------------------------------------------------ */
function renderProjects() {
    $("#projects-grid").innerHTML = projects.map((p, i) => `
        <button type="button" class="card reveal" data-project="${i}" style="--delay:${(i % 3) * 0.1}s"
                aria-label="Play video: ${escapeHTML(p.title)}">
            <span class="card__media">
                <img src="${escapeHTML(p.thumbnail)}" alt="Thumbnail of ${escapeHTML(p.title)}" width="640" height="400" loading="lazy">
                <span class="card__badge">${escapeHTML(p.category)}</span>
                <span class="play-btn" aria-hidden="true">${icons.play}</span>
            </span>
            <span class="card__body">
                <span class="card__year">${escapeHTML(p.year)}</span>
                <span class="card__title">${escapeHTML(p.title)}</span>
                <span class="card__desc">${escapeHTML(p.description)}</span>
            </span>
        </button>
    `).join("");
}

/* Featured ------------------------------------------------------------------ */
function renderFeatured() {
    $("#featured-thumb").src = featured.thumbnail;
    $("#featured-category").textContent = featured.category;
    $("#featured-title-text").textContent = featured.title;
    $("#featured-desc").textContent = featured.description;
}

/* Events -------------------------------------------------------------------- */
function renderEvents() {
    $("#events-grid").innerHTML = events.map((e, i) => `
        <article class="event-card reveal" style="--delay:${(i % 3) * 0.1}s">
            <div class="event-card__media">
                <img src="${escapeHTML(e.image)}" alt="Photo from ${escapeHTML(e.name)}, ${escapeHTML(e.location)}" width="600" height="400" loading="lazy">
                <span class="event-card__year">${escapeHTML(e.year)}</span>
            </div>
            <div class="event-card__body">
                <p class="event-card__place">${icons.pin.replace('aria-hidden="true"', 'width="14" height="14" aria-hidden="true"')}
                    ${escapeHTML(e.location)}, ${escapeHTML(e.country)}</p>
                <h3 class="event-card__title">${escapeHTML(e.name)}</h3>
                <p class="event-card__desc">${escapeHTML(e.description)}</p>
            </div>
        </article>
    `).join("");
}

/* Gallery ------------------------------------------------------------------- */
function renderGallery() {
    $("#gallery-grid").innerHTML = gallery.map((g, i) => `
        <button type="button" class="gallery__item reveal" data-index="${i}" data-label="${escapeHTML(g.label)}"
                style="--delay:${(i % 3) * 0.08}s" aria-label="Open photo: ${escapeHTML(g.alt)}">
            <img src="${escapeHTML(g.src)}" alt="${escapeHTML(g.alt)}" width="${g.width}" height="${g.height}" loading="lazy">
        </button>
    `).join("");
}

/* Social -------------------------------------------------------------------- */
function renderSocials() {
    $("#social-grid").innerHTML = socials.map((s, i) => `
        <a class="social-card reveal" href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer"
           style="--delay:${i * 0.08}s" aria-label="${escapeHTML(s.name)} — visit profile">
            <span class="social-card__icon">${icons[s.key]}</span>
            <span class="social-card__info">
                <span class="social-card__name">${escapeHTML(s.name)}</span>
                <span class="social-card__text" style="display:block">${escapeHTML(s.text)}</span>
            </span>
            <span class="social-card__link">Visit Profile &rarr;</span>
        </a>
    `).join("");

    const iconLinks = socials.map(s => `
        <a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(s.name)}">${icons[s.key]}</a>
    `).join("");

    $("#footer-social").innerHTML = socials.map(s => `
        <li><a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHTML(s.name)}">${icons[s.key]}</a></li>
    `).join("");

    return iconLinks;
}

/* Contact details ----------------------------------------------------------- */
function renderContact(socialIconsHTML) {
    $("#contact-list").innerHTML = `
        <li class="contact__item">
            <span class="contact__icon">${icons.mail}</span>
            <div><span class="contact__label">Email</span>
                <a class="contact__value" href="mailto:${escapeHTML(siteConfig.email)}">${escapeHTML(siteConfig.email)}</a></div>
        </li>
        <li class="contact__item">
            <span class="contact__icon">${icons.phone}</span>
            <div><span class="contact__label">Phone</span>
                <a class="contact__value" href="tel:${escapeHTML(siteConfig.phone.replace(/\s+/g, ""))}">${escapeHTML(siteConfig.phone)}</a></div>
        </li>
        <li class="contact__item">
            <span class="contact__icon">${icons.pin}</span>
            <div><span class="contact__label">Location</span>
                <span class="contact__value">${escapeHTML(siteConfig.location)}</span></div>
        </li>
        <li class="contact__item">
            <span class="contact__icon">${icons.instagram}</span>
            <div><span class="contact__label">Social Media</span>
                <div class="contact__social">${socialIconsHTML}</div></div>
        </li>
    `;
}


/* ==========================================================================
   NAVBAR (glass effect on scroll, mobile menu, active link)
   ========================================================================== */
function initNavbar() {
    const navbar = $("#navbar");
    const toggle = $("#nav-toggle");
    const menu   = $("#nav-menu");

    const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const setMenu = open => {
        menu.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.classList.toggle("is-locked", open);
    };

    toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
    $$(".nav-link", menu).forEach(link => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && menu.classList.contains("is-open")) {
            setMenu(false);
            toggle.focus();
        }
    });
    window.matchMedia("(min-width: 769px)").addEventListener("change", e => {
        if (e.matches) setMenu(false);
    });

    /* Highlight the link of the section currently in view */
    const links = $$(".nav-link");
    const sectionMap = new Map();
    links.forEach(link => {
        const section = $(link.getAttribute("href"));
        if (section) sectionMap.set(section, link);
    });

    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(l => l.classList.remove("is-active"));
            sectionMap.get(entry.target)?.classList.add("is-active");
        });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sectionMap.forEach((_, section) => spy.observe(section));
}


/* ==========================================================================
   SCROLL REVEAL + ANIMATED COUNTERS
   ========================================================================== */
function animateCounter(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1800;
    const start = performance.now();

    const tick = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);   // ease-out cubic
        el.textContent = Math.round(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
}

function initReveal() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");

            const counter = entry.target.matches("[data-count]")
                ? entry.target
                : entry.target.querySelector("[data-count]");
            if (counter) {
                if (reduceMotion) counter.textContent = counter.dataset.count + (counter.dataset.suffix || "");
                else animateCounter(counter);
            }
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    $$(".reveal").forEach(el => observer.observe(el));
}


/* ==========================================================================
   VIDEO MODAL (reusable)
   ========================================================================== */
const videoModal = (() => {
    const modal    = $("#video-modal");
    const video    = $("#modal-video");
    const closeBtn = $("#modal-close");
    let lastFocus  = null;

    function open({ title, category, description, video: src }) {
        lastFocus = document.activeElement;
        $("#modal-title").textContent    = title;
        $("#modal-category").textContent = category;
        $("#modal-desc").textContent     = description;

        video.src = src;
        video.load();
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-locked");
        closeBtn.focus();

        // Autoplay can be blocked by the browser; controls stay available.
        video.play().catch(() => {});
    }

    function close() {
        if (!modal.classList.contains("is-open")) return;

        // Stop playback completely so audio never continues after closing
        video.pause();
        video.removeAttribute("src");
        video.load();

        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-locked");
        lastFocus?.focus();
    }

    closeBtn.addEventListener("click", close);
    modal.addEventListener("click", e => { if (e.target === modal) close(); });   // click outside
    document.addEventListener("keydown", e => {
        if (!modal.classList.contains("is-open")) return;
        if (e.key === "Escape") close();
        if (e.key === "Tab") trapFocus(e, modal);
    });

    return { open, close, isOpen: () => modal.classList.contains("is-open") };
})();

/* Keep keyboard focus inside an open dialog */
function trapFocus(event, container) {
    const focusable = $$('button, [href], input, video[controls], [tabindex]:not([tabindex="-1"])', container)
        .filter(el => !el.disabled && el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
}

function initVideoTriggers() {
    $("#projects-grid").addEventListener("click", e => {
        const card = e.target.closest("[data-project]");
        if (card) videoModal.open(projects[Number(card.dataset.project)]);
    });

    const openFeatured = () => videoModal.open({
        title: featured.title,
        category: featured.category,
        description: featured.description,
        video: featured.video
    });
    $("#featured-player").addEventListener("click", openFeatured);
    $("#featured-btn").addEventListener("click", openFeatured);
}


/* ==========================================================================
   IMAGE LIGHTBOX (reusable)
   ========================================================================== */
const lightbox = (() => {
    const box     = $("#lightbox");
    const img     = $("#lightbox-img");
    const caption = $("#lightbox-caption");
    const closeBtn = $("#lightbox-close");
    let items = [];
    let index = 0;
    let lastFocus = null;

    function show(i, animate = true) {
        index = (i + items.length) % items.length;
        const item = items[index];

        const apply = () => {
            img.src = item.src;
            img.alt = item.alt;
            caption.textContent = `${item.label} · ${index + 1} / ${items.length}`;
            img.classList.remove("is-changing");
        };

        if (animate) {
            img.classList.add("is-changing");
            setTimeout(apply, 220);
        } else {
            apply();
        }
    }

    function open(list, i) {
        items = list;
        lastFocus = document.activeElement;
        show(i, false);
        box.classList.add("is-open");
        box.setAttribute("aria-hidden", "false");
        document.body.classList.add("is-locked");
        closeBtn.focus();
    }

    function close() {
        if (!box.classList.contains("is-open")) return;
        box.classList.remove("is-open");
        box.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-locked");
        lastFocus?.focus();
    }

    const next = () => show(index + 1);
    const prev = () => show(index - 1);

    closeBtn.addEventListener("click", close);
    $("#lightbox-next").addEventListener("click", next);
    $("#lightbox-prev").addEventListener("click", prev);
    box.addEventListener("click", e => { if (e.target === box) close(); });

    document.addEventListener("keydown", e => {
        if (!box.classList.contains("is-open")) return;
        if (e.key === "Escape")     close();
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft")  prev();
        if (e.key === "Tab")        trapFocus(e, box);
    });

    // Touch swipe support
    let touchStartX = 0;
    box.addEventListener("touchstart", e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", e => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
    }, { passive: true });

    return { open, close };
})();

function initGallery() {
    $("#gallery-grid").addEventListener("click", e => {
        const item = e.target.closest("[data-index]");
        if (item) lightbox.open(gallery, Number(item.dataset.index));
    });
}


/* ==========================================================================
   BACKGROUND PARTICLES (very subtle, skipped for reduced motion)
   ========================================================================== */
function initParticles() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = $("#particles");
    const count = window.innerWidth < 768 ? 8 : 16;

    for (let i = 0; i < count; i++) {
        const p = document.createElement("span");
        p.className = "particle";
        p.style.left = `${Math.random() * 100}%`;
        p.style.setProperty("--s", `${2 + Math.random() * 3}px`);
        p.style.setProperty("--t", `${20 + Math.random() * 25}s`);
        p.style.setProperty("--delay", `${-Math.random() * 30}s`);
        container.appendChild(p);
    }
}


/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    renderStats();
    renderProjects();
    renderFeatured();
    renderEvents();
    renderGallery();
    renderContact(renderSocials());

    initNavbar();
    initReveal();          // after rendering, so dynamic cards are observed too
    initVideoTriggers();
    initGallery();
    initParticles();
});