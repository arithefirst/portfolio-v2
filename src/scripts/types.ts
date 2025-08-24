import type { Component } from 'svelte';

export interface Link {
  title: string;
  href: string;
  icon: Component;
  overrideTarget?: boolean;
}

export interface ExperienceCard {
  startDate: Date;
  endDate: Date;
  company: string;
  position: string;
  summary: string;
  src: string;
  alt: string;
}

export interface Page {
  title: string;
  href: string;
}
