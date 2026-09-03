const articleData = {
  label: "Archive Template",
  title: "Reusable Article Archive Layout",
  description: "A clean, modular structure for long-form writing, reflection pieces, and semester-by-semester archives.",
  intro: "This page is a reusable starter layout for building article archives. Each section is a self-contained unit, so you can keep the shell fixed and swap in different content each time.",
  sections: [
    {
      id: "year1",
      heading: "Year 1",
      items: [
        {
          title: "Foundation",
          text: "Start by clarifying what this archive is about. The structure should help readers absorb the timeline or theme without feeling overwhelmed.",
          type: "paragraph"
        },
        {
          title: "Research & Reflection",
          text: "Write down the moments, lessons, and observations that shaped the path. Keep the details concrete and personal.",
          type: "paragraph"
        },
        {
          title: "A quote to remember",
          text: "Small daily effort compounds. That is the quiet engine behind long-term progress.",
          type: "quote"
        }
      ]
    },
    {
      id: "year2",
      heading: "Year 2",
      items: [
        {
          title: "Growth",
          text: "This is where the story becomes richer: deeper questions, better understanding, and a sharper sense of direction.",
          type: "paragraph"
        },
        {
          title: "Key lessons",
          items: [
            "Keep your structure consistent.",
            "Use headings to guide the reader.",
            "Let one article feel like a clean archive, not a wall of text."
          ],
          type: "list"
        },
        {
          title: "Example image block",
          src: "photos/personal/IMG_2024.jpg",
          alt: "Example placeholder image",
          type: "image"
        }
      ]
    },
    {
      id: "year3",
      heading: "Year 3",
      items: [
        {
          title: "Final note",
          text: "When you reuse a layout often, the real creativity shifts from design to storytelling. The shell stays stable while the content becomes flexible.",
          type: "paragraph"
        }
      ]
    }
  ]
};

function renderBlocks(blocks) {
  return blocks
    .map((block) => {
      if (block.type === "quote") {
        return `
          <blockquote class="archive-quote">
            <p>${block.text}</p>
          </blockquote>
        `;
      }

      if (block.type === "list") {
        return `
          <ul class="archive-list">
            ${block.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        `;
      }

      if (block.type === "image") {
        return `
          <figure class="archive-figure">
            <img src="${block.src}" alt="${block.alt || block.title}" />
            <figcaption>${block.title}</figcaption>
          </figure>
        `;
      }

      return `
        <div class="course-block mb-4">
          <h3>${block.title}</h3>
          <p>${block.text}</p>
        </div>
      `;
    })
    .join("");
}

function renderArticle(data) {
  const root = document.getElementById("article-root");

  if (!root) return;

  root.innerHTML = `
    <article class="essay-shell">
      <header>
        <p class="section-label">${data.label}</p>
        <h1 class="section-title">${data.title}</h1>
        <p class="section-description">${data.description}</p>
        <div class="article-divider" aria-hidden="true"></div>
      </header>

      <div class="article-body prose max-w-none">
        <p class="intro-note italic text-gray-600">${data.intro}</p>

        ${data.sections
          .map(
            (section) => `
              <h2
                class="archive-section-toggle cursor-pointer flex items-center justify-between select-none"
                onclick="toggleStory('${section.id}', this)"
              >
                <span>${section.heading}</span>
                <span class="chevron text-sm text-gray-500 transition-transform duration-300">▼</span>
              </h2>
              <div id="${section.id}" class="accordion-content article-body">
                <div class="pt-2">
                  ${renderBlocks(section.items)}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

window.toggleStory = function (id, trigger) {
  const content = document.getElementById(id);
  const chevron = trigger?.querySelector(".chevron");

  if (!content) return;

  const isOpen = !content.classList.contains("hidden");

  content.classList.toggle("hidden", isOpen);

  if (chevron) {
    chevron.style.transform = isOpen ? "rotate(-90deg)" : "rotate(0deg)";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderArticle(articleData);
});
