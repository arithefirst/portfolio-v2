<script lang="ts">
  import { onMount } from 'svelte';

  type Props = {
    name?: string;
    text?: string;
  };

  let h1: number = $state(0);
  let h2: number = $state(0);
  const { name = 'April Hall', text = 'Your friendly neighborhood fullstack developer' }: Props = $props();
  const baseWidth = $derived((h1 + h2) * 0.5);
  let currSize: number = $state(0);

  onMount(() => {
    currSize = baseWidth;
  });

  $inspect(currSize);
</script>

<h1 bind:clientWidth={h1} class="mx-auto mt-7 w-fit text-5xl">
  Hi, I'm <span class="font-bold">{name}</span>
</h1>
<hr
  class="border-subtext-0 mx-auto mt-4 transition-all delay-150 duration-500 ease-out {currSize > 0 &&
    'border 2xl:border-t'}"
  style="width: {currSize}px"
/>
<h2 class="font-roboto mx-auto mt-4 w-fit font-extralight" bind:clientWidth={h2}>
  {text}
</h2>
