import { Github, Linkedin, Twitter } from "lucide-react"
import { BRAND_NAME, FOOTER_COPYRIGHT, FOOTER_DESCRIPTION, FOOTER_SECTIONS, LOGO_TEXT } from "@/lib/marketing/content"

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F6F3F2]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                {LOGO_TEXT.substring(0, 2)}
              </div>
              <span className="text-lg font-semibold text-black">{BRAND_NAME}</span>
            </div>
            <p className="text-pretty text-sm text-[#6B6B6B]">{FOOTER_DESCRIPTION}</p>
            <div className="flex gap-4">
              <a href="#" className="text-[#6B6B6B] hover:text-black">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#6B6B6B] hover:text-black">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#6B6B6B] hover:text-black">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold text-black">{section.title}</h4>
              <ul className="space-y-2 text-sm text-[#6B6B6B]">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-black">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-black/10 pt-8 text-center text-sm text-[#6B6B6B]">
          {FOOTER_COPYRIGHT}
        </div>
      </div>
    </footer>
  )
}

