import React from 'react';
import Section from '../layout/Section';
import CompanyGrid from './CompanyGrid';

export default function Members() {
  return (
    <Section
      id="members"
      className="section-dark"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Where Our Members Work
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Our members are industry leaders shaping the future of cybersecurity
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <CompanyGrid />
      </div>
    </Section>
  );
}