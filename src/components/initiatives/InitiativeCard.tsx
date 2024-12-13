import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InitiativeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function InitiativeCard({ title, description, icon: Icon }: InitiativeCardProps) {
  return (
    <div className="card group relative overflow-hidden p-8">
      <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/5 dark:bg-accent-dark/5 group-hover:bg-primary/10 dark:group-hover:bg-accent-dark/10 transition-colors" />
      <div className="relative">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-bg">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}