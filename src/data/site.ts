export const site = {
  name: 'Inhale Wellness Studio',
  tagline: 'Targeted relief for pain, injury and recovery.',
  description:
    'Acupuncture, sports & orthopedic acupuncture, electro-acupuncture, cupping, reflexology and wellness coaching in Athens, Ohio. By appointment only.',
  phone: '740.350.5654',
  phoneHref: 'tel:+17403505654',
  email: 'michelle@inhaleyoga.org',
  location: {
    line1: '94 Columbus Road, Building A',
    note: 'Inside Athens Wellness Coop. Look for the red door',
    city: 'Athens, OH 45701',
    mapsUrl: 'https://maps.google.com/?q=94+Columbus+Road+Athens+OH+45701',
  },
  mailing: { line1: '95 – 2nd Street', city: 'Athens, OH 45701' },
  social: {
    facebook: 'https://www.facebook.com/InhaleWellnessStudio',
    instagram: 'https://www.instagram.com/inhalewellnessstudio/',
    youtube: 'https://www.youtube.com/user/InhaleYogaStudio',
  },
  /**
   * Where the contact form POSTs (e.g. a Formspree / Basin / Netlify endpoint).
   * Leave empty to have the form open the visitor's email app instead.
   */
  formEndpoint: '',
};

export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/sports-orthopedic-acupuncture', label: 'Sports & Ortho' },
  { href: '/about', label: 'Our Team' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const modalities = [
  'Acupuncture',
  'Electro Acupuncture',
  'Sports & Ortho Acupuncture',
  'Cupping Therapy',
  'Reflexology',
  'Wellness Coaching',
];
