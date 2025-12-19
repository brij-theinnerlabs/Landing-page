import { HOW_IT_WORKS_STEPS, HOW_IT_WORKS_TITLE } from "@/lib/marketing/content"

export function HowItWorks() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-balance text-4xl font-bold text-black">{HOW_IT_WORKS_TITLE}</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((item) => (
          <div key={item.step} className="space-y-3 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-bold text-white">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold text-black">{item.title}</h3>
            <p className="text-pretty text-sm leading-relaxed text-[#6B6B6B]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

