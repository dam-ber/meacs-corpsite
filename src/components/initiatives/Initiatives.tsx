import React from 'react';
import Section from '../layout/Section';
import InitiativeCard from './InitiativeCard';
import { initiatives } from './initiativeData';

export default function Initiatives() {
  return (
    <Section
      id="initiatives"
      title="Our Initiatives"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {initiatives.map((initiative) => (
          <InitiativeCard
            key={initiative.title}
            {...initiative}
          />
        ))}
      </div>
    </Section>
  );
}