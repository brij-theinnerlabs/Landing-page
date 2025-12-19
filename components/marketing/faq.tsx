"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FAQ_ITEMS, FAQ_TITLE } from "@/lib/marketing/content"

export function FAQ() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-balance text-center text-4xl font-bold text-black">{FAQ_TITLE}</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-black/10 bg-white px-6 rounded-lg">
              <AccordionTrigger className="text-left font-semibold text-black hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-pretty text-sm leading-relaxed text-[#6B6B6B]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

