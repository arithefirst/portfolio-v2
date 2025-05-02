<script lang="ts">
  import { blur } from 'svelte/transition';

  interface Props {
    startDate: Date;
    endDate: Date;
    company: string;
    position: string;
    bullets: string[];
    src: string;
    alt: string;
    delay: number;
  }

  const { startDate, endDate, company, position, bullets, src, alt, delay }: Props = $props();
  const dateOpts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  const startDateShort = startDate.toLocaleDateString('en-US', dateOpts);
  const endDateShort = endDate.toLocaleDateString('en-US', dateOpts);
</script>

<div
  class="bg-mantle grid items-center rounded-xl shadow-lg md:grid-cols-[192px_1fr]"
  in:blur={{ delay: delay + 100, duration: 400 }}
>
  <div class="bg-crust mr-6 hidden size-full overflow-hidden rounded-l-xl md:block">
    <img {src} {alt} class="size-full object-cover" />
  </div>
  <div class="p-3">
    <h3 class="text-xl font-bold">{company}</h3>
    <p class="text-sm text-gray-400 italic">{position}</p>
    <p class="text-gray-400">
      {#if startDate.getTime() === endDate.getTime()}
        {startDateShort}
      {:else}
        {startDateShort} -
        {endDateShort === new Date().toLocaleDateString('en-US', dateOpts) ? 'Present' : endDateShort}
      {/if}
    </p>
    <ul class="mt-2 list-inside list-disc text-sm text-gray-300">
      {#each bullets as bullet}
        <li>{bullet}</li>
      {/each}
    </ul>
  </div>
</div>
