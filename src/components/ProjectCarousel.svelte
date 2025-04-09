<script lang="ts">
  import * as Carousel from '$lib/components/ui/carousel/index.js';

  type Props = {
    images: {
      src: string;
      alt: string;
    }[];
  };

  const { images }: Props = $props();
</script>

{#if images}
  <Carousel.Root class="m-4 w-5/6">
    <Carousel.Content>
      {#each images as img}
        <Carousel.Item>
          <img alt={img.alt} src={img.src} class="mx-auto rounded-lg shadow" />
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
{/if}
