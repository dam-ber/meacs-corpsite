import React from 'react';
import Container from '../layout/Container';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container className="text-center">
        <p>© {new Date().getFullYear()} MEACS. All rights reserved.</p>
      </Container>
    </footer>
  );
}