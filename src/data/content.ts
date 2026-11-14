import type { ImageMetadata } from 'astro';

import initialImg from '../assets/images/consultation.jpg';
import basicImg from '../assets/images/leg-treatment.jpg';
import plusImg from '../assets/images/facial-acupuncture.jpg';
import premiumImg from '../assets/images/electro-acupuncture.jpg';
import orthoImg from '../assets/images/ortho-acupuncture.jpg';
import thaiImg from '../assets/images/thai-massage.jpg';
import thaiCuppingImg from '../assets/images/fire-cupping.jpg';
import cuppingImg from '../assets/images/cupping.jpg';
import reflexImg from '../assets/images/reflexology.jpg';
import reflexCuppingImg from '../assets/images/reflexology-cupping.jpg';
import coachingImg from '../assets/team/angela-coaching.jpg';

export type Service = {
  name: string;
  summary: string;
  duration: string;
  price: number;
  image: ImageMetadata;
  note?: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  intro: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'acupuncture',
    title: 'Acupuncture',
    intro:
      'Whole-person care with Michelle Stobart, L.Ac. Every plan starts with an initial visit so we can treat both the root cause and how it shows up today.',
    services: [
      {
        name: 'Acupuncture: Initial Visit',
        summary: 'Consultation, acupuncture and establishing your treatment plan.',
        duration: '1 hr 30 min',
        price: 165,
        image: initialImg,
        note: 'Start here',
      },
      {
        name: 'Acupuncture Basic',
        summary: 'A simple follow-up treatment with acupuncture needles.',
        duration: '1 hr',
        price: 115,
        image: basicImg,
      },
      {
        name: 'Acupuncture Plus',
        summary: 'Follow-up visits that combine multiple modalities.',
        duration: '1 hr',
        price: 125,
        image: plusImg,
      },
      {
        name: 'Acupuncture Premium',
        summary: 'Acupuncture plus more time-intensive therapies.',
        duration: '1 hr 30 min',
        price: 165,
        image: premiumImg,
      },
      {
        name: 'Orthopedic Acupuncture',
        summary:
          'For complicated chronic conditions such as stroke recovery, neuropathy and sports injury. Follow-up visits $165.',
        duration: '1 hr 30 min',
        price: 185,
        image: orthoImg,
      },
    ],
  },
  {
    id: 'massage',
    title: 'Massage & Cupping',
    intro: 'Slow down and let your nervous system settle. Relaxation, aromatherapy and targeted cupping.',
    services: [
      {
        name: 'Thai Bliss Relaxation',
        summary: 'Relaxation and aromatherapy await in this 60-minute session.',
        duration: '1 hr',
        price: 95,
        image: thaiImg,
      },
      {
        name: 'Thai Bliss with Cupping',
        summary: 'Thai Bliss relaxation with cupping for deeper muscle release.',
        duration: '1 hr',
        price: 125,
        image: thaiCuppingImg,
      },
      {
        name: 'Cupping Package — 30 min',
        summary: 'Five 30-minute sessions focusing on one area of treatment.',
        duration: '5 × 30 min',
        price: 270,
        image: cuppingImg,
      },
      {
        name: 'Cupping Package — 45 min',
        summary: 'Five 45-minute sessions focusing on two areas of treatment.',
        duration: '5 × 45 min',
        price: 425,
        image: cuppingImg,
      },
    ],
  },
  {
    id: 'reflexology',
    title: 'Reflexology',
    intro:
      'Relaxation, stress relief and nervous-system support through intentional work with the feet and hands, with Angela Jett.',
    services: [
      {
        name: 'Basic Reflexology',
        summary: 'The ultimate foot & hand massage.',
        duration: '1 hr',
        price: 95,
        image: reflexImg,
      },
      {
        name: 'Reflexology & Cupping',
        summary: 'Relaxation on a whole new level.',
        duration: '1 hr',
        price: 125,
        image: reflexCuppingImg,
      },
    ],
  },
  {
    id: 'coaching',
    title: 'Wellness Coaching',
    intro:
      'Gentle guidance around lifestyle habits, self-care and personal health goals, with an emphasis on balance rather than perfection.',
    services: [
      {
        name: 'Wellness Coaching with Angela',
        summary: 'Make meaningful, sustainable changes in your health and daily habits.',
        duration: '1 hr 30 min',
        price: 105,
        image: coachingImg,
      },
      {
        name: 'Coaching Follow-Up',
        summary: 'Stay on track and reach your goals.',
        duration: '1 hr',
        price: 85,
        image: coachingImg,
      },
    ],
  },
];

export const allServiceNames = serviceGroups.flatMap((g) => g.services.map((s) => s.name));

export const conditions = [
  {
    title: 'Musculoskeletal & Sports Injury',
    body: 'Back/neck pain, sciatica, tendonitis, post-injury and post-surgical rehab, motor-point/electro-acupuncture for muscle and nerve issues.',
  },
  { title: 'Neurological', body: "Neuropathy, Bell's Palsy, post-stroke recovery." },
  { title: 'Stress & Mental Health', body: 'Anxiety, depression, insomnia.' },
  { title: "Women's & Hormonal Health", body: 'Menstrual disorders.' },
  {
    title: 'Digestive & Respiratory',
    body: 'Recurrent sicknesses, IBS, constipation, diarrhea, asthma.',
  },
  {
    title: 'Complicated conditions',
    body: "The ones everyone else has given up hope on, or hasn't been able to help.",
  },
];

export const faqs = [
  {
    q: 'What is acupuncture?',
    a: 'Acupuncture is an ancient method of healing that has been effectively used to treat people worldwide for over 3,000 years. With the use of tiny needles, cupping therapy and other techniques, acupuncture is a natural and gentle way to help relieve symptoms that lead to various health disorders.',
  },
  {
    q: 'How does acupuncture work?',
    a: 'Think of your body like a highway with various pathways to move traffic about. When there is congestion on one of those pathways, things slow down and clog up. The same is true for your body. When there is physical, emotional or mental congestion, the free flow of energy becomes clogged and you feel unwell. Acupuncture works to free up the congestion and get your energy flowing in harmony again.',
  },
  {
    q: 'What can I expect on my first visit?',
    a: 'Plan for around 90 minutes. Your acupuncturist will ask about the state of your general health, so be thorough here. Based on your answers, they will have a better idea of how to treat both the root cause and the current manifestation of your symptoms. On the table, they will take your pulse and look at your tongue to confirm their diagnostic thoughts, then prepare your skin and explain the procedure. You will rest for about 30 minutes with the needles in. Afterwards, other techniques may be applied if needed for your condition.',
  },
  {
    q: 'What can acupuncture help?',
    a: 'Acupuncture has been proven effective for pain management, headaches and migraines, anxiety and depression, insomnia, menstrual disorders, digestive and respiratory issues, and addiction recovery. If your condition is not listed, contact us to chat. If we cannot help, we will help you find someone who can.',
  },
  {
    q: 'What do I wear?',
    a: 'Wear comfortable clothing that can easily lift above your knees and elbows. We often use points at or below them, so you can rest comfortably without undressing. In some cases you may need to undress as you would for a massage, and you will be draped for comfort and privacy.',
  },
  {
    q: 'Is acupuncture covered by insurance?',
    a: 'Most policies do not cover it. We do not bill insurance, but we provide a receipt so you can seek reimbursement directly, and we accept HSA/FSA cards.',
  },
];

export const testimonials = [
  {
    quote:
      "Michelle's clear and intentional deepening path of healing has really helped me live a better life! I have had chronic back pain for over 20 years and in less than a year of acupuncture treatment, that pain is gone. I can breathe easier, enjoy more aspects of my life in general and have found more peace.",
    name: 'Nate H.',
    topic: 'Chronic back pain',
  },
  {
    quote:
      "I have suffered with chronic migraines at least 1–2 times per week, forever. With Michelle's acupuncture treatments, my migraines dropped to maybe one a month and were manageable with over-the-counter medications versus the strong prescription medications I was on. Michelle is the best!",
    name: 'Kimberly E.',
    topic: 'Migraines',
  },
  {
    quote:
      'At first I was very anxious being around needles and thought it would hurt. Michelle was very comforting and supportive during my whole experience. She informed me on everything she was doing, and how it would help me. After my appointment my pains were minimal for the next three to four months. Amazing work.',
    name: 'Joslyn S.',
    topic: 'Period pain',
  },
];
