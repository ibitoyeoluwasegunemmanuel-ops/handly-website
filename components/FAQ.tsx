'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'customer' | 'worker' | 'business';
}

interface FAQProps {
  category?: 'general' | 'customer' | 'worker' | 'business' | 'all';
}

const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    category: 'general',
    question: 'What is HANDLY?',
    answer:
      'HANDLY is Africa\'s leading freelancer platform that connects skilled professionals with customers and businesses. We simplify the process of finding work, managing projects, and building successful freelance careers.',
  },
  {
    id: '2',
    category: 'general',
    question: 'When will HANDLY launch?',
    answer:
      'HANDLY is currently in waitlist phase. We\'re building the platform to ensure the best experience for our users. Join the waitlist to be among the first to access HANDLY when it launches.',
  },
  {
    id: '3',
    category: 'customer',
    question: 'How do I hire a freelancer on HANDLY?',
    answer:
      'Simply post a job or browse available freelancers, review their profiles and ratings, and hire the one that best fits your needs. You can communicate directly with freelancers, track progress, and manage payments through HANDLY.',
  },
  {
    id: '4',
    category: 'customer',
    question: 'How are payments handled?',
    answer:
      'HANDLY securely handles all payments. When you hire a freelancer, funds are held in escrow and released upon project completion. We support multiple payment methods including cards, bank transfers, and mobile money.',
  },
  {
    id: '5',
    category: 'customer',
    question: 'What if I\'m not satisfied with the work?',
    answer:
      'We have a dispute resolution system in place. You can work with the freelancer to resolve issues, request revisions, or escalate to our support team if needed. We take quality seriously and protect both parties.',
  },
  {
    id: '6',
    category: 'worker',
    question: 'How do I get started as a freelancer?',
    answer:
      'Sign up, complete your profile with your skills and experience, add your portfolio, and set your rates. Once approved, you\'ll be able to browse and apply for projects that match your expertise.',
  },
  {
    id: '7',
    category: 'worker',
    question: 'How much can I earn?',
    answer:
      'Your earnings depend on your skills, experience, and the projects you take. You set your own rates, and HANDLY takes a small commission. Many freelancers earn anywhere from entry-level to premium rates based on their expertise.',
  },
  {
    id: '8',
    category: 'worker',
    question: 'When do I get paid?',
    answer:
      'Payments are released after project completion and within 7-14 days. You can track all payments in your dashboard and choose your preferred withdrawal method (bank transfer, mobile money, or card).',
  },
  {
    id: '9',
    category: 'worker',
    question: 'How do I build my reputation?',
    answer:
      'Your reputation grows through delivering quality work, maintaining communication, and earning positive reviews from clients. We showcase top-rated freelancers prominently, giving you more visibility and opportunities.',
  },
  {
    id: '10',
    category: 'business',
    question: 'How can HANDLY help my business?',
    answer:
      'HANDLY provides access to a vetted pool of talented freelancers. Whether you need design, development, marketing, or other services, you can scale your team flexibly without long-term commitments.',
  },
  {
    id: '11',
    category: 'business',
    question: 'Is there a business plan?',
    answer:
      'Yes! We offer business plans with features like team management, bulk hiring, priority support, and custom workflows. Contact our sales team to learn about enterprise solutions tailored to your needs.',
  },
  {
    id: '12',
    category: 'general',
    question: 'Is HANDLY available in my country?',
    answer:
      'HANDLY is launching across Africa starting with Nigeria. We\'ll be expanding to more countries soon. Sign up to be notified when we launch in your region.',
  },
];

export default function FAQ({ category = 'all' }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFAQ =
    category === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === category);

  return (
    <div className="space-y-4">
      {filteredFAQ.map((item) => (
        <div
          key={item.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between text-left"
          >
            <span className="font-medium text-gray-900">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-gray-600 transition-transform ${
                openId === item.id ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openId === item.id && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
