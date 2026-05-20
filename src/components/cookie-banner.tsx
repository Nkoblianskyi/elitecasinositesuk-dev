"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import Link from "next/link"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up"
      role="dialog"
      aria-label="Cookie consent"
    >
      {/* Gold accent line */}
      <div className="h-[1px] bg-[hsl(var(--gold))]/40" />
      {/* Crimson top bar */}
      <div className="h-[2px] bg-[hsl(var(--crimson))]" />

      <div className="bg-[hsl(var(--surface-1))] border-t border-[hsl(var(--border))]">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">

            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="shrink-0 w-9 h-9 bg-[hsl(var(--crimson-subtle))] border border-[hsl(var(--crimson))]/30 flex items-center justify-center mt-0.5">
                <Cookie className="w-4 h-4 text-[hsl(var(--crimson))]" aria-hidden="true" />
              </div>
              <div>
                <p className="eyebrow-gold mb-1">Cookie Notice</p>
                <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                  EliteCasinoSitesUK.com uses cookies to improve your experience, serve personalised casino recommendations, and analyse site traffic.{" "}
                  <Link
                    href="/cookie-policy"
                    className="text-[hsl(var(--gold))] hover:text-[hsl(var(--gold-bright))] underline underline-offset-2 transition-colors font-medium"
                  >
                    View Cookie Policy
                  </Link>{" "}
                  for full details.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
              <button
                onClick={declineAll}
                className="flex-1 md:flex-none px-5 py-2.5 text-xs font-semibold tracking-[0.1em] uppercase text-[hsl(var(--text-muted))] border border-[hsl(var(--border))] hover:border-[hsl(var(--gold))]/50 hover:text-[hsl(var(--foreground))] transition-all duration-200 bg-transparent"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 md:flex-none px-8 py-2.5 text-xs font-black tracking-[0.15em] uppercase bg-[hsl(var(--crimson))] text-white hover:bg-[hsl(var(--crimson-bright))] transition-all duration-200"
              >
                Accept All
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
