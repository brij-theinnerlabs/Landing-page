const BRAND_LOGOS = [
  { src: "/brands/area-83-logo.png", alt: "Area 83" },
  { src: "/brands/auraindia-logo.png", alt: "Aura India" },
  { src: "/brands/Habitainer_website_logo.webp", alt: "Habitainer" },
]

export function TrustedBy() {
  return (
    <section className="pt-16 pb-10 md:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-center text-2xl font-semibold text-black md:text-3xl">
          Trusted by teams building with The Inner Labs
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {BRAND_LOGOS.map((brand, i) => (
            <div
              key={i}
              className="flex h-12 items-center justify-center transition-transform duration-200 hover:scale-[1.03] md:h-14"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="h-full max-w-[180px] w-auto object-contain brightness-0 saturate-100 opacity-80 transition-opacity hover:opacity-100"
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

