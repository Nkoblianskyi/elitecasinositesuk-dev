"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, CheckCircle } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

const rankLabels = [
  "#1 Top Casino",
  "#2 Recommended",
  "#3 Top Rated",
  "#4 Popular",
  "#5 Trusted",
  "#6 Editor's Choice",
]

function StarRating({ rating, size = "md" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const raw = (rating / 10) * 5
  const stepped = Math.round(raw / 0.2) * 0.2
  const normalized = Math.min(5, Math.max(0, stepped))
  const starSize = size === "lg" ? "w-5 h-5" : size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className={`relative inline-block ${starSize}`}>
            <Star className={`${starSize} text-[hsl(var(--surface-3))]`} fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className={`${starSize} text-[hsl(var(--gold))]`} fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function BettingSitesList() {
  return (
    <section className="py-10 md:py-16 bg-background" aria-labelledby="casinos-heading">
      <div className="container mx-auto px-3 md:px-4 max-w-5xl">

        {/* Section heading */}
        <div className="mb-10 text-center">
          <span className="eyebrow-gold block mb-3">UKGC Licensed Casinos - Expert Verified</span>
          <h2
            id="casinos-heading"
            className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-3 text-balance"
          >
            Best Elite Casino Sites UK 2026
          </h2>
          <div className="rule-crimson mx-auto w-24 mb-4" />
          <p className="text-sm text-[hsl(var(--text-muted))] max-w-lg mx-auto leading-relaxed">
            Our expert team independently reviews every casino below. All hold valid UKGC licences.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {bettingSites.map((site, index) => {
            const isTop = index === 0

            return (
              <div
                key={site.id}
                className="overflow-hidden border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] animate-fade-in-up relative"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Left crimson accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[hsl(var(--crimson))]" />

                {/* Rank + badge row */}
                <div className="flex items-center justify-between pl-5 pr-4 py-2 border-b border-[hsl(var(--border))]">
                  <span className="eyebrow-crimson">
                    {rankLabels[index] ?? `#${index + 1}`}
                  </span>
                  {isTop && (
                    <span className="eyebrow-gold border border-[hsl(var(--gold))]/40 px-2.5 py-1">
                      Editor&apos;s Top Pick
                    </span>
                  )}
                </div>

                {/* ── DESKTOP layout ── */}
                <div className="hidden md:flex items-stretch min-h-[110px]">

                  {/* Logo */}
                  <div className="w-52 flex-shrink-0 bg-white flex items-center justify-center p-6 border-r border-[hsl(var(--border))]">
                    <Image
                      src={site.logo}
                      alt={`${site.name} logo`}
                      width={180}
                      height={68}
                      className="object-contain max-h-16 w-auto"
                    />
                  </div>

                  {/* Bonus */}
                  <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 border-r border-[hsl(var(--border))] gap-1.5">
                    <p className="eyebrow-muted">Welcome Offer</p>
                    <p className="font-serif font-bold text-xl text-center leading-tight text-[hsl(var(--gold))]">
                      {site.bonus}
                    </p>
                    <p className="text-[11px] font-sans font-semibold text-center leading-snug text-[hsl(var(--text-secondary))]">
                      {site.welcomeOffer}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5">
                      {site.features.slice(0, 2).map((f) => (
                        <span key={f} className="flex items-center gap-1 text-[10px] text-[hsl(var(--gold))] font-sans font-semibold">
                          <CheckCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Score */}
                  <div className="w-44 flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 border-r border-[hsl(var(--border))] gap-1.5">
                    <span className="font-serif font-bold text-4xl leading-none text-[hsl(var(--gold))]">
                      {site.score.toFixed(1)}
                    </span>
                    <StarRating rating={site.score} size="lg" />
                    <span className="text-[10px] text-[hsl(var(--text-muted))] font-sans">
                      {site.reviews.toLocaleString()} reviews
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="w-44 flex-shrink-0 flex items-center justify-center px-5 py-4">
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center py-3.5 text-xs font-black tracking-[0.15em] uppercase text-white bg-[hsl(var(--crimson))] hover:bg-[hsl(var(--crimson-bright))] transition-colors duration-200"
                    >
                      Claim Bonus
                    </Link>
                  </div>

                </div>

                {/* ── MOBILE layout ── */}
                <div className="md:hidden flex flex-col">

                  {/* Row 1 - Logo + Bonus */}
                  <div className="flex items-stretch border-b border-[hsl(var(--border))] min-h-[80px]">
                    <div className="w-[42%] bg-white flex items-center justify-center px-4 py-4 border-r border-[hsl(var(--border))]">
                      <Image
                        src={site.logo}
                        alt={`${site.name} logo`}
                        width={150}
                        height={56}
                        className="object-contain max-h-14 w-full"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center px-4 py-3 gap-0.5">
                      <p className="eyebrow-muted">Welcome Offer</p>
                      <p className="font-serif font-bold text-base text-center leading-snug text-[hsl(var(--gold))]">
                        {site.bonus}
                      </p>
                      <p className="text-[9px] font-sans font-semibold text-center leading-tight text-[hsl(var(--text-secondary))]">
                        {site.welcomeOffer}
                      </p>
                    </div>
                  </div>

                  {/* Row 2 - Score + CTA */}
                  <div className="flex items-stretch min-h-[64px]">
                    <div className="flex-1 flex items-center justify-center gap-3 px-4 py-3">
                      <span className="font-serif font-bold text-3xl leading-none text-[hsl(var(--gold))]">
                        {site.score.toFixed(1)}
                      </span>
                      <div className="flex flex-col items-start gap-1">
                        <StarRating rating={site.score} size="md" />
                        <span className="text-[9px] text-[hsl(var(--text-muted))] font-sans">
                          {site.reviews.toLocaleString()} reviews
                        </span>
                      </div>
                    </div>
                    <Link
                      href={site.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 text-xs font-black tracking-[0.1em] uppercase text-white bg-[hsl(var(--crimson))] hover:bg-[hsl(var(--crimson-bright))] border-l border-[hsl(var(--border))] transition-colors duration-200"
                    >
                      Claim
                    </Link>
                  </div>

                </div>

                {/* Card footer */}
                <div className="pl-5 pr-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 border-t border-[hsl(var(--border))] bg-[hsl(var(--surface-2))]">
                  <p className="text-[9px] text-[hsl(var(--text-muted))] font-sans leading-snug">{site.terms}</p>
                  <p className="text-[9px] text-[hsl(var(--text-muted))] font-sans shrink-0">18+ | BeGambleAware.org</p>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[11px] text-[hsl(var(--text-muted))] mt-10 font-sans leading-relaxed">
          All listed casinos hold valid UKGC licences. Rankings are based on independent editorial assessment. Affiliate commissions may apply.
        </p>
      </div>
    </section>
  )
}
