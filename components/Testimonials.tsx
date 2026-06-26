'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  type: 'customer' | 'worker';
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Chioma Okafor',
    role: 'HR Manager',
    company: 'Tech Startup Lagos',
    content:
      'HANDLY has been a game-changer for our hiring needs. We found talented developers within days and the process was smooth from start to finish. Highly recommended!',
    type: 'customer',
  },
  {
    id: '2',
    name: 'Tunde Ajayi',
    role: 'Freelance Developer',
    company: 'Self-employed',
    content:
      'As a freelancer, HANDLY has given me access to quality projects and fair compensation. The platform is easy to use and payments are always on time.',
    type: 'worker',
  },
  {
    id: '3',
    name: 'Blessing Mensah',
    role: 'Marketing Manager',
    company: 'E-commerce Business',
    content:
      'Finding the right freelancers for our marketing campaigns is now effortless. HANDLY\'s matching algorithm is incredibly accurate.',
    type: 'customer',
  },
  {
    id: '4',
    name: 'Zainab Hassan',
    role: 'Graphic Designer',
    company: 'Self-employed',
    content:
      'I\'ve been able to grow my income significantly on HANDLY. The community is supportive and there\'s always work available for quality designers.',
    type: 'worker',
  },
  {
    id: '5',
    name: 'Peter Iwuanyanwu',
    role: 'Founder',
    company: 'Digital Agency',
    content:
      'HANDLY has been instrumental in scaling our agency. We can now take on more projects by accessing a vetted pool of freelancers instantly.',
    type: 'customer',
  },
  {
    id: '6',
    name: 'Amara Obi',
    role: 'Content Writer',
    company: 'Self-employed',
    content:
      'What I love most about HANDLY is the transparency. I know exactly how much I\'ll earn, when I\'ll get paid, and the process is straightforward.',
    type: 'worker',
  },
];

interface TestimonialsProps {
  type?: 'customer' | 'worker' | 'all';
  limit?: number;
}

export default function Testimonials({ type = 'all', limit }: TestimonialsProps) {
  const filtered =
    type === 'all' ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.type === type);

  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayed.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
        >
          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.content}</p>

          {/* Author */}
          <div className="border-t border-gray-200 pt-4">
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">
              {testimonial.role}
              {testimonial.company && ` • ${testimonial.company}`}
            </p>
            <span
              className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                testimonial.type === 'customer'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-green-100 text-green-700'
              }`}
            >
              {testimonial.type === 'customer' ? '👤 Customer' : '💼 Worker'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
