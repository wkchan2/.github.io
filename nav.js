document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("navbar-placeholder");

  if (!navContainer) return;

  const links = [
    { href: "index.html", label: "Home" },
    { href: "works.html", label: "Works" },
    { href: "blog.html", label: "Blog" },
    { href: "links.html", label: "Links" },
    { href: "math.html", label: "Math" },
    { href: "piano.html", label: "Piano" },
    { href: "contacts.html", label: "Contact" }
  ];

  const quotes = [
    "Mathematics is the language by which the universe speaks in patterns.",
    "Life is not about having all the answers; it is about learning to ask better questions.",
    "The clearest thoughts often begin with a small, patient proof.",
    "Beauty grows where logic and feeling meet.",
    "One problem solved is one more step toward a calmer mind.",
    "To understand life well, you must learn to notice what repeats.",
    "You think therefore you live.",
    "Obvious is the most dangerous word in mathematics.",
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "In the middle of every difficulty lies opportunity.",
    "Change your thoughts and you change your world.",
    "The reason you are depressed is because of you, not the environment.",
    "師父領入門，修行靠自己",
    "學而不思則罔，思而不學則殆",
    "知之為知之，不知為不知，是知也",
    "最有趣的問題是無解的",
    "數學就是給異物起同名稱的藝術。",
    "對我來說，學數學就像是探訪那些數學家們的思想世界，去理解他們如何看待這個世界，如何解決問題，如何創造出美麗的數學結構。"
  ];

  function getDailyQuoteIndex() {
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let hash = 0;

    for (let i = 0; i < dateKey.length; i += 1) {
      hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
    }

    return hash % quotes.length;
  }

  const selectedQuote = quotes[getDailyQuoteIndex()];

  navContainer.innerHTML = `
    <header class="site-header">
      <div class="container top-bar">
        <a href="index.html" class="brand-link">
          <span class="brand-icon">♠</span>
          WikiChan | 維基百科
        </a>
        <nav class="site-nav" aria-label="Main navigation">
          ${links
            .map((link) => {
              const mailAttr = link.href.startsWith("mailto:")
                ? ' target="_blank" rel="noopener noreferrer"'
                : "";

              return `<a href="${link.href}" class="nav-link"${mailAttr}>${link.label}</a>`;
            })
            .join("")}
        </nav>
      </div>
    </header>
  `;

  const quoteWidget = document.createElement("aside");
  quoteWidget.className = "daily-quote";
  quoteWidget.setAttribute("aria-label", "Daily quote");
  quoteWidget.innerHTML = `
    <p class="quote-text">“${selectedQuote}”</p>
  `;

  document.body.appendChild(quoteWidget);

  function updateQuoteFade() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const maxFade = 500;
    const opacity = Math.max(0, 1 - scrollTop / maxFade);
    quoteWidget.style.opacity = opacity.toFixed(3);
  }

  updateQuoteFade();
  window.addEventListener("scroll", updateQuoteFade, { passive: true });
});