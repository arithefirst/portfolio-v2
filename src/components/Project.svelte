<script lang="ts">
  import { blur } from 'svelte/transition';
  interface Props {
    src: string;
    alt: string;
    title: string;
    description: string;
    badges?: string[];
    delay: number;
  }

  const { src, alt, title, description, badges, delay }: Props = $props();
  const path = title.replaceAll(/[._+ ]/gm, '-').toLowerCase();
</script>

<a
  class="bg-mantle flex h-fit min-h-48 w-full rounded-xl shadow-md transition-all duration-100 hover:scale-[1.01] md:min-w-128"
  href="projects/{path}"
  in:blur={{ delay: delay + 100, duration: 400 }}
>
  <img class="bg-crust hidden aspect-square w-48 rounded-l-xl object-cover md:inline" {src} {alt} />
  <div class="flex-grow rounded-r-xl p-4">
    <h1 class="text-2xl font-bold">{title}</h1>
    <p class="text-subtext-0 font-roboto text-wrap">{description}</p>
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
