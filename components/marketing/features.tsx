import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FEATURES } from "@/lib/marketing/content"

export function Features() {
  return (
    <section id="features" className="container mx-auto space-y-24 px-6 py-20">
      {FEATURES.map((feature, index) => (
        <div key={index} className="space-y-8">
          <Card className="overflow-hidden border border-black/10 bg-white shadow-xl">
            <div className="space-y-4 p-8">
              <div
                className={`h-64 rounded-lg p-6 ${
                  index % 2 === 0 ? "bg-[#F0E0E6]/20" : "bg-[#DCE8F3]/20"
                }`}
              >
                <div className="space-y-3">
                  {index === 0 && (
                    <>
                      <div className="flex gap-2">
                        <div className="h-8 w-32 rounded bg-[#DCE8F3]" />
                        <div className="h-8 w-32 rounded bg-white" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="space-y-2">
                            <div className="h-4 w-full rounded bg-black/10" />
                            <div className="h-8 w-full rounded bg-black/20" />
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <div className="flex items-center justify-between">
                        <div className="h-6 w-40 rounded bg-black/10" />
                        <div className="h-6 w-20 rounded bg-black/20" />
                      </div>
                      <div className="h-40 rounded bg-black/5" />
                    </>
                  )}
                  {index === 2 && (
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-2 rounded-lg border border-black/10 bg-white p-3">
                          <div className="h-3 w-3 rounded-full bg-black/20" />
                          <div className="h-4 flex-1 rounded bg-black/10" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-sm font-medium uppercase tracking-wide text-black">{feature.category}</p>
            <h3 className="text-balance text-3xl font-bold text-black">{feature.title}</h3>
            <p className="text-pretty text-lg leading-relaxed text-[#6B6B6B]">{feature.description}</p>
            <div className="flex justify-center gap-4 pt-4">
              <Button className="rounded-lg bg-black px-6 font-medium text-white hover:bg-gray-800">
                {feature.ctaPrimary}
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-black/10 bg-transparent px-6 font-medium text-black hover:bg-black/5"
              >
                {feature.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

