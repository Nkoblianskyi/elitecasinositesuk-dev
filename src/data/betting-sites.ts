export interface BettingSite {
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  welcomeOffer: string
  terms: string
  features: string[]
  paymentMethods: string[]
  link: string
  reviews: number
}

const defaultTerms =
  "18+ | T&Cs apply on operator site | BeGambleAware.org | Please gamble responsibly | Wagering requirements apply"

export const bettingSites: BettingSite[] = [
    {
    id: "midnite",
    name: "Midnite Casino",
    logo: "/midnite.webp",
    score: 9.9,
    bonus: "100 Free Spins",
    welcomeOffer: "Wager £20 and Get 100 Free Spins",
    terms: defaultTerms,
    features: ["Modern Interface", "Fast Withdrawals", "Exclusive Games"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com/",
    reviews: 5027,
  },
  {
    id: "betvictor",
    name: "BetVictor Casino",
    logo: "/betvictor.webp",
    score: 9.8,
    bonus: "£20 Bonus + 50 Free Spins",
    welcomeOffer: "Deposit £10 & Get £20 Casino Bonus + 50 Free Spins",
    terms: defaultTerms,
    features: ["Premium Slots", "Live Roulette", "Fast Withdrawals"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com/",
    reviews: 5791,
  },
    {
    id: "boylesports",
    name: "BoyleSports Casino",
    logo: "/boylesports.webp",
    score: 9.7,
    bonus: "£50 Casino Bonus",
    welcomeOffer: "Bet £10 & Get £50 Casino Bonus",
    terms: defaultTerms,
    features: ["UK Licensed", "Live Dealers", "500+ Slots"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://boylesports.com",
    reviews: 5374,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes Casino",
    logo: "/ladbrokes.webp",
    score: 9.6,
    bonus: "100 Free Spins",
    welcomeOffer: "Play £10 on Slots and Get 100 Free Spins",
    terms: defaultTerms,
    features: ["Live Casino", "Jackpot Slots", "VIP Programme"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.ladbrokes.com/",
    reviews: 6418,
  },

  {
    id: "betfred",
    name: "Betfred Casino",
    logo: "/betfred.webp",
    score: 9.4,
    bonus: "200 Free Spins",
    welcomeOffer: "Stake £10 & Get 200 Free Spins",
    terms: defaultTerms,
    features: ["Fast Payouts", "Live Casino", "Exclusive Slots"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://www.betfred.com/",
    reviews: 7168,
  },

]
