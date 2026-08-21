document.addEventListener("DOMContentLoaded", function () {
  // --- 1. NAVBAR GENERATOR ---
  const navContainer = document.getElementById("navbar-placeholder");

  if (navContainer) {
    const links = [
      { href: "index.html", label: "Home" },
      {
        href: "works.html",
        label: "Works",
        submenu: [
          { href: "works.html", label: "Teaching Materials" },
          { href: "art.html", label: "Art / Drawing" },
        ],
      },
      { href: "blog.html", label: "Blog" },
      { href: "links.html", label: "Links" },
      { href: "math.html", label: "Math" },
      { href: "piano.html", label: "Piano" },
      { href: "contacts.html", label: "Contact" },
      { href: "gallery.html", label: "Gallery" },
      { href: "mathtrivial.html", label: "Game" },
    ];

    navContainer.innerHTML = `
      <header class="replica-site-header" aria-label="Main site header">
        <div class="replica-header-inner">
          <div class="brand-wrap">
            <h1 class="brand-title">
              <span class="brand-mark">✧</span>
              WikiChan | 維基百科🕮
            </h1>
            <div class="brand-sub">A little side project of Wiki</div>
          </div>

          <nav class="top-nav" aria-label="Main navigation">
            ${links
              .map((link) => {
                const mailAttr = link.href.startsWith("mailto:")
                  ? ' target="_blank" rel="noopener noreferrer"'
                  : "";

                if (link.submenu) {
                  return `
                    <div class="nav-item-with-menu">
                      <a href="${link.href}" class="nav-link"${mailAttr}>${link.label}</a>
                      <div class="nav-dropdown" aria-label="${link.label} submenu">
                        ${link.submenu
                          .map((item) => {
                            const itemMailAttr = item.href.startsWith("mailto:")
                              ? ' target="_blank" rel="noopener noreferrer"'
                              : "";
                            return `<a href="${item.href}" class="nav-drop-link"${itemMailAttr}>${item.label}</a>`;
                          })
                          .join("")}
                      </div>
                    </div>
                  `;
                }

                return `<a href="${link.href}" class="nav-link"${mailAttr}>${link.label}</a>`;
              })
              .join("")}
          </nav>
        </div>
      </header>
    `;
  }

  // --- 2. DAILY QUOTE GENERATOR ---
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
    "teamwork makes the dream work", // <-- Added missing comma here
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

  // Inject Styles
  const style = document.createElement("style");
  style.textContent = `
    #scroll-quote-box {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      max-width: 340px;
      padding: 14px 18px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      
      /* Ornate inner double-frame border */
      border: 1px solid #c29ef5;
      outline: 1px solid rgba(194, 158, 245, 0.4);
      outline-offset: -4px;
      border-radius: 4px;
      box-shadow: 0 4px 16px rgba(194, 158, 245, 0.25);
      
      /* High readability classical serif font stack */
      font-family: 'Cinzel Decorative', 'Cinzel', 'Baskerville', 'Georgia Pro', 'Garamond', Georgia, serif;
      font-size: 1.5rem;
      font-style: italic;
      letter-spacing: 0.02em;
      line-height: 1.5;
      text-align: center;
      
      /* Light Purple Text */
      color: #9d6ee8;
      
      transition: opacity 0.15s ease-out;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  // Inject Quote Container
  const quoteBox = document.createElement("div");
  quoteBox.id = "scroll-quote-box";
  quoteBox.innerText = quotes[getDailyQuoteIndex()];
  document.body.appendChild(quoteBox);

  // Scroll Fade Handler
  const fadeDistance = 250;
  window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    let opacity = 1 - scrollTop / fadeDistance;

    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;

    quoteBox.style.opacity = opacity;
  });
});
const DISCORD_ID = "589019948375080961";

async function fetchDiscordStatus() {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
    const result = await response.json();

    if (!result.success) return;

    const { discord_status, activities, discord_user } = result.data;

    // 1. Update Username
    const usernameEl = document.getElementById("discord-username");
    if (usernameEl) usernameEl.textContent = discord_user.display_name || discord_user.username;

    // 2. Update Status Text & Dot Indicator Color
    const statusTextEl = document.getElementById("discord-status-text");
    const statusDotEl = document.getElementById("discord-avatar-dot");

    if (statusTextEl) {
      statusTextEl.textContent = discord_status.toUpperCase();
    }

    if (statusDotEl) {
      // Clear previous background classes
      statusDotEl.className = "w-2.5 h-2.5 rounded-full inline-block mr-1";
      
      switch (discord_status) {
        case "online":
          statusDotEl.classList.add("bg-emerald-500");
          break;
        case "idle":
          statusDotEl.classList.add("bg-amber-500");
          break;
        case "dnd":
          statusDotEl.classList.add("bg-rose-500");
          break;
        default:
          statusDotEl.classList.add("bg-gray-400");
          break;
      }
    }

    // 3. Update Custom Status Message
    const customStatusEl = document.getElementById("discord-custom-status");
    if (customStatusEl) {
      const customActivity = activities.find(act => act.type === 4); // Type 4 is Custom Status
      if (customActivity && customActivity.state) {
        customStatusEl.textContent = `“${customActivity.state}”`;
      } else {
        customStatusEl.textContent = "";
      }
    }

  } catch (error) {
    console.error("Error fetching Discord presence:", error);
  }
}

// Fetch immediately and update every 30 seconds
fetchDiscordStatus();
setInterval(fetchDiscordStatus, 30000);