<script lang="ts">
  import Page from '$lib/icons/page.svelte';
  import { pages } from '$lib/scripts/pages';
  import CreditCard from 'lucide-svelte/icons/credit-card';
  import Settings from 'lucide-svelte/icons/settings';
  import User from 'lucide-svelte/icons/user';

  import * as Command from '$lib/components/ui/command/index.js';
  import { onMount } from 'svelte';
  import CommandElement from './CommandElement.svelte';

  let open = $state(false);

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
  <Command.Input placeholder="Type a command or search..." />
  <Command.List>
    <Command.Empty>No results found.</Command.Empty>
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
      <CommandElement href="#" bind:open>
        <User />
        <span>Profile</span>
      </CommandElement>
      <CommandElement href="#" bind:open>
        <CreditCard />
        <span>Billing</span>
      </CommandElement>
      <CommandElement href="#" bind:open>
        <Settings />
        <span>Settings</span>
      </CommandElement>
    </Command.Group>
  </Command.List>
</Command.Dialog>
