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

const hubArticleData = {
  general: [
    ["What's your weekly client update format?", "People are sharing status templates that prevent missed scope, vague priorities, and awkward Friday follow-ups.", "Mika VA", "26m ago", [["Discussion", "blue"], ["Workflow", "green"]], 44, 23, "THREAD"],
    ["How do you say no without sounding difficult?", "A practical thread on setting boundaries while keeping the relationship calm and professional.", "Ana Ops", "1h ago", [["Advice", "green"], ["Scripts", "blue"]], 83, 39, "ADVICE"],
    ["What made your best client easy to work with?", "Members compare communication habits, payment rhythm, and onboarding details that made projects smooth.", "Remote Helper", "3h ago", [["Community", "blue"]], 67, 28, "DISCUSS"],
    ["Weekly wins: post one thing that got easier", "A lighter community thread for small improvements, better systems, and client wins.", "Kasama Bot", "6h ago", [["Community", "green"]], 102, 51, "WINS"],
    ["Tool stack check: docs, tasks, time, payments", "Everyone is listing their leanest setup for managing multiple clients without turning into a dashboard babysitter.", "Nico VA", "9h ago", [["Tools", "blue"], ["Workflow", "green"]], 58, 31, "TOOLS"],
  ],
  rates: [
    ["$3/hr for full FB ads management - is this industry standard?", "Managing 5 ad accounts, creatives, reporting, scaling, and client communication. Members are comparing fair ranges.", "Anonymous VA", "3h ago", [["Verified earnings", "green"], ["$3.00/hr", "red"], ["Anonymous", "gold"]], 128, 64, "RATE REPORT"],
    ["Rate check: inbox management plus calendar plus reports", "The job says admin assistant, but the workload includes operations coordination and daily client reporting.", "Verified VA", "42m ago", [["Rate check", "blue"], ["Admin ops", "green"]], 77, 34, "RATE CHECK"],
    ["Monthly retainer vs hourly: what protects both sides?", "A useful breakdown of when retainers make sense and when hourly billing is safer.", "Finance VA", "2h ago", [["Guide", "green"], ["Billing", "blue"]], 115, 47, "GUIDE"],
    ["Client offered commission-only for lead gen", "The community is weighing risk, fair base pay, and what proof should exist before commission enters the deal.", "Anonymous VA", "5h ago", [["Commission", "gold"], ["Risk", "red"]], 149, 72, "RATE DEBATE"],
    ["Philippines VA rates by role: May snapshot", "Members are sharing current ranges for media buying, admin, bookkeeping, content, and executive assistance.", "Kasama Research", "8h ago", [["Market data", "blue"], ["Verified", "green"]], 221, 88, "DATA"],
  ],
  jobs: [
    ["Looking for Media Buyer (Meta Ads) - $1200/mo", "Direct brand hiring an experienced media buyer with fixed scope, payment schedule, and dispute policy visible.", "Growth Team US", "7h ago", [["Verified business", "green"], ["$1200/mo", "blue"], ["Full-time", "green"]], 92, 35, "JOB POST"],
    ["Client needs an executive assistant for 20 hrs/week", "Calendar, inbox, meeting notes, and light operations. Mods verified business docs before publishing.", "Verified Client", "1h ago", [["Verified client", "blue"], ["Part-time", "green"]], 69, 18, "HIRING"],
    ["Is this job post too vague to apply to?", "Members are reviewing a client post that says flexible tasks but gives no scope, schedule, or pay range.", "Job Watch", "2h ago", [["Scope check", "gold"], ["Needs clarity", "red"]], 104, 41, "CHECK"],
    ["Bookkeeper needed for ecommerce reconciliations", "Monthly close, Shopify reports, PayPal matching, and clean documentation. Public pay range included.", "Ledger Client", "4h ago", [["Verified business", "green"], ["$900/mo", "blue"]], 56, 14, "JOB POST"],
    ["Red flags before accepting a trial project", "A saved guide for spotting fake trials, unclear deliverables, and clients who avoid payment terms.", "Kasama Mods", "6h ago", [["Guide", "green"], ["Safety", "red"]], 188, 62, "GUIDE"],
  ],
  reviews: [
    ["Review: client paid early, but changed scope twice", "Good communication overall. Payment was reliable, but the final week needed a written scope reset.", "Verified VA", "1h ago", [["Verified review", "green"], ["Client history", "blue"]], 118, 44, "REVIEW"],
    ["How to write a fair client review without doxxing", "A moderator guide on useful details, evidence standards, and what should stay private.", "Kasama Mods", "3h ago", [["Guide", "green"], ["Privacy", "blue"]], 97, 25, "GUIDE"],
    ["Client review: excellent onboarding, slow approvals", "A balanced review with payment proof, communication notes, and a timeline of delayed feedback.", "Anonymous VA", "5h ago", [["Anonymous", "gold"], ["Balanced", "green"]], 84, 33, "REVIEW"],
    ["Should clients get response-time ratings?", "Members debate whether response time is useful context or unfair to clients across time zones.", "Community Poll", "7h ago", [["Poll", "gold"], ["Reviews", "blue"]], 132, 59, "POLL"],
    ["Evidence checklist before posting a negative review", "What to gather before posting: contract, invoices, date trail, scope changes, and payment receipts.", "Trust Team", "10h ago", [["Checklist", "green"], ["Moderation", "blue"]], 174, 48, "CHECKLIST"],
  ],
  scams: [
    ["Agency asked me to work off the clock after a paid trial", "Screenshots were submitted to moderators and the claim is under review before any names are shown.", "Anonymous VA", "5h ago", [["Under review", "blue"], ["Exposure", "red"], ["AutoMod flagged", "red"]], 256, 87, "MOD REVIEW"],
    ["Fake payroll portal collecting IDs", "Multiple members reported the same link. Mods are blocking it while verification checks continue.", "Scam Watch", "31m ago", [["High risk", "red"], ["Link blocked", "red"]], 312, 104, "ALERT"],
    ["Client refuses escrow and asks for unpaid sample", "The thread includes safer response scripts and examples of acceptable paid test tasks.", "Anonymous VA", "2h ago", [["Payment risk", "red"], ["Scripts", "blue"]], 167, 63, "WARNING"],
    ["Repeated Telegram recruiter pattern", "Same intro, same vague agency name, same request to move off-platform before sharing scope.", "Mod Analyst", "4h ago", [["Pattern", "gold"], ["AutoMod", "blue"]], 201, 76, "PATTERN"],
    ["What counts as evidence for Scam Watch?", "A clear guide to claims, screenshots, redaction, and when moderators escalate privately.", "Kasama Mods", "9h ago", [["Guide", "green"], ["Evidence", "blue"]], 139, 45, "GUIDE"],
  ],
  exposure: [
    ["The unpaid training week is becoming a pattern", "Three agencies are using the same script: training first, payment later, then no start date.", "Anonymous VA", "6h ago", [["Evidence pending", "gold"], ["Anonymous", "gold"], ["Risk pattern", "red"]], 302, 112, "EXPOSE"],
    ["Agency subcontracting without telling clients", "Members discuss why hidden subcontracting hurts VAs, clients, and everyone trying to build trust.", "Industry Watch", "1h ago", [["Industry", "blue"], ["Ethics", "gold"]], 143, 58, "ANALYSIS"],
    ["Why vague job titles hide senior work", "A breakdown of posts that say assistant while asking for operations manager responsibilities.", "Anonymous VA", "3h ago", [["Role mismatch", "red"], ["Pay", "blue"]], 176, 69, "EXPOSE"],
    ["Public naming rules for serious allegations", "The council is reviewing when evidence is strong enough to publish names and when it stays private.", "Kasama Council", "7h ago", [["Policy", "gold"], ["Safety", "red"]], 122, 50, "POLICY"],
    ["Client blacklists can become unfair fast", "A caution thread on how accountability tools can be abused without verification and appeals.", "Trust Team", "11h ago", [["Fairness", "green"], ["Moderation", "blue"]], 158, 54, "BALANCE"],
  ],
  governance: [
    ["Proposal: require pay range on every job post", "A community vote is open on whether vague job posts should be auto-held until pay and scope are added.", "Kasama Council", "2h ago", [["Proposal", "gold"], ["Voting open", "blue"]], 211, 96, "POLL"],
    ["Should anonymous exposure posts need mod pre-review?", "Members are voting on a stricter review path for serious claims posted anonymously.", "Governance Bot", "45m ago", [["Vote", "gold"], ["Anonymous", "blue"]], 185, 77, "VOTE"],
    ["New rule draft: no off-platform payment pressure", "A proposed rule would flag job posts that require moving payment outside agreed protection.", "Policy Team", "4h ago", [["Rule draft", "gold"], ["Safety", "red"]], 136, 43, "RULE"],
    ["Moderator transparency report for this week", "Approvals, removals, locked threads, appeals, and false-positive AutoMod actions in one summary.", "Kasama Mods", "8h ago", [["Report", "blue"], ["Audit", "green"]], 154, 36, "REPORT"],
    ["Client-only hub access requirements", "The community is discussing what proof clients should provide before entering gated conversations.", "Trust Team", "12h ago", [["Client only", "gold"], ["Verification", "green"]], 129, 52, "ACCESS"],
  ],
  ai: [
    ["Prompt stack for weekly client reports", "A lightweight structure for turning messy notes into a client-ready update without hiding blockers.", "Ops VA", "37m ago", [["Resource", "green"], ["AI workflow", "blue"]], 59, 18, "RESOURCE"],
    ["AI policy template for client contracts", "Members are adapting a plain-language clause for when AI is allowed, disclosed, or prohibited.", "Contracts VA", "2h ago", [["Template", "green"], ["Contracts", "blue"]], 88, 29, "TEMPLATE"],
    ["Automating invoice reminders without sounding cold", "A practical example of reminders that stay polite, clear, and easy for clients to act on.", "Finance VA", "4h ago", [["Automation", "blue"], ["Payments", "green"]], 73, 22, "AUTOMATION"],
    ["Best tools for summarizing long client calls", "A comparison thread for call notes, action items, transcript cleanup, and privacy concerns.", "AI for Work", "6h ago", [["Tools", "blue"], ["Privacy", "gold"]], 102, 38, "TOOLS"],
    ["Do not paste client secrets into AI tools", "A safety reminder with examples of what to redact before using any assistant or automation tool.", "Security Mod", "10h ago", [["Safety", "red"], ["AI", "blue"]], 190, 61, "SAFETY"],
  ],
  clients: [
    ["Client-only thread: building a fair onboarding checklist", "Only verified clients can view and comment here. The thread covers scope, pay ranges, and dispute prevention.", "Verified Client", "4h ago", [["Client only", "gold"], ["Verified client", "blue"], ["Gated hub", "gold"]], 91, 38, "LOCKED HUB"],
    ["How clients can write better VA job posts", "A client-side guide to clear outcomes, pay transparency, working hours, and decision timelines.", "Verified Client", "1h ago", [["Client only", "gold"], ["Guide", "green"]], 68, 24, "GUIDE"],
    ["What proof should businesses submit?", "Verified clients discuss acceptable documents without exposing private company information.", "Trust Team", "3h ago", [["Verification", "green"], ["Privacy", "blue"]], 72, 31, "VERIFY"],
    ["How to handle a scope dispute respectfully", "A client-only playbook for pausing work, reviewing agreements, and avoiding public escalation.", "Kasama Mediation", "6h ago", [["Disputes", "red"], ["Client only", "gold"]], 83, 27, "DISPUTE"],
    ["Hiring scorecards that do not waste VA time", "Clients share concise interview scorecards and paid trial structures that respect applicants.", "Verified Client", "8h ago", [["Hiring", "blue"], ["Fair work", "green"]], 99, 40, "HIRING"],
  ],
  freelancers: [
    ["Portfolio teardown: what convinced my best client to hire me", "The exact project proof, pricing page, and discovery questions that helped close a retainer.", "Verified VA", "8h ago", [["Verified VA", "green"], ["Guide", "blue"]], 147, 52, "GUIDE"],
    ["How I raised rates without losing the client", "A step-by-step account of reframing the role around outcomes, not hours.", "Senior VA", "1h ago", [["Rate growth", "green"], ["Script", "blue"]], 133, 49, "CASE STUDY"],
    ["Verified VA lounge: difficult client scripts", "Members share calm scripts for late payments, rushed requests, and vague feedback.", "Verified VA", "2h ago", [["Verified only", "green"], ["Scripts", "blue"]], 109, 57, "LOUNGE"],
    ["What to include in a handoff document", "A reusable structure for tasks, passwords, ownership, and open risks when ending a project.", "Ops VA", "5h ago", [["Template", "green"], ["Operations", "blue"]], 78, 26, "TEMPLATE"],
    ["Burnout check: too many clients, not enough systems", "A frank thread on workload limits, recovery, and when to stop taking more work.", "Anonymous VA", "9h ago", [["Wellbeing", "gold"], ["Anonymous", "gold"]], 166, 73, "SUPPORT"],
  ],
};

const posts = Object.entries(hubArticleData).flatMap(([hubKey, items]) => {
  const hubName = hubs.find(([key]) => key === hubKey)[1];
  return items.map(([title, body, author, time, badges, votes, comments, preview], index) => ({
    hubKey,
    hub: hubName,
    author,
    time,
    title,
    body,
    badges,
    votes,
    comments,
    preview,
    locked: hubKey === "clients" || title.toLowerCase().includes("client-only"),
    feeds: buildFeeds(hubKey, index, votes, badges),
  }));
}).map((post, index) => ({ ...post, id: `post-${index}` }));

const notifications = [
  ["Scam Watch needs review", "A new fake payroll link matches two previous reports.", "2m ago", "Open queue"],
  ["Your rate report got 64 comments", "Members are comparing FB ads management rates and workload expectations.", "14m ago", "View post"],
  ["Governance vote is closing soon", "Pay range requirements for job posts closes tonight.", "1h ago", "Vote now"],
  ["Client-only access request", "A verified business submitted documents for review.", "2h ago", "Review"],
  ["AutoMod held a post", "Possible duplicate exposure thread needs moderator approval.", "3h ago", "Inspect"],
  ["New reply from Verified VA", "Someone added a contract clause to your AI policy thread.", "5h ago", "Reply"],
];

const messages = [
  ["Kasama Trust Team", "Your client-only access policy draft is ready for review.", "10m ago", "Open"],
  ["Mika VA", "Can you check my scope-creep script before I send it?", "38m ago", "Reply"],
  ["Verified Client - Ledger Co.", "Thanks for the hiring scorecard feedback. We updated the pay range.", "1h ago", "View"],
  ["Mod Council", "Two Scam Watch posts may be related. Evidence packet is attached.", "3h ago", "Review"],
  ["Growth Team US", "We clarified the Media Buyer job scope and added the timezone window.", "Yesterday", "Open"],
];

const savedItems = [
  ["Red flags before accepting a trial project", "Saved from Job Board for safer hiring decisions.", "Job Board"],
  ["Evidence checklist before posting a negative review", "Saved from Client Reviews for moderation reference.", "Client Reviews"],
  ["AI policy template for client contracts", "Saved from AI for Work.", "AI for Work"],
  ["How I raised rates without losing the client", "Saved from Verified Freelancers.", "Verified Freelancers"],
];

let currentFeed = "for-you";
let currentHub = null;
let currentView = "home";

function buildFeeds(hubKey, index, votes, badges) {
  const feeds = new Set();
  if (index < 2 || votes > 120) feeds.add("for-you");
  if (votes > 125 || index === 0) feeds.add("trending");
  if (index === 1 || index === 2) feeds.add("latest");
  if (["general", "jobs", "ai", "freelancers", "clients"].includes(hubKey) && index < 3) feeds.add("following");
  if (hubKey === "governance") feeds.add("governance");
  if (badges.some(([label]) => /verified|business|client/i.test(label))) feeds.add("verified");
  return [...feeds];
}

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
  if (currentHub) return posts.filter((post) => post.hubKey === currentHub);
  return posts.filter((post) => post.feeds.includes(currentFeed)).slice(0, currentFeed === "latest" ? 14 : 12);
}

function renderContext(label, description) {
  const context = document.querySelector("#feedContext");
  if (label && description) {
    context.querySelector("span").textContent = label;
    context.querySelector("strong").textContent = description;
    return;
  }

  if (currentHub) {
    const hub = hubs.find(([key]) => key === currentHub);
    context.querySelector("span").textContent = hub[1];
    context.querySelector("strong").textContent = hubDescriptions[currentHub];
    return;
  }

  const [feedLabel, feedDescription] = feedDescriptions[currentFeed];
  context.querySelector("span").textContent = feedLabel;
  context.querySelector("strong").textContent = feedDescription;
}

function renderPosts() {
  const feed = document.querySelector("#feed");
  if (currentHub === "clients") {
    renderClientGate();
    return;
  }

  const visiblePosts = getVisiblePosts();
  feed.innerHTML = visiblePosts.map(renderPostCard).join("");
}

function renderClientGate() {
  const clientPosts = posts.filter((post) => post.hubKey === "clients");
  document.querySelector("#feed").innerHTML = `
    <section class="locked-concept">
      <div>
        <span class="pill gold">Client-only gate</span>
        <h2>Verified client access protects both sides.</h2>
        <p>This prototype shows how Kasama Sentry can explain restricted spaces without making the product feel secretive. Clients see expectations before entering; VAs see that gated conversations still have accountability.</p>
        <div class="locked-steps">
          <span>1. Submit business proof or verified hiring history</span>
          <span>2. Agree to pay transparency and dispute standards</span>
          <span>3. Enter with a visible Client Verified badge</span>
        </div>
        <div class="activity-actions">
          <button class="primary-button">Request Verification</button>
          <button class="ghost-button show-client-preview">Preview unlocked posts</button>
        </div>
      </div>
      <aside class="verification-card">
        <strong>Access status</strong>
        <p>Pending verification</p>
        <span class="pill blue">Docs needed</span>
        <span class="pill green">Appeals supported</span>
        <span class="pill gold">Mod-audited</span>
      </aside>
    </section>
    <section class="feed client-preview" hidden>
      ${clientPosts.map(renderPostCard).join("")}
    </section>
  `;
}

function renderPostCard(post) {
  return `
    <article class="post-card" data-post-id="${post.id}">
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
          <button class="open-post" data-post-id="${post.id}">Open Thread</button>
        </div>
      </div>
      <div class="post-preview ${post.locked ? "locked" : ""}">${post.preview}</div>
    </article>
  `;
}

function getComments(post) {
  const title = post.title.toLowerCase();
  const comments = [];
  const add = (author, body, votes) => comments.push([author, body, votes]);

  if (title.includes("$3/hr") || title.includes("rate check") || title.includes("rates by role")) {
    add("Finance VA", "Question: are you only launching ads, or are you also doing strategy, copy, creative direction, reporting, and client calls? Those should not be priced as one admin task.", 72);
    add("Media Buyer VA", "For five accounts, I would separate the quote into account management, reporting, and creative coordination. Even if the hourly stays low, the scope needs a ceiling.", 61);
    add("Anonymous VA", "Answer from experience: the trap is not just the rate. It is when the client says 'quick update' and suddenly you are rebuilding the campaign structure at midnight.", 44);
    add("Kasama Mod", "Please avoid naming the client unless payment proof and scope screenshots are submitted. Rate context is welcome; accusations need evidence.", 38);
  } else if (title.includes("commission-only")) {
    add("Lead Gen VA", "Question to ask first: who owns the lead quality definition? If they can reject every lead after the fact, commission-only is basically unpaid work with extra steps.", 80);
    add("Sales Ops", "A fair version usually has a base rate plus commission. Pure commission only makes sense when tracking, attribution, and payout dates are written down.", 55);
    add("Anonymous VA", "I accepted one of these once. The dashboard mysteriously stopped updating right when payouts were due. Never again without a base.", 49);
  } else if (title.includes("job post") || title.includes("hiring") || title.includes("needed")) {
    add("Hiring Coach", "Real answer: a good post should include outcomes, weekly hours, timezone overlap, pay range, tools, and who approves work. Without that, applicants are guessing.", 68);
    add("Verified Client", "As a client, I would rather be forced to write the scope clearly upfront. It saves us from interviewing people who were never a fit.", 46);
    add("VA Applicant", "Question I always ask: 'What does success look like after 30 days?' If they cannot answer, the role is probably still a cloud.", 39);
  } else if (title.includes("scam") || title.includes("fake") || title.includes("telegram") || title.includes("portal") || title.includes("trial")) {
    add("Scam Watch Mod", "If you received the same link or script, send it through the report flow. Do not paste private IDs, emails, or full URLs in public comments.", 91);
    add("Anonymous VA", "The pattern I noticed: they rush you to Telegram, avoid company email, then ask for documents before giving a contract. That sequence is the warning sign.", 74);
    add("Verified VA", "Question: did they mention payroll setup before confirming the job? Real clients usually discuss scope and contract first, not ID collection.", 58);
    add("Kasama Mod", "We are tagging this as evidence pending. Public naming stays locked until at least two independent receipts are reviewed.", 47);
  } else if (title.includes("review") || title.includes("ratings") || title.includes("evidence checklist")) {
    add("Trust Team", "A useful review should answer: was pay on time, was scope stable, were approvals clear, and would you work with them again under the same terms?", 64);
    add("Verified VA", "Balanced reviews help more than angry ones. 'Paid on time but changed scope twice' tells me exactly what to watch for.", 51);
    add("Client Success VA", "Question: can we add a field for 'response time during blockers'? Slow replies hurt delivery even when the client is nice.", 34);
  } else if (title.includes("governance") || title.includes("proposal") || title.includes("rule") || title.includes("vote") || title.includes("access requirements")) {
    add("Kasama Council", "Proposal note: the rule should protect members without punishing small clients who are still learning how to write good job scopes.", 70);
    add("Verified Client", "I support pay ranges, but maybe let clients choose fixed budget or hourly range. Some legitimate roles are project-based.", 42);
    add("Anonymous VA", "Please make the rule strict enough that 'competitive pay' does not survive as a complete sentence.", 57);
    add("Policy Mod", "Current draft: posts without pay range go to review, not deletion. The client gets a prompt to fix missing details.", 49);
  } else if (title.includes("ai") || title.includes("prompt") || title.includes("automating") || title.includes("summarizing")) {
    add("AI Ops VA", "The most useful setup I have found is: raw notes, decisions made, blockers, next actions, owner, due date. Anything more becomes report theater.", 53);
    add("Security Mod", "Reminder: redact client names, private docs, logins, financials, and customer data before using any AI tool.", 66);
    add("Executive Assistant", "Question: do you tell clients when AI helped draft the report? I disclose it when it touches client-facing writing.", 37);
  } else if (title.includes("client-only") || title.includes("onboarding") || title.includes("businesses submit") || title.includes("scope dispute")) {
    add("Verified Client", "This is the kind of gate I would actually trust: not exclusive for status, but restricted because the conversations affect hiring standards.", 62);
    add("Kasama Mediation", "For disputes, the first useful question is: what was agreed, what changed, who approved the change, and what proof exists?", 58);
    add("Anonymous VA", "I like that clients get rules too. Too many platforms only teach freelancers how to behave professionally.", 45);
  } else if (title.includes("portfolio") || title.includes("raised rates") || title.includes("burnout") || title.includes("handoff")) {
    add("Senior VA", "The strongest proof is boring: before state, what you owned, after state, and a measurable result. Pretty portfolios help, but proof closes.", 63);
    add("Ops VA", "Question: how do you show confidential work? I use blurred screenshots plus a written process breakdown.", 41);
    add("Anonymous VA", "On burnout: if every client is urgent, the real problem is your calendar has no borders. Ask me how I learned. Actually, do not.", 52);
  } else {
    add("Verified VA", "Question: what would you put in writing before starting this? That usually reveals whether the setup is safe or fuzzy.", 42);
    add("Kasama Mod", "Good thread. Keep advice specific, avoid doxxing, and use the report button if you have evidence that needs private review.", 31);
    add("Anonymous VA", "This is the kind of discussion I wish existed before my first remote client. The comments are basically a seatbelt.", 24);
  }

  return comments.slice(0, 4);
}

function renderThreadDetail(post) {
  renderContext(post.hub, "Thread view with comments, reactions, reports, and member replies");
  const comments = getComments(post);

  document.querySelector("#feed").innerHTML = `
    <article class="thread-view">
      <button class="ghost-button detail-back">Back to feed</button>
      ${renderPostCard(post)}
      <section class="engagement-panel">
        <button class="reaction-button">Helpful <b>${Math.floor(post.votes / 3)}</b></button>
        <button class="reaction-button">Needs proof <b>${post.hubKey === "scams" ? 41 : 9}</b></button>
        <button class="reaction-button">Following <b>${post.comments + 12}</b></button>
        <button class="reaction-button">Send to mods <b>3</b></button>
      </section>
      <section class="comments-list">
        ${comments.map(([author, body, votes]) => renderComment(author, body, votes)).join("")}
      </section>
      <section class="comment-composer">
        <strong>Join the discussion</strong>
        <textarea rows="3" placeholder="Add a thoughtful comment, question, or evidence note..."></textarea>
        <button class="primary-button reply-send">Comment</button>
      </section>
    </article>
  `;
}

function renderComment(author, body, votes) {
  return `
    <article class="comment-card">
      <div>
        <strong>${author}</strong>
        <small>${votes} upvotes</small>
      </div>
      <p>${body}</p>
      <div class="comment-actions">
        <button class="comment-upvote" aria-label="Upvote comment" title="Upvote">▲</button>
        <button class="comment-dislike" aria-label="Dislike comment" title="Dislike">▼</button>
        <button class="comment-reply" aria-label="Reply to comment" title="Reply">💬</button>
        <button class="comment-report" aria-label="Report comment" title="Report">⚑</button>
      </div>
    </article>
  `;
}

function renderActivityDetail(type, index) {
  const source = type === "messages" ? messages : type === "notifications" ? notifications : savedItems.map(([title, body, hub]) => [title, body, hub, "Open"]);
  const [title, body, time] = source[index];
  const isMessage = type === "messages";
  const replies = isMessage
    ? [
        ["You", "Got it. I added clearer scope language and removed the phrase 'quick task' because that phrase has ruined enough Tuesdays.", 12],
        [title, "Perfect. Also added payment schedule visibility so nobody has to become a detective.", 18],
        ["Kasama Sentry", "Thread tagged as useful. Tiny confetti, professionally contained.", 7],
      ]
    : [
        ["Kasama Sentry", "This item is linked to the moderation and trust timeline.", 14],
        ["Verified Member", "Thanks for surfacing this. The context makes it much easier to act on.", 11],
      ];

  renderContext(isMessage ? "Message Thread" : "Activity Detail", isMessage ? "Private conversation with quick replies and actions" : "Open the alert, review the context, and take action");
  document.querySelector("#feed").innerHTML = `
    <article class="thread-view">
      <button class="ghost-button detail-back">Back to ${type}</button>
      <section class="message-detail">
        <small>${time}</small>
        <h2>${title}</h2>
        <p>${body}</p>
        <div class="activity-actions">
          <button class="primary-button">Acknowledge</button>
          <button class="ghost-button">Assign</button>
          <button class="ghost-button">Archive</button>
        </div>
      </section>
      <section class="comments-list">
        ${replies.map(([author, reply, votes]) => renderComment(author, reply, votes)).join("")}
      </section>
      <section class="comment-composer">
        <strong>${isMessage ? "Reply" : "Add note"}</strong>
        <textarea rows="3" placeholder="${isMessage ? "Write a reply..." : "Add a mod note or follow-up..."}"></textarea>
        <button class="primary-button reply-send">Send</button>
      </section>
    </article>
  `;
}

function renderActivityView(label, description, items, type) {
  renderContext(label, description);
  document.querySelector("#feed").innerHTML = items
    .map(
      ([title, body, time, action], index) => `
        <article class="activity-card" data-activity-type="${type}" data-activity-index="${index}">
          <small>${time}</small>
          <strong>${title}</strong>
          <p>${body}</p>
          <div class="activity-actions">
            <button class="primary-button open-activity" data-activity-type="${type}" data-activity-index="${index}">${action}</button>
            <button class="ghost-button open-activity" data-activity-type="${type}" data-activity-index="${index}">Open</button>
            <button class="ghost-button">Mark read</button>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderExplore() {
  renderContext("Explore", "Browse all Kasama Sentry hubs and current community activity");
  document.querySelector("#feed").innerHTML = hubs
    .map(([key, name, initial, color, count]) => {
      const topPost = posts.find((post) => post.hubKey === key);
      return `
        <article class="activity-card">
          <div class="post-meta">
            <span class="badge ${color}">${initial}</span>
            <span class="pill blue">${count} members active</span>
          </div>
          <strong>${name}</strong>
          <p>${hubDescriptions[key]}</p>
          <p><b>Featured:</b> ${topPost.title}</p>
          <div class="activity-actions">
            <button class="primary-button" data-open-hub="${key}">Open Hub</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderCurrentView() {
  renderHubs();

  if (currentView === "notifications") {
    renderActivityView("Notifications", "Reports, replies, votes, access requests, and moderation alerts", notifications, "notifications");
    return;
  }

  if (currentView === "messages") {
    renderActivityView("Messages", "Private conversations from clients, moderators, and verified members", messages, "messages");
    return;
  }

  if (currentView === "saved") {
    renderActivityView("Saved", "Posts and guides you saved for later", savedItems.map(([title, body, hub]) => [title, body, hub, "Open"]), "saved");
    return;
  }

  if (currentView === "explore") {
    renderExplore();
    return;
  }

  renderContext();
  renderPosts();
}

function setMainNav(view) {
  currentView = view;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.view === view);
  });
}

function renderQueue() {
  const modQueue = document.querySelector("#modQueue");
  modQueue.innerHTML = [
    ["Low-trust duplicate post", "AutoMod removed 3 similar posts in 12 minutes."],
    ["Payment scam report", "Needs moderator evidence review before public exposure."],
    ["Appeal from muted user", "User claims mistaken identity in Scam Watch thread."],
  ]
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

function setupMainNavigation() {
  document.querySelector(".main-nav").addEventListener("click", (event) => {
    const link = event.target.closest("a[data-view]");
    if (!link) return;

    event.preventDefault();
    setMainNav(link.dataset.view);
    if (currentView === "home") {
      currentHub = null;
      currentFeed = "for-you";
      document.querySelectorAll(".feed-tabs button").forEach((button) => {
        button.classList.toggle("active", button.dataset.feed === currentFeed);
      });
    }
    renderCurrentView();
  });
}

function setupHubNavigation() {
  document.querySelector("#hubList").addEventListener("click", (event) => {
    const link = event.target.closest(".hub-item");
    if (!link) return;

    event.preventDefault();
    currentHub = link.dataset.hub;
    setMainNav("home");
    document.querySelectorAll(".feed-tabs button").forEach((button) => button.classList.remove("active"));
    renderCurrentView();
  });
}

function setupFeedTabs() {
  document.querySelector(".feed-tabs").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-feed]");
    if (!button) return;

    currentFeed = button.dataset.feed;
    currentHub = null;
    setMainNav("home");
    document.querySelectorAll(".feed-tabs button").forEach((item) => item.classList.toggle("active", item === button));
    renderCurrentView();
  });

  document.querySelector("#resetFeed").addEventListener("click", () => {
    currentFeed = "for-you";
    currentHub = null;
    setMainNav("home");
    document.querySelectorAll(".feed-tabs button").forEach((button) => {
      button.classList.toggle("active", button.dataset.feed === currentFeed);
    });
    renderCurrentView();
  });
}

function setupFeedActions() {
  document.querySelector("#feed").addEventListener("click", (event) => {
    const back = event.target.closest(".detail-back");
    if (back) {
      renderCurrentView();
      return;
    }

    const openHub = event.target.closest("button[data-open-hub]");
    if (openHub) {
      currentHub = openHub.dataset.openHub;
      setMainNav("home");
      document.querySelectorAll(".feed-tabs button").forEach((button) => button.classList.remove("active"));
      renderCurrentView();
      return;
    }

    const openPost = event.target.closest(".open-post");
    if (openPost) {
      const post = posts.find((item) => item.id === openPost.dataset.postId);
      if (post) renderThreadDetail(post);
      return;
    }

    const postCard = event.target.closest(".post-card[data-post-id]");
    if (postCard && !event.target.closest("button")) {
      const post = posts.find((item) => item.id === postCard.dataset.postId);
      if (post) renderThreadDetail(post);
      return;
    }

    const openActivity = event.target.closest(".open-activity");
    if (openActivity) {
      renderActivityDetail(openActivity.dataset.activityType, Number(openActivity.dataset.activityIndex));
      return;
    }

    const previewClient = event.target.closest(".show-client-preview");
    if (previewClient) {
      const preview = document.querySelector(".client-preview");
      if (preview) {
        preview.hidden = !preview.hidden;
        previewClient.textContent = preview.hidden ? "Preview unlocked posts" : "Hide unlocked preview";
      }
      return;
    }

    const activityCard = event.target.closest(".activity-card[data-activity-type]");
    if (activityCard && !event.target.closest("button")) {
      renderActivityDetail(activityCard.dataset.activityType, Number(activityCard.dataset.activityIndex));
      return;
    }

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

    if (button.textContent === "Mark read") {
      button.closest(".activity-card").style.opacity = "0.55";
      button.textContent = "Read";
    }

    if (button.classList.contains("reaction-button")) {
      const count = button.querySelector("b");
      count.textContent = Number(count.textContent) + 1;
      button.classList.add("reacted");
    }

    if (button.classList.contains("comment-upvote")) {
      const meta = button.closest(".comment-card").querySelector("small");
      const current = Number(meta.textContent.replace(/\D/g, ""));
      meta.textContent = `${current + 1} upvotes`;
      button.disabled = true;
    }

    if (button.classList.contains("comment-dislike")) {
      button.disabled = true;
      button.closest(".comment-card").style.opacity = "0.76";
    }

    if (button.classList.contains("comment-report")) {
      button.disabled = true;
      button.closest(".comment-card").querySelector("small").textContent = "Flagged for mod review";
    }

    if (button.classList.contains("comment-reply")) {
      const card = button.closest(".comment-card");
      document.querySelectorAll(".comment-card").forEach((item) => item.classList.remove("reply-target"));
      card.classList.add("reply-target");
      const composer = document.querySelector(".comment-composer textarea");
      if (composer) {
        composer.value = `Replying to ${card.querySelector("strong").textContent}: `;
        composer.focus();
      }
    }

    if (button.classList.contains("reply-send")) {
      const composer = button.closest(".comment-composer");
      const textarea = composer.querySelector("textarea");
      const value = textarea.value.trim() || "Adding a quick note so future me remembers this thread was actually useful.";
      const list = document.querySelector(".comments-list");
      list.insertAdjacentHTML("afterbegin", renderComment("You", value, 1));
      textarea.value = "";
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
      if (typeof modal.showModal === "function") modal.showModal();
    });
  });
}

renderCurrentView();
renderQueue();
setupMainNavigation();
setupHubNavigation();
setupFeedTabs();
setupFeedActions();
setupModActions();
setupComposer();
