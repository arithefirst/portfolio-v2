<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    email: boolean;
    children: Snippet;
  }

  const { href, email, children }: Props = $props();

  function openEmailLink(event: MouseEvent) {
    window.open(href, 'mail');
    event.preventDefault();
  }
</script>

{#if email}
  <a {href} onclick={(event) => openEmailLink(event)}>{@render children()}</a>
{:else}
  <a {href} rel="noreferrer noopener" target="_blank">{@render children()}</a>
{/if}
