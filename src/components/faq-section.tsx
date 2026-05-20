"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "faq-1",
    question: "How does Elite Casino Sites UK select the casinos it features?",
    answer:
      "Our specialist team subjects every casino to a rigorous, multi-stage evaluation covering UKGC licence verification, security architecture, programme quality, bonus value and fairness, game library depth, software provider credibility, mobile performance, withdrawal processing times, and customer support responsiveness. Only operators that consistently score at the highest level across every dimension earn a place on our platform.",
  },
  {
    id: "faq-2",
    question: "Are the casinos on Elite Casino Sites UK legal and safe for UK players?",
    answer:
      "Every casino featured on elitecasinositesuk.com holds a current UK Gambling Commission licence, guaranteeing strict compliance with player protection standards, fair gaming requirements, secure transaction processing, and mandatory responsible gambling provisions. Player funds are protected by law, and all operators use industry-grade SSL encryption.",
  },
  {
    id: "faq-3",
    question: "What types of welcome bonuses do leading UK elite casinos offer?",
    answer:
      "Top UK operators provide a range of introductory packages including matched deposit bonuses (such as 100% up to £500), free spins bundles, no-deposit bonus credits, cashback promotions, and multi-stage elite welcome series. We assess wagering requirements, eligible game restrictions, and validity windows to highlight the most genuinely rewarding offers available.",
  },
  {
    id: "faq-4",
    question: "How do I claim an elite welcome bonus?",
    answer:
      "The process is straightforward. Click our exclusive link to your chosen casino, register a new account with accurate personal details, make a qualifying deposit using an eligible payment method, then opt in or enter any required promotional code. Some bonuses activate automatically on deposit. Always review the specific terms covering wagering requirements and eligible games before proceeding.",
  },
  {
    id: "faq-5",
    question: "Which payment methods do UK elite casinos accept?",
    answer:
      "Leading UK casinos support Visa and Mastercard debit cards, e-wallets such as PayPal, Skrill, and Neteller, bank transfers, prepaid cards such as Paysafecard, and digital wallets including Apple Pay and Google Pay. Credit cards are prohibited for gambling transactions in the UK. Most operators process instant deposits and complete withdrawals within 24 hours, with e-wallets typically the fastest option.",
  },
  {
    id: "faq-6",
    question: "Can I play elite casino games on mobile?",
    answer:
      "Yes. Every casino we recommend delivers a first-class mobile experience, either through dedicated iOS and Android applications or fully responsive web platforms. You can access the complete game library, claim bonuses, manage your account, and process withdrawals directly from your smartphone or tablet at any time.",
  },
  {
    id: "faq-7",
    question: "What is the UK Gambling Commission and why does it matter?",
    answer:
      "The UK Gambling Commission (UKGC) is the statutory body that licences and regulates all gambling operators serving UK customers. It enforces rigorous standards covering game fairness, data security, anti-money laundering controls, and responsible gambling obligations. UKGC-licensed casinos must maintain segregated player funds, provide self-exclusion tools, and undergo regular compliance audits. A current UKGC licence is the most important quality indicator when selecting a casino.",
  },
  {
    id: "faq-8",
    question: "How can I gamble more responsibly?",
    answer:
      "Set firm deposit and loss limits before you begin playing. Never chase losses, take regular breaks, and approach gambling purely as a form of entertainment. All UKGC-licensed casinos are required to provide deposit caps, reality check notifications, time-out periods, and self-exclusion tools. If you have concerns about your gambling habits, contact BeGambleAware.org on 0808 8020 133, visit GamCare.org.uk, or register with GamStop.co.uk to self-exclude from all UK-licensed operators simultaneously.",
  },
]

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--surface-1))]" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="eyebrow-crimson block mb-3">FAQ</span>
          <h2
            id="faq-heading"
            className="font-serif font-bold text-3xl md:text-4xl text-[hsl(var(--foreground))] mb-4 text-balance"
          >
            Frequently Asked{" "}
            <span className="text-gold-shimmer">Questions</span>
          </h2>
          <div className="rule-gold mx-auto w-32 md:w-48 mb-5" />
          <p className="text-sm text-[hsl(var(--text-muted))] max-w-xl mx-auto leading-relaxed">
            Everything UK players need to know about elite casino sites, bonuses, licensing, and responsible play
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] overflow-hidden"
              >
                <AccordionTrigger className="text-left font-sans font-semibold text-sm md:text-base text-[hsl(var(--foreground))] py-4 md:py-5 hover:no-underline gap-3 group px-5">
                  <span className="flex items-center gap-3">
                    <span className="shrink-0 font-sans text-[10px] font-bold tracking-widest text-[hsl(var(--crimson))] w-5 text-right">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="group-hover:text-[hsl(var(--gold))] transition-colors duration-200">
                      {faq.question}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 px-5 pl-[3.25rem] border-t border-[hsl(var(--border))] bg-[hsl(var(--surface-1))]">
                  <p className="pt-4 text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}
