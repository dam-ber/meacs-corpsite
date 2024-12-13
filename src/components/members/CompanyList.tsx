import React from 'react';
import CompanyCard from './CompanyCard';

const companies = ['Datadog', 'IBM', 'Exabeam', 'Cypienta', 'Ruby'];

export default function CompanyList() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
      {companies.map((company, index) => (
        <CompanyCard
          key={company}
          name={company}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}