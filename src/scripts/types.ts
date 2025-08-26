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

export interface LastFmRecentTracksResponse {
  recenttracks: {
    track: {
      artist: {
        '#text': string;
        mbid: string;
      };
      name: string;
      streamable: string;
      mbid: string;
      album: {
        '#text': string;
        mbid: string;
      };
      url: string;
      image: {
        '#text': string;
        size: 'small' | 'medium' | 'large' | 'extralarge';
      }[];
      date?: {
        uts: string; // Unix timestamp as string
        '#text': string; // Human-readable date
      };
      '@attr'?: {
        nowplaying: 'true';
      };
    }[];
    '@attr': {
      user: string;
      totalPages: string;
      page: string;
      perPage: string;
      total: string;
    };
  };
}

export interface LastFmErrorResponse {
  error: number;
  message: string;
  links?: any[]; // often an empty array, but can contain extra info
}
