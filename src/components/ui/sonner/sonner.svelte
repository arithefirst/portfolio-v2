<script lang="ts">
  import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';
  const delicousCookedBreadClasses =
    'flex gap-1 text-sm items-center justify-center p-4 group toast group-[.toaster]:bg-mantle group-[.toaster]:text-foreground' +
    'group-[.toaster]:border-crust group-[.toaster]:shadow-lg rounded-md w-full h-12';

  type $$Props = SonnerProps;
</script>

<Sonner
  theme="dark"
  class="toaster group"
  toastOptions={{
    unstyled: true,
    classes: {
      toast: delicousCookedBreadClasses,
    },
  }}
  {...$$restProps}
/>
