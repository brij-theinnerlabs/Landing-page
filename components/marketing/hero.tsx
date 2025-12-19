import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/marketing/content"
import heroReport from "./hero-report.png"

export function Hero() {
  return (
    <section className="pt-20 md:pt-28">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Centered Headline */}
        <h1 className="text-center text-5xl font-semibold tracking-tight leading-[1.05] md:text-7xl">
          <span className="text-[#111111]">Track mentions and citations</span>{" "}
          <span className="text-neutral-400">across the answers layer.</span>
        </h1>

        {/* Centered Subhead */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[#6B6B6B] md:text-lg">
          Monitor brand mentions and citations across AI assistants, benchmark against competitors, and fix gaps that
          block your brand from being recommended.
        </p>

        {/* Centered CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="rounded-lg bg-black px-8 font-medium text-white hover:bg-gray-800">
            {PRIMARY_CTA}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg border-black/10 bg-transparent px-8 font-medium text-black hover:bg-black/5"
          >
            {SECONDARY_CTA}
          </Button>
        </div>

        {/* Trusted By Line */}
        <p className="mt-6 text-center text-sm italic text-[#6B6B6B]">Trusted by marketing and SEO teams</p>
      </div>

      {/* Full-width horizontal border */}
      <div className="mt-14 border-t border-black/6 md:mt-16" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Screenshot Block */}
        <div className="mx-auto">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
            {/* Browser Frame Top Bar */}
            <div className="flex h-11 items-center gap-2 border-b border-black/10 bg-[#F6F3F2] px-4">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[#6B6B6B]/30" />
                <div className="h-3 w-3 rounded-full bg-[#6B6B6B]/30" />
                <div className="h-3 w-3 rounded-full bg-[#6B6B6B]/30" />
              </div>
              <div className="mx-auto flex h-6 items-center rounded-md border border-black/10 bg-white px-3">
                <span className="text-xs text-[#6B6B6B]">dashboard.theinnerlabs.com</span>
              </div>
            </div>

            {/* Screenshot Image */}
            <div className="relative w-full bg-[#F6F3F2]">
              <Image
                src={heroReport}
                alt="AI visibility dashboard report preview"
                width={1200}
                height={800}
                className="h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

