const guideData = {
  label: "Mathematics, Probability & Statistics",
  title: "Why Probability Can Fool Your Intuition",
  description: "Interesting puzzles and paradoxes that make secondary-school mathematics, probability, and statistics feel surprisingly useful.",
  intro: `Each topic begins with a small story or question. Before looking at the explanation, write down the possible outcomes and ask whether your first instinct is actually doing the calculation.

If you are interested in any topic, feel free to Google the paradox name for more details!`,
  sections: [
    {
      id: "logic-probability",
      heading: "Logic & Probability Foundations",
      chineseHeading: "邏輯與機率基礎",
      subtitle: "測試邏輯與計算機率的能力",
      items: [
        {
          title: "Einstein's Riddle",
          chineseTitle: "愛因斯坦的謎題",
          setup: "Imagine five houses in a row. Each house has a different colour, nationality, drink, pet, and brand of cigarette, and a list of clues tells you how these properties are connected.",
          paradox: "Can you identify who owns the fish without guessing?",
          explanation: "Make a table with houses as rows and categories as columns. Use each clue to mark possible pairings, cross out impossible ones, and use confirmed pairings to eliminate more possibilities until only one arrangement remains.",
          takeaway: "A well-organised table can turn a confusing problem into small, checkable deductions.",
          diagramPlaceholder: `<div class="visual-placeholder logic-grid" role="img" aria-label="Placeholder for a five-house deduction grid"><span>House 1</span><span>House 2</span><span>House 3</span><span>House 4</span><span>House 5</span><small>Mark what is possible; cross out what is not.</small></div>`
        },
        {
          title: "Monty Hall Problem",
          chineseTitle: "蒙提・霍爾的三門問題",
          setup: "You choose one of three doors. Behind one is a prize; behind the other two are goats. The host knows where the prize is, opens an unchosen door showing a goat, and offers you the chance to switch.",
          paradox: "Does switching improve your chance, even though only two doors remain?",
          explanation: "Your first choice had probability $\\frac{1}{3}$ of being correct and $\\frac{2}{3}$ of being wrong. The host must reveal a goat, so when your first choice was wrong, which happens $\\frac{2}{3}$ of the time, switching reaches the prize. Staying wins with $\\frac{1}{3}$; switching wins with $\\frac{2}{3}$.",
          takeaway: "When information is deliberately selected, the way it was revealed matters to the probability.",
          diagramPlaceholder: `<div class="visual-placeholder door-diagram" role="img" aria-label="Placeholder showing three doors and a host reveal"><span>Door A: your choice</span><span>Door B: goat revealed</span><span>Door C: switch?</span><small>Original choice: 1/3; the other two together: 2/3.</small></div>`
        },
        {
          title: "The Martingale Strategy",
          chineseTitle: "馬丁格爾策略",
          setup: "A player doubles the next bet after each loss, expecting one win to recover all previous losses and leave a profit.",
          paradox: "Why can a strategy that looks perfectly logical still be dangerous in real life?",
          explanation: "The strategy seems elegant because each loss is followed by a larger bet, and one eventual win should recover everything. The problem is that money and table limits are finite, so a long losing run can destroy the plan. Small frequent wins are offset by the risk of a catastrophic loss.",
          takeaway: "A mathematically elegant strategy can still be a poor decision when real-world constraints are included.",
          diagramPlaceholder: `<div class="visual-placeholder streak-diagram" role="img" aria-label="Placeholder showing a losing streak with doubling bets"><span>1</span><span>2</span><span>4</span><span>8</span><span>16</span><small>Each loss doubles the next bet, but resources are finite.</small></div>`
        },
        {
          title: "Bertrand's Box Paradox",
          chineseTitle: "伯特蘭的盒子",
          setup: "There are three boxes: one has two gold coins, one has two silver coins, and one has one of each. You choose a box and draw a gold coin, then replace it before drawing again.",
          paradox: "After seeing gold once, is the chance of drawing gold again $\\frac{1}{2}$?",
          explanation: "The silver-silver box is now impossible. The possible gold sides are GG, GG, and GS, so two of the three equally likely gold-side explanations lead to gold again. The answer is therefore $\\frac{2}{3}$, not $\\frac{1}{2}$.",
          takeaway: "Evidence can make previously equal possibilities unequal; count how many ways each explanation could have produced it.",
          diagramPlaceholder: `<div class="visual-placeholder box-diagram" role="img" aria-label="Placeholder showing three coin boxes"><span>GG</span><span>SS</span><span>GS</span><small>After observing gold, compare the gold sides that could have been drawn.</small></div>`
        },
        {
          title: "Boy or Girl Problem",
          chineseTitle: "是男孩，還是女孩？",
          setup: "A family has two children. Someone tells you that at least one child is a boy. Assume boys and girls are equally likely and that the children's sexes are independent.",
          paradox: "Is the chance that both children are boys $\\frac{1}{2}$?",
          explanation: "The equally likely ordered possibilities are BB, BG, GB, and GG. Remove GG and three possibilities remain; only BB is two boys, so the answer is $\\frac{1}{3}$. If the wording were “the older child is a boy,” only BB and BG would remain, giving $\\frac{1}{2}$.",
          takeaway: "Before calculating conditional probability, write down exactly how the information was obtained.",
          diagramPlaceholder: `<table class="visual-placeholder sample-space-table" aria-label="Two-child sample space"><caption>Possible ordered outcomes</caption><tbody><tr><td>BB</td><td>BG</td></tr><tr><td>GB</td><td>GG</td></tr></tbody><tfoot><tr><td colspan="2">Remove GG when told “at least one is a boy”.</td></tr></tfoot></table>`
        }
      ]
    },
    {
      id: "biases-fallacies",
      heading: "Cognitive Biases & Fallacies in Reasoning",
      chineseHeading: "認知偏誤與推理謬誤",
      subtitle: "容易讓人推理出錯的難題",
      items: [
        {
          title: "What Job Is Mary Doing?",
          chineseTitle: "瑪莉在做什麼工作？",
          setup: "Mary is described as quiet, careful, and interested in books. You are asked whether she is more likely to be a librarian, or a librarian who also enjoys statistics.",
          paradox: "Why does the longer description feel more likely when it adds an extra condition?",
          explanation: "Every librarian who enjoys statistics is also a librarian, so the narrower group cannot be larger. The vivid description matches a stereotype, but that feeling ignores the base rate of all librarians. This is the conjunction fallacy.",
          takeaway: "A detailed story can feel convincing while still being less probable than the broader category it belongs to.",
          diagramPlaceholder: `<div class="visual-placeholder set-diagram" role="img" aria-label="Placeholder showing a smaller group inside a larger librarian group"><span>All librarians</span><b>librarians who enjoy statistics</b><small>The smaller group cannot contain more people than the larger one.</small></div>`
        },
        {
          title: "Gambler's Fallacy",
          chineseTitle: "賭徒的錯誤",
          setup: "A fair coin lands tails five times in a row. A person watching the streak says that heads is now due because the results should soon balance out.",
          paradox: "Does a long streak make the opposite result more likely next?",
          explanation: "For a fair coin, each toss is independent, so the chance of heads remains $\\frac{1}{2}$. The law of large numbers says that a very long sequence tends to have a proportion near one half; it does not force every short sequence to repair itself immediately.",
          takeaway: "Long-run balance is not a short-term promise that the next result will change.",
          diagramPlaceholder: `<div class="visual-placeholder streak-diagram" role="img" aria-label="Placeholder showing five tails followed by an unknown next toss"><span>T</span><span>T</span><span>T</span><span>T</span><span>T</span><b>?</b><small>Each fair toss is still independent.</small></div>`
        },
        {
          title: "The Missing Dollar Paradox",
          chineseTitle: "消失的美元",
          setup: "Three friends pay \\$30 for a room. The hotel refunds \\$5, but a bellhop keeps \\$2 and gives each friend \\$1 back. Each friend has paid \\$9, so the group has paid \\$27.",
          paradox: "Why does adding the bellhop's \\$2 to the \\$27 seem to produce \\$29 instead of \\$30?",
          explanation: "The \\$27 already includes the bellhop's \\$2: it is \\$25 kept by the hotel plus \\$2 kept by the bellhop. The three dollars returned to the friends are outside that \\$27. The correct accounts are \\$30 = \\$25 + \\$2 + \\$3 or \\$27 = \\$25 + \\$2.",
          takeaway: "Before adding numbers, check that they describe separate parts of the same total.",
          diagramPlaceholder: `<div class="visual-placeholder money-diagram" role="img" aria-label="Placeholder showing the thirty dollars divided between hotel, bellhop, and refund"><span>\\$25 hotel</span><span>\\$2 bellhop</span><span>\\$3 refund</span><small>\\$30 = \\$25 + \\$2 + \\$3</small></div>`
        }
      ]
    },
    {
      id: "decision-logic",
      heading: "Decision Theory & Applied Logic",
      chineseHeading: "決策理論與應用邏輯",
      subtitle: "現實世界中，該具備的邏輯能力",
      items: [
        {
          title: "Prisoner's Dilemma",
          chineseTitle: "囚徒困境",
          setup: "Two suspects are questioned separately. If both stay silent, both receive a light sentence. If one betrays the other, the betrayer goes free and the silent suspect receives a heavy sentence; if both betray, both receive medium sentences.",
          paradox: "Why can individually sensible choices still produce a worse result for everyone?",
          explanation: "For each suspect, betrayal gives a better personal result whatever the other suspect does. Both therefore have an incentive to betray, even though mutual silence would be better for both. This stable outcome is called a Nash equilibrium.",
          takeaway: "The best choice for one person in isolation may create a worse result when incentives interact.",
          diagramPlaceholder: `<div class="visual-placeholder payoff-diagram" role="img" aria-label="Placeholder for a two-player decision payoff table"><span>Both silent → light sentences</span><span>One betrays → one free, one heavy</span><span>Both betray → medium sentences</span></div>`
        },
        {
          title: "Dollar Auction",
          chineseTitle: "美元拍賣",
          setup: "The highest bidder wins one dollar, but the second-highest bidder must also pay their final bid and receives nothing. A bidder who has offered 90 cents may keep bidding to avoid losing that 90 cents.",
          paradox: "How can a one-dollar prize lead people to bid more than one dollar?",
          explanation: "Dropping out after spending 90 cents means losing that money. Bidding 91 cents feels like reducing the loss, but it gives the previous bidder the same temptation to bid 92 cents. The contest escalates because bidders focus on recovering a sunk cost instead of asking whether another bid is sensible now.",
          takeaway: "Money or effort already spent should not decide whether a new choice is worthwhile.",
          diagramPlaceholder: `<div class="visual-placeholder bid-ladder" role="img" aria-label="Placeholder showing escalating bids"><span>90¢</span><span>91¢</span><span>92¢</span><span>...</span><small>The prize is only \\$1, but the losing bid still costs money.</small></div>`
        },
        {
          title: "Damned Lies and Statistics",
          chineseTitle: "該死的謊言與數據",
          setup: "A school compares two teaching methods in an easier class and a harder class. Method A has a higher success rate in both classes, but Method B appears better when all students are combined because the class sizes are different.",
          paradox: "How can the overall percentage reverse the result seen in every separate group?",
          explanation: "Percentages depend on their denominators. If Method A is used mostly with the harder class, its overall average can be pulled down even while it performs better within both classes. This reversal is Simpson's paradox, so ask which groups were combined and whether a hidden variable changes the comparison.",
          takeaway: "A percentage is incomplete without knowing who was counted and what group they came from.",
          diagramPlaceholder: `<table class="visual-placeholder comparison-table" aria-label="Placeholder for separate and combined success rates"><caption>Compare groups before combining them</caption><tbody><tr><th></th><th>Easy class</th><th>Hard class</th></tr><tr><th>Method A</th><td>higher</td><td>higher</td></tr><tr><th>Method B</th><td>lower</td><td>lower</td></tr></tbody><tfoot><tr><td colspan="3">Different group sizes can reverse the combined percentage.</td></tr></tfoot></table>`
        }
      ]
    },
    {
      id: "infinity-motion",
      heading: "Infinity, Motion & Foundational Paradoxes",
      chineseHeading: "無限、運動與基礎悖論",
      subtitle: "運動、無限與模糊的思想實驗",
      items: [
        {
          title: "Sorites Paradox / Heap",
          chineseTitle: "禿子的邏輯",
          setup: "One grain of sand is not a heap. If adding one grain cannot turn a non-heap into a heap, then adding grains one at a time seems never to create a heap, even when there are a million grains.",
          paradox: "At what exact grain does a collection become a heap?",
          explanation: "The puzzle exposes a weakness in everyday categories rather than arithmetic. Words such as “heap,” “tall,” and “bald” have gradual boundaries, while classical true-or-false logic asks for a sharp boundary. Real decisions may need a convention or range instead.",
          takeaway: "Not every useful word has a perfectly precise mathematical boundary.",
          diagramPlaceholder: `<div class="visual-placeholder heap-diagram" role="img" aria-label="Placeholder showing increasing sand piles"><span>1 grain</span><span>10 grains</span><span>100 grains</span><span>1,000,000 grains</span><small>Where would you draw the boundary?</small></div>`
        },
        {
          title: "Hilbert's Grand Hotel",
          chineseTitle: "無限飯店",
          setup: "Imagine a hotel with rooms numbered 1, 2, 3, and so on forever. Every room is occupied, yet a new guest arrives and the manager finds a room by moving the guest in room $n$ to room $n+1$.",
          paradox: "How can a completely full hotel make room for one more guest?",
          explanation: "There is no last room, so every guest can move one step without anyone being left out. Room 1 becomes free. This is possible because infinity is not a very large finite number: for the countably infinite size $\\aleph_0$, adding one still gives $\\aleph_0 + 1 = \\aleph_0$.",
          takeaway: "Infinite sets can have surprising one-to-one matches that finite collections cannot have.",
          diagramPlaceholder: `<div class="visual-placeholder hotel-diagram" role="img" aria-label="Placeholder showing hotel room shifts"><span>1 → 2</span><span>2 → 3</span><span>3 → 4</span><span>...</span><small>Room 1 becomes available for the new guest.</small></div>`
        },
        {
          title: "Zeno's Paradox / Three-Legged Race",
          chineseTitle: "芝諾與兩人三腳比賽",
          setup: "To reach a finish line, a runner must first cover half the distance, then half of what remains, and then half of what remains after that. This seems to require infinitely many separate steps.",
          paradox: "How can anyone finish if there are infinitely many halfway points to reach?",
          explanation: "The distances form a geometric series: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots = 1$. There are infinitely many terms, but they become smaller so quickly that their total approaches a finite limit. Calculus gives a precise language for this convergence.",
          takeaway: "An infinite number of shrinking steps can have a finite total, which is why limits matter in calculus.",
          diagramPlaceholder: `<div class="visual-placeholder zeno-diagram" role="img" aria-label="Placeholder showing halves of a race distance"><span>½</span><span>¼</span><span>⅛</span><span>...</span><small>Each segment is half the size of the previous one.</small></div>`
        }
      ]
    },
    {
      id: "philosophical-paradoxes",
      heading: "Mathematical & Philosophical Paradoxes",
      chineseHeading: "數學與哲學的經典難題",
      subtitle: "哲學界的經典難題",
      items: [
        {
          title: "Librarian's Paradox",
          chineseTitle: "圖書館管理員的困境",
          setup: "Imagine a library catalogue that lists every catalogue that does not list itself. Now ask whether this catalogue should list itself.",
          paradox: "If it lists itself, it should not; if it does not list itself, it should. How can either answer work?",
          explanation: "The description creates a self-reference loop. Listing itself makes it a catalogue that should be excluded, while excluding itself makes it a catalogue that should be included. Russell's paradox showed that unrestricted “the set of all things with property X” constructions need stricter rules.",
          takeaway: "Definitions need boundaries that prevent a rule from quietly referring to itself.",
          diagramPlaceholder: `<div class="visual-placeholder loop-diagram" role="img" aria-label="Placeholder showing a self-reference loop"><span>Lists catalogues that do not list themselves</span><b>Does it list itself?</b><span>Yes ↔ No</span></div>`
        },
        {
          title: "Liar Paradox",
          chineseTitle: "說謊者悖論",
          setup: "Consider the sentence: “This sentence is false.” If the sentence is true, then what it says makes it false. If it is false, then what it says is not the case, making it true.",
          paradox: "Can one sentence be assigned a stable truth value?",
          explanation: "The sentence talks about its own truth. Assigning true immediately demands false, while assigning false immediately demands true. It shows why formal systems need careful rules about self-reference and about what a language may say about itself.",
          takeaway: "A sentence can be grammatically clear while still being impossible to classify consistently as true or false.",
          diagramPlaceholder: `<div class="visual-placeholder truth-loop" role="img" aria-label="Placeholder showing a truth value loop"><span>True</span><b>“This sentence is false.”</b><span>False</span><small>Each assignment points to the other.</small></div>`
        },
        {
          title: "St. Petersburg Paradox",
          chineseTitle: "聖彼得堡悖論",
          setup: "A coin is tossed until the first heads appears. You receive \\$2 if heads appears first, \\$4 if it appears second, \\$8 if it appears third, and so on.",
          paradox: "Why would the expected payout be infinite when almost nobody would pay an enormous entry fee?",
          explanation: "Each possible payout contributes the same expected amount: $\\frac{1}{2}\\cdot2$, $\\frac{1}{4}\\cdot4$, $\\frac{1}{8}\\cdot8$, and so on. The sum has no finite value. In real life, money has diminishing usefulness and people dislike extreme risk, so expected monetary value is not a complete decision rule.",
          takeaway: "An average can be mathematically infinite while a human choice still depends on risk and usefulness.",
          diagramPlaceholder: `<div class="visual-placeholder payout-diagram" role="img" aria-label="Placeholder showing doubling payouts and shrinking probabilities"><span>\\$2 × ½</span><span>\\$4 × ¼</span><span>\\$8 × ⅛</span><span>...</span><small>Each visible term contributes the same expected amount.</small></div>`
        },
        {
          title: "Buridan's Ass",
          chineseTitle: "布里丹的屁股",
          setup: "Imagine a perfectly rational donkey standing exactly halfway between two identical piles of hay. Every fact about the left pile is matched by the same fact about the right pile.",
          paradox: "If there is no reason to choose one pile, can perfectly rational decision-making choose at all?",
          explanation: "The donkey has no information favouring either option, so a rule demanding a better reason cannot break the tie. Real systems use a tie-breaker such as a coin toss, a default choice, or a random preference to prevent perfect symmetry from causing paralysis.",
          takeaway: "Good decision procedures need a way to act when evidence is exactly balanced.",
          diagramPlaceholder: `<div class="visual-placeholder balance-diagram" role="img" aria-label="Placeholder showing two equally attractive choices"><span>Hay A</span><b>equal evidence</b><span>Hay B</span><small>Add a tie-breaker when both options are equivalent.</small></div>`
        }
      ]
    },
    {
      id: "modern-decision",
      heading: "Deep Paradoxes & Modern Decision Logic",
      chineseHeading: "深層悖論與現代決策邏輯",
      subtitle: "從頭矛盾到底的悖論",
      items: [
        {
          title: "Newcomb's Paradox",
          chineseTitle: "紐康悖論",
          setup: "A highly accurate predictor places money in an opaque box if it predicts you will choose only that box. A second transparent box always contains \\$1,000; the opaque box contains either nothing or \\$1,000,000.",
          paradox: "Should you take only the opaque box, or both boxes because the extra \\$1,000 cannot hurt?",
          explanation: "The two-box argument says the prediction is already fixed, so taking an extra box can only add money. The one-box argument says the predictor is accurate: people who choose one box are usually those whose opaque box contains the million. The paradox compares dominance with expected utility when a choice is correlated with a prediction.",
          takeaway: "When choices and predictions are linked, an extra option cannot always settle the decision.",
          diagramPlaceholder: `<div class="visual-placeholder box-choice" role="img" aria-label="Placeholder showing one-box and two-box choices"><span>One box → \\$0 or \\$1,000,000</span><span>Two boxes → opaque box + \\$1,000</span><small>Which rule should guide the choice?</small></div>`
        },
        {
          title: "Surprise Examination Paradox / Surprise Party",
          chineseTitle: "驚喜派對與驚喜考試",
          setup: "A teacher announces that there will be a test next week and that it will be a surprise. Students reason backward that Friday cannot work, then Thursday cannot work if Friday is impossible, and continue backward.",
          paradox: "Have they proved that a surprise test cannot happen, or can a test still surprise them?",
          explanation: "The backward argument depends on what the students know and whether their conclusion remains knowledge after the announcement. A test on Wednesday can still be unexpected if their chain of reasoning does not give them certainty about Wednesday. The paradox reveals how predictions can change the knowledge used to make them.",
          takeaway: "Reasoning about what someone knows is different from reasoning about what will happen.",
          diagramPlaceholder: `<div class="visual-placeholder week-diagram" role="img" aria-label="Placeholder showing possible test days across a week"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><small>Backward reasoning removes possibilities one by one.</small></div>`
        },
        {
          title: "Lottery Paradox",
          chineseTitle: "彩券悖論",
          setup: "In a lottery with one million tickets, it is reasonable to believe that any particular ticket will lose because its chance of winning is only one in a million. Yet exactly one ticket must win.",
          paradox: "How can it be reasonable to believe that every ticket will lose one at a time, but unreasonable to believe that all tickets will lose together?",
          explanation: "Each individual belief is extremely likely to be correct, but combining one million such beliefs creates a contradiction with the rules of the lottery. The puzzle separates “almost certain” from “certain” and asks how many high-confidence beliefs can be held before their combination becomes unreliable.",
          takeaway: "Very high probability is not the same as logical certainty, especially when many claims are combined.",
          diagramPlaceholder: `<div class="visual-placeholder lottery-diagram" role="img" aria-label="Placeholder showing many losing tickets and one winning ticket"><span>Ticket 1: almost surely loses</span><span>Ticket 2: almost surely loses</span><span>...</span><b>One ticket wins</b></div>`
        },
        {
          title: "Sleeping Beauty Problem",
          chineseTitle: "睡美人問題",
          setup: "A fair coin is tossed. If heads, Beauty wakes once; if tails, she wakes on Monday and again on Tuesday, with no memory of the first waking. Each time she wakes, she is asked for the chance that the coin landed heads.",
          paradox: "Should Beauty answer $\\frac{1}{2}$ because the coin is fair, or $\\frac{1}{3}$ because there are twice as many possible tail awakenings?",
          explanation: "Halfers focus on the original coin toss: heads and tails were equally likely. Thirders focus on the waking experience: across repeated experiments, a randomly selected waking is more likely to come from tails because tails creates two wakings. The disagreement shows that probability depends on how the observer's information and sample space are defined.",
          takeaway: "In probability, describe both the random process and how the observation was selected.",
          diagramPlaceholder: `<div class="visual-placeholder beauty-diagram" role="img" aria-label="Placeholder showing one heads waking and two tails wakings"><span>Heads → Monday</span><span>Tails → Monday</span><span>Tails → Tuesday</span><small>Different ways of counting observations create the debate.</small></div>`
        }
      ]
    }
  ]
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderItem(item) {
  return `
    <section class="archive-topic">
      <h3>${escapeHtml(item.title)} <span class="archive-topic-chinese">（${escapeHtml(item.chineseTitle)}）</span></h3>
      <div class="archive-topic-block">
        <h4>Story</h4>
        <p>${escapeHtml(item.setup)}</p>
      </div>
      <div class="archive-topic-block archive-topic-question">
        <h4>Think about it</h4>
        <p>${escapeHtml(item.paradox)}</p>
      </div>
      ${item.diagramPlaceholder}
      <div class="archive-topic-block">
        <h4>How it works</h4>
        <p>${escapeHtml(item.explanation)}</p>
      </div>
      <p class="archive-takeaway"><strong>Key idea:</strong> ${escapeHtml(item.takeaway)}</p>
    </section>
  `;
}

function renderGuide(data) {
  const root = document.getElementById("article-root");
  if (!root) return;

  root.innerHTML = `
    <article class="essay-shell">
      <header>
        <p class="section-label">${escapeHtml(data.label)}</p>
        <h1 class="section-title">${escapeHtml(data.title)}</h1>
        <p class="section-description">${escapeHtml(data.description)}</p>
        <div class="article-divider" aria-hidden="true"></div>
      </header>

      <div class="article-body prose max-w-none">
        <p class="intro-note italic text-gray-600">${escapeHtml(data.intro)}</p>

        <aside class="feature-card mt-8 mb-10">
          <span class="feature-pill">How to explore</span>
          <h2>Make a prediction first</h2>
          <p>Every section gives you enough information to understand the puzzle without needing another source. Pause after the story, write down the possible outcomes, and only then read the explanation.</p>
          <p>There is often more than one reasonable interpretation. When that happens, state your assumptions clearly and see how changing them changes the answer.</p>
        </aside>

        ${data.sections
          .map(
            (section, index) => `
              <article class="feature-card archive-category archive-reveal" style="--archive-delay: ${index * 90}ms">
                <span class="feature-pill">${escapeHtml(section.heading)}</span>
                <button type="button" class="session-title2 archive-section-toggle" onclick="toggleGuideSection('${escapeHtml(section.id)}', this)" aria-expanded="false" aria-controls="${escapeHtml(section.id)}">
                  <span>${escapeHtml(section.chineseHeading)}<small class="archive-category-subtitle">${escapeHtml(section.subtitle)}</small></span>
                  <span class="chevron text-sm text-gray-500 transition-transform duration-300" aria-hidden="true">▼</span>
                </button>
                <div id="${escapeHtml(section.id)}" class="accordion-content article-body" hidden>
                  <div class="pt-2">
                    ${section.items.map(renderItem).join("")}
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}

function typesetGuideMath() {
  const root = document.getElementById("article-root");

  if (root && window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([root]);
  }
}

window.toggleGuideSection = function (id, trigger) {
  const content = document.getElementById(id);
  const chevron = trigger?.querySelector(".chevron");
  if (!content || !trigger) return;

  const isOpen = trigger.getAttribute("aria-expanded") === "true";
  trigger.setAttribute("aria-expanded", String(!isOpen));
  content.hidden = isOpen;
  content.classList.toggle("open", !isOpen);

  if (chevron) {
    chevron.style.transform = isOpen ? "rotate(-90deg)" : "rotate(0deg)";
  }

  if (!isOpen && window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise([content]);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderGuide(guideData);
  typesetGuideMath();
  window.addEventListener("load", typesetGuideMath, { once: true });
});
