<script lang="ts">
  import Project from '$lib/components/Project.svelte';
  import { onMount } from 'svelte';

  interface ProjectType {
    src: string;
    alt: string;
    title: string;
    description: string;
    badges: string[];
    padding?: number;
  }

  interface Props {
    projects: ProjectType[];
  }

  const { projects }: Props = $props();
  let load: boolean = $state(false);

  onMount(() => {
    load = !load;
  });
</script>

{#each projects as item, i}
  {#if load}
    <Project
      src={item.src}
      alt={item.alt}
      title={item.title}
      description={item.description}
      badges={item.badges}
      delay={i * 100}
      padding={item.padding}
    />
  {/if}
{/each}
