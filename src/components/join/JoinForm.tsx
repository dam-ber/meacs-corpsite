import React from 'react';
import Section from '../layout/Section';

export default function JoinForm() {
  return (
    <Section id="join" title="Join Our Community" className="bg-white">
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
    </Section>
  );
}