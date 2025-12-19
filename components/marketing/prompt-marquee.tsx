"use client"

import React from "react"

const prompts = [
  { text: "What are the best AI marketing tools for enterprises?", assistant: "chatgpt" },
  { text: "How do I improve my brand visibility in ChatGPT answers?", assistant: "gemini" },
  { text: "Why is my website not cited by Gemini for my category?", assistant: "perplexity" },
  { text: "How do I track citations across ChatGPT, Gemini, Perplexity, and Claude?", assistant: "claude" },
  { text: "What content gets referenced most often in Perplexity results?", assistant: "chatgpt" },
  { text: "How do I benchmark my brand vs competitors in AI answers?", assistant: "gemini" },
  { text: "What prompts drive the most conversions for B2B SaaS buyers?", assistant: "perplexity" },
  { text: "How do I increase the chances of being recommended by Claude?", assistant: "claude" },
  { text: "Which pages should I optimize to earn citations in AI answers?", assistant: "chatgpt" },
  { text: "How do I monitor brand mentions across AI assistants weekly?", assistant: "gemini" },
  { text: "What questions do buyers ask before choosing a CRM?", assistant: "perplexity" },
  { text: "How do I find gaps where competitors outrank me in AI responses?", assistant: "claude" },
  { text: "What is Answer Engine Optimization (AEO) and why does it matter?", assistant: "chatgpt" },
  { text: "How do I measure share of voice in AI-generated answers?", assistant: "gemini" },
  { text: "What sources are AI assistants using to cite brand comparisons?", assistant: "perplexity" },
  { text: "How do I track prompt-level performance over time?", assistant: "claude" },
]

export function PromptMarquee() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight text-black md:text-5xl">
          Monitor the prompts that shape your brand&apos;s visibility.
        </h2>

        <div className="mt-12 space-y-6">
          {/* Row 1: Scrolls left */}
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F6F3F2] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F6F3F2] to-transparent" />
            <div className="prompt-marquee-row-1" style={{ "--marquee-duration": "180s" } as React.CSSProperties}>
              <div className="prompt-marquee-track">
                {prompts.map((prompt, i) => (
                  <PromptChip key={`row1-${i}`} prompt={prompt} />
                ))}
                {prompts.map((prompt, i) => (
                  <PromptChip key={`row1-dup-${i}`} prompt={prompt} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Scrolls right */}
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F6F3F2] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F6F3F2] to-transparent" />
            <div className="prompt-marquee-row-2" style={{ "--marquee-duration": "210s" } as React.CSSProperties}>
              <div className="prompt-marquee-track">
                {prompts.map((prompt, i) => (
                  <PromptChip key={`row2-${i}`} prompt={prompt} />
                ))}
                {prompts.map((prompt, i) => (
                  <PromptChip key={`row2-dup-${i}`} prompt={prompt} />
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Scrolls left (different speed) */}
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#F6F3F2] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#F6F3F2] to-transparent" />
            <div className="prompt-marquee-row-3" style={{ "--marquee-duration": "195s" } as React.CSSProperties}>
              <div className="prompt-marquee-track">
                {prompts.map((prompt, i) => (
                  <PromptChip key={`row3-${i}`} prompt={prompt} />
                ))}
                {prompts.map((prompt, i) => (
                  <PromptChip key={`row3-dup-${i}`} prompt={prompt} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PromptChip({ prompt }: { prompt: { text: string; assistant: string } }) {
  return (
    <div className="group relative mx-2 inline-flex h-10 items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-sm shadow-sm md:h-11">
      {/* Pill content - always visible, blurred/faded on hover */}
      <span className="inline-flex items-center gap-2 transition duration-200 group-hover:opacity-25 group-hover:blur-sm">
        <img
          src={`/assistants/${prompt.assistant}.svg`}
          alt=""
          className="h-4 w-4 shrink-0 opacity-80"
        />
        <span className="truncate font-medium text-black">{prompt.text}</span>
      </span>

      {/* Overlay button - fades in on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-200 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
        <button
          className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-black/10 px-5 py-2 text-sm font-medium text-black/80 shadow-sm hover:bg-white/85 transition focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2"
          onClick={() => {}}
          aria-label={`Track prompt: ${prompt.text}`}
        >
          <span>+</span>
          <span>Track Prompt</span>
        </button>
      </div>
    </div>
  )
}

