import { Button } from "@/components/ui/button"

export function UnderstandAISection() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Sticky Intro Card */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
                Understand how AI sees your brand.
              </h2>
              <p className="text-base leading-relaxed text-[#6B6B6B] md:text-lg">
                We automatically track the metrics that matter most in AI search, so you always know where you stand.
              </p>
              <Button
                asChild
                size="lg"
                className="rounded-lg bg-black px-6 font-medium text-white hover:bg-gray-800"
              >
                <a href="/demo">Get a Demo</a>
              </Button>
            </div>
          </div>

          {/* Right: Three Stacked Blocks */}
          <div className="space-y-12">
            {/* Visibility Block */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-black">Visibility</h3>
              <p className="text-base leading-relaxed text-[#6B6B6B]">
                We measure how often your brand is mentioned and appears across AI answers. Track changes over time to
                see when visibility increases or drops, and understand which prompts drive the most mentions.
              </p>
            </div>

            {/* Position Block */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-black">Position</h3>
              <p className="text-base leading-relaxed text-[#6B6B6B]">
                We track your ranking and placement in AI responses. See where you appear compared to competitors, identify
                gaps where competitors outrank you, and prioritize fixes that improve your position.
              </p>
            </div>

            {/* Action Center Block */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold text-black">Action Center</h3>
              <p className="text-base leading-relaxed text-[#6B6B6B]">
                Get actionable suggestions to improve your website and content so LLMs cite you more often. We analyze
                what's working for top-cited brands and give you specific fixes to increase your recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

