<script lang="ts">
  import Terminal from '$lib/icons/terminal.svelte';

  function dispatchKeypress() {
    const ctrlKEvent = new KeyboardEvent('keydown', {
      key: 'k',
      code: 'KeyK',
      ctrlKey: true,
      bubbles: true,
      cancelable: true,
    });

    document.dispatchEvent(ctrlKEvent);
  }
</script>

<div class="to-crust/85 fixed bottom-0 z-50 block h-12 w-full bg-gradient-to-b from-[#ffffff00] md:hidden">
  <div class="relative size-full">
    <button
      onclick={dispatchKeypress}
      class="bg-mantle border-crust absolute bottom-6 left-1/2 flex w-3/4 -translate-x-1/2
      cursor-pointer items-center justify-center gap-2 rounded-full border p-2"
      ><Terminal size={20} /> Open Command Palette</button
    >
  </div>
</div>
