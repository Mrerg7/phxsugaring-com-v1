export const SITE = {
  name: 'phxsugaring.com',
  title: 'phxsugaring.com • Premium Domain for Sale | Phoenix Sugaring',
  description:
    'Own phxsugaring.com — the clean, modern domain for professional sugaring in Phoenix. The natural, ancient hair removal method with modern appeal.',
  url: 'https://phxsugaring.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Phoenix, Arizona',
  googleSiteVerification: 'siJ_qFI-QxHq5PgRdammMgpCLNaXpiu73S-MoUqIbS0',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '60cf7c79-4b42-48ec-0d92-4fd02bc34700',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('phxsugaring.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring phxsugaring.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const DISCLAIMER_DATE = 'July 2, 2026';
