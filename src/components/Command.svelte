<script lang="ts">
  import Calculator from 'lucide-svelte/icons/calculator';
  import Calendar from 'lucide-svelte/icons/calendar';
  import CreditCard from 'lucide-svelte/icons/credit-card';
  import Settings from 'lucide-svelte/icons/settings';
  import Smile from 'lucide-svelte/icons/smile';
  import User from 'lucide-svelte/icons/user';

  import { onMount } from 'svelte';
  import * as Command from '$lib/components/ui/command/index.js';
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
    <Command.Group heading="Suggestions">
      <CommandElement href="#" bind:open>
        <Calendar />
        <span>Calendar</span>
      </CommandElement>
      <CommandElement href="#" bind:open>
        <Smile />
        <span>Search Emoji</span>
      </CommandElement>
      <CommandElement href="#" bind:open>
        <Calculator />
        <span>Calculator</span>
      </CommandElement>
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="Settings">
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
