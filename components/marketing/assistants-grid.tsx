import { ASSISTANTS_TITLE } from "@/lib/marketing/content"

export function AssistantsGrid() {
  return (
    <section className="container mx-auto px-6 py-14 md:py-16">
      <div className="text-center">
        <h2 className="text-balance text-4xl font-bold text-black">{ASSISTANTS_TITLE}</h2>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          We track the assistants your customers actually use.
        </p>
      </div>

      <div className="mt-10">
        <div className="relative mx-auto max-w-5xl overflow-hidden">
          {/* optional fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F6F3F2] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F6F3F2] to-transparent" />

          <div className="til-marquee">
            <div className="til-marquee__track">
              {/* first set */}
              <div className="til-marquee__row">
                {[
                  { src: "/logos/chatgpt.svg", alt: "ChatGPT" },
                  { src: "/logos/gemini.svg", alt: "Gemini" },
                  { src: "/logos/perplexity.svg", alt: "Perplexity" },
                  { src: "/logos/claude.svg", alt: "Claude" },
                ].map((l) => (
                  <div key={l.alt} className="h-20 md:h-24 flex items-center">
                    <img
                      src={l.src}
                      alt={l.alt}
                      className="h-full w-auto block object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* second set (duplicate) */}
              <div className="til-marquee__row" aria-hidden="true">
                {[
                  { src: "/logos/chatgpt.svg", alt: "ChatGPT" },
                  { src: "/logos/gemini.svg", alt: "Gemini" },
                  { src: "/logos/perplexity.svg", alt: "Perplexity" },
                  { src: "/logos/claude.svg", alt: "Claude" },
                ].map((l) => (
                  <div key={l.alt + "-dup"} className="h-20 md:h-24 flex items-center">
                    <img
                      src={l.src}
                      alt=""
                      className="h-full w-auto block object-contain"
                      loading="lazy"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

