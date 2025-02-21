<script lang="ts">
  import Page from '$lib/icons/page.svelte';
  import { links } from '$lib/scripts/links';
  import { pages } from '$lib/scripts/pages';

  import * as Command from '$lib/components/ui/command/index.js';
  import { onMount } from 'svelte';
  import CommandElement from './CommandElement.svelte';

  let open: boolean = $state(false);
  let value: string = $state('');

  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open = !open;
      }
    }

    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  });
</script>

<Command.Dialog bind:open>
  <Command.Input bind:value placeholder="Search pages and socials..." />
  <Command.List>
    <Command.Empty class="truncate px-4">No results found for "{value}".</Command.Empty>
    <Command.Group heading="Pages">
      {#each pages as item}
        <CommandElement href={item.href} bind:open defaultTarget>
          <Page />
          <span>{item.title}</span>
        </CommandElement>
      {/each}
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="Links">
      {#each links as link}
        <CommandElement href={link.href} bind:open defaultTarget={link.overrideTarget ?? false}>
          <link.icon />
          <span>{link.title}</span>
        </CommandElement>
      {/each}
    </Command.Group>
  </Command.List>
</Command.Dialog>
