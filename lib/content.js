// ============================================================
// ANAFCO Technologies — Site content
// Realistic placeholder content. Replace freely.
// ============================================================

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

// Unsplash CDN helper — stable photo IDs, sized/cropped on the fly.
// Swap any `img()` call for your own screenshot path later.
export const img = (id, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80${
    h ? `&h=${h}` : ""
  }`;

// Work / portfolio showcase — mirrors wondermakers' categorized case studies,
// adapted to SaaS. Each item powers a card AND a /work/[slug] detail page.
export const work = [
  {
    slug: "northwind",
    client: "Northwind Retail",
    category: "Premium Storefront",
    mockup: "storefront",
    title: "A storefront that sells across 42 locations",
    desc: "Unified commerce with live inventory, loyalty and one-tap checkout.",
    result: "+38% checkout speed",
    tags: ["Next.js", "Stripe", "Headless commerce"],
    cover: "/work/premium-storefront.png",
    year: "2025",
    detail: {
      services: ["Premium Storefront", "UX/UI Design", "Frontend", "Headless Commerce"],
      contextHeading: "Bringing 42 retail stores under one modern storefront",
      contextIntro:
        "Northwind Retail had grown to 42 locations on a patchwork of legacy tills and spreadsheets. We rebuilt their commerce experience from the ground up — one fast, offline-capable storefront with live inventory and loyalty baked in.",
      meta: [
        { k: "Client", v: "Northwind Retail" },
        { k: "Location", v: "Austin, USA" },
        { k: "Sector", v: "Retail" },
        { k: "Year", v: "2025" },
        { k: "Timeline", v: "4 months" },
      ],
      conceptHeading: "Conversion-first, built for speed",
      conceptText:
        "We designed a clean, high-contrast storefront where every interaction is sub-100ms. Inventory updates in real time across all stores, and the checkout keeps working even when the connection drops — critical for busy retail floors.",
      marquee: "northwind",
      metrics: [
        { value: "+38%", label: "Faster checkout" },
        { value: "−24%", label: "Stockouts" },
        { value: "42", label: "Stores unified" },
      ],
      quote:
        "ANAFCO shipped our rollout weeks ahead of plan. It just works — even when the connection doesn't.",
      quoteBy: "Sarah Mensah, COO at Northwind Retail",
      devTools: ["Next.js", "Stripe", "Tailwind CSS", "Vercel"],
      designTools: ["Figma", "Framer", "Photoshop"],
      gallery: [
        img("1441986300917-64674bd600d8", 800, 600),
        img("1481437156560-3205f6a55735", 800, 600),
        img("1567401893414-76b7b1e5a7a5", 800, 600),
      ],
    },
  },
  {
    slug: "dimenso",
    client: "Dimenso",
    category: "Mobile App",
    mockup: "mobile",
    title: "A finance app people actually open daily",
    desc: "Real-time balances, insights and frictionless payments in your pocket.",
    result: "4.9★ app rating",
    tags: ["React Native", "Node.js", "Plaid"],
    cover: "/work/mobile-app.png",
    year: "2024",
    detail: {
      services: ["Mobile App", "UX/UI Design", "Motion", "Backend"],
      contextHeading: "A personal finance app that earns a daily open",
      contextIntro:
        "Dimenso wanted a finance app that didn't feel like a chore. We designed a fast, delightful mobile experience around real-time balances, spending insights and one-tap payments — the kind of app people check with their morning coffee.",
      meta: [
        { k: "Client", v: "Dimenso" },
        { k: "Location", v: "Berlin, Germany" },
        { k: "Sector", v: "Fintech" },
        { k: "Year", v: "2024" },
        { k: "Timeline", v: "5 months" },
      ],
      conceptHeading: "Delight in the details",
      conceptText:
        "Every screen is tuned for speed and clarity, with motion that guides rather than distracts. Secure bank connections via Plaid, biometric auth and offline-first data make it feel instant and trustworthy.",
      marquee: "dimenso",
      metrics: [
        { value: "4.9★", label: "App store rating" },
        { value: "62%", label: "Daily active users" },
        { value: "120k", label: "Downloads" },
      ],
      quote:
        "From prototype to production in ten weeks. Our users finally love opening a finance app.",
      quoteBy: "Leon Carter, Product Lead at Dimenso",
      devTools: ["React Native", "Node.js", "Plaid", "Expo"],
      designTools: ["Figma", "After Effects", "Lottie"],
      gallery: [
        img("1563013544-824ae1b704d3", 800, 600),
        img("1512941937669-90a1b58e7e9c", 800, 600),
        img("1556656793-08538906a9f8", 800, 600),
      ],
    },
  },
  {
    slug: "retailx",
    client: "RetailX",
    category: "Web App",
    mockup: "webapp",
    title: "A commerce & billing web app for modern retail",
    desc: "Unified sales, inventory, billing and analytics in one real-time dashboard.",
    result: "+45% faster billing",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    cover: "/work/fintech.png",
    year: "2025",
    detail: {
      services: ["Web App", "Billing", "UX/UI Design", "Platform Engineering"],
      contextHeading: "One web app to run sales, inventory and billing",
      contextIntro:
        "RetailX needed a single web platform to replace a stack of disconnected tools. We built a real-time commerce and billing dashboard — sales, transactions, inventory intelligence and customer insights, all in one place.",
      meta: [
        { k: "Client", v: "RetailX" },
        { k: "Location", v: "Dubai, UAE" },
        { k: "Sector", v: "Retail / SaaS" },
        { k: "Year", v: "2025" },
        { k: "Timeline", v: "5 months" },
      ],
      conceptHeading: "Real-time operations, beautifully unified",
      conceptText:
        "We designed a fast, data-dense dashboard that surfaces live sales, inventory health and billing in a single view — with automated invoicing and analytics that turn raw numbers into decisions.",
      marquee: "retailx",
      metrics: [
        { value: "+45%", label: "Faster billing" },
        { value: "1,248", label: "Daily transactions" },
        { value: "99.9%", label: "Uptime" },
      ],
      quote:
        "It replaced four separate tools. Our team finally runs the whole store from one screen.",
      quoteBy: "Omar Farouk, COO at RetailX",
      devTools: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
      designTools: ["Figma", "Photoshop"],
      gallery: [
        img("1460925895917-afdab827c52f", 800, 600),
        img("1556742502-ec7c0e9f34b1", 800, 600),
        img("1551288049-bebda4e38f71", 800, 600),
      ],
    },
  },
  {
    slug: "vantage",
    client: "Vantage Cloud",
    category: "Web3 App",
    mockup: "web3",
    title: "On-chain vault with a human-grade UX",
    desc: "Wallet flows, staking and analytics that feel like consumer software.",
    result: "142 ETH TVL",
    tags: ["Solidity", "wagmi", "TypeScript"],
    cover: "/work/web3-app.png",
    year: "2025",
    detail: {
      services: ["Web3 App", "UX/UI Design", "Smart Contracts", "Frontend"],
      contextHeading: "Making on-chain finance feel like consumer software",
      contextIntro:
        "Vantage Cloud needed a vault product that didn't intimidate mainstream users. We designed wallet flows, staking and analytics with the clarity of a top-tier consumer app, backed by audited smart contracts.",
      meta: [
        { k: "Client", v: "Vantage Cloud" },
        { k: "Location", v: "Singapore" },
        { k: "Sector", v: "Web3 / DeFi" },
        { k: "Year", v: "2025" },
        { k: "Timeline", v: "4 months" },
      ],
      conceptHeading: "Trust through clarity",
      conceptText:
        "We stripped jargon, surfaced risk transparently and made every transaction legible. Smart-contract interactions feel as smooth as a fintech app, while staying fully non-custodial.",
      marquee: "vantage",
      metrics: [
        { value: "142 ETH", label: "Total value locked" },
        { value: "+12.4%", label: "Weekly growth" },
        { value: "100%", label: "Non-custodial" },
      ],
      quote:
        "The UX is unreal for a Web3 product. Our retention numbers speak for themselves.",
      quoteBy: "Mei Lin, Founder at Vantage Cloud",
      devTools: ["Solidity", "wagmi", "TypeScript", "Foundry"],
      designTools: ["Figma", "Blender", "After Effects"],
      gallery: [
        img("1639322537228-f710d846310a", 800, 600),
        img("1640340434855-6084b1f4901c", 800, 600),
        img("1518546305927-5a555bb7020d", 800, 600),
      ],
    },
  },
  {
    slug: "vanguard-fc",
    client: "Vanguard FC",
    category: "Digital Platform",
    mockup: "webapp",
    title: "A unified fan-engagement platform for a global club",
    desc: "Real-time conversations, live match context and a connected digital ecosystem.",
    result: "+35% engagement",
    tags: ["Next.js", "React Native", "Realtime"],
    cover: "/work/immersive-website.png",
    year: "2026",
    detail: {
      services: ["Digital Platform", "Mobile App", "UX/UI Design", "Platform Engineering"],
      contextHeading: "Unifying a global club community",
      contextIntro:
        "Vanguard FC had a worldwide fanbase scattered across disconnected channels and chronological feeds. We rebuilt fan engagement around living conversations, real-time match context and a single connected ecosystem — spanning web and mobile.",
      meta: [
        { k: "Client", v: "Vanguard FC" },
        { k: "Location", v: "Paris, France" },
        { k: "Sector", v: "Sports / Media" },
        { k: "Year", v: "2026" },
        { k: "Timeline", v: "6 months" },
      ],
      conceptHeading: "From linear feeds to living conversations",
      conceptText:
        "Instead of chronological articles, we designed ongoing threads — the transfer debate, the virtual stadium experience, collector drops — that fans follow like stories. A contextual live bar adapts in real time to game state, time and location, turning every match into a shared moment.",
      marquee: "vanguard",
      shots: [
        "/work/vanguard-fc/shot-1.png",
      ],
      metrics: [
        { value: "+35%", label: "Engagement duration" },
        { value: "+14%", label: "Merch conversion" },
        { value: "1", label: "Connected ecosystem" },
      ],
      quote:
        "ANAFCO turned a scattered fanbase into one connected community. Engagement has never been higher.",
      quoteBy: "Julien Moreau, Head of Digital at Vanguard FC",
      devTools: ["Next.js", "React Native", "WebSockets", "Vercel"],
      designTools: ["Figma", "After Effects", "Blender"],
      gallery: [
        "/work/vanguard-fc/gallery-1.png",
        "/work/vanguard-fc/gallery-2.png",
        "/work/vanguard-fc/gallery-3.png",
      ],
    },
  },
];

// ============================================================
// Showcase grid — eight SaaS development categories.
// Drives the homepage "Selected work" flip cards AND the /work grid.
// Each `image` lives in public/work/. Swap freely.
// ============================================================
export const showcaseIntro =
  "A perfectly structured grid of eight distinct visual cards — each a high-end abstract render representing a unique SaaS development category. Polished textures, integrated light and a dark, sophisticated palette, in the ANAFCO Technologies style.";

export const showcase = [
  {
    no: "01",
    category: "Premium Storefront",
    image: "/work/premium-storefront.png",
    desc: "Conversion-first commerce with live inventory, loyalty and sub-100ms checkout.",
    tags: ["Headless commerce", "Next.js", "Stripe"],
  },
  {
    no: "02",
    category: "Mobile App",
    image: "/work/mobile-app.png",
    desc: "Delightful, offline-first iOS & Android apps people open every single day.",
    tags: ["React Native", "Realtime", "Biometric auth"],
  },
  {
    no: "03",
    category: "Web3 App",
    image: "/work/web3-app.png",
    desc: "On-chain products with consumer-grade UX, audited contracts and non-custodial flows.",
    tags: ["Solidity", "wagmi", "Smart contracts"],
  },
  {
    no: "04",
    category: "Gaming",
    image: "/work/gaming.png",
    desc: "Immersive game UIs, leaderboards and live economies built for scale and speed.",
    tags: ["Realtime", "WebGL", "Multiplayer"],
  },
  {
    no: "05",
    category: "Fintech",
    image: "/work/fintech.png",
    desc: "Secure payments, ledgers and analytics with the polish of top-tier consumer finance.",
    tags: ["Payments", "Ledger", "Compliance"],
  },
  {
    no: "06",
    category: "Cloud",
    image: "/work/cloud.png",
    desc: "Secure, observable infrastructure with CI/CD, autoscaling and cost controls baked in.",
    tags: ["AWS", "Kubernetes", "Terraform"],
  },
  {
    no: "07",
    category: "Immersive Website",
    image: "/work/immersive-website.png",
    desc: "Award-grade marketing sites with 3D motion, scroll storytelling and brand impact.",
    tags: ["Three.js", "Motion", "WebGL"],
  },
  {
    no: "08",
    category: "POS Billing Software",
    image: "/work/pos-billing.png",
    desc: "Fast, offline-capable point-of-sale and metered billing across every location.",
    tags: ["Offline-first", "Billing", "Multi-location"],
  },
  {
    no: "09",
    category: "AI Automation",
    image: "/work/ai-automation.png",
    desc: "AI copilots, document intelligence and predictive workflows that remove repetitive operations.",
    tags: ["AI copilots", "Document AI", "Predictive ops"],
  },
];

// Industries shown on the /work hero ("Experienced in")
export const experiencedIn = [
  "Retail",
  "Restaurants",
  "Fintech",
  "Telecom & ISP",
  "Accounting",
  "SaaS",
  "Web3",
  "and more",
];

// Awards (mirrors wondermakers' year-grouped awards)
export const awards = [
  { year: "2026", name: "CSS Design Awards", result: "Site of the Day" },
  { year: "2025", name: "Awwwards", result: "Honorable Mention" },
  { year: "2025", name: "Clutch", result: "Top SaaS Developers" },
  { year: "2024", name: "The Webby Awards", result: "Nominee" },
  { year: "2024", name: "FWA", result: "FWA of the Day" },
];

// Client groups (mirrors wondermakers' grouped clients)
export const clientGroups = [
  { group: "Retail & Hospitality", names: ["Northwind Retail", "Bistro Collective", "Cedar & Co.", "Maple POS"] },
  { group: "Telecom & ISP", names: ["FibreNet ISP", "Beacon Telecom", "Vantage Cloud"] },
  { group: "Finance & SaaS", names: ["LedgerWorks", "Dimenso", "Vantage Cloud"] },
  { group: "Startups", names: ["Northwind", "Dimenso", "LedgerWorks"] },
];

// "What we build" — four capability pillars (mirrors wondermakers 01–04).
// `image` is the panel background — swap for /whatwebuild/*.jpg when you add your own.
export const whatWeBuild = [
  {
    no: "01",
    title: "SaaS Products & Platforms",
    desc: "Multi-tenant products with billing, auth and analytics, built to scale from MVP to enterprise.",
    image: img("1620121692029-d088224ddc74", 1000, 1200), // abstract dark wave
  },
  {
    no: "02",
    title: "Apps & Real-Time Systems",
    desc: "Web and mobile apps, POS, dashboards and event-driven systems that stay fast under load.",
    image: img("1550684376-efcbd6e3f031", 1000, 1200), // green liquid glass
  },
  {
    no: "03",
    title: "Commerce & Storefronts",
    desc: "Premium retail and restaurant commerce — inventory, payments and loyalty in one place.",
    image: img("1618005182384-a83a8bd57fbe", 1000, 1200), // abstract 3D render
  },
  {
    no: "04",
    title: "AI Automation & Cloud",
    desc: "AI copilots, document intelligence and secure, observable cloud infrastructure.",
    image: img("1635070041078-e363dbe005cb", 1000, 1200), // abstract neural texture
  },
];

// Engagement models (mirrors wondermakers 01–02)
export const engagement = [
  {
    no: "01",
    title: "End-to-end product delivery",
    desc: "You bring the vision; we own discovery, design, engineering and launch — shipping working software every week.",
    points: ["Fixed, transparent scope", "Weekly releases", "Full IP handover"],
  },
  {
    no: "02",
    title: "Embedded expertise",
    desc: "We plug senior product, design and engineering talent directly into your team to accelerate what you've already started.",
    points: ["Senior, vetted talent", "Works in your stack", "Flexible monthly retainer"],
  },
];

// "Our edge" — differentiators (mirrors wondermakers 4-point section).
// Portrait image cards — swap `image` for /edge/*.jpg when you add your own.
export const edge = [
  {
    icon: "Design",
    title: "Design as strategic value",
    desc: "We treat design as a growth lever, not decoration — every screen earns its place against a business goal.",
    image: img("1561070791-2526d30994b5", 800, 1100), // design / creative
  },
  {
    icon: "Scale",
    title: "Built to scale fluidly",
    desc: "Architecture and UI that grow with you, from your first hundred users to your millionth.",
    image: img("1451187580459-43490279c0fa", 800, 1100), // network / scale
  },
  {
    icon: "Code",
    title: "Business-driven engineering",
    desc: "Pragmatic, proven technology chosen for longevity and ROI — never resume-driven hype.",
    image: img("1498050108023-c5249f4df085", 800, 1100), // code on screen
  },
  {
    icon: "Bolt",
    title: "Momentum by default",
    desc: "Weekly shipping and radical transparency keep projects moving and stakeholders confident.",
    image: img("1552664730-d307ca884978", 800, 1100), // team collaboration
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Products shipped" },
  { value: 99.98, suffix: "%", decimals: 2, label: "Platform uptime" },
  { value: 5.0, suffix: "", decimals: 1, label: "Avg. client rating" },
  { value: 8, suffix: "+", label: "Years building" },
];

export const clients = [
  "Northwind Retail",
  "Bistro Collective",
  "LedgerWorks",
  "FibreNet ISP",
  "Maple POS",
  "Vantage Cloud",
  "Cedar & Co.",
  "Beacon Telecom",
];

// Each service card has a subtle background `image` — swap for /services/*.jpg later.
export const services = [
  {
    icon: "Saas",
    no: "01",
    title: "SaaS Product Development",
    desc: "Multi-tenant platforms with billing, auth, analytics and a roadmap-ready architecture built to scale from MVP to enterprise.",
    points: ["Multi-tenant architecture", "Subscriptions & metering", "Analytics & admin"],
    image: img("1551288049-bebda4e38f71", 800, 600),
  },
  {
    icon: "Code",
    no: "02",
    title: "Custom Software Development",
    desc: "Bespoke internal tools and line-of-business applications tailored precisely to how your team actually operates.",
    points: ["Workflow automation", "Internal dashboards", "Legacy modernization"],
    image: img("1461749280684-dccba630e2f6", 800, 600),
  },
  {
    icon: "Pos",
    no: "03",
    title: "POS Systems",
    desc: "Fast, offline-capable point-of-sale for retail and restaurants — inventory, payments, and reporting in one place.",
    points: ["Offline-first checkout", "Inventory & stock", "Card & wallet payments"],
    image: img("1556742044-3c52d6e88c62", 800, 600),
  },
  {
    icon: "Billing",
    no: "04",
    title: "ISP Billing Systems",
    desc: "End-to-end billing, provisioning and customer management purpose-built for internet and telecom providers.",
    points: ["Usage-based billing", "Auto provisioning", "Customer self-service"],
    image: img("1544197150-b99a580bb7a8", 800, 600),
  },
  {
    icon: "Ai",
    no: "05",
    title: "AI Automation",
    desc: "Put AI to work — document processing, support copilots and predictive workflows that remove repetitive operations.",
    points: ["Support copilots", "Document intelligence", "Predictive ops"],
    image: img("1620712943543-bcc4688e7485", 800, 600),
  },
  {
    icon: "Cloud",
    no: "06",
    title: "Cloud Solutions",
    desc: "Secure, observable cloud infrastructure with CI/CD, autoscaling and cost controls baked in from day one.",
    points: ["CI/CD pipelines", "Autoscaling & HA", "Cost optimization"],
    image: img("1504384308090-c894fdcc538d", 800, 600),
  },
];

export const solutions = [
  {
    tag: "Retail & Restaurants",
    title: "ANAFCO POS",
    desc: "A point-of-sale platform that keeps selling even when the internet drops. Real-time inventory, kitchen routing, and one dashboard across every location.",
    metric: { value: "+38%", label: "faster checkout" },
    features: ["Offline-first", "Multi-location", "Live inventory", "Kitchen display"],
  },
  {
    tag: "Telecom & ISP",
    title: "ANAFCO Billing Cloud",
    desc: "Automated metered billing, provisioning and a self-service customer portal for internet service providers — from 500 to 500,000 subscribers.",
    metric: { value: "−60%", label: "billing errors" },
    features: ["Usage metering", "Auto-provisioning", "Self-service portal", "Dunning & retries"],
  },
];

export const industries = [
  { icon: "Business", title: "Small Businesses", desc: "Lean tools that punch above their weight and grow with you." },
  { icon: "Retail", title: "Retail Stores", desc: "Inventory, checkout and loyalty unified across locations." },
  { icon: "Restaurant", title: "Restaurants", desc: "Orders, kitchen and payments that keep service moving." },
  { icon: "Accounting", title: "Accounting Firms", desc: "Secure, auditable automation for client-heavy workflows." },
  { icon: "Telecom", title: "Telecom & ISP", desc: "Billing and provisioning that scales with your network." },
];

export const process = [
  { icon: "Discover", no: "01", title: "Discover", desc: "We map your goals, users and constraints into a sharp, prioritized scope." },
  { icon: "Design", no: "02", title: "Design", desc: "Prototypes and architecture you can validate before a line of code ships." },
  { icon: "Build", no: "03", title: "Build", desc: "Weekly releases, transparent progress, and quality gates at every step." },
  { icon: "Scale", no: "04", title: "Scale", desc: "We harden, observe and optimize — then grow the roadmap with you." },
];

export const techStack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "React Native"] },
  { group: "Backend", items: ["Node.js", "Python", "Go", ".NET", "GraphQL"] },
  { group: "Data", items: ["PostgreSQL", "Redis", "ClickHouse", "Kafka", "Prisma"] },
  { group: "Cloud & DevOps", items: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform"] },
  { group: "AI", items: ["Claude", "OpenAI", "LangChain", "Pinecone", "PyTorch"] },
];

export const caseStudies = [
  {
    client: "Northwind Retail",
    industry: "Retail · 42 stores",
    title: "Unified POS across 42 stores cut checkout time by a third",
    result: "+38% checkout speed",
    secondary: "−24% stockouts",
    accent: "lime",
  },
  {
    client: "FibreNet ISP",
    industry: "Telecom · 80k subscribers",
    title: "Automated billing platform eliminated manual invoicing errors",
    result: "−60% billing errors",
    secondary: "4h → 9min billing runs",
    accent: "violet",
  },
  {
    client: "LedgerWorks",
    industry: "Accounting · SaaS",
    title: "AI document pipeline saved an estimated 2,000 hours a year",
    result: "2,000+ hrs saved",
    secondary: "92% auto-classified",
    accent: "lime",
  },
];

export const testimonials = [
  {
    quote:
      "ANAFCO shipped our POS rollout across every location weeks ahead of plan. It just works — even when the connection doesn't.",
    name: "Sarah Mensah",
    role: "COO, Northwind Retail",
  },
  {
    quote:
      "The billing platform paid for itself in a quarter. Billing runs that took half a day now finish before our morning coffee.",
    name: "David Okoro",
    role: "CTO, FibreNet ISP",
  },
  {
    quote:
      "They felt like part of our team. Sharp on the engineering, but genuinely thoughtful about our customers and our numbers.",
    name: "Amara Patel",
    role: "Founder, LedgerWorks",
  },
  {
    quote:
      "From prototype to production in ten weeks. The AI automation removed the most painful part of our daily operations.",
    name: "Leon Carter",
    role: "Ops Director, Bistro Collective",
  },
];

export const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most MVPs ship in 8–12 weeks. We work in weekly releases so you see real, usable software early instead of waiting months for a big reveal.",
  },
  {
    q: "Do you work with existing teams and codebases?",
    a: "Yes. We frequently extend in-house teams, modernize legacy systems, and pick up half-built products. We adapt to your stack and your way of working.",
  },
  {
    q: "How do you price engagements?",
    a: "Fixed-scope for well-defined builds, and monthly retainers for ongoing product work. You'll always get a clear estimate and no surprise invoices.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do — completely. All source code, infrastructure and intellectual property are yours, handed over with documentation and full access.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support, monitoring and roadmap partnership. Many clients keep us on to evolve the product as the business grows.",
  },
];

export const company = {
  name: "ANAFCO Technologies",
  email: "support@anafcotech.com",
  phone: "+1 (262) 393-2049",
  address: "2815 Coyle St Unit 176, Brooklyn, NY 11235",
  tagline: "Software that runs your business.",
};

// ---------------- About page ----------------
export const about = {
  intro:
    "ANAFCO Technologies is a software studio for ambitious businesses. We design and build the products our clients run on — from SaaS platforms and POS systems to ISP billing, AI automation and cloud infrastructure.",
  story: [
    "We started ANAFCO with a simple belief: small and mid-sized businesses deserve software as good as what the giants ship. Too often they're handed clunky templates or half-finished builds that never quite fit.",
    "So we built a studio around craft and outcomes. Senior engineers and designers, working in tight loops, shipping real software every week — and measuring success the way our clients do: in revenue earned, hours saved and errors eliminated.",
    "Today we've shipped 120+ products across retail, hospitality, finance and telecom — and we're just getting started.",
  ],
  values: [
    {
      icon: "Design",
      title: "Craft over templates",
      desc: "We sweat the details most studios skip. Every interaction, every edge case, every empty state.",
    },
    {
      icon: "Check",
      title: "Outcomes, not output",
      desc: "Shipping features isn't the goal. Moving your numbers is. We tie our work to your business metrics.",
    },
    {
      icon: "Bolt",
      title: "Momentum & transparency",
      desc: "Weekly releases, open progress, no black boxes. You always know exactly where things stand.",
    },
    {
      icon: "Shield",
      title: "You own everything",
      desc: "All code, infrastructure and IP are yours — handed over with full documentation and access.",
    },
  ],
  // Photos are local files in public/team/ — drop the real headshots there.
  // Team mix: 2 Pakistani, 1 Indian, 3 USA.
  team: [
    { name: "Saeed Zaman Khan", role: "Founder & CEO", photo: "/team/saeed-zaman-khan.png" },
    { name: "Bilal Ahmed", role: "Head of Engineering", photo: "/team/bilal-ahmed.png" },
    { name: "Priya Nair", role: "Lead Product Manager", photo: "/team/priya-nair.png" },
    { name: "Sarah Mitchell", role: "Head of Design", photo: "/team/sarah-mitchell.png" },
    { name: "Tom Becker", role: "Principal Engineer", photo: "/team/tom-becker.png" },
    { name: "Emily Carter", role: "Cloud & DevOps Lead", photo: "/team/emily-carter.png" },
  ],
  milestones: [
    { year: "2018", text: "ANAFCO founded as a two-person studio." },
    { year: "2020", text: "Shipped our first multi-tenant SaaS platform." },
    { year: "2022", text: "Launched ANAFCO POS and Billing Cloud as products." },
    { year: "2024", text: "Crossed 100 products shipped; added an AI automation practice." },
    { year: "2026", text: "120+ products across four continents and counting." },
  ],
};
