<script lang="ts">
  import * as Carousel from '$lib/components/ui/carousel/index.js';

  type Props = {
    images: {
      src: string;
      alt: string;
    }[];
  };

  const { images }: Props = $props();
  console.log(images);
</script>

{#if images}
  <Carousel.Root class="flex h-full items-center justify-center">
    <Carousel.Content>
      {#each images as img}
        <Carousel.Item>
          <img alt={img.alt} src={img.src} class="aspect-video" />
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
{/if}
