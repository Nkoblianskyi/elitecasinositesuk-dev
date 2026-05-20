import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Privacy Policy | EliteCasinoSitesUK.com",
  description:
    "Read the EliteCasinoSitesUK.com privacy policy to understand how we collect, use, and protect your personal data in full compliance with UK GDPR and the Data Protection Act 2018.",
}

const sections = [
  {
    title: "1. Information We Collect",
    items: [
      ["Personal Identifiers", "When you subscribe to our newsletter or contact our team, we may collect your name, email address, and any information you choose to provide voluntarily."],
      ["Usage Data", "We automatically collect data about your interactions with our website, including pages viewed, time on site, referring sources, browser type, device information, and IP address."],
      ["Cookies and Tracking Technologies", "We use cookies and similar technologies to improve your browsing experience. Please consult our Cookie Policy for full details on what we collect and how."],
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect to operate and maintain this website, improve your experience through relevant personalisation, send newsletters and casino-related updates where you have given consent, respond to enquiries promptly, analyse usage patterns to improve our service, comply with all applicable legal obligations, and detect and prevent fraud or security incidents.",
  },
  {
    title: "3. Legal Basis for Processing",
    items: [
      ["Consent", "Where you have given us explicit permission, for example when subscribing to our newsletter or accepting personalised recommendations."],
      ["Legitimate Interests", "Where processing is necessary for our reasonable business operations, provided your fundamental rights and freedoms are not overridden."],
      ["Legal Obligation", "Where we are required to process data to comply with UK law, regulatory requirements, or a valid court order."],
    ],
  },
  {
    title: "4. Information Sharing and Disclosure",
    body: "We do not sell, trade, or rent your personal data to any third party. We share data only with trusted service providers who assist with website hosting and analytics under strict confidentiality obligations, with legal authorities where required by applicable UK law, and in the context of a legitimate business transfer, subject to equivalent privacy protections being maintained.",
  },
  {
    title: "5. Data Security",
    body: "We implement robust technical and organisational measures to protect your personal data. These include SSL/TLS encryption for all data in transit, secure server infrastructure, strict internal access controls, and regular security reviews. While no internet transmission can be guaranteed completely risk-free, we apply best-practice safeguards at every level of our systems.",
  },
  {
    title: "6. Data Retention",
    body: "We retain personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by UK law. Once data is no longer required for any legitimate purpose, it is securely deleted or anonymised in line with our internal data retention schedule.",
  },
  {
    title: "7. Your Rights Under UK GDPR",
    items: [
      ["Right of Access", "Request a copy of all personal data we hold about you at any time, free of charge."],
      ["Right to Rectification", "Have any inaccurate or incomplete personal information we hold corrected without undue delay."],
      ["Right to Erasure", "Request deletion of your personal data where there is no compelling reason for us to continue processing it."],
      ["Right to Restrict Processing", "Request that we limit how we use your data in certain circumstances defined by UK GDPR."],
      ["Right to Data Portability", "Receive your personal data in a structured, machine-readable format for transfer to another controller."],
      ["Right to Object", "Object to processing activities based on our legitimate interests, including direct marketing."],
      ["Right to Withdraw Consent", "Withdraw any previously given consent at any time without affecting the lawfulness of processing before withdrawal."],
    ],
  },
  {
    title: "8. Third-Party Links",
    body: "Our website contains links to external casino operators and third-party services. We are not responsible for the privacy practices or content of those external sites. We recommend reviewing each site's individual privacy policy before submitting any personal information.",
  },
  {
    title: "9. Children's Privacy",
    body: "EliteCasinoSitesUK.com is exclusively intended for adults aged 18 and over. We do not knowingly collect personal data from anyone under this age. If you believe we have inadvertently collected data relating to a minor, please contact us immediately and we will take appropriate remedial action.",
  },
  {
    title: "10. Changes to This Policy",
    body: "We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by posting the revised policy on this page and updating the date shown above. We encourage you to review this page regularly to stay informed.",
  },
  {
    title: "11. Contact Us",
    body: "For any questions about this policy or to exercise your data rights, please contact us at: privacy@elitecasinositesuk.com. You also have the right to lodge a complaint directly with the UK Information Commissioner's Office (ICO) at ico.org.uk.",
  },
]

export default function PrivacyPolicy() {
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
              Privacy Policy
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

            <div className="border-l-2 border-[hsl(var(--gold))]/60 pl-5 bg-[hsl(var(--surface-1))] py-4 pr-4 mb-10 border border-[hsl(var(--border))]">
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                At EliteCasinoSitesUK.com, protecting your privacy is a fundamental commitment. This Privacy Policy explains how we collect, use, store, and safeguard your personal information in full compliance with UK GDPR and the Data Protection Act 2018.
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

            {/* ICO callout */}
            <div className="mt-12 bg-[hsl(var(--surface-1))] p-6 border border-[hsl(var(--border))] border-l-2 border-l-[hsl(var(--crimson))]">
              <div className="section-divider mb-5" />
              <p className="eyebrow-gold mb-2">Regulatory Authority</p>
              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                If you believe your data protection rights have been violated and we have not resolved your concern to your satisfaction, you have the right to complain directly to the{" "}
                <strong className="text-[hsl(var(--foreground))]">
                  Information Commissioner&apos;s Office (ICO)
                </strong>{" "}
                at{" "}
                <span className="text-[hsl(var(--gold))]">ico.org.uk</span> or by calling{" "}
                <strong className="text-[hsl(var(--foreground))]">0303 123 1113</strong>.
              </p>
              <div className="section-divider mt-5" />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
