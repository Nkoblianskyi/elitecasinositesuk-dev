import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | EliteCasinoSitesUK.com - Expert UK Casino Reviews",
  description:
    "Discover our editorial mission, review methodology, and commitment to helping UK players find the finest UKGC-licensed elite casinos at EliteCasinoSitesUK.com.",
}

const pillars = [
  {
    title: "UKGC Licensed Operators Only",
    body: "Every casino we feature holds a current UK Gambling Commission licence, guaranteeing the highest standards of player protection, fund security, and fair gaming for all British players.",
  },
  {
    title: "Built for UK Elite Players",
    body: "We prioritise operators that understand premium British gaming culture: GBP accounts, UK-friendly payment methods, exclusive elite programmes, and dedicated local customer support.",
  },
  {
    title: "Independent Expert Reviews",
    body: "Our experienced casino analysts perform hands-on testing of every platform, evaluating game quality, bonus fairness, payout speed, and the overall player experience from first deposit to final withdrawal.",
  },
  {
    title: "Exclusive Elite Bonus Offers",
    body: "We negotiate enhanced welcome packages and exclusive promotions available only through our platform, delivering exceptional value for discerning UK elite casino players.",
  },
]

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(var(--surface-1))] border-b border-[hsl(var(--border))]">
        <div className="h-[2px] bg-[hsl(var(--crimson))]" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow-gold mb-4 block">Who We Are</p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[hsl(var(--foreground))] mb-5 text-balance">
              About Elite Casino Sites UK
            </h1>
            <div className="rule-crimson mx-auto w-24 mb-5" />
            <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed max-w-xl mx-auto">
              Your trusted authority on UK elite casino sites, dedicated to helping British players discover the finest UKGC-licensed operators through independent, specialist-led analysis and honest editorial reviews.
            </p>
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-14">

            {/* Mission */}
            <div>
              <p className="eyebrow-gold mb-3">Our Mission</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Clarity in a Crowded Market
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
                At EliteCasinoSitesUK.com, we have built Britain&apos;s most trusted destination for casino evaluation and comparison. In a marketplace saturated with operators competing for attention, our specialist team cuts through promotional noise to identify genuinely exceptional elite casino experiences crafted for discerning British players.
              </p>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Whether you favour high-stakes slots, live blackjack, premium roulette, or progressive jackpots, we connect you with operators that deliver outstanding value, a superior game library, and first-class personalised service throughout every session.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] p-6 border-l-2 border-l-[hsl(var(--gold))]/60 hover:border-l-[hsl(var(--gold))] transition-colors duration-200"
                >
                  <div className="h-[1px] bg-[hsl(var(--crimson))] w-8 mb-4" />
                  <h3 className="font-serif font-bold text-base text-[hsl(var(--foreground))] mb-2">{p.title}</h3>
                  <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Methodology */}
            <div>
              <p className="eyebrow-gold mb-3">Process</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Our Review Methodology
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-6">
                Every recommendation on our platform is backed by a comprehensive evaluation process refined by industry veterans across eight critical dimensions:
              </p>
              <ul className="space-y-2">
                {[
                  ["Licensing and Security",   "UKGC licence verification, SSL encryption standards, and player fund segregation requirements"],
                  ["Welcome Bonuses",           "Value assessment, realistic wagering requirements, and genuinely achievable completion terms"],
                  ["Game Library",              "Slot variety, live dealer tables, jackpots, published RTP rates, and software studio credibility"],
                  ["Elite Programme",           "Tier structure, comp point earning, dedicated account manager access, and exclusive player perks"],
                  ["Payment Methods",           "UK-compatible options, instant deposit processing, and sub-24-hour withdrawal speeds"],
                  ["Mobile Experience",         "Application quality, responsive design performance, and full game library availability on mobile"],
                  ["Customer Support",          "Live chat availability, response quality and speed, and access to UK-based support agents"],
                  ["Responsible Gaming",        "Deposit limits, reality check tools, self-exclusion pathways, and BeGambleAware signposting"],
                ].map(([title, desc]) => (
                  <li
                    key={title}
                    className="flex gap-3 text-sm border-l-2 border-[hsl(var(--crimson))]/40 pl-4 bg-[hsl(var(--surface-1))] py-3 pr-4 border border-[hsl(var(--border))]"
                  >
                    <span className="font-serif font-semibold text-[hsl(var(--gold))] whitespace-nowrap shrink-0">{title}:</span>
                    <span className="text-[hsl(var(--text-secondary))] leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Values */}
            <div>
              <p className="eyebrow-gold mb-3">Values</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Our Core Principles
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <div className="space-y-3">
                {[
                  ["Transparency",            "We publish our full testing methodology and scoring criteria so you understand precisely how and why we rank each casino."],
                  ["Editorial Independence",  "Our reviews remain entirely impartial. Affiliate commissions never influence our assessments. Every rating reflects genuine platform quality measured against objective criteria."],
                  ["Continuous Updates",      "The casino landscape changes rapidly. We regularly reassess every listing to ensure our recommendations remain accurate and current for UK players."],
                  ["Responsible Gaming",      "We are firmly committed to player welfare. All pages feature prominent links to BeGambleAware, GamCare, and GamStop, and we never promote gambling to vulnerable individuals."],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="border-l-2 border-[hsl(var(--gold))] pl-5 bg-[hsl(var(--surface-1))] py-4 pr-5 border border-[hsl(var(--border))]"
                  >
                    <p className="font-serif font-semibold text-sm text-[hsl(var(--foreground))] mb-1.5">{title}</p>
                    <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding callout */}
            <div className="bg-[hsl(var(--surface-1))] p-8 border border-[hsl(var(--border))] border-l-2 border-l-[hsl(var(--crimson))]">
              <div className="section-divider mb-7" />
              <p className="eyebrow-gold mb-3">How We Are Funded</p>
              <h3 className="font-serif font-bold text-xl text-[hsl(var(--foreground))] mb-4">
                Always Free for UK Players
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
                EliteCasinoSitesUK.com is sustained through affiliate partnerships with licensed casino operators, who pay us a commission when visitors register through our referral links. This model allows us to deliver a comprehensive comparison service at no cost to users.
              </p>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                These commercial arrangements never compromise our editorial integrity. Casino rankings are determined exclusively by platform quality, player satisfaction, and objective performance metrics, not by commercial considerations or the size of affiliate fees.
              </p>
              <div className="section-divider mt-7" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
