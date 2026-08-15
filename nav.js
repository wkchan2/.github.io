document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("navbar-placeholder");

  if (!navContainer) return;

  const links = [
    { href: "index.html", label: "Home" },
    {
      href: "works.html",
      label: "Works",
      submenu: [
        { href: "works.html", label: "Teaching Materials" },
        { href: "art.html", label: "Art / Drawing" },
        { href: "word.html", label: "Writing" }

      ]
    },
    { href: "blog.html", label: "Blog" },
    { href: "links.html", label: "Links" },
    { href: "math.html", label: "Math" },
    { href: "piano.html", label: "Piano" },
    { href: "contacts.html", label: "Contact" }
  ];

  navContainer.innerHTML = `
    <header class="replica-site-header" aria-label="Main site header">
      <div class="replica-header-inner">
        <div class="brand-wrap">
          <h1 class="brand-title">
            <span class="brand-mark">✧</span>
            WikiChan | 維基百科
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
});