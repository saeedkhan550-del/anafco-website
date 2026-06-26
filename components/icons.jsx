// Lightweight inline icon set (stroke-based, 24x24, currentColor).
// Keeps the bundle dependency-free and consistent in weight.

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const Icon = {
  Saas: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M7 9l2 2-2 2M13 13h4" />
    </svg>
  ),
  Code: (p) => (
    <svg {...base} {...p}>
      <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
    </svg>
  ),
  Pos: (p) => (
    <svg {...base} {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h8M8 15h4" />
    </svg>
  ),
  Billing: (p) => (
    <svg {...base} {...p}>
      <path d="M4 3h12l4 4v14H4zM16 3v4h4" />
      <path d="M9 12h6M9 16h6M9 8h2" />
    </svg>
  ),
  Ai: (p) => (
    <svg {...base} {...p}>
      <rect x="6" y="6" width="12" height="12" rx="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l1.5 1.5M19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Cloud: (p) => (
    <svg {...base} {...p}>
      <path d="M7 18a4 4 0 1 1 .5-7.97A5 5 0 0 1 17 11a3.5 3.5 0 0 1 0 7H7z" />
    </svg>
  ),
  Retail: (p) => (
    <svg {...base} {...p}>
      <path d="M4 9l1-5h14l1 5M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M4 9h16M9 13h6" />
    </svg>
  ),
  Restaurant: (p) => (
    <svg {...base} {...p}>
      <path d="M5 2v8a2 2 0 0 0 2 2v10M5 6h4M9 2v8M16 2c-1.5 1-2 3-2 5s.5 4 2 5v8" />
    </svg>
  ),
  Accounting: (p) => (
    <svg {...base} {...p}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8M8 11h3M8 15h3M15 11v6M13 14h4" />
    </svg>
  ),
  Telecom: (p) => (
    <svg {...base} {...p}>
      <path d="M12 18v3M8 21h8M3 9a13 13 0 0 1 18 0M6.5 12.5a8 8 0 0 1 11 0M10 15.5a3 3 0 0 1 4 0" />
    </svg>
  ),
  Business: (p) => (
    <svg {...base} {...p}>
      <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6M9 11h.01M15 11h.01" />
    </svg>
  ),
  Discover: (p) => (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
    </svg>
  ),
  Design: (p) => (
    <svg {...base} {...p}>
      <path d="M12 19l7-7-4-4-7 7-1 5 5-1zM3 21l3-1" />
    </svg>
  ),
  Build: (p) => (
    <svg {...base} {...p}>
      <path d="M14 6l4 4M3 21l4-1 11-11a2.8 2.8 0 0 0-4-4L3 16l-1 4z" />
    </svg>
  ),
  Scale: (p) => (
    <svg {...base} {...p}>
      <path d="M3 17l5-5 4 3 7-8M14 4h5v5" />
    </svg>
  ),
  Arrow: (p) => (
    <svg {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ArrowUpRight: (p) => (
    <svg {...base} {...p}>
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  ),
  Check: (p) => (
    <svg {...base} {...p}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  Star: (p) => (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
    </svg>
  ),
  Plus: (p) => (
    <svg {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Sun: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
    </svg>
  ),
  Moon: (p) => (
    <svg {...base} {...p}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  ),
  Menu: (p) => (
    <svg {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  ),
  Close: (p) => (
    <svg {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  Mail: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  Shield: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Bolt: (p) => (
    <svg {...base} {...p}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  ),
};
