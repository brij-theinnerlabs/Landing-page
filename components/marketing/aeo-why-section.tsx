import Image from "next/image"
import { Button } from "@/components/ui/button"
import aeoWhyImage from "./aeo-why.png"

export function AEOWhySection() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 items-stretch">
          {/* Left Column: Copy */}
          <div className="flex h-full flex-col">
            <h2 className="text-4xl font-semibold tracking-tight leading-[1.05] text-black md:text-5xl">
              Why <span className="text-[#6B6B6B]">Answer Engine Optimization</span> is necessary.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#6B6B6B] md:text-lg">
              <p>
                AI answers are becoming the first place buyers look. If your brand isn't mentioned when people ask{" "}
                <span className="font-semibold text-black">ChatGPT</span>, <span className="font-semibold text-black">Gemini</span>,{" "}
                <span className="font-semibold text-black">Claude</span>, or{" "}
                <span className="font-semibold text-black">Perplexity</span>, you're invisible at decision time.
              </p>
              <p>
                We track where you're cited, what sources drive mentions, and where competitors outrank you. Fix the
                gaps and show up more often in the answers that convert.
              </p>
            </div>
            <div className="mt-8">
              <Button className="inline-flex w-fit items-center justify-center rounded-md bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/90">
                Explore features
              </Button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="h-full rounded-xl border border-black/10 bg-white p-3 shadow-sm">
            <Image
              src={aeoWhyImage}
              alt="AEO dashboard showing citations and visibility metrics"
              width={1200}
              height={800}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

