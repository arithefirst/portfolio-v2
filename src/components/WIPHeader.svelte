<script lang="ts">
  let show = $state<boolean>(true);
  import Warn from '$lib/icons/warn.svelte';
  import Close from '$lib/icons/close.svelte';
  import { slide } from 'svelte/transition';
</script>

{#if show}
  <div
    class="bg-yellow flex w-full items-center justify-between p-4 text-base"
    id="work-in-progress-header"
    transition:slide
  >
    <div class="flex items-center gap-2">
      <Warn />
      <p>This post is a work in progress. Expect things to change.</p>
    </div>
    <button aria-label="close 'work in progress' header" onclick={() => (show = false)} class="cursor-pointer">
      <Close size={24} />
    </button>
  </div>
{/if}
