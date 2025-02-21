<script lang="ts">
  import { Command as CommandPrimitive } from 'bits-ui';
  import Search from '$lib/icons/search.svelte';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    value = $bindable(''),
    ...restProps
  }: CommandPrimitive.InputProps = $props();
</script>

<div class="border-surface-1 flex items-center border-b px-3" data-command-input-wrapper="">
  <div class="mr-2">
    <Search size={16} />
  </div>
  <CommandPrimitive.Input
    class={cn(
      'placeholder:text-muted-foreground text-text flex h-10 w-full rounded-md bg-transparent py-3 text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      className,
    )}
    bind:ref
    bind:value
    {...restProps}
  />
</div>
