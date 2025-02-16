<script lang="ts">
  import type { Snippet } from 'svelte';
  import { LinkItem } from './ui/command';

  interface Props {
    href: string;
    open: boolean;
    defaultTarget?: boolean;
    children: Snippet;
  }

  let { href, open = $bindable(), defaultTarget = false, children }: Props = $props();
</script>

<LinkItem
  class="cursor-pointer"
  {href}
  target={defaultTarget ? '' : '_blank'}
  rel="noreferrer noopener"
  onclick={() => (open = !open)}>{@render children()}</LinkItem
>
