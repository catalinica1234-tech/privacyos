export type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

export const demoAnalysis = {
  id: "demo-001",
  domain: "example.com",
  url: "https://example.com",
  analyzedAt: "August 31, 2026",
  jurisdiction: "Chile",
  regulation: "Ley 21.719",
  score: 78,
  riskLevel: "MEDIUM" as RiskLevel,
  dimensions: [
    { label: "Security", value: 91 },
    { label: "Transparency", value: 82 },
    { label: "Data Minimization", value: 74 },
    { label: "Retention", value: 61 },
    { label: "Third Parties", value: 57 },
    { label: "International Transfers", value: 80 },
    { label: "User Rights", value: 86 },
    { label: "Sensitive Data", value: 92 },
    { label: "Tracking", value: 54 },
    { label: "Profiling", value: 68 },
  ],
  findings: [
    { title: "Privacy policy found", description: "A privacy-policy reference is present in the demo evidence set.", type: "positive" },
    { title: "Third-party tracking detected", description: "Analytics and advertising technologies appear in the controlled demo evidence.", type: "warning" },
    { title: "Retention information is limited", description: "The demo policy provides only partial information about retention periods.", type: "warning" },
  ],
  declaration: "Analytics cookies are used to improve the user experience.",
  evidence: [
    "Google Analytics",
    "Meta Pixel",
    "Third-party analytics cookie",
  ],
  comparison: {
    result: "Potential inconsistency",
    confidence: 84,
    explanation: "The controlled demo evidence shows more third-party tracking signals than the simplified declaration describes. This is an observation that requires review, not a legal conclusion.",
  },
  risks: [
    { id: "r1", level: "HIGH" as RiskLevel, title: "Third-party tracking", description: "Multiple third-party tracking technologies are present in the demo evidence.", impact: "High", likelihood: "Medium" },
    { id: "r2", level: "HIGH" as RiskLevel, title: "Limited retention transparency", description: "Retention information is not sufficiently detailed in the demo policy representation.", impact: "Medium", likelihood: "Medium" },
    { id: "r3", level: "MEDIUM" as RiskLevel, title: "Third-party disclosure", description: "Third-party providers are not fully described in the controlled declaration.", impact: "Medium", likelihood: "Medium" },
    { id: "r4", level: "MEDIUM" as RiskLevel, title: "Tracking purpose clarity", description: "Some observed tracking purposes require additional contextual review.", impact: "Medium", likelihood: "Low" },
    { id: "r5", level: "LOW" as RiskLevel, title: "Policy discoverability", description: "The policy is represented as discoverable in the demo scan.", impact: "Low", likelihood: "Low" },
    { id: "r6", level: "CRITICAL" as RiskLevel, title: "Sensitive-data review", description: "The demo scenario flags sensitive-data handling for contextual review; no legal conclusion is made.", impact: "High", likelihood: "Low" },
  ],
  recommendations: [
    "Review whether the privacy notice accurately describes all observed third-party technologies.",
    "Document retention periods or criteria more clearly where applicable.",
    "Map each third-party technology to a stated purpose and data category.",
  ],
};

export const recentAnalyses = [
  { id: "demo-001", domain: "example.com", score: 78, level: "GOOD", date: "Aug 31, 2026" },
  { id: "demo-002", domain: "service.demo", score: 61, level: "MEDIUM", date: "Aug 30, 2026" },
  { id: "demo-003", domain: "privacy.test", score: 86, level: "GOOD", date: "Aug 28, 2026" },
];

export const scoreHistory = [
  { name: "Aug 25", score: 68 },
  { name: "Aug 26", score: 71 },
  { name: "Aug 27", score: 73 },
  { name: "Aug 28", score: 76 },
  { name: "Aug 29", score: 74 },
  { name: "Aug 30", score: 78 },
  { name: "Aug 31", score: 78 },
];

export const riskDistribution = [
  { name: "Low", value: 1 },
  { name: "Medium", value: 2 },
  { name: "High", value: 2 },
  { name: "Critical", value: 1 },
];

export const jurisdictions = [
  { code: "CL", flag: "🇨🇱", name: "Chile", regulation: "Ley 21.719", status: "Available" },
  { code: "EU", flag: "🇪🇺", name: "European Union", regulation: "GDPR", status: "Available" },
  { code: "BR", flag: "🇧🇷", name: "Brazil", regulation: "LGPD", status: "Available" },
  { code: "US-CA", flag: "🇺🇸", name: "California", regulation: "CCPA / CPRA", status: "Available" },
];

export const rights = [
  { title: "Access", icon: "Eye", description: "Understand what personal data may be processed about you and how to request access." },
  { title: "Rectification", icon: "PenLine", description: "Request correction of personal information that may be inaccurate or incomplete." },
  { title: "Deletion", icon: "Trash2", description: "Request deletion where the applicable framework and circumstances provide for it." },
  { title: "Opposition", icon: "ShieldOff", description: "Object to certain processing activities where the applicable rules provide that right." },
  { title: "Portability", icon: "ArrowRightLeft", description: "In applicable circumstances, request personal information in a portable format." },
];
