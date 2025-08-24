<script lang="ts">
  import { controlledBlur } from '$lib/scripts/controlledBlur';
  import type { Snippet } from 'svelte';
  import { onMount } from 'svelte';

  interface Props {
    children: Snippet;
    delay?: number;
    duration?: number;
    class: string;
  }

  const { children, delay = 0, duration = 400, class: className }: Props = $props();
  let loaded: boolean = $state(false);
  onMount(() => (loaded = true));
</script>

{#if loaded}
  <div in:controlledBlur={{ delay, duration }} class={className}>
    {@render children()}
  </div>
{/if}
