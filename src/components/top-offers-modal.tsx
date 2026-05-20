"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ArrowRight, Star, ShieldCheck, Flame } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

function StarRating({ rating }: { rating: number }) {
  const normalized = Math.min(5, Math.max(0, Math.round(((rating / 10) * 5) / 0.2) * 0.2))
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 10`}>
      {[...Array(5)].map((_, i) => {
        const fill = Math.min(Math.max(normalized - i, 0), 1) * 100
        return (
          <span key={i} className="relative inline-block w-4 h-4">
            <Star className="w-4 h-4 text-[hsl(var(--surface-3))]" fill="currentColor" />
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
                <Star className="w-4 h-4 text-[hsl(var(--gold))]" fill="currentColor" />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}

export function TopOffersModal() {
  const [isOpen, setIsOpen]   = useState(false)
  const [mounted, setMounted] = useState(false)
  const topSite               = bettingSites[0]

  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    if (!mounted) return
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-fade-in"
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}
      role="dialog"
      aria-modal="true"
      aria-label="Top elite casino offer"
    >
      <div className="relative w-full max-w-md bg-[hsl(var(--surface-1))] border border-[hsl(var(--border))] overflow-hidden animate-scale-in">

        {/* Crimson top bar */}
        <div className="h-[2px] bg-[hsl(var(--crimson))]" />
        {/* Gold thin line */}
        <div className="h-px bg-[hsl(var(--gold))]/20" />

        <div className="px-5 pt-5 pb-6 flex flex-col gap-4">

          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--gold))] transition-colors duration-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Eyebrow + headline */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Flame className="w-3.5 h-3.5 text-[hsl(var(--crimson))]" aria-hidden="true" />
              <span className="eyebrow-gold">EliteCasinoSitesUK - Exclusive Pick</span>
            </div>
            <h2 className="font-serif font-bold text-xl text-[hsl(var(--foreground))] leading-snug">
              #1 Rated UK Elite Casino
            </h2>
          </div>

          {/* Casino logo */}
          <div className="bg-white border border-[hsl(var(--border))] flex items-center justify-center h-20 px-6">
            <Image
              src={topSite.logo || "/placeholder.svg"}
              alt={`${topSite.name} logo`}
              width={200}
              height={70}
              className="object-contain max-h-14 w-auto"
            />
          </div>

          {/* Score + UKGC row */}
          <div className="flex gap-3">
            <div className="flex-1 bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] px-4 py-3 flex flex-col gap-1.5">
              <StarRating rating={topSite.score} />
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif font-bold text-3xl text-[hsl(var(--gold))] leading-none">{topSite.score.toFixed(1)}</span>
                <span className="text-[10px] text-[hsl(var(--text-muted))] font-sans">/10</span>
              </div>
              <p className="text-[10px] text-[hsl(var(--text-muted))] font-sans">{topSite.reviews.toLocaleString()} reviews</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1.5 bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))] border-l-2 border-l-[hsl(var(--gold))]/50 px-5 shrink-0">
              <ShieldCheck className="w-7 h-7 text-[hsl(var(--gold))]" aria-hidden="true" />
              <p className="text-[9px] text-[hsl(var(--text-secondary))] font-sans font-semibold text-center leading-tight">UKGC<br />Licensed</p>
            </div>
          </div>

          {/* Bonus box */}
          <div className="bg-[hsl(var(--surface-2))] border border-[hsl(var(--gold))]/20 border-l-2 border-l-[hsl(var(--gold))] px-5 py-4 text-center">
            <p className="eyebrow-gold mb-1.5">Welcome Bonus</p>
            <p className="font-serif font-bold text-2xl text-[hsl(var(--foreground))] leading-none">{topSite.bonus}</p>
            <p className="text-[11px] text-[hsl(var(--text-secondary))] font-sans mt-1.5">{topSite.welcomeOffer}</p>
          </div>

          {/* CTA */}
          <Link
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[hsl(var(--crimson))] text-white py-3.5 text-xs font-black tracking-[0.15em] uppercase hover:bg-[hsl(var(--crimson-bright))] transition-colors duration-200"
          >
            Claim Elite Bonus Now
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          {/* Terms */}
          <p className="text-[10px] text-[hsl(var(--text-muted))] font-sans text-center leading-relaxed">
            18+ only. Terms &amp; Conditions apply. BeGambleAware.org.
          </p>
        </div>

        <div className="h-px bg-[hsl(var(--gold))]/15" />
      </div>
    </div>
  )
}
