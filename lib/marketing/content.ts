// ========== BRANDING ==========
export const BRAND_NAME = "The Inner Labs"
export const LOGO_TEXT = "[LOGO]"
export const PRIMARY_CTA = "Try for Free"
export const SECONDARY_CTA = "Get a demo"

// ========== NAVIGATION ==========
export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "/pricing" },
]

export interface NavDropdownItem {
  label: string
  href: string
}

export const RESOURCES_DROPDOWN: NavDropdownItem[] = [
  { label: "Blog", href: "#" },
  { label: "Documentation", href: "#" },
  { label: "Help Center", href: "#" },
]

// ========== HERO ==========
export const HERO_TITLE = "AI visibility analytics for the answers layer."
export const HERO_DESCRIPTION =
  "Track mentions and citations across AI assistants, benchmark competitors, and fix gaps that block recommendations."

export const TRUSTED_BY_LABEL = "Trusted by teams at"
export const TRUSTED_COMPANIES = ["Company A", "Company B", "Company C", "Company D", "Company E", "Company F"]

// ========== METRICS ==========
export interface Metric {
  label: string
  value: string
}

export const METRICS: Metric[] = [
  { label: "Share of Answers", value: "+24%" },
  { label: "Citation Share", value: "38%" },
  { label: "Mentions Captured", value: "1,247" },
  { label: "Competitive Win-rate", value: "67%" },
]

export const METRICS_FOOTNOTE = "Example metrics from a demo workspace."

// ========== ASSISTANTS ==========
export interface Assistant {
  name: string
  desc: string
}

export const ASSISTANTS: Assistant[] = [
  { name: "ChatGPT", desc: "Track brand mentions in conversational AI responses." },
  { name: "Gemini", desc: "Monitor visibility across Google's multimodal assistant." },
  { name: "Perplexity", desc: "Measure share of answers in search-first AI." },
  { name: "Claude", desc: "Analyze citations in research-grade conversations." },
]

export const ASSISTANTS_TITLE = "Coverage across the assistants that matter."

// ========== FEATURES ==========
export interface Feature {
  category: string
  title: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
}

export const FEATURES: Feature[] = [
  {
    category: "Comprehensive Insights",
    title: "Brand Reports",
    description:
      "See how your brand appears across AI assistants. Track mention frequency, sentiment, and competitive positioning in one view.",
    ctaPrimary: PRIMARY_CTA,
    ctaSecondary: "Watch video",
  },
  {
    category: "Competitive Benchmarking",
    title: "Brand Visibility Index",
    description:
      "Compare your brand's visibility against competitors. Identify gaps and opportunities to improve your position in AI recommendations.",
    ctaPrimary: PRIMARY_CTA,
    ctaSecondary: "Watch video",
  },
  {
    category: "Citation Tracking",
    title: "Link Citations Analysis",
    description:
      "Understand which pages earn citations and why. Optimize your content to increase link placements in AI responses.",
    ctaPrimary: PRIMARY_CTA,
    ctaSecondary: "Watch video",
  },
]

// ========== HOW IT WORKS ==========
export interface HowItWorksStep {
  step: string
  title: string
  desc: string
}

export const HOW_IT_WORKS_TITLE = "How it works"

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  { step: "1", title: "Add your brand + competitors", desc: "Connect your brand and key competitors." },
  { step: "2", title: "Monitor prompts + answers daily", desc: "Track mentions across AI assistants." },
  { step: "3", title: "Fix gaps with prioritized actions", desc: "Ship changes that improve visibility." },
]

// ========== USE CASES ==========
export interface UseCaseBenefit {
  text: string
}

export interface UseCase {
  id: string
  label: string
  title: string
  benefits: UseCaseBenefit[]
  beforeValue: string
  afterValue: string
  bgColor: "pink" | "blue"
}

export const USE_CASES_TITLE = "Built for teams that need visibility"

export const USE_CASES: UseCase[] = [
  {
    id: "marketing",
    label: "Marketing",
    title: "Marketing teams",
    benefits: [
      { text: "Track brand awareness in AI conversations" },
      { text: "Monitor campaign impact on AI visibility" },
      { text: "Benchmark against competitors in real-time" },
    ],
    beforeValue: "23% share",
    afterValue: "47% share",
    bgColor: "pink",
  },
  {
    id: "seo",
    label: "SEO",
    title: "SEO teams",
    benefits: [
      { text: "Optimize content for AI citations" },
      { text: "Track keyword performance in AI answers" },
      { text: "Identify content gaps that block mentions" },
    ],
    beforeValue: "12 citations",
    afterValue: "89 citations",
    bgColor: "blue",
  },
  {
    id: "product",
    label: "Product",
    title: "Product teams",
    benefits: [
      { text: "Understand how AI describes your product" },
      { text: "Fix inaccurate feature descriptions" },
      { text: "Track sentiment across AI platforms" },
    ],
    beforeValue: "Mixed sentiment",
    afterValue: "92% positive",
    bgColor: "pink",
  },
  {
    id: "agencies",
    label: "Agencies",
    title: "Agencies",
    benefits: [
      { text: "Manage multiple client brands" },
      { text: "Generate white-label reports" },
      { text: "Prove ROI with AI visibility metrics" },
    ],
    beforeValue: "5 clients",
    afterValue: "24 clients",
    bgColor: "blue",
  },
]

// ========== PRICING ==========
export interface PricingFeature {
  text: string
}

export interface PricingPlan {
  name: string
  price: string
  features: PricingFeature[]
  highlighted: boolean
}

export const PRICING_TITLE = "Simple, transparent pricing"

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$99",
    features: [
      { text: "1 brand" },
      { text: "2 competitors" },
      { text: "Daily monitoring" },
      { text: "Basic reports" },
      { text: "Email support" },
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$299",
    features: [
      { text: "3 brands" },
      { text: "10 competitors" },
      { text: "Real-time monitoring" },
      { text: "Advanced reports" },
      { text: "Priority support" },
      { text: "API access" },
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      { text: "Unlimited brands" },
      { text: "Unlimited competitors" },
      { text: "White-label reports" },
      { text: "Dedicated support" },
      { text: "Custom integrations" },
      { text: "SLA guarantee" },
    ],
    highlighted: false,
  },
]

// ========== FAQ ==========
export interface FAQItem {
  q: string
  a: string
}

export const FAQ_TITLE = "Frequently asked questions"

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "How does AI visibility tracking work?",
    a: "We monitor prompts and responses across major AI assistants to track when your brand appears. Our system captures mentions, citations, and context to give you a complete view of your AI visibility.",
  },
  {
    q: "Which AI assistants do you support?",
    a: "We currently track ChatGPT, Gemini, Perplexity, and Claude. We're adding more platforms based on customer demand.",
  },
  {
    q: "Can I track my competitors?",
    a: "Yes. All plans include competitor tracking so you can benchmark your performance and identify opportunities.",
  },
  {
    q: "How often is data updated?",
    a: "Starter plans update daily. Growth and Enterprise plans include real-time monitoring for immediate insights.",
  },
  {
    q: "Do you offer API access?",
    a: "API access is included in Growth and Enterprise plans. You can integrate our data into your existing workflows and tools.",
  },
  {
    q: "What if I need help getting started?",
    a: "All plans include support. Enterprise customers get dedicated account management and onboarding assistance.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. You can upgrade or downgrade anytime. Changes take effect at your next billing cycle.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer a 14-day trial on all plans. No credit card required to start.",
  },
]

// ========== FINAL CTA ==========
export const FINAL_CTA_TITLE = "Start tracking AI visibility today."
export const FINAL_CTA_DESCRIPTION = "Join teams that ship faster with AI visibility data."
export const FINAL_CTA_EMAIL_PLACEHOLDER = "you@company.com"
export const FINAL_CTA_FOOTNOTE = "14-day trial. No credit card required."

// ========== FOOTER ==========
export const FOOTER_DESCRIPTION = "AI visibility analytics for modern brands."

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "API", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
]

export const FOOTER_COPYRIGHT = `© 2025 ${BRAND_NAME}. All rights reserved.`

