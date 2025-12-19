import {
  AEOWhySection,
  AssistantsGrid,
  CustomersAISection,
  FAQ,
  Footer,
  Hero,
  MarketingShell,
  MentionedByCarousel,
  Navbar,
  PromptMarquee,
  TrustedBy,
  UnderstandAISection,
} from "@/components/marketing"

export default function LandingPage() {
  return (
    <MarketingShell>
      <Navbar />
      <main className="relative">
        {/* Vertical borders - aligned with content */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-full max-w-[1200px] -translate-x-1/2 border-x border-black/6" />

        {/* Content with full-width horizontal borders */}
        <Hero />
        <div className="border-t border-black/6">
          <TrustedBy />
        </div>
        <div className="border-t border-black/6">
          <CustomersAISection />
        </div>
        <div className="border-t border-black/6">
          <AssistantsGrid />
        </div>
        <div className="border-t border-black/6">
          <AEOWhySection />
        </div>
        <div className="border-t border-black/6">
          <PromptMarquee />
        </div>
        <div className="border-t border-black/6">
          <UnderstandAISection />
        </div>
        <div className="border-t border-black/6">
          <MentionedByCarousel />
        </div>
        <div className="border-t border-black/6">
          <FAQ />
        </div>
      </main>
      <Footer />
    </MarketingShell>
  )
}

