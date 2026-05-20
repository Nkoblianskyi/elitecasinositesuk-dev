import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Terms and Conditions | EliteCasinoSitesUK.com",
  description:
    "Review the terms and conditions that govern your use of EliteCasinoSitesUK.com, Britain's premier independent elite casino comparison platform.",
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using EliteCasinoSitesUK.com, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions together with our Privacy Policy. If you do not agree with any part of these terms, you must discontinue use of this website immediately. We reserve the right to amend these terms at any time. Your continued use of the site following any such amendment constitutes acceptance of the updated terms.",
  },
  {
    title: "2. Nature of Our Service",
    body: "EliteCasinoSitesUK.com is an independent editorial comparison and information service. We do not operate as a casino, accept wagers, or provide gambling services of any kind. Our platform provides expert reviews, comparative analysis, and hyperlinks to third-party UKGC-licensed casino operators. We accept no responsibility for the services, content, conduct, terms, or practices of any third-party casino referenced on our platform.",
  },
  {
    title: "3. Eligibility",
    items: [
      ["Age Requirement", "You must be 18 years of age or older to use this website. Gambling is strictly prohibited for anyone under 18. By accessing our platform, you confirm that you meet the legal age requirement applicable in your jurisdiction."],
      ["Geographic Scope", "Our service is designed for users based in the United Kingdom. Gambling regulations vary considerably across different jurisdictions. It is solely your responsibility to ensure that accessing online casino services is lawful in your location before proceeding."],
      ["Self-Exclusion Compliance", "You must not use this website if you are currently enrolled in the GamStop national self-exclusion scheme or have self-excluded from any individual casino featured on our platform."],
    ],
  },
  {
    title: "4. Affiliate Disclosure",
    body: "EliteCasinoSitesUK.com participates in affiliate marketing programmes. When visitors click our links to casino operators and subsequently register or make a deposit, we may receive a commission payment. This commercial arrangement is fully disclosed and has no influence whatsoever on our editorial reviews, ratings, or rankings, which are determined exclusively by objective assessment criteria applied consistently to all operators.",
  },
  {
    title: "5. Accuracy of Information",
    body: "We make every reasonable effort to ensure that all content on EliteCasinoSitesUK.com, including bonus details, casino features, and promotional terms, is accurate and current at the time of publication. However, casino offers and terms change frequently, and we cannot guarantee the ongoing accuracy of all listed information. Always verify current promotional terms directly with the relevant casino operator before registering or making a deposit.",
  },
  {
    title: "6. Intellectual Property",
    body: "All content on EliteCasinoSitesUK.com, including text, graphics, logos, design elements, and editorial reviews, is the exclusive intellectual property of EliteCasinoSitesUK.com or its licensed content partners, and is protected under UK and international copyright law. Reproduction, redistribution, or commercial exploitation of any content without our prior written consent is strictly prohibited.",
  },
  {
    title: "7. Limitation of Liability",
    body: "EliteCasinoSitesUK.com is provided on an as-is basis without warranties of any kind. To the maximum extent permitted by applicable UK law, we disclaim all liability for any losses, damages, or claims arising from your use of our website, reliance on any information contained on it, or your use of any third-party casino site accessed through our links. We accept no liability for gambling losses incurred at any operator we review or reference.",
  },
  {
    title: "8. Third-Party Links",
    body: "Our website contains links to third-party casino sites and services provided for your convenience. We exercise no control over the content, privacy policies, terms, or practices of those external sites and accept no responsibility for them. Your use of any linked third-party site is entirely at your own risk and is governed by that site's own terms and conditions.",
  },
  {
    title: "9. Responsible Gambling",
    body: "We are firmly committed to promoting responsible gambling. If you are experiencing difficulties related to gambling, please seek immediate support from BeGambleAware.org on 0808 8020 133, GamCare.org.uk, or self-exclude from all UK-licensed operators simultaneously via GamStop.co.uk. Full details of available responsible gambling tools are published on our dedicated Responsible Gaming page.",
  },
  {
    title: "10. Governing Law",
    body: "These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    title: "11. Contact Us",
    body: "For any questions or concerns about these Terms and Conditions, please contact our team at: legal@elitecasinositesuk.com.",
  },
]

export default function Terms() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-[66px] bg-[hsl(var(--surface-1))] border-b border-[hsl(var(--border))]">
        <div className="h-[2px] bg-[hsl(var(--crimson))]" />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow-gold mb-3">Legal</p>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-[hsl(var(--foreground))] mb-3 text-balance">
              Terms and Conditions
            </h1>
            <p className="text-sm text-[hsl(var(--text-muted))] font-sans">Last updated: 2026</p>
          </div>
        </div>
        <div className="section-divider" />
      </section>

      {/* Content */}
      <section className="py-12 md:py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

            <div className="border-l-2 border-[hsl(var(--crimson))]/50 pl-5 bg-[hsl(var(--surface-1))] py-4 pr-4 mb-10 border border-[hsl(var(--border))]">
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                Please read these Terms and Conditions carefully before using EliteCasinoSitesUK.com. By accessing our casino comparison platform, you agree to be bound by the terms set out below, which constitute a legally binding agreement between you and EliteCasinoSitesUK.com.
              </p>
            </div>

            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title} className="policy-section">
                  <h2>{section.title}</h2>
                  {section.body && <p>{section.body}</p>}
                  {section.items && (
                    <ul className="space-y-2 mt-2">
                      {section.items.map(([title, desc]) => (
                        <li
                          key={title}
                          className="flex gap-3 text-sm border border-[hsl(var(--border))] bg-[hsl(var(--surface-1))] py-3 pr-4 pl-4"
                        >
                          <span className="font-serif font-semibold text-[hsl(var(--gold))] whitespace-nowrap shrink-0">
                            {title}:
                          </span>
                          <span className="text-[hsl(var(--text-secondary))] leading-relaxed">{desc}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
