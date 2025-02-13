<script lang="ts">
  interface Props {
    src: string;
    alt: string;
    title: string;
    description: string;
    badges?: string[];
  }

  const { src, alt, title, description, badges }: Props = $props();
  const path = title.replaceAll(/[._+ ]/gm, '-').toLowerCase();
</script>

<a
  class="bg-mantle flex h-48 w-full min-w-128 rounded-xl shadow-md transition-all duration-100 hover:scale-[1.01]"
  href="projects/{path}"
>
  <img class="bg-crust aspect-square w-48 rounded-l-xl object-cover" {src} {alt} />
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
