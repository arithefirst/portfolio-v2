<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    href: string;
    email: boolean;
    class: string;
    children: Snippet;
  }

  const { href, email, children, class: className }: Props = $props();

  function openEmailLink(event: MouseEvent) {
    window.open(href, 'mail');
    event.preventDefault();
  }
</script>

{#if email}
  <a {href} class={className} onclick={(event) => openEmailLink(event)}>{@render children()}</a>
{:else}
  <a {href} class={className} rel="noreferrer noopener" target="_blank">{@render children()}</a>
{/if}
