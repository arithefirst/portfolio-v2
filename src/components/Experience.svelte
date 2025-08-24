<script lang="ts">
  import { controlledBlur } from '$lib/scripts/controlledBlur';
  import type { ExperienceCard } from '$lib/scripts/types';

  interface Props extends ExperienceCard {
    delay: number;
  }

  const { startDate, endDate, company, position, summary, src, alt, delay }: Props = $props();
  const dateOpts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  const startDateShort = startDate.toLocaleDateString('en-US', dateOpts);
  const endDateShort = endDate.toLocaleDateString('en-US', dateOpts);
</script>

<div
  class="bg-mantle grid items-center rounded-xl shadow-lg md:grid-cols-[192px_1fr]"
  in:controlledBlur={{ delay: delay + 100, duration: 400 }}
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
    <p class="mt-2 indent-4 text-gray-300 lg:max-w-3/4">
      {summary}
    </p>
  </div>
</div>
