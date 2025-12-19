"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

const LLMS = [
  { name: "ChatGPT", logo: "/logos/chatgpt.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "Claude", logo: "/logos/claude.svg" },
  { name: "Perplexity", logo: "/logos/perplexity.svg" },
]

const ROTATION_INTERVAL = 2400 // milliseconds

export function MentionedByCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LLMS.length)
        setIsAnimating(false)
      }, 250) // Half of transition duration
    }, ROTATION_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  const currentLLM = LLMS[currentIndex]

  return (
    <section className="w-full py-24 md:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="text-center">
          {/* Two-line heading */}
          <h2 className="text-5xl font-semibold tracking-tight text-black md:text-6xl">
            Get your brand mentioned by
          </h2>

          {/* Logo line with fixed height */}
          <div className="mt-2 flex h-20 items-center justify-center md:mt-3 md:h-[140px]">
            <div
              className={`transition-all duration-500 ease-out ${
                isAnimating ? "opacity-0 blur-[12px] scale-[0.98]" : "opacity-100 blur-0 scale-100"
              }`}
            >
              <img
                src={currentLLM.logo}
                alt={currentLLM.name}
                className="h-20 w-auto md:h-40"
                draggable={false}
              />
            </div>
          </div>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-[520px] text-base leading-relaxed text-[#6B6B6B] md:text-lg">
            Track where your brand shows up and what gets cited across the assistants your customers use.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-lg bg-black px-8 font-medium text-white hover:bg-gray-800">
              <a href="/demo">Get a Demo</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-lg border border-black/10 bg-white px-8 font-medium text-black hover:bg-black/5"
            >
              <a href="/signup">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

