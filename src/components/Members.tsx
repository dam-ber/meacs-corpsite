import React from 'react';

const companies = [
  { name: 'Datadog', logo: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'IBM', logo: 'https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Exabeam', logo: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Cypienta', logo: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
  { name: 'Ruby', logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
];

export default function Members() {
  return (
    <section id="members" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Where Our Members Work
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {companies.map((company) => (
            <div key={company.name} className="col-span-1 flex justify-center items-center">
              <div className="text-center">
                <img
                  className="h-16 w-16 rounded-full mx-auto mb-2"
                  src={company.logo}
                  alt={company.name}
                />
                <p className="text-sm font-medium text-gray-900">{company.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}