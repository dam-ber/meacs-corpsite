import React from 'react';

export default function JoinForm() {
  return (
    <section id="join" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Join Our Community
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSffhHfcS1nZDyG17Kzf7BMylaYLPThRyTvxua8mya0cuI_lcw/viewform?embedded=true"
            width="640"
            height="2603"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="shadow-lg rounded-lg"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
}