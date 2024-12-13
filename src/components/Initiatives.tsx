import React from 'react';
import { Users, BookOpen, MessageSquare, Globe } from 'lucide-react';

const initiatives = [
  {
    title: 'Community Building',
    description: 'Monthly core member meetings and networking opportunities for cultural exchange.',
    icon: Users,
  },
  {
    title: 'Professional Development',
    description: 'Quarterly speaking series featuring leading cybersecurity experts.',
    icon: BookOpen,
  },
  {
    title: 'Mentorship Program',
    description: 'Structured 6-month mentorship cycles with established professionals.',
    icon: MessageSquare,
  },
  {
    title: 'Global Network',
    description: 'Connect with professionals across EMEA, Africa, Americas, and APAC.',
    icon: Globe,
  },
];

export default function Initiatives() {
  return (
    <section id="initiatives" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Initiatives
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((initiative) => (
            <div
              key={initiative.title}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <initiative.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {initiative.title}
              </h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}