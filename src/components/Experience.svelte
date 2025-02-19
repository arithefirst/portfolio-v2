<script lang="ts">
  interface Props {
    startDate: Date;
    endDate: Date | 'Current';
    company: string;
    position: string;
    bullets: string[];
    src: string;
    alt: string;
  }

  const { startDate, endDate, company, position, bullets, src, alt }: Props = $props();
  const dateOpts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
</script>

<div class="bg-mantle flex items-center rounded-lg p-6 shadow-lg">
  <img class="mr-6 size-24" {src} {alt} />
  <div>
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
