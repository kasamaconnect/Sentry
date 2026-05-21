const hubs = [
  ["general", "General Discussion", "G", "blue", 342],
  ["rates", "Rate Transparency", "R", "red", 128],
  ["jobs", "Job Board", "J", "blue", 243],
  ["reviews", "Client Reviews", "C", "green", 96],
  ["scams", "Scam Watch", "S", "red", 74],
  ["exposure", "Industry Exposure", "I", "red", 55],
  ["governance", "Governance", "V", "gold", 32],
  ["ai", "AI for Work", "A", "blue", 19],
  ["clients", "Clients Only", "L", "gold", 41],
  ["freelancers", "Verified Freelancers", "F", "green", 88],
];

const posts = [
  {
    feeds: ["for-you", "trending", "verified"],
    hubKey: "rates",
    hub: "Rate Transparency",
    author: "Anonymous VA",
    time: "3h ago",
    title: "$3/hr for full FB ads management - is this industry standard?",
    body: "Managing 5 ad accounts, creatives, reporting, scaling, and client communication. Is this fair? Let's bring transparency to the table.",
    badges: [["Verified earnings", "green"], ["$3.00/hr", "red"], ["Anonymous", "gold"]],
    votes: 128,
    comments: 64,
    preview: "RATE REPORT",
  },
  {
    feeds: ["for-you", "following", "verified"],
    hubKey: "clients",
    hub: "Clients Only",
    author: "Verified Client",
    time: "4h ago",
    title: "Client-only thread: building a fair onboarding checklist",
    body: "Only verified clients can view and comment here. The thread covers pay ranges, trial scopes, interview etiquette, and dispute prevention.",
    badges: [["Client only", "gold"], ["Verified client", "blue"], ["Gated hub", "gold"]],
    votes: 91,
    comments: 38,
    preview: "LOCKED HUB",
    locked: true,
  },
  {
    feeds: ["for-you", "trending", "latest"],
    hubKey: "scams",
    hub: "Scam Watch",
    author: "Anonymous VA",
    time: "5h ago",
    title: "Agency asked me to work off the clock after a paid trial",
    body: "They want me to be available even if I'm not paid. Screenshots were submitted to moderators and the claim is under review.",
    badges: [["Under review", "blue"], ["Exposure", "red"], ["AutoMod flagged", "red"]],
    votes: 256,
    comments: 87,
    preview: "MOD REVIEW",
  },
  {
    feeds: ["for-you", "latest", "verified"],
    hubKey: "jobs",
    hub: "Job Board",
    author: "Growth Team US",
    time: "7h ago",
    title: "Looking for Media Buyer (Meta Ads) - $1200/mo",
    body: "Direct brand hiring an experienced media buyer. Long-term opportunity, fixed scope, payment schedule, and dispute policy visible before application.",
    badges: [["Verified business", "green"], ["$1200/mo", "blue"], ["Full-time", "green"]],
    votes: 92,
    comments: 35,
    preview: "JOB POST",
  },
  {
    feeds: ["latest", "following"],
    hubKey: "general",
    hub: "General Discussion",
    author: "Mika VA",
    time: "22m ago",
    title: "What tools are you using to track client scope creep?",
    body: "I keep losing small tasks in Slack. Looking for a simple weekly system that clients will actually read and approve.",
    badges: [["Discussion", "blue"], ["Workflow", "green"]],
    votes: 34,
    comments: 21,
    preview: "THREAD",
  },
  {
    feeds: ["trending", "verified"],
    hubKey: "reviews",
    hub: "Client Reviews",
    author: "Verified VA",
    time: "1h ago",
    title: "Review: client paid early, but changed scope twice",
    body: "Good communication overall. Payment was reliable, but the final week needed a written scope reset to avoid unpaid additions.",
    badges: [["Verified review", "green"], ["Client history", "blue"]],
    votes: 118,
    comments: 44,
    preview: "REVIEW",
  },
  {
    feeds: ["governance", "for-you"],
    hubKey: "governance",
    hub: "Governance",
    author: "Kasama Council",
    time: "2h ago",
    title: "Proposal: require pay range on every job post",
    body: "A community vote is open on whether vague job posts should be auto-held until the client adds a pay range and scope summary.",
    badges: [["Proposal", "gold"], ["Voting open", "blue"]],
    votes: 211,
    comments: 96,
    preview: "POLL",
  },
  {
    feeds: ["latest"],
    hubKey: "ai",
    hub: "AI for Work",
    author: "Ops VA",
    time: "37m ago",
    title: "Prompt stack for weekly client reports",
    body: "Sharing a lightweight structure for turning messy notes into a client-ready update without hiding blockers or risks.",
    badges: [["Resource", "green"], ["AI workflow", "blue"]],
    votes: 59,
    comments: 18,
    preview: "RESOURCE",
  },
  {
    feeds: ["trending"],
    hubKey: "exposure",
    hub: "Industry Exposure",
    author: "Anonymous VA",
    time: "6h ago",
    title: "The unpaid training week is becoming a pattern",
    body: "Three agencies are using the same script: training first, payment later, then no start date. Mods are collecting evidence before naming names.",
    badges: [["Evidence pending", "gold"], ["Anonymous", "gold"], ["Risk pattern", "red"]],
    votes: 302,
    comments: 112,
    preview: "EXPOSE",
  },
  {
    feeds: ["following", "verified"],
    hubKey: "freelancers",
    hub: "Verified Freelancers",
    author: "Verified VA",
    time: "8h ago",
    title: "Portfolio teardown: what convinced my best client to hire me",
    body: "Sharing the exact project proof, pricing page, and discovery questions that helped close a long-term retainer.",
    badges: [["Verified VA", "green"], ["Guide", "blue"]],
    votes: 147,
    comments: 52,
    preview: "GUIDE",
  },
];

const hubDescriptions = {
  general: "Open discussion, workflows, hiring stories, and community questions.",
  rates: "Pay transparency, rate reports, workload comparisons, and negotiation advice.",
  jobs: "Verified job posts, hiring threads, scope checks, and application questions.",
  reviews: "Client reviews, working history, payment behavior, and scope clarity.",
  scams: "Scam warnings, evidence reviews, suspicious offers, and moderator alerts.",
  exposure: "Industry patterns, agency behavior, and sensitive anonymous disclosures.",
  governance: "Polls, platform rules, community votes, and policy proposals.",
  ai: "AI workflows, automations, prompt systems, and productivity tools.",
  clients: "Gated client-only conversations and safer hiring standards.",
  freelancers: "Verified freelancer resources, portfolio help, and peer support.",
};

const feedDescriptions = {
  "for-you": ["For You", "Recommended across your trusted hubs"],
  trending: ["Trending", "High-activity posts moving across the network"],
  latest: ["Latest", "Fresh posts from all public and verified hubs"],
  following: ["Following", "Updates from hubs and people you follow"],
  governance: ["Governance", "Votes, rules, proposals, and community decisions"],
  verified: ["Verified Only", "Posts from verified clients, VAs, and businesses"],
};

const queue = [
  ["Low-trust duplicate post", "AutoMod removed 3 similar posts in 12 minutes."],
  ["Payment scam report", "Needs moderator evidence review before public exposure."],
  ["Appeal from muted user", "User claims mistaken identity in Scam Watch thread."],
];

let currentFeed = "for-you";
let currentHub = null;

function renderHubs() {
  const list = document.querySelector("#hubList");
  list.innerHTML = hubs
    .map(
      ([key, name, initial, color, count]) => `
        <a class="hub-item ${currentHub === key ? "active" : ""}" href="#" data-hub="${key}">
          <span class="badge ${color}">${initial}</span>
          <span>${name}</span>
          <small>${count}</small>
        </a>
      `,
    )
    .join("");
}

function getVisiblePosts() {
  if (currentHub) {
    return posts.filter((post) => post.hubKey === currentHub);
  }

  return posts.filter((post) => post.feeds.includes(currentFeed));
}

function renderContext() {
  const context = document.querySelector("#feedContext");

  if (currentHub) {
    const hub = hubs.find(([key]) => key === currentHub);
    context.querySelector("span").textContent = hub[1];
    context.querySelector("strong").textContent = hubDescriptions[currentHub];
    return;
  }

  const [label, description] = feedDescriptions[currentFeed];
  context.querySelector("span").textContent = label;
  context.querySelector("strong").textContent = description;
}

function renderPosts() {
  const feed = document.querySelector("#feed");
  const visiblePosts = getVisiblePosts();

  feed.innerHTML = visiblePosts
    .map(
      (post) => `
        <article class="post-card">
          <div>
            <div class="post-meta">
              <span class="pill blue">${post.hub}</span>
              <span>Posted by</span>
              <strong>${post.author}</strong>
              <span>${post.time}</span>
            </div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <div class="post-meta" style="margin-top: 12px">
              ${post.badges.map(([label, color]) => `<span class="pill ${color}">${label}</span>`).join("")}
            </div>
            <div class="post-actions">
              <button class="upvote">Up ${post.votes}</button>
              <button>Down</button>
              <button>${post.comments} comments</button>
              <button>Share</button>
              <button>Save</button>
              <button>Report</button>
            </div>
          </div>
          <div class="post-preview ${post.locked ? "locked" : ""}">${post.preview}</div>
        </article>
      `,
    )
    .join("");
}

function renderQueue() {
  const modQueue = document.querySelector("#modQueue");
  modQueue.innerHTML = queue
    .map(
      ([title, body], index) => `
        <article class="queue-item">
          <strong>${title}</strong>
          <span>${body}</span>
          <div class="queue-actions">
            <button data-action="Approved" data-index="${index}">Approve</button>
            <button data-action="Removed" data-index="${index}">Remove</button>
            <button data-action="Locked" data-index="${index}">Lock</button>
            <button data-action="Banned" data-index="${index}">Ban</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function refreshContent() {
  renderHubs();
  renderContext();
  renderPosts();
}

function setupHubNavigation() {
  document.querySelector("#hubList").addEventListener("click", (event) => {
    const link = event.target.closest(".hub-item");
    if (!link) return;

    event.preventDefault();
    currentHub = link.dataset.hub;
    document.querySelectorAll(".feed-tabs button").forEach((button) => button.classList.remove("active"));
    refreshContent();
  });
}

function setupFeedTabs() {
  document.querySelector(".feed-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-feed]");
    if (!button) return;

    currentFeed = button.dataset.feed;
    currentHub = null;
    document.querySelectorAll(".feed-tabs button").forEach((item) => item.classList.toggle("active", item === button));
    refreshContent();
  });

  document.querySelector("#resetFeed").addEventListener("click", () => {
    currentFeed = "for-you";
    currentHub = null;
    document.querySelectorAll(".feed-tabs button").forEach((button) => {
      button.classList.toggle("active", button.dataset.feed === currentFeed);
    });
    refreshContent();
  });
}

function setupPostActions() {
  document.querySelector("#feed").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    if (button.classList.contains("upvote")) {
      const current = Number(button.textContent.replace(/\D/g, ""));
      button.textContent = `Up ${current + 1}`;
      button.disabled = true;
    }

    if (button.textContent === "Report") {
      button.textContent = "Reported";
      button.classList.add("reported");
    }
  });
}

function setupModActions() {
  document.querySelector("#modQueue").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const item = button.closest(".queue-item");
    item.querySelector("span").textContent = `${button.dataset.action} by admin. Logged to moderation audit trail.`;
    item.classList.add("resolved");
  });
}

function setupComposer() {
  const modal = document.querySelector("#composerModal");
  const triggers = [document.querySelector("#openComposer"), document.querySelector("#composerPrompt")];

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (typeof modal.showModal === "function") {
        modal.showModal();
      }
    });
  });
}

refreshContent();
renderQueue();
setupHubNavigation();
setupFeedTabs();
setupPostActions();
setupModActions();
setupComposer();
