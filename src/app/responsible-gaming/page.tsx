import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Responsible Gaming | EliteCasinoSitesUK.com",
  description:
    "EliteCasinoSitesUK.com is committed to responsible gambling. Find practical tools, self-help resources, and UK support organisations to help you stay in control.",
}

const tools = [
  {
    title: "Deposit Limits",
    body: "All UKGC-licensed operators are legally required to offer daily, weekly, and monthly deposit caps. Establishing these limits before you begin playing ensures your spending never exceeds an amount you are comfortable with.",
  },
  {
    title: "Reality Check Alerts",
    body: "Reality check notifications pause your session at intervals you choose, reminding you of the time elapsed and the amount wagered. These prompts help maintain healthy perspective during extended play sessions.",
  },
  {
    title: "Time-Out Periods",
    body: "If you need a short break from gambling, licensed casinos offer temporary account suspensions ranging from 24 hours to six weeks. During a time-out your account is fully locked and no marketing communications will be sent to you.",
  },
  {
    title: "Self-Exclusion",
    body: "Self-exclusion allows you to block yourself from gambling at an operator for a minimum period of six months. UKGC-licensed casinos are legally obligated to honour self-exclusion requests and must not contact you with promotional material during the exclusion period.",
  },
]

const organisations = [
  {
    name: "BeGambleAware",
    description: "Free, confidential advice and support available around the clock. Call the National Gambling Helpline: 0808 8020 133.",
    href: "https://www.begambleaware.org/",
    logo: "/gamble-aware.png",
  },
  {
    name: "GamCare",
    description: "The UK's leading provider of information, advice, and support for anyone affected by problem gambling.",
    href: "https://www.gamcare.org.uk/",
    logo: "/gamcare.png",
  },
  {
    name: "GamStop",
    description: "Register with GamStop to self-exclude from all UKGC-licensed gambling websites and mobile applications simultaneously, free of charge.",
    href: "https://www.gamstop.co.uk/",
    logo: "/gamstop.svg",
  },
  {
    name: "Gambling Therapy",
    description: "Free online support services, forums, and counselling for anyone around the world affected by the harms of problem gambling.",
    href: "https://www.gamblingtherapy.org/",
    logo: "/gordon.png",
  },
]

const warningSigns = [
  "Spending more money than you can genuinely afford to lose",
  "Gambling to escape stress, anxiety, or difficult personal circumstances",
  "Chasing losses by increasing bet sizes or extending session length",
  "Being dishonest with friends or family about the extent of your gambling",
  "Neglecting work, study, family responsibilities, or personal commitments",
  "Borrowing money or selling possessions in order to fund continued gambling",
  "Feeling anxious, irritable, or restless when unable to gamble",
  "Making repeated but unsuccessful attempts to reduce or stop gambling entirely",
]

export default function ResponsibleGaming() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(var(--surface-1))] border-b border-[hsl(var(--border))]">
        <div className="h-[2px] bg-[hsl(var(--crimson))]" />
        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="eyebrow-gold block mb-4">Player Welfare</p>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[hsl(var(--foreground))] mb-5 text-balance">
              Responsible Gaming
            </h1>
            <div className="rule-crimson mx-auto w-24 mb-5" />
            <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed max-w-xl mx-auto">
              Gambling is entertainment. At EliteCasinoSitesUK.com, we are unconditionally committed to promoting safe, responsible, and informed play for every UK player who visits our platform.
            </p>
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* Content */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-14">

            {/* Commitment */}
            <div>
              <p className="eyebrow-gold mb-3">Our Commitment</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Playing Within Control
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
                Online gambling is a legitimate form of entertainment enjoyed responsibly by millions of British adults. For some individuals, however, it can become harmful. We take our duty of care seriously and actively encourage all visitors to set clear boundaries, gamble only with money they can comfortably afford to lose, and treat gaming purely as recreational activity.
              </p>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Every casino featured on our platform holds a valid UKGC licence. Licensed operators are legally required to provide comprehensive responsible gambling tools and must comply with strict player protection standards enforced by the UK Gambling Commission. If you have any concerns about your gambling behaviour, please use the resources below without delay.
              </p>
            </div>

            {/* Tools */}
            <div>
              <p className="eyebrow-gold mb-3">Tools</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Responsible Gambling Tools
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    className="border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] p-6 border-l-2 border-l-[hsl(var(--gold))]/60 hover:border-l-[hsl(var(--gold))] transition-colors duration-200"
                  >
                    <div className="h-px bg-[hsl(var(--crimson))] w-8 mb-4" />
                    <h3 className="font-serif font-bold text-base text-[hsl(var(--foreground))] mb-2">{tool.title}</h3>
                    <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{tool.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning signs */}
            <div>
              <p className="eyebrow-gold mb-3">Awareness</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                Recognising Problem Gambling
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-6">
                Early recognition is the most important step toward recovery. Please seek support if you recognise any of the following behaviours in yourself or someone you know:
              </p>
              <ul className="space-y-2">
                {warningSigns.map((sign, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-[hsl(var(--text-secondary))] border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] pl-4 pr-4 py-2.5 border-l-2 border-l-[hsl(var(--crimson))]/40"
                  >
                    <span className="w-1.5 h-1.5 bg-[hsl(var(--crimson))] mt-[7px] flex-shrink-0" />
                    <span className="leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support organisations */}
            <div>
              <p className="eyebrow-gold mb-3">Support</p>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[hsl(var(--foreground))] mb-4">
                UK Support Organisations
              </h2>
              <div className="h-px bg-[hsl(var(--border))] w-full mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {organisations.map((org) => (
                  <Link
                    key={org.name}
                    href={org.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] p-5 hover:border-[hsl(var(--gold))]/50 transition-colors duration-200 flex flex-col gap-3 group"
                  >
                    <Image
                      src={org.logo}
                      alt={org.name}
                      width={120}
                      height={36}
                      className="object-contain p-1 h-8 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    <div>
                      <p className="font-serif font-bold text-sm text-[hsl(var(--foreground))] mb-1 group-hover:text-[hsl(var(--gold))] transition-colors duration-200">
                        {org.name}
                      </p>
                      <p className="text-xs text-[hsl(var(--text-muted))] leading-relaxed">{org.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Emergency callout */}
            <div className="bg-[hsl(var(--surface-1))] border border-[hsl(var(--border))] border-l-2 border-l-[hsl(var(--crimson))] p-8">
              <div className="section-divider mb-7" />
              <p className="eyebrow-gold mb-3">Need Help Right Now?</p>
              <h3 className="font-serif font-bold text-xl text-[hsl(var(--foreground))] mb-4">
                Free, Confidential Support Available 24/7
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mb-4">
                The National Gambling Helpline provides free, confidential support, information, and counselling at any hour of the day or night. You do not need to be in crisis to call. Trained advisors are ready to help.
              </p>
              <p className="font-serif font-bold text-3xl text-[hsl(var(--gold))] mb-2">0808 8020 133</p>
              <p className="text-xs text-[hsl(var(--text-muted))] mb-6">Free from all UK landlines and mobile phones</p>
              <p className="text-xs text-[hsl(var(--text-muted))] leading-relaxed">
                18+ only. Gambling can be addictive. Please play responsibly. All featured casinos hold valid UKGC licences.
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
