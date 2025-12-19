"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/marketing/footer"
import { MarketingShell } from "@/components/marketing/marketing-shell"
import { Navbar } from "@/components/marketing/navbar"

const PRICING_PLANS = [
  {
    name: "Simple",
    priceMonthly: "₹2,000",
    priceYearly: "₹1,700",
    description: "For growing startups that are starting to track and grow their AI search visibility.",
    features: [
      "Access to ChatGPT, Gemini, Claude, and Perplexity",
      "Track up to 5 prompts",
      "Prompts run across models on a daily interval",
      "Up to 700 AI answers analyzed per month",
      "Unlimited countries",
      "Unlimited seats",
      "Email Support",
    ],
    highlighted: false,
    cta: "Start for free",
    ctaVariant: "outline" as const,
  },
  {
    name: "Starter",
    priceMonthly: "₹9,400",
    priceYearly: "₹7,990",
    description: "For growing startups that are starting to track and grow their AI search visibility.",
    features: [
      "Access to ChatGPT, Gemini, Claude, and Perplexity",
      "Track up to 25 prompts",
      "Prompts run across models on a daily interval",
      "Up to 2,250 AI answers analyzed per month",
      "Unlimited countries",
      "Unlimited seats",
      "Email Support",
    ],
    highlighted: true,
    cta: "Start for free",
    ctaVariant: "default" as const,
  },
  {
    name: "Pro",
    priceMonthly: "₹21,000",
    priceYearly: "₹17,850",
    description: "For agile SMEs wanting deeper insights into their AI search efforts and faster growth.",
    features: [
      "Access to ChatGPT, Gemini, Claude, and Perplexity",
      "Track up to 100 prompts",
      "Prompts run across models on a daily interval",
      "Up to 9,000 AI answers analyzed per month",
      "Unlimited countries",
      "Unlimited seats",
      "Email + Slack Support",
    ],
    highlighted: false,
    cta: "Start for free",
    ctaVariant: "outline" as const,
  },
]

const PRICING_FAQS = [
  {
    q: "What is the currency?",
    a: "We are currently charging in Indian Rupees (INR).",
  },
  {
    q: "Is there a yearly discount?",
    a: "Yes, we offer a 15% discount for customers who choose annual billing.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, we provide a free trial for new users. This allows you to explore our platform and its features without any commitment. Sign up today to start your trial.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "You can cancel your subscription at any time through your account settings. Simply navigate to the subscription section and follow the cancellation process. If you need assistance, our support team is here to help. All subscriptions are on a monthly basis. You can therefore also cancel your monthly subscription anytime.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept all standard credit cards. All transactions are secure and encrypted for your safety. For additional payment options, please contact our support team.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No, we believe in transparency. All fees are clearly outlined in our pricing plans, and there are no hidden charges.",
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  return (
    <MarketingShell>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">Our Pricing</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B6B6B] md:text-lg">
              Track and improve your brand's visibility across AI assistants with transparent, flexible pricing.
            </p>
          </div>
        </section>

        {/* Billing Toggle */}
        <section className="container mx-auto px-6 pb-8">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition ${
                  billingPeriod === "monthly"
                    ? "bg-black text-white"
                    : "bg-transparent text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Pay monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition ${
                  billingPeriod === "yearly"
                    ? "bg-black text-white"
                    : "bg-transparent text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Pay yearly
              </button>
            </div>
            <span className="text-sm text-[#6B6B6B]">Save up to 15% with yearly</span>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="container mx-auto px-6 pb-12">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border bg-white p-8 shadow-sm ${
                  plan.highlighted ? "border-black/20 ring-2 ring-black/5" : "border-black/10"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-black">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-4xl font-semibold text-black transition-opacity duration-300">
                        {billingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly}
                      </span>
                      <span className="ml-2 text-base text-[#6B6B6B]">per month</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">{plan.description}</p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    variant={plan.ctaVariant}
                    className={`w-full rounded-lg font-medium ${
                      plan.ctaVariant === "default"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "border border-black/10 bg-white text-black hover:bg-black/5"
                    }`}
                  >
                    <a href="/signup">{plan.cta} →</a>
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0 text-black"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm leading-relaxed text-[#6B6B6B]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Models Text */}
        <section className="container mx-auto px-6 pb-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3">
              <svg
                className="h-5 w-5 shrink-0 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <p className="text-base text-[#6B6B6B]">
                Add AI Mode, DeepSeek, Llama, Grok and more for an additional fee.
              </p>
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="container mx-auto px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-semibold text-black md:text-4xl">Enterprise</h2>
            <div className="mb-8 border-t border-black/10 pt-6">
              <h3 className="mb-4 text-lg font-semibold text-black">Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base leading-relaxed text-[#6B6B6B]">Custom Search Prompts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base leading-relaxed text-[#6B6B6B]">Everything included from above</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base leading-relaxed text-[#6B6B6B]">Single Sign-on</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base leading-relaxed text-[#6B6B6B]">Custom payment options (e.g. wire transfer)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base leading-relaxed text-[#6B6B6B]">Quarterly GEO Health Check</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base leading-relaxed text-[#6B6B6B]">Personalized Onboarding Session</span>
                </li>
              </ul>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-lg bg-black px-8 font-medium text-white hover:bg-gray-800"
            >
              <a href="/contact">Contact us</a>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center text-3xl font-semibold text-black md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mb-12 text-center text-base text-[#6B6B6B]">
              Find answers to your questions about pricing and subscription management
            </p>
            <Accordion type="single" collapsible className="space-y-0">
              {PRICING_FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-black/10 bg-transparent px-0 py-4 first:border-t"
                >
                  <AccordionTrigger className="text-left font-semibold text-black hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-pretty text-sm leading-relaxed text-[#6B6B6B]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </MarketingShell>
  )
}

