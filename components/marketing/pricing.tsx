import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PRIMARY_CTA, PRICING_PLANS, PRICING_TITLE } from "@/lib/marketing/content"

export function Pricing() {
  return (
    <section id="pricing" className="container mx-auto px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-balance text-4xl font-bold text-black">{PRICING_TITLE}</h2>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {PRICING_PLANS.map((plan) => (
          <Card
            key={plan.name}
            className={`border bg-white p-8 ${
              plan.highlighted ? "border-black shadow-xl ring-2 ring-black" : "border-black/10"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-black">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-black">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-sm text-[#6B6B6B]">/month</span>}
                </div>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                    <span className="text-sm text-[#6B6B6B]">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-lg font-medium ${
                  plan.highlighted
                    ? "bg-black text-white hover:bg-gray-800"
                    : "border border-black/10 bg-transparent text-black hover:bg-black/5"
                }`}
              >
                {PRIMARY_CTA}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

