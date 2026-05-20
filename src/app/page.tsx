"use client"

import { useState } from "react"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { Shield, CheckCircle2, Zap, Trophy, HeartHandshake, Smartphone } from "lucide-react"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="pt-[66px]">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-crimson-hero bg-subtle-grid">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-casino.jpg"
              alt="Elite Casino Sites UK premium casino experience"
              fill
              className="object-cover object-center opacity-15"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))]/60 via-transparent to-[hsl(var(--background))]/80" />
          </div>

          {/* Vertical crimson accent lines */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[hsl(var(--crimson))]" />
          <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[hsl(var(--crimson))]" />

          <div className="relative z-10 h-[280px] md:h-[420px] flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">

              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
                <div className="h-px w-8 md:w-12 bg-[hsl(var(--gold))]" />
                <span className="eyebrow-gold">UK&apos;s Trusted Casino Comparison</span>
                <div className="h-px w-8 md:w-12 bg-[hsl(var(--gold))]" />
              </div>

              {/* Headline */}
              <h1 className="font-serif font-bold text-2xl md:text-5xl leading-[1.1] text-[hsl(var(--foreground))] mb-3 md:mb-5 text-balance max-w-3xl">
                The UK&apos;s Finest{" "}
                <span className="text-gold-shimmer">Elite Casino Sites</span>
                {" "}- Ranked &amp; Reviewed
              </h1>

              {/* Crimson divider */}
              <div className="h-[1px] w-16 bg-[hsl(var(--crimson))] mb-3 md:mb-5" />

              {/* Sub copy */}
              <p className="text-xs md:text-sm text-[hsl(var(--text-secondary))] leading-relaxed max-w-lg text-pretty mb-4 md:mb-6">
                Every UKGC-licensed operator independently tested for bonus fairness, payout speed, and game quality - so you play at the very best.
              </p>

              {/* Trust badges */}
              <div className="hidden md:flex items-center justify-center gap-2 mb-5">
                {[
                  { icon: Shield,        label: "UKGC Licensed Only"   },
                  { icon: Trophy,        label: "Verified Bonuses"      },
                  { icon: CheckCircle2,  label: "Independent Reviews"   },
                  { icon: Zap,          label: `Updated ${currentDate}` },
                ].map(({ icon: Icon, label }, i, arr) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="flex items-center gap-2 px-3 py-1.5 bg-[hsl(var(--surface-2))] border border-[hsl(var(--border))]">
                      <Icon className="w-3.5 h-3.5 text-[hsl(var(--gold))]" aria-hidden="true" />
                      <span className="text-[10px] text-[hsl(var(--text-secondary))] font-sans tracking-wide">{label}</span>
                    </span>
                    {i < arr.length - 1 && <span className="w-px h-4 bg-[hsl(var(--border))]" />}
                  </span>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-[9px] md:text-[10px] text-[hsl(var(--text-muted))] font-sans">
                18+ only. Gamble responsibly. BeGambleAware.org.{" "}
                <button
                  onClick={() => setIsAdvertiserModalOpen(true)}
                  className="text-[hsl(var(--gold))]/60 hover:text-[hsl(var(--gold))] underline underline-offset-2 transition-colors"
                >
                  Advertiser Disclosure
                </button>
                {" "}/{" "}
                <button
                  onClick={() => setIsAgeModalOpen(true)}
                  className="text-[hsl(var(--gold))]/60 hover:text-[hsl(var(--gold))] underline underline-offset-2 transition-colors"
                >
                  Age Verification
                </button>
              </p>

            </div>
          </div>

          {/* Bottom gold border */}
          <div className="section-divider" />
        </section>

        {/* ── CASINO LIST ── */}
        <div id="casino-sites" className="bg-background">
          <BettingSitesList />
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* ── EDITORIAL GUIDE ── */}
        <section className="py-14 md:py-24 bg-[hsl(var(--surface-1))]" aria-labelledby="guide-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">

              {/* Section header */}
              <div className="text-center mb-10 md:mb-16">
                <span className="eyebrow-gold block mb-3">Editorial Guide</span>
                <h2
                  id="guide-heading"
                  className="font-serif font-bold text-2xl md:text-4xl text-[hsl(var(--foreground))] mb-4 text-balance"
                >
                  How to Choose the Right{" "}
                  <span className="text-gold-shimmer">UK Elite Casino</span>
                </h2>
                <div className="rule-gold mx-auto w-32 md:w-48 mb-5" />
                <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed max-w-xl mx-auto">
                  Your complete guide to finding a trusted, UKGC-licensed elite casino that perfectly matches your playing style.
                </p>
              </div>

              {/* Article sections */}
              <article className="space-y-3">
                {[
                  {
                    icon: Shield,
                    title: "Understanding UK Casino Regulation",
                    body: [
                      "The United Kingdom operates one of the most respected gambling regulatory frameworks in the world. Every legitimate casino serving British players must hold a current licence from the UK Gambling Commission (UKGC). This authority enforces strict player protection, fair gaming standards, and responsible gambling obligations across every operator it licenses.",
                      "A valid UKGC licence is your first and most important checkpoint when evaluating any casino. Licensed operators are legally required to segregate customer funds, carry out robust age verification, and provide comprehensive responsible gambling tools including deposit limits and self-exclusion.",
                    ],
                  },
                  {
                    icon: Trophy,
                    title: "Evaluating Welcome Bonuses Honestly",
                    body: [
                      "Welcome offers can meaningfully enhance your first deposit, but understanding the terms behind them is essential. UK casinos typically provide matched deposit bonuses, free spins packages, or no-deposit credits for new accounts.",
                      "Study wagering requirements carefully. A modest bonus attached to fair terms frequently delivers better real-world value than a headline-grabbing figure with restrictive conditions. Our team calculates the genuine playthrough cost of every offer we feature.",
                    ],
                  },
                  {
                    icon: Zap,
                    title: "Game Libraries and Software Providers",
                    body: [
                      "The scope and depth of a casino game library shapes every session you play. Elite platforms offer thousands of slots, live dealer tables, classic table games, and progressive jackpots, all powered by established software studios.",
                      "Prioritise casinos partnered with proven providers such as Evolution Gaming, NetEnt, Microgaming, and Playtech. These studios publish independently audited RTP figures and subject every title to rigorous fairness testing.",
                    ],
                  },
                  {
                    icon: CheckCircle2,
                    title: "Payment Methods and Withdrawal Speeds",
                    body: [
                      "Reliable banking is central to a satisfying casino experience. Leading UK platforms support Visa and Mastercard debit cards, major e-wallets, bank transfers, and Apple Pay. Note that credit card gambling has been prohibited in the UK since April 2020.",
                      "Withdrawal speed is a reliable quality signal. The best operators process e-wallet withdrawals within hours and complete debit card transfers within two to three working days. Unexplained delays are a red flag.",
                    ],
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile Gaming Quality",
                    body: [
                      "Mobile devices now account for the majority of UK casino sessions. Whether through a dedicated application or a responsive browser platform, your chosen casino should deliver a seamless, full-featured experience on smartphone and tablet.",
                      "Assess the mobile game selection, live casino availability, and account management tools. The best platforms offer biometric login, personalised alerts, and complete access to all promotions on mobile.",
                    ],
                  },
                  {
                    icon: HeartHandshake,
                    title: "Customer Support and Responsible Play",
                    body: [
                      "Responsive support proves its worth the moment an issue arises. Premium UK casinos provide 24/7 assistance through live chat, email, and telephone, with well-trained agents who resolve queries promptly.",
                      "Every UKGC-licensed operator must provide deposit limits, reality check alerts, self-exclusion, and signposting to organisations such as GamCare and BeGambleAware. These tools should be prominently accessible, not buried in menus.",
                    ],
                  },
                ].map(({ icon: Icon, title, body }, i) => (
                  <div
                    key={i}
                    className="flex gap-5 md:gap-6 px-5 md:px-7 py-5 md:py-7 border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] border-l-2 border-l-[hsl(var(--crimson))]/60 animate-fade-in-up"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    {/* Icon */}
                    <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[hsl(var(--crimson-subtle))] border border-[hsl(var(--crimson))]/30">
                      <Icon className="w-5 h-5 text-[hsl(var(--crimson))]" aria-hidden="true" />
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif font-bold text-base md:text-xl text-[hsl(var(--gold))] mb-2 md:mb-3">
                        {title}
                      </h3>
                      {body.map((p, j) => (
                        <p key={j} className="text-xs md:text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-2 last:mb-0">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </article>

            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider-crimson" />

        {/* ── FAQ ── */}
        <div id="faq-section">
          <FaqSection />
        </div>

        {/* Divider */}
        <div className="section-divider" />

      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
