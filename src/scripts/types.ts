import type { Component } from 'svelte';

export interface Link {
  title: string;
  href: string;
  icon: Component;
}

export interface Page {
  title: string;
  href: string;
}
