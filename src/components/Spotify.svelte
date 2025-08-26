<script lang="ts">
  import type { NowPlayingResponse } from '$lib/pages/nowPlaying.json';
  import { onMount } from 'svelte';

  // The amount to wait before rotating the album in ms
  const updateInterval = 30;
  const { class: className }: { class: string } = $props();

  let title = $state('Loading...');
  let artist = $state('Loading...');
  let albumImage = $state(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png',
  );

  let albumRotation = $state<number>(0);
  let timestamp = $state<Date>(new Date());
  let isHovered = $state<boolean>(false);
  let isPlaying = $state<boolean>(false);

  async function updateSongInfo() {
    const res = await fetch('/nowPlaying.json');
    const json = (await res.json()) as NowPlayingResponse;

    if ('track' in json) {
      isPlaying = true;
      title = json.track.title;
      artist = json.track.artist;
      albumImage = json.track.albumImage[0]['#text'] || albumImage;
    } else {
      isPlaying = false;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    updateSongInfo();
  }

  // This needs to be js instead of css so we can pause on hover
  function rotateAlbum(amt: number) {
    if (new Date().getTime() - timestamp.getTime() >= updateInterval && !isHovered) {
      albumRotation += amt;
      timestamp = new Date();
    }
    requestAnimationFrame(() => rotateAlbum(1));
  }

  onMount(() => {
    requestAnimationFrame(() => rotateAlbum(1));
    updateSongInfo();
  });
</script>

{#if isPlaying}
  <div class="{className} flex h-fit w-full items-center justify-center px-8">
    <div class="relative flex h-20 w-full items-center">
      <div
        role="img"
        class="absolute z-1 ml-2 aspect-square h-full rounded-full"
        onmouseenter={() => (isHovered = true)}
        onmouseleave={() => (isHovered = false)}
      >
        <div class="container rounded-full shadow-md">
          <img
            class="aspect-square h-full w-full rounded-full border border-black"
            src={albumImage}
            alt="Album cover for {title}"
            style="rotate: {albumRotation}deg;"
          />
        </div>
      </div>

      <div class="bg-base absolute flex h-16 w-full flex-col justify-center rounded-md border border-black pr-2 pl-2">
        <div class="flex h-fit flex-col py-1 pl-22">
          <span class="text-text overflow-hidden leading-tight font-bold text-ellipsis whitespace-nowrap">{title}</span>
          <span class="text-subtext-1 overflow-hidden text-xs text-ellipsis whitespace-nowrap"
            >by <span class="font-semibold italic">{artist}</span></span
          >
        </div>
      </div>
    </div>
  </div>
{/if}
