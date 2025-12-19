export function CustomersAISection() {
  return (
    <section className="bg-[#F6F3F2]">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            {/* LEFT */}
            <h2 className="max-w-[24ch] text-4xl font-semibold tracking-tight leading-[0.95] text-foreground sm:text-5xl lg:text-6xl">
              Your customers are already searching with{" "}
              <span className="text-muted-foreground">ChatGPT</span> and{" "}
              <span className="text-muted-foreground">Gemini</span>. Don&apos;t guess, start{" "}
              <span className="text-muted-foreground">tracking</span>.
            </h2>

            {/* RIGHT */}
            <div className="lg:pt-2">
              <div className="max-w-md space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  AI answers are now a discovery channel. When buyers ask assistants about your category, you should know
                  where your brand shows up and what it&apos;s cited for.
                </p>

                <p>
                  We track citations across{" "}
                  <span className="font-semibold text-foreground">ChatGPT</span>,{" "}
                  <span className="font-semibold text-foreground">Gemini</span>,{" "}
                  <span className="font-semibold text-foreground">Perplexity</span>, and{" "}
                  <span className="font-semibold text-foreground">Claude</span>. See gaps, benchmark competitors, and
                  ship fixes that increase recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

