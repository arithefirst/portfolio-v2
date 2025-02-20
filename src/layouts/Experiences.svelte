<script lang="ts">
  interface ExperienceCard {
    startDate: Date;
    endDate: Date;
    company: string;
    position: string;
    bullets: string[];
    src: string;
    alt: string;
  }

  import Experience from '$lib/components/Experience.svelte';
  import { onMount } from 'svelte';
  const { cards }: { cards: ExperienceCard[] } = $props();
  let loaded: boolean = $state(false);

  onMount(() => (loaded = !loaded));
</script>

<div class="flex flex-col gap-3">
  {#each cards as card, i}
    {#if loaded}
      <Experience
        startDate={card.startDate}
        endDate={card.endDate}
        company={card.company}
        position={card.position}
        bullets={card.bullets}
        src={card.src}
        alt={card.alt}
        delay={i * 100}
      />{/if}
  {/each}
</div>
