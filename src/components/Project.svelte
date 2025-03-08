<script lang="ts">
  import { blur } from 'svelte/transition';
  interface Props {
    src: string;
    alt: string;
    title: string;
    description: string;
    badges?: string[];
    delay: number;
    padding?: number;
  }

  const { src, alt, title, description, badges, delay, padding = 0 }: Props = $props();
  const path = title.replaceAll(/[._+ ]/gm, '-').toLowerCase();
</script>

<a
  class="bg-mantle grid h-fit min-h-48 w-full rounded-xl shadow-lg transition-all duration-100 hover:scale-[1.01] md:min-w-128 md:grid-cols-[192px_1fr]"
  href="projects/{path}"
  in:blur={{ delay: delay + 100, duration: 400 }}
>
  <img
    class="bg-crust hidden size-full rounded-l-xl object-cover md:inline"
    style={`padding: ${padding / 4}rem`}
    {src}
    {alt}
  />
  <div class="w-full rounded-r-xl p-4 md:w-auto md:flex-grow">
    <h1 class="text-2xl font-bold">{title}</h1>
    <p class="text-subtext-0 font-roboto mt-1 text-wrap">{description}</p>
    {#if badges}
      <div class="flex w-11/12 flex-wrap gap-2 pt-2">
        {#each badges as item}
          <div class="bg-crust border-text font-roboto rounded-md border px-3">
            {item}
          </div>
        {/each}
      </div>
    {/if}
  </div>
</a>
