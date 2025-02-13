<script lang="ts">
  import Calculator from 'lucide-svelte/icons/calculator';
  import Calendar from 'lucide-svelte/icons/calendar';
  import CreditCard from 'lucide-svelte/icons/credit-card';
  import Settings from 'lucide-svelte/icons/settings';
  import Smile from 'lucide-svelte/icons/smile';
  import User from 'lucide-svelte/icons/user';

  import { onMount } from 'svelte';
  import * as Command from '$lib/components/ui/command/index.js';

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
      <Command.Item>
        <Calendar />
        <span>Calendar</span>
      </Command.Item>
      <Command.Item>
        <Smile />
        <span>Search Emoji</span>
      </Command.Item>
      <Command.Item>
        <Calculator />
        <span>Calculator</span>
      </Command.Item>
    </Command.Group>
    <Command.Separator />
    <Command.Group heading="Settings">
      <Command.Item>
        <User />
        <span>Profile</span>
        <Command.Shortcut>⌘P</Command.Shortcut>
      </Command.Item>
      <Command.Item>
        <CreditCard />
        <span>Billing</span>
        <Command.Shortcut>⌘B</Command.Shortcut>
      </Command.Item>
      <Command.Item>
        <Settings />
        <span>Settings</span>
        <Command.Shortcut>⌘S</Command.Shortcut>
      </Command.Item>
    </Command.Group>
  </Command.List>
</Command.Dialog>
