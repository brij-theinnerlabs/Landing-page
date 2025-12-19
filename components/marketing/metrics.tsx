import { Card } from "@/components/ui/card"
import { METRICS, METRICS_FOOTNOTE } from "@/lib/marketing/content"

export function Metrics() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric, i) => (
          <Card
            key={i}
            className="border border-black/10 bg-white p-6 text-center transition-shadow hover:shadow-md"
          >
            <div className="text-3xl font-bold text-black">{metric.value}</div>
            <div className="mt-1 text-sm font-medium text-[#6B6B6B]">{metric.label}</div>
          </Card>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-[#6B6B6B]">{METRICS_FOOTNOTE}</p>
    </section>
  )
}

