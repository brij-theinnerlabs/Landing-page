"use client"

import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { USE_CASES, USE_CASES_TITLE } from "@/lib/marketing/content"

export function UseCasesTabs() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-balance text-4xl font-bold text-black">{USE_CASES_TITLE}</h2>
      </div>
      <Tabs defaultValue={USE_CASES[0].id} className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-4 bg-white">
          {USE_CASES.map((useCase) => (
            <TabsTrigger
              key={useCase.id}
              value={useCase.id}
              className="data-[state=active]:bg-black data-[state=active]:text-white"
            >
              {useCase.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {USE_CASES.map((useCase) => (
          <TabsContent key={useCase.id} value={useCase.id} className="mt-8 space-y-6">
            <Card className="border border-black/10 bg-white p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-black">{useCase.title}</h3>
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-black" />
                        <span className="text-sm text-[#6B6B6B]">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`rounded-lg p-6 ${
                    useCase.bgColor === "pink" ? "bg-[#F0E0E6]/20" : "bg-[#DCE8F3]/20"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="text-xs font-medium uppercase tracking-wide text-[#6B6B6B]">Before</div>
                    <div className="text-2xl font-bold text-[#6B6B6B]">{useCase.beforeValue}</div>
                    <div className="my-4 border-t border-black/10" />
                    <div className="text-xs font-medium uppercase tracking-wide text-black">After</div>
                    <div className="text-2xl font-bold text-black">{useCase.afterValue}</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

