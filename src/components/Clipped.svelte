<script lang="ts">
  import { Confetti } from 'svelte-confetti';
  import Close from '$lib/icons/close.svelte';
  let active = $state<boolean>(true);
  import { slide } from 'svelte/transition';
</script>

{#if window.location.search.includes('clip') && active}
  <div class="pointer-events-none fixed top-[-50px] left-1/2 z-20 h-screen w-screen">
    <Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} duration={5000} infinite amount={500} fallDistance="100vh" />
  </div>
  <div class="text-primary-foreground flex bg-[#f4b8e4] px-8 py-2" out:slide={{ delay: 100 }}>
    <div>
      <h1 class="text-xl font-bold">You've been clipped!</h1>
      <h2>Add me on any of my social media with the message that I clipped you and I'll add you back!</h2>
    </div>
    <button
      aria-label="close 'work in progress' header"
      class="ml-auto cursor-pointer"
      onclick={() => (active = false)}
    >
      <Close size={24} />
    </button>
  </div>
{/if}
