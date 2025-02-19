<script lang="ts">
  interface ExperienceCard {
    startDate: Date;
    endDate: Date | 'Current';
    company: string;
    position: string;
    bullets: string[];
    src: string;
    alt: string;
  }

  import Experience from '$lib/components/Experience.svelte';
  const { cards }: { cards: ExperienceCard[] } = $props();
</script>

<div class="flex flex-col gap-3">
  {#each cards as card}
    <Experience
      startDate={card.startDate}
      endDate={card.endDate}
      company={card.company}
      position={card.position}
      bullets={card.bullets}
      src={card.src}
      alt={card.alt}
    />
  {/each}
</div>
