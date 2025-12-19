"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  BRAND_NAME,
  LOGO_TEXT,
  NAV_LINKS,
  PRIMARY_CTA,
  RESOURCES_DROPDOWN,
  SECONDARY_CTA,
} from "@/lib/marketing/content"

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-black/10 bg-[#F6F3F2]">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex cursor-pointer items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
              {LOGO_TEXT.substring(0, 2)}
            </div>
            <span className="text-lg font-semibold text-black">{BRAND_NAME}</span>
          </Link>

          {/* Center: Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href
                return (
                  <NavigationMenuItem key={link.label}>
                    <Link
                      href={link.href}
                      className={`cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 ${
                        isActive ? "text-neutral-900" : "text-neutral-600"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                )
              })}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 data-[state=open]:text-neutral-900">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-48 gap-3 p-4">
                    {RESOURCES_DROPDOWN.map((item) => (
                      <li key={item.label}>
                        <NavigationMenuLink
                          href={item.href}
                          className="block select-none space-y-1 p-3 leading-none no-underline outline-none text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2"
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2"
                >
                  {SECONDARY_CTA}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2"
                >
                  Sign in
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right: CTA Button */}
          <Button className="rounded-lg bg-black px-6 font-medium text-white hover:bg-gray-800">
            {PRIMARY_CTA}
          </Button>
        </div>
      </div>
    </nav>
  )
}

