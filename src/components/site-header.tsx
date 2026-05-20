"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function EliteCrownLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shield body */}
      <path
        d="M24 2 L43 10.5 L43 32 Q43 46 24 54 Q5 46 5 32 L5 10.5 Z"
        fill="#0D0D0D"
        stroke="#C41E3A"
        strokeWidth="1.5"
      />
      {/* Inner shield accent */}
      <path
        d="M24 7 L39 14 L39 31 Q39 43 24 50 Q9 43 9 31 L9 14 Z"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="0.5"
        opacity="0.4"
      />
      {/* Crown base bar */}
      <rect x="13" y="23" width="22" height="2.5" fill="#D4AF37" />
      {/* Crown points */}
      <path
        d="M13 23 L13 17.5 L18.5 21.5 L24 14 L29.5 21.5 L35 17.5 L35 23"
        fill="#D4AF37"
        strokeLinejoin="round"
      />
      {/* Crown jewels */}
      <circle cx="24" cy="13.5" r="1.8" fill="#C41E3A" />
      <circle cx="13.5" cy="18.5" r="1.2" fill="#D4AF37" opacity="0.8" />
      <circle cx="34.5" cy="18.5" r="1.2" fill="#D4AF37" opacity="0.8" />
      {/* E letterform */}
      <path
        d="M18 33 L18 43 M18 33 L29 33 M18 38 L26 38 M18 43 L29 43"
        stroke="#F5F0E8"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  )
}

// Keep backward-compat export so footer doesn't break before we update it
export { EliteCrownLogo as GoldCrownLogo }

const navLinks = [
  { label: "Home",           href: "/"                   },
  { label: "About Us",       href: "/about-us"           },
  { label: "Privacy Policy", href: "/privacy-policy"     },
  { label: "Cookie Policy",  href: "/cookie-policy"      },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[hsl(var(--border))]">
      {/* Crimson top accent line */}
      <div className="h-[2px] w-full bg-[hsl(var(--crimson))]" />

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Elite Casino Sites UK - Home"
          >
            <EliteCrownLogo className="w-9 h-11 shrink-0 transition-opacity duration-300 group-hover:opacity-80" />
            <div className="flex flex-col leading-none select-none">
              <span className="font-serif font-black text-[hsl(var(--gold))] tracking-[0.06em] text-lg leading-none group-hover:text-[hsl(var(--gold-bright))] transition-colors duration-300">
                Elite
              </span>
              <span className="font-sans font-semibold text-[7.5px] tracking-[0.28em] uppercase text-[hsl(var(--text-secondary))] leading-none mt-[3px] group-hover:text-[hsl(var(--foreground))] transition-colors duration-300">
                Casino&nbsp;Sites&nbsp;UK
              </span>
              <span className="mt-[5px] block h-px w-full bg-[hsl(var(--crimson))]/60 group-hover:bg-[hsl(var(--crimson))] transition-colors duration-300" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-0">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "relative px-4 py-2 text-xs font-sans font-semibold tracking-[0.1em] uppercase transition-all duration-200",
                    active
                      ? "text-[hsl(var(--gold))]"
                      : "text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--foreground))]",
                  ].join(" ")}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[hsl(var(--crimson))]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile nav */}
          <nav aria-label="Mobile navigation" className="flex md:hidden items-center gap-0">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "px-2 py-1 text-[9px] font-sans font-semibold tracking-[0.1em] uppercase transition-all duration-200",
                    active
                      ? "text-[hsl(var(--gold))]"
                      : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--foreground))]",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

        </div>
      </div>

      {/* Bottom gold line */}
      <div className="h-px w-full bg-[hsl(var(--gold))]/15" />
    </header>
  )
}
