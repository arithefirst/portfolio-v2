<script lang="ts">
  import { blur } from 'svelte/transition';

  interface Props {
    startDate: Date;
    endDate: Date | 'Current';
    company: string;
    position: string;
    bullets: string[];
    src: string;
    alt: string;
    delay: number;
  }

  const { startDate, endDate, company, position, bullets, src, alt, delay }: Props = $props();
  const dateOpts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
</script>

<div
  class="bg-mantle grid grid-cols-[192px_1fr] items-center rounded-xl shadow-md"
  in:blur={{ delay: delay + 100, duration: 400 }}
>
  <div class="bg-crust mr-6 size-full rounded-l-xl">
    <img {src} {alt} />
  </div>
  <div class="p-3">
    <p class="text-sm text-gray-400 italic">{position}</p>
    <h3 class="text-xl font-bold">{company}</h3>
    <p class="text-gray-400">
      {startDate.toLocaleString('en-US', dateOpts)} - {endDate.toLocaleString('en-US', dateOpts)}
    </p>
    <ul class="mt-2 list-inside list-disc text-sm text-gray-300">
      {#each bullets as bullet}
        <li>{bullet}</li>
      {/each}
    </ul>
  </div>
</div>
