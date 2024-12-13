import React, { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  title?: string;
}

export default function Section({ id, children, className = '', title }: SectionProps) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <Container>
        {title && (
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {title}
          </h2>
        )}
        {children}
      </Container>
    </section>
  );
}