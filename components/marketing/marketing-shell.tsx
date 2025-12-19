import { ReactNode } from "react"

interface MarketingShellProps {
  children: ReactNode
}

export function MarketingShell({ children }: MarketingShellProps) {
  return <div className="min-h-screen bg-[#F6F3F2]">{children}</div>
}

