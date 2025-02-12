<script lang="ts">
  import Project from '$lib/components/Project.svelte';

  interface ProjectType {
    src: string;
    alt: string;
    title: string;
    description: string;
    badges: string[];
  }

  interface Props {
    projects: ProjectType[];
  }

  const { projects }: Props = $props();
</script>

{#each projects as item}
  <Project src={item.src} alt={item.alt} title={item.title} description={item.description} badges={item.badges} />
{/each}
