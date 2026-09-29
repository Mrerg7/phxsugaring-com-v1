export const SITE = {
  name: 'phxsugaring.com',
  brand: 'Desert Rich Domains',
  title: 'phxsugaring.com | Premium Domain for Sale | Desert Rich',
  description:
    'phxsugaring.com is available now — premium Phoenix sugaring domain for sale. Make an offer, buy via escrow, or contact our agent. Strong local SEO for natural hair removal brands.',
  url: 'https://phxsugaring.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
  googleSiteVerification: 'siJ_qFI-QxHq5PgRdammMgpCLNaXpiu73S-MoUqIbS0',
  /** Negotiable asking range shown for CRO; serious buyers get firm quote. */
  priceDisplay: 'Make Offer',
  priceHint: 'Negotiable · Escrow available',
  availability: 'InStock',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '60cf7c79-4b42-48ec-0d92-4fd02bc34700',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('phxsugaring.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring phxsugaring.com.\n\nIntended use:\nBudget range:\nPreferred path: [ ] Make Offer  [ ] Buy Now via Escrow  [ ] Speak with Agent\n\nThank you.')}`;

export const OFFER_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Offer for phxsugaring.com')}&body=${encodeURIComponent('Hello,\n\nI would like to make an offer for phxsugaring.com.\n\nOffer amount (USD):\nIntended use:\nTimeline:\n\nThank you.')}`;

export const BUY_NOW_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Buy Now — phxsugaring.com via Escrow')}&body=${encodeURIComponent('Hello,\n\nI want to purchase phxsugaring.com through Escrow.com.\n\nBuyer name / entity:\nPreferred escrow email:\nTarget close date:\n\nThank you.')}`;

export const AGENT_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Speak with Domain Agent — phxsugaring.com')}&body=${encodeURIComponent('Hello,\n\nPlease have an agent contact me about phxsugaring.com.\n\nName:\nPhone:\nBest time to call:\nQuestions:\n\nThank you.')}`;

export const DISCLAIMER_DATE = 'September 29, 2026';

export const NAV_LINKS = [
  { href: '/#why', label: 'Why This Domain' },
  { href: '/#sugaring', label: 'About Sugaring' },
  { href: '/#use-cases', label: 'Use Cases' },
  { href: '/guides/', label: 'Guides' },
  { href: '/#acquire', label: 'Acquire' },
] as const;
