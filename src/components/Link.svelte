<script lang="ts">
  import type { Snippet } from 'svelte';
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';

  interface Props {
    href: string;
    email: boolean;
    class: string;
    alt: string;
    children: Snippet;
  }

  const { alt, href, email, children, class: className }: Props = $props();

  function openEmailLink(event: MouseEvent) {
    window.open(href, 'mail');
    event.preventDefault();
  }
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger class={className}>
      {#if email}
        <a {href} aria-label={alt} onclick={(event) => openEmailLink(event)}>{@render children()}</a>
      {:else}
        <a {href} aria-label={alt} rel="noreferrer noopener" target="_blank">{@render children()}</a>
      {/if}
    </Tooltip.Trigger>
    <Tooltip.Content class="bg-crust text-text border-base border">
      <p>{alt}</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
