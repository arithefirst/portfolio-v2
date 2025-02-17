<script lang="ts">
  import { Dialog as DialogPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
  import X from 'lucide-svelte/icons/x';
  import type { Snippet } from 'svelte';
  import * as Dialog from './index.js';
  import { cn } from '$lib/utils.js';
  import { blur } from 'svelte/transition';

  let {
    ref = $bindable(null),
    class: className,
    portalProps,
    children,
    ...restProps
  }: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
    portalProps?: DialogPrimitive.PortalProps;
    children: Snippet;
  } = $props();
</script>

<Dialog.Portal {...portalProps}>
  <Dialog.Overlay forceMount class="bg-crust/80">
    {#snippet child({ props, open })}
      {#if open}
        <div {...props} transition:blur={{ duration: 200 }}>
          <!-- ... -->
        </div>
      {/if}
    {/snippet}
  </Dialog.Overlay>
  <DialogPrimitive.Content
    forceMount
    bind:ref
    class={cn(
      'bg-background animate-blur border-surface-1 fixed top-[50%] left-[50%] z-50 grid w-11/12 max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 md:w-full',
      className,
    )}
    {...restProps}
  >
    {#snippet child({ props, open })}
      {#if open}
        <div {...props} transition:blur={{ duration: 200 }}>
          {@render children?.()}
        </div>
      {/if}
    {/snippet}
    <DialogPrimitive.Close
      class="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
    >
      <X class="size-4" />
      <span class="sr-only">Close</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
</Dialog.Portal>
