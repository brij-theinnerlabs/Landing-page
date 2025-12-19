"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  FINAL_CTA_DESCRIPTION,
  FINAL_CTA_EMAIL_PLACEHOLDER,
  FINAL_CTA_FOOTNOTE,
  FINAL_CTA_TITLE,
  PRIMARY_CTA,
} from "@/lib/marketing/content"

export function FinalCTA() {
  const [email, setEmail] = useState("")

  return (
    <section className="container mx-auto px-6 py-20">
      <Card className="border border-black/10 bg-white p-12 text-center shadow-xl">
        <div className="mx-auto max-w-2xl space-y-6">
          <h2 className="text-balance text-4xl font-bold text-black">{FINAL_CTA_TITLE}</h2>
          <p className="text-pretty text-lg text-[#6B6B6B]">{FINAL_CTA_DESCRIPTION}</p>
          <div className="mx-auto flex max-w-md gap-2">
            <Input
              type="email"
              placeholder={FINAL_CTA_EMAIL_PLACEHOLDER}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-black/10"
            />
            <Button className="rounded-lg bg-black px-6 font-medium text-white hover:bg-gray-800 whitespace-nowrap">
              {PRIMARY_CTA}
            </Button>
          </div>
          <p className="text-xs text-[#6B6B6B]">{FINAL_CTA_FOOTNOTE}</p>
        </div>
      </Card>
    </section>
  )
}

